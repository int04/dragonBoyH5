import Since04BoxDeTu from './boxDeTu.js';
class Since04Box extends Since04BoxDeTu {
    constructor() {
        super();
        this.lastmenuOpen = '';
        this.boxFirst = true;
        this.AddNewEvent = 0;

        this.pcKey = 0;
        this.pcSettimeEntactive = null;
        this.pcSettimeEntactive2 = null;
        document.addEventListener('keyup', this.taoDiChuyenBangPhim);
        this.conTro = 0;
    }

    closeBox() {
       
        // check if handleKeyUp is not remove
        
        this.box.visible = false;
        this.box.removeChildren();
        if(this.pcSettimeEntactive) {
            clearInterval(this.pcSettimeEntactive);
        }
        if(this.pcSettimeEntactive2) {
            clearInterval(this.pcSettimeEntactive2);
        }
        


        
    }

    taoDiChuyenBangPhim = (event) => {
        this.pcKey = event.key;
    }


    clickButton(name) {
        this.box.removeChildren();
        this.lastmenuOpen = name;
        if(name == 'detu' || name =='thongtindetu') this.lastmenuOpen = 'hanhtrang';
        (name == 'hanhtrang') && this.boxNewBag();
        (name == 'nhiemvu') && this.boxNewNhiemVu();
        (name == 'kynang') && this.boxNewKyNang();
        (name == 'banghoi') && this.boxNewBangHoi();
        (name == 'chucnang') && this.boxNewChucNang();
        (name == 'detu') && this.detuBoxInfo();
        (name == 'trangthai') && this.detuSatus();
        this.danhSachItem = [];


    }

    openLastMenu() {
        if(this.lastmenuOpen == '') return this.clickButton('hanhtrang');
        this.clickButton(this.lastmenuOpen);
    }

    findInteractiveObjects = (container) => {
        if(typeof container != 'object') return false;
        let children = container;
        let interactive = [];

        let ChinhNO = (c) => {
            if(c.interactive) interactive.push(c);
        }

        let findChildren = (children) => {
            if(undefined == children) return false;
            if(typeof children != 'object') {
                if(children.interactive) return ChinhNO(children); 
                return false;
            }
            for(let i = 0; i < children.length; i++) {
                if(children[i].interactive) interactive.push(children[i]);
                if(children[i].children.length > 0) findChildren(children[i].children);
            }
        }

        if(children.interactive) {
            interactive.push(children);
        }

        findChildren(children.children);
        return interactive;
    }


    getAllInteractiveChildren = (container) =>{

        let interactiveChildren = [];
        if(container == undefined) return false;
        if (container.interactive) {
            interactiveChildren.push(container);
        }
        if (container.children && container.children.length > 0) {
            container.children.forEach(child => {
                if (child instanceof PIXI.Container) {
                const childInteractiveChildren = this.getAllInteractiveChildren(child);
                interactiveChildren = interactiveChildren.concat(childInteractiveChildren);
                }
            });
        }
        
        return interactiveChildren;
    }


    snowlySroll = (body,hienthinoidung) => {
        let bouns = body.height / 100 * 150;
        bouns = 0;
        let viewport = new pixi_viewport.Viewport({
            screenWidth: body.width,
            screenHeight: body.height + bouns,
            worldWidth: hienthinoidung.width,
            worldHeight: hienthinoidung.height + bouns,
            passiveWheel: true,
        });

        viewport.addChild(hienthinoidung);
        viewport.name ="Con trỏ";
        viewport.interactive = true; 
        viewport.cursor = 'pointer';


        let self = this;

        let point = -1;

        let eventGame = () => {
            this.pcSettimeEntactive = setInterval(function(){
                let event = self.pcKey;
                if(self.box.visible == false) {
                    clearInterval(self.pcSettimeEntactive);
                    return false;
                }
                if(self.conTro !=0) return false;
                let children = hienthinoidung.children.filter(e => e.name == 'since04KEY');
    
                if (event === 'ArrowUp') {
                    self.boxPreviewItem.removeChildren();
                    point -= 1;
                    if(point <0) point = children.length-1;

                } else if (event === 'ArrowDown') {
                    self.boxPreviewItem.removeChildren();
                    point += 1;
                    if(point >= children.length) point = 0;
                }
    
                if(event === 'Enter') {
                    let current = children[point];
                    let event = self.getAllInteractiveChildren(current);
                    if(event.length > 0 && self.boxPreviewItem.children.length == 0) {
                        event[0].emit('pointerdown');
                        event[0].emit('pointerup');
                    }
                }
    
                if(children[point] && self.pcKey.length >=1) {
                    for(let i = 0; i < children.length; i++) {
                        children[i].removeChild(children[i].getChildByName('xanhle'));
                    }
    
                    viewport.moveCenter(children[point].x,children[point].y);
                    let width = children[point].width;
                    let height = children[point].height;
                    let background = new PIXI.Graphics();
                    background.lineStyle(0, 0x000000, 1);
                    background.beginFill(0xf8fe4a, 0.5);
                    background.drawRoundedRect(0, 0, width, height, 0);
                    background.endFill();
                    background.name = "xanhle";
                    children[point].addChild(background);
    
                    let current = children[point];
                    let eventdata = self.findInteractiveObjects(current);
    
                    if(eventdata.length > 0) {
                        background.interactive = true;
                        background.cursor = 'pointer';
                        // coppy interacive from children[point]
                        background.on('pointerdown', () => {
                            eventdata[0].emit('pointerdown');
                        });
                        background.on('pointerup', () => {
                            eventdata[0].emit('pointerup');
                        });
    
                    }
                }
                if(self.boxPreviewItem.children.length <= 0)
                self.pcKey = '';
            },this.app.ticker.deltaMS);
        }

        eventGame();
        let pointerStartTime = 0;
        let pointerEndTime = 0;

        viewport.on('pointerdown', (event) => {
            pointerStartTime = Date.now();
            this.conTro   = 0;            



        });

        viewport.on("pointerup", function (event) {
            pointerEndTime = Date.now();
            if (pointerEndTime - pointerStartTime < 200) {
                let x = event.data.global.x;
                let y = event.data.global.y;
                let pointMenu = hienthinoidung.toLocal(new PIXI.Point(x, y));
                pointMenu.x = Math.round(pointMenu.x);
                pointMenu.y = Math.round(pointMenu.y);
                let children = hienthinoidung.children.filter(e => e.name == 'since04KEY');
                for(let i = 0; i < children.length; i++) {
                    children[i].removeChild(children[i].getChildByName('xanhle'));
                }
                for(let i = 0; i < children.length; i++) {
    
                    if( children[i].x <= pointMenu.x && pointMenu.x <= children[i].x + children[i].width && children[i].y <= pointMenu.y && pointMenu.y <= children[i].y + children[i].height) {
                        point = i;
                        let width = children[i].width;
                        let height = children[i].height;
                        let background = new PIXI.Graphics();
                        background.lineStyle(0, 0x000000, 1);
                        background.beginFill(0xf8fe4a, 0.5);
                        background.drawRoundedRect(0, 0, width, height, 0);
                        background.endFill();
                        background.name = "xanhle";
                        children[i].addChild(background);
                        let current = children[i];
                        let event = self.getAllInteractiveChildren(current);
                        if(event.length > 0) {
                            background.interactive = true;
                            background.cursor = 'pointer';
                            background.on('pointerdown', () => {
                                event[0].emit('pointerdown');
                            });
                            background.on('pointerup', () => {
                                event[0].emit('pointerup');
                            });
                        }
                    }
                }
                
            } else {
                clearInterval(self.pcSettimeEntactive);
                setTimeout(function(){
                    clearInterval(self.pcSettimeEntactive);
                    eventGame();
                },200);
            }
        });



        
    
        

        
        

        body.addChild(viewport);
        body.name="lớp body"
        viewport
            .drag({
                direction: 'y',
                pressDrag: true,
                factor: 1,

            })
            .decelerate({
                friction: 0.95,
                bounce: 0.8,
                minSpeed: 0.01,
            })
        viewport.bounce({
            top: true,
            bottom: true,
            friction: 0.5,
            time: 0,
            ease: 'easeInOutSine',
        });
        return viewport;
    }

    


}

export default Since04Box;