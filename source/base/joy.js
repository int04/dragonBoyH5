"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var Direction;
(function (Direction) {
    Direction["LEFT"] = "left";
    Direction["TOP"] = "top";
    Direction["BOTTOM"] = "bottom";
    Direction["RIGHT"] = "right";
    Direction["TOP_LEFT"] = "top_left";
    Direction["TOP_RIGHT"] = "top_right";
    Direction["BOTTOM_LEFT"] = "bottom_left";
    Direction["BOTTOM_RIGHT"] = "bottom_right";
});
var Joystick = /** @class */ (function (_super) {
    __extends(Joystick, _super);
    function Joystick(opts) {
        var _this = _super.call(this) || this;
        _this.outerRadius = 0;
        _this.innerRadius = 0;
        _this.innerAlphaStandby = 0.5;
        _this.settings = Object.assign({
            outerScale: { x: 1, y: 1 },
            innerScale: { x: 1, y: 1 },
        }, opts);
        if (!_this.settings.outer) {
            var outer = new PIXI.Graphics();
            outer.beginFill(0x000000);
            outer.drawCircle(0, 0, 60);
            outer.alpha = 0.5;
            _this.settings.outer = outer;
        }
        if (!_this.settings.inner) {
            var inner = new PIXI.Graphics();
            inner.beginFill(0x000000);
            inner.drawCircle(0, 0, 35);
            inner.alpha = _this.innerAlphaStandby;
            _this.settings.inner = inner;
        }
        _this.initialize();
        return _this;
    }
    Joystick.prototype.initialize = function () {
        this.outer = this.settings.outer;
        this.inner = this.settings.inner;
        this.outer.scale.set(this.settings.outerScale.x, this.settings.outerScale.y);
        this.inner.scale.set(this.settings.innerScale.x, this.settings.innerScale.y);
        if ('anchor' in this.outer) {
            this.outer.anchor.set(0.5);
        }
        if ('anchor' in this.inner) {
            this.inner.anchor.set(0.5);
        }
        this.addChild(this.outer);
        this.addChild(this.inner);
        // this.outerRadius = this.containerJoystick.width / 2;
        this.outerRadius = this.width / 2.5;
        this.innerRadius = this.inner.width / 2;
        this.bindEvents();
    };
    Joystick.prototype.bindEvents = function () {
        var that = this;
        this.interactive = true;
        var dragging = false;
        var eventData;
        var power;
        var startPosition;
        function onDragStart(event) {
            var _a, _b;
            eventData = event.data;
            startPosition = eventData.getLocalPosition(that);
            dragging = true;
            that.inner.alpha = 1;
            (_b = (_a = that.settings).onStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        function onDragEnd(event) {
            var _a, _b;
            if (dragging == false) {
                return;
            }
            that.inner.position.set(0, 0);
            dragging = false;
            that.inner.alpha = that.innerAlphaStandby;
            (_b = (_a = that.settings).onEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        function onDragMove(event) {
            var _a, _b, _c, _d, _e, _f;
            if (dragging == false) {
                return;
            }
            var newPosition = eventData.getLocalPosition(that);
            var sideX = newPosition.x - startPosition.x;
            var sideY = newPosition.y - startPosition.y;
            var centerPoint = new PIXI.Point(0, 0);
            var angle = 0;
            if (sideX == 0 && sideY == 0) {
                return;
            }
            var calRadius = 0;
            if (sideX * sideX + sideY * sideY >= that.outerRadius * that.outerRadius) {
                calRadius = that.outerRadius;
            }
            else {
                calRadius = that.outerRadius - that.innerRadius;
            }
            /**
             * x:   -1 <-> 1
             * y:   -1 <-> 1
             *          Y
             *          ^
             *          |
             *     180  |  90
             *    ------------> X
             *     270  |  360
             *          |
             *          |
             */
            var direction = Direction.LEFT;
            if (sideX == 0) {
                if (sideY > 0) {
                    centerPoint.set(0, (sideY > that.outerRadius) ? that.outerRadius : sideY);
                    angle = 270;
                    direction = Direction.BOTTOM;
                }
                else {
                    centerPoint.set(0, -(Math.abs(sideY) > that.outerRadius ? that.outerRadius : Math.abs(sideY)));
                    angle = 90;
                    direction = Direction.TOP;
                }
                that.inner.position.set(centerPoint.x, centerPoint.y);
                power = that.getPower(centerPoint);
                (_b = (_a = that.settings).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, { angle: angle, direction: direction, power: power, });
                return;
            }
            if (sideY == 0) {
                if (sideX > 0) {
                    centerPoint.set((Math.abs(sideX) > that.outerRadius ? that.outerRadius : Math.abs(sideX)), 0);
                    angle = 0;
                    direction = Direction.LEFT;
                }
                else {
                    centerPoint.set(-(Math.abs(sideX) > that.outerRadius ? that.outerRadius : Math.abs(sideX)), 0);
                    angle = 180;
                    direction = Direction.RIGHT;
                }
                that.inner.position.set(centerPoint.x, centerPoint.y);
                power = that.getPower(centerPoint);
                (_d = (_c = that.settings).onChange) === null || _d === void 0 ? void 0 : _d.call(_c, { angle: angle, direction: direction, power: power, });
                return;
            }
            var tanVal = Math.abs(sideY / sideX);
            var radian = Math.atan(tanVal);
            angle = radian * 180 / Math.PI;
            var centerX = 0;
            var centerY = 0;
            if (sideX * sideX + sideY * sideY >= that.outerRadius * that.outerRadius) {
                centerX = that.outerRadius * Math.cos(radian);
                centerY = that.outerRadius * Math.sin(radian);
            }
            else {
                centerX = Math.abs(sideX) > that.outerRadius ? that.outerRadius : Math.abs(sideX);
                centerY = Math.abs(sideY) > that.outerRadius ? that.outerRadius : Math.abs(sideY);
            }
            if (sideY < 0) {
                centerY = -Math.abs(centerY);
            }
            if (sideX < 0) {
                centerX = -Math.abs(centerX);
            }
            if (sideX > 0 && sideY < 0) {
                // < 90
            }
            else if (sideX < 0 && sideY < 0) {
                // 90 ~ 180
                angle = 180 - angle;
            }
            else if (sideX < 0 && sideY > 0) {
                // 180 ~ 270
                angle = angle + 180;
            }
            else if (sideX > 0 && sideY > 0) {
                // 270 ~ 369
                angle = 360 - angle;
            }
            centerPoint.set(centerX, centerY);
            power = that.getPower(centerPoint);
            direction = that.getDirection(centerPoint);
            that.inner.position.set(centerPoint.x, centerPoint.y);
            (_f = (_e = that.settings).onChange) === null || _f === void 0 ? void 0 : _f.call(_e, { angle: angle, direction: direction, power: power, });
        }
        ;
        this.on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
    };
    Joystick.prototype.getPower = function (centerPoint) {
        var a = centerPoint.x - 0;
        var b = centerPoint.y - 0;
        return Math.min(1, Math.sqrt(a * a + b * b) / this.outerRadius);
    };
    Joystick.prototype.getDirection = function (center) {
        var rad = Math.atan2(center.y, center.x); // [-PI, PI]
        if ((rad >= -Math.PI / 8 && rad < 0) || (rad >= 0 && rad < Math.PI / 8)) {
            return Direction.RIGHT;
        }
        else if (rad >= Math.PI / 8 && rad < 3 * Math.PI / 8) {
            return Direction.BOTTOM_RIGHT;
        }
        else if (rad >= 3 * Math.PI / 8 && rad < 5 * Math.PI / 8) {
            return Direction.BOTTOM;
        }
        else if (rad >= 5 * Math.PI / 8 && rad < 7 * Math.PI / 8) {
            return Direction.BOTTOM_LEFT;
        }
        else if ((rad >= 7 * Math.PI / 8 && rad < Math.PI) || (rad >= -Math.PI && rad < -7 * Math.PI / 8)) {
            return Direction.LEFT;
        }
        else if (rad >= -7 * Math.PI / 8 && rad < -5 * Math.PI / 8) {
            return Direction.TOP_LEFT;
        }
        else if (rad >= -5 * Math.PI / 8 && rad < -3 * Math.PI / 8) {
            return Direction.TOP;
        }
        else {
            return Direction.TOP_RIGHT;
        }
    };
    return Joystick;
}(PIXI.Container));
//# sourceMappingURL=index.js.map