import Since04Action from './action.js';

class Since04FucClule extends Since04Action {
    constructor() {
        super();
    }



    hitTestRectangle(sprite1, sprite2, move = 0, td = 0) {
        const rectangle1 = sprite1.getBounds();
        if(!rectangle1) return false;
        const rectangle2 = sprite2.getBounds();
    
        if(!rectangle2) return false;
        if (move != 0) {
            if (move == 'right') rectangle1.x += td;
            if (move == 'left') rectangle1.x -= td;
            if (move == 'up') rectangle1.y -= td;
            if (move == 'down') rectangle1.y += td;
        }

       
    
        return rectangle1.x < rectangle2.x + rectangle2.width &&
            rectangle1.x + rectangle1.width > rectangle2.x &&
            rectangle1.y < rectangle2.y + rectangle2.height &&
            rectangle1.y + rectangle1.height > rectangle2.y;
    }

    calculateDistance(sprite1, sprite2, move = 0, td = 0) {
        const rectangle1 = sprite1;
        const rectangle2 = sprite2;
        if (move != 0) {
            if (move == 'right') rectangle1.x += td;
            if (move == 'left') rectangle1.x -= td;
            if (move == 'up') rectangle1.y -= td;
            if (move == 'down') rectangle1.y += td;
        }
    
        const dx = rectangle2.x - rectangle1.x; // Độ chênh lệch về phương x
        const dy = rectangle2.y - rectangle1.y; // Độ chênh lệch về phương y
    
        // Sử dụng định lý Pythagoras để tính khoảng cách Euclidean
        return Math.sqrt(dx * dx + dy * dy);
    }

    checkCollisionX(sprite1, sprite2, move = 0, td = 0) {
        const rect1 = sprite1.getBounds();
        const rect2 = sprite2.getBounds();
        if (move != 0) {
            if (move == 'right') rect1.x += td;
            if (move == 'left') rect1.x -= td;
            if (move == 'up') rect1.y -= td;
            if (move == 'down') rect1.y += td;
        }
    
    
        return rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x;
    }

    calculateDistanceX(sprite1, sprite2, move = 0, td = 0) {
        const rect1 = sprite1.getBounds();
        const rect2 = sprite2.getBounds();
        if (move != 0) {
            if (move == 'right') rect1.x += td;
            if (move == 'left') rect1.x -= td;
            if (move == 'up') rect1.y -= td;
            if (move == 'down') rect1.y += td;
        }
        const distanceX = Math.abs(rect2.x - rect1.x); // Khoảng cách giữa sprite1 và sprite2 theo chiều ngang (trục x)
        return distanceX;
    }

    calculateDistanceY(sprite1, sprite2, move = '', td = '') {
        const rect1 = sprite1.getBounds();
        const rect2 = sprite2.getBounds();
        if (move != 0) {
            if (move == 'right') rect1.x += td;
            if (move == 'left') rect1.x -= td;
            if (move == 'up') rect1.y -= td;
            if (move == 'down') rect1.y += td;
        }
        const distanceY = Math.abs(rect2.y - rect1.y); // Khoảng cách giữa sprite1 và sprite2 theo chiều dọc (trục y)
        return distanceY;
    }
    
    checkCollisionY(sprite1, sprite2, move = '', td = '') {
        const rect1 = sprite1.getBounds();
        const rect2 = sprite2.getBounds();
        if (move != 0) {
            if (move == 'right') rect1.x += td;
            if (move == 'left') rect1.x -= td;
            if (move == 'up') rect1.y -= td;
            if (move == 'down') rect1.y += td;
        }
    
    
    
        return rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y;
    }
    

}

export default Since04FucClule;