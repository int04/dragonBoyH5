import Since04Box from './box.js';
class Since04chatClass extends Since04Box {
    constructor() {
        super();
    }

    chatSubmit(text) {
        for (let i = 0; i < this.logChat.length; i++) {
            if (this.logChat[i].uid == this.my.id) {
                this.logChat[i].type = 'delete';
            }
        }

        this.logChat.push({
            id: Date.now(),
            uid: this.my.id,
            text: text,
            type : 'chat',
        })
    }

    sendChat(txt, inputChat) {
        this.bodyChat.visible = false;
        this.bodyChat.removeChildren();
        if(txt && txt.length >=1) 
        {
            this.send(-8, txt);
            this.chatSubmit(txt);
        }
    }

    openChat() {
        if(this.bodyChat.children.length > 0) return;
        if(this.my.id <= 0) return;
        if(this.checkKey() == true) return false;

        this.chatCreate();
    }

    chatCreate() {
        this.bodyChat.visible = true;
        this.bodyChat.removeChildren();

        let bgW = this.gameWidth * 0.9;
        let bgh = this.gameHeight * 0.5;

        bgW = bgW > 500 ? 500 : bgW;
        bgh = bgh > 150 ? 150 : bgh;
    
        let bg = new PIXI.Graphics();
        bg.beginFill(0xfee4c6, 1);
        bg.lineStyle(3, 0x6c4a00, 1);
    
        bg.drawRoundedRect(0, 0, bgW, bgh,10);
        bg.endFill();
        bg.x = 0;
        bg.y = 0;
        this.bodyChat.addChild(bg);
    
        let displayChat = new PIXI.Text('Chat:', {
            fontSize: 20,
            fill: 0x005325,
            fontFamily: 'chelthm',
            fontWeight: 'bold',
            align: "center",
            fontWeight: 'bold',
            wordWrap: true,
            wordWrapWidth: bgW - 20
        });
        displayChat.x = 10;
        displayChat.y = bg.height * 0.3 - displayChat.height ;
        bg.addChild(displayChat);
    
        let inputChat = new PIXI.TextInput({
            input: {
                fontSize: '9px',
                padding: '12px',
                color: '#7a1125'
            },
            box: {
                default: {fill: 0xeec385, rounded: 10, stroke: {color: 0xfff6eb, width: 1}},
                focused: {fill: 0xa7f2ac, rounded: 10, stroke: {color: 0xfff6eb, width: 1}},
                disabled: {fill: 0xDBDBDB, rounded: 12}
            }
        })
        inputChat.width = bgW * 0.9;
        inputChat.height = bgh * 0.4;
        inputChat.x = (bgW - (bgW * 0.9)) / 2;
        inputChat.y = bg.height * 0.7 - inputChat.height / 2;
        bg.addChild(inputChat);
    
        // focus inputChat
        setTimeout(() => {
            inputChat.focus();
            // clear focus inputChat
            
        }, 100);
    
        // create button OK and cancel on center of bg
       
    
        let ContainerButton = new PIXI.Container();
        // create button OK and cancel on
        let btnOK = new PIXI.Graphics();
        btnOK.beginFill(0xe57e3b, 1);
        btnOK.lineStyle(3, 0x6a1b26, 1);
        btnOK.drawRoundedRect(0, 0, bgW * 0.2, bgh * 0.3, 10);
        btnOK.endFill();
        btnOK.x = 0;
        btnOK.y = 0;
        ContainerButton.addChild(btnOK);
    
        let btnOKText = new PIXI.Text('OK', {
            fontSize: 20,
            fill: 0x532905,
            fontFamily: 'chelthm',
            fontWeight: 'bold',
            align: "center",
            fontWeight: 'bold',
            wordWrap: true,
            wordWrapWidth: bgW - 20
        });
        btnOKText.x = btnOK.width / 2 - btnOKText.width / 2;
        btnOKText.y = btnOK.height / 2 - btnOKText.height / 2;
        btnOK.addChild(btnOKText);
    
        btnOK.interactive = true;
        btnOK.buttonMode = true;
        btnOK.on('pointerdown', () => {
            this.sendChat(inputChat.text)
            // delete focus inputChat
            inputChat.blur();
            inputChat.text = '';
        });
    
        // add window keydown event
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 13) {
                this.sendChat(inputChat.text)
                inputChat.blur();
                inputChat.text = '';
                // delete event keydown
                window.removeEventListener('keydown', () => {
                    console.log('remove event keydown');
                }
                );
            }
        });
    
    
        let btnCancel = new PIXI.Graphics();
        btnCancel.beginFill(0xe57e3b, 1);
    
        btnCancel.lineStyle(3, 0x6a1b26, 1);
        btnCancel.drawRoundedRect(0, 0, bgW * 0.2, bgh * 0.3, 10);
        btnCancel.endFill();
        btnCancel.x = btnOKText.x + btnOKText.width +  btnCancel.width /2 ;
        btnCancel.y = 0;
        ContainerButton.addChild(btnCancel);
    
        let btnCancelText = new PIXI.Text('Đóng', {
            fontSize: 20,
            fill: 0x532905,
            fontFamily: 'chelthm',
            fontWeight: 'bold',
            align: "center",
            fontWeight: 'bold',
            wordWrap: true,
            wordWrapWidth: bgW - 20
        });
        btnCancelText.x = btnCancel.width / 2 - btnCancelText.width / 2;
        btnCancelText.y = btnCancel.height / 2 - btnCancelText.height / 2;
        btnCancel.addChild(btnCancelText);
    
        btnCancel.interactive = true;
        btnCancel.buttonMode = true;
        btnCancel.on('pointerdown', () => {
            this.bodyChat.visible = false;
            this.bodyChat.removeChildren();
        });
    
        bg.addChild(ContainerButton);
    
        // ContainerButton is center of bg
        ContainerButton.x = bgW / 2 - ContainerButton.width / 2;
        ContainerButton.y = bg.height * 0.95;
    
       
    
       
        this.bodyChat.x = this.gameWidth / 2 - this.bodyChat.width / 2;
        // body chat is 70% of this.gameHeight
        this.bodyChat.y = this.gameHeight*0.9 - this.bodyChat.height;
    }
}

export default Since04chatClass;

