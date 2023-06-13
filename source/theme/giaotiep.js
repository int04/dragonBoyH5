
import Since04DataButtonTalk from '../game/button_talk.js';
class Since04TalkBox extends Since04DataButtonTalk {

    constructor() {
        super();
    }

    talkWith(id) {
        let npc = this.Charset.find(e => e.id == id);
        if(!npc) return false;
        let source = npc.source;
        if(source.onclick) 
        {
            return this.talkAction(source.onclick);
        }
        return this.talkWithButton(source.giaotiep,source.action,source.script.avatar)
    }

    talkWithButton(msg,buttonListIN,avatar='') 
    {
        this.closeBox();
        this.khungGiaoTiep.removeChildren();
        this.khungGiaoTiep.visible = true;
        let width = this.gameWidth * 0.8;
        let height = this.gameHeight * 0.4;
        width = width > 600 ? 600 : width;
        let nen = this.snowlyGraphics(width,height,0x166304,0x000000,0.0001,10,0)
        this.khungGiaoTiep.addChild(nen);
        nen.x = (this.gameWidth - width) / 2;
        nen.y = this.gameHeight - nen.height - nen.height * 0.1 ;

        

        let height2 =height*0.4;

        let text = "";
        text += msg + "";
        
        let msgbox = this.snowlyGraphics(width,height2,0xfefefe,0x000000,2,10);
        nen.addChild(msgbox);

        let txt = new PIXI.Text(text, {
            fontSize: 15,
            fill: 0x000000,
            fontFamily: 'Arial',
            wordWrap: true,
            wordWrapWidth: width-20,
            fontWeight: 'bold',
            align: "center",

        });
        txt.x = msgbox.width/2 - txt.width/2;
        txt.y = msgbox.height/2 - txt.height/2;
        msgbox.addChild(txt);

        let hienthinoidung = new PIXI.Container();

        let mask = new PIXI.Graphics();
        mask.beginFill(0x000000, 0);
        mask.drawRect(0, 0, nen.width*0.99, nen.height);
        mask.endFill();
        mask.x = 0;
        mask.y = 0;

   


       

        let buttonlist = [];

        buttonListIN.forEach(element => {
            buttonlist.push({
                name : element._1,
                a : element._2
            })
        });

        buttonlist.push({name : 'Đóng', a : 'close'});

        buttonlist.forEach((element,i) => {
            let container = new PIXI.Container();
            let wbutton = nen.width *1;
            let hbox = height*1;
            wbutton = wbutton > 100 ? 100 : wbutton;
            hbox = hbox > 100 ? 100 : hbox;
            let button = this.snowlyGraphics(wbutton,hbox,0xd79132,0x000000,2,10);
            container.addChild(button);
            let space = 5;
            button.x =  space + (wbutton + space) * i;
            let txt = new PIXI.Text(element.name, {
                fontSize: 16,
                fill: 0x532905,
                fontFamily: 'Arial',
                wordWrap: true,
                wordWrapWidth: button.width-20,
                fontWeight: 'bold'

            });
            // txt center of button
            txt.position.set((button.width-txt.width)/2,(button.height-txt.height)/2);
            button.addChild(txt);
            button.name = "since04";

            hienthinoidung.addChild(button);

            button.interactive = true;
            button.cursor = 'pointer';
            button.on('pointerover', () => { 
                button.clear();
                button.lineStyle(2, '#FFFFFF', 1);
                button.beginFill(0x48bd60, 0.5); 
                button.drawRoundedRect(0, 0, wbutton, hbox, 10);
                button.endFill();
            });
            button.on('pointerout', () => { 
                button.clear(); 
                button.lineStyle(2, 0x000000, 1);
                button.beginFill(0xd79132, 1); 
                button.drawRoundedRect(0, 0, wbutton, hbox, 10);
                button.endFill();
            });

            let pointerStartTime = 0;
            let pointerEndTime = 0;
            button.on("pointerdown", function (event) {
                pointerStartTime = Date.now();
            });
            let self = this;
            button.on("pointerup", function (event) {
                pointerEndTime = Date.now();
                if (pointerEndTime - pointerStartTime < 200) {
                    if(buttonlist[i].a == 'close') {
                        self.khungGiaoTiep.visible = false;
                        self.khungGiaoTiep.removeChildren();
                    }
                    else 
                    {
                        self.talkAction(buttonlist[i].a);
                        self.khungGiaoTiep.visible = false;
                        self.khungGiaoTiep.removeChildren();
                    }
                } else {}
            });
        });

        hienthinoidung.name ="Lớp con";

        let lopcuon = this.snowlyGraphics(nen.width*0.99,nen.height * 0.6,0x000000,0x000000,0,10,0);
        // edit beginFill
        lopcuon.y = nen.height * 0.4;

        nen.addChild(lopcuon);

        let viewport = new pixi_viewport.Viewport({
            screenWidth: nen.width  ,
            screenHeight:  hienthinoidung.height  ,
            passiveWheel: true,
        });
        viewport.name = "Lớp cuộn";
        viewport.addChild(hienthinoidung);


      





        lopcuon.addChild(viewport);
        viewport
        .drag({
            direction: 'x',
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

        if(avatar.length >=1) 
        {
            let img = new PIXI.Sprite(this.coverImg(""+avatar+""));
            let wmx = nen.width * 1;
            wmx = wmx > 100 ? 100 : wmx;
            img.height = wmx;
            img.width = wmx;
            img.x = 0;
            img.y = 0 - img.height;
            nen.addChild(img);
        }


           // tạo hiệu ứng di chuyển bằng bàn phím

        let point = -1;
        let self = this;

        
        this.pcKey = '';
        self.pcKey = '';
        clearInterval(self.pcSettimeEntactive);
        let eventGame = () => {
            this.pcSettimeEntactive = setInterval(function(){
                let event = self.pcKey;
                if(self.khungGiaoTiep.visible == false) {
                    clearInterval(self.pcSettimeEntactive);
                    return false;
                }
                let children = hienthinoidung.children.filter(e => e.name == 'since04');
                if(event === 'Enter' && point != -1) {
                    let current = children[point];
                    let eventxxx = self.getAllInteractiveChildren(current);
                    if(eventxxx.length > 0 ) {
                        eventxxx[0].emit('pointerdown');
                        eventxxx[0].emit('pointerup');
                    }
                }
                else
                if (event === 'ArrowLeft') {
                    point -= 1;
                    if(point <0) point = children.length-1;

                } else if (event === 'ArrowRight') {
                    point += 1;
                    if(point >= children.length) point = 0;
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
                self.pcKey = '';
            },this.app.ticker.deltaMS);
        }
        eventGame();
        
        let pointerStartTime = 0;
        let pointerEndTime = 0;

      
       




    }

   
}

export default Since04TalkBox;