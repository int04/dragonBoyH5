import Since04SicentWelcome from "./welcome.js";
class ScientTaoNhanVat extends Since04SicentWelcome {
    constructor() {
        super();
        this.InputTenNhanVat = '';
        this.inPutHanhTinh = 1;
        this.inPutAvatarNhanVat = 1;
        this.InputSetInverti;
        //this.MenuCreateNewPlayer();
    }

    outPutCreateNhanVat =() => {
        if(!this.InputTenNhanVat) return this.notice(this._('Vui lòng nhập tên nhân vật.'));
        if(this.inPutHanhTinh <= 0 || this.inPutHanhTinh > 3) return this.notice(this._('Vui lòng chọn hành tinh.'));
        if(this.inPutAvatarNhanVat <= 0 || this.inPutAvatarNhanVat > 3) return this.notice(this._('Vui lòng chọn nhân vật.'));
        if(this.InputTenNhanVat.length <4 || this.InputTenNhanVat.length > 12) return this.notice(this._('Tên nhân vật phải từ 4 đến 10 ký tự.'));
        this.to(-15, {
            _1 : this.InputTenNhanVat,
            _2 : this.inPutHanhTinh,
            _3 : this.inPutAvatarNhanVat
        })
        return this.notice(this._('Đang tạo nhân vật...'), false);
    }

    
    MenuCreateNewPlayer = () => {
        this.guestContainer.removeChildren();
        clearInterval(this.InputSetInverti);
        this.inGame.visible = false;
        this.guestContainer.visible = true;

        this.guestContainer.addChild(this.createBackgroundMap());

        let backgorund = new PIXI.Graphics();
        this.guestContainer.addChild(backgorund); // !1

        backgorund.beginFill(0xefe5c2, 0.85);
        backgorund.lineStyle(3, 0x570b21, 1);
        let width = this.gameWidth * 0.9;
        if(width > 500) width = 500;
        backgorund.drawRoundedRect(0, 0, width, this.gameHeight * 0.7, 10);
        backgorund.endFill();
        backgorund.x = this.gameWidth / 2 - backgorund.width / 2;
        backgorund.y = this.gameHeight / 2 - backgorund.height / 2;


        let txt = new PIXI.Text('Tạo nhân vật', {
            fontSize: 20,
            fill: 0xff9800,
            fontFamily: 'fontchinh',
            
            align: "center",
            
            wordWrap: true,
            wordWrapWidth: backgorund.width - 20
        });
        txt.resolution = 2;
        txt.style.stroke = '#000000';
        txt.style.strokeThickness = 4;
        txt.style.dropShadow = true;
        txt.style.dropShadowColor = '#000000';
        txt.style.dropShadowBlur = 4;
        txt.style.dropShadowAngle = Math.PI / 6;
        txt.style.dropShadowDistance = 6;
        // beauty text

        txt.x = backgorund.width / 2 - txt.width / 2;
        txt.y = 0 - txt.height;
        backgorund.addChild(txt); // !2

        let skin_quan = ["","OjXcgiisYH","twvYYRSWUt","edetJJtBbw"];
        let skin_ao = ["","atVGRKpeAf","jmTItjaORo","BiZPigMSyQ"];
        let skin_dau = [
            [],
            ["","qpLIHbmNrG","sLeNYzwVYi","QbPhVhGmRc"], // gohan, kirin, yamcha
            ["","XnPloWDTdg","gNiPLfNjlC", "LivLKpGKlE"], // vegete, calic, kakarot
            ["","BJokIHnCbz","lMzpmFtgCj","OxvZczuNNT"] // picolo, kemi, octiu
        ];

        let khung2 = new PIXI.Graphics();
        khung2.beginFill(0xefe5c2, 0);
        khung2.lineStyle(0.3, 0xefe5c2, 0.1);
        khung2.drawRoundedRect(0, 0, backgorund.width * 0.8, backgorund.height * 0.9, 10);
        khung2.endFill();
        khung2.x = backgorund.width / 2 - khung2.width / 2;
        khung2.y =0;
        backgorund.addChild(khung2); // !

        let nhanVat = new PIXI.Container();
        khung2.addChild(nhanVat); // !

        let load_quan = this.getSkin(skin_quan[this.inPutHanhTinh]);
        let load_ao = this.getSkin(skin_ao[this.inPutHanhTinh]);
        let load_dau = this.getSkin(skin_dau[this.inPutHanhTinh][this.inPutAvatarNhanVat]);

        let quan = new PIXI.Sprite(this.coverImg(load_quan.farm[0].dungyen.farme[0]));
        quan.scale.set(load_quan.farm[0].dungyen.width, load_quan.farm[0].dungyen.height);
        quan.sprite = 0;
        quan.name = "quan222";
        let ao = new PIXI.Sprite( this.coverImg(load_ao.farm[0].dungyen.farme[0]));
        ao.sprite = 0;
        ao.name = 'ao222';
        ao.scale.set(load_ao.farm[0].dungyen.width, load_ao.farm[0].dungyen.height);
        let dau = new PIXI.Sprite( this.coverImg(load_dau.farm[0].dungyen.farme[0]));
        dau.scale.set(load_dau.farm[0].dungyen.width, load_dau.farm[0].dungyen.height);
        dau.sprite = 0;
        dau.name = 'dau222';
        dau.x = load_dau.farm[0].dungyen.x;
        quan.x = load_quan.farm[0].dungyen.x;
        ao.x =load_ao.farm[0].dungyen.x;
        ao.load = 0;
        dau.y =  Math.abs(this.getImg(skin_quan[this.inPutHanhTinh]).farm[0]["dungyen"].y);
        ao.y =  Math.abs(this.getImg(skin_dau[this.inPutHanhTinh][this.inPutAvatarNhanVat]).farm[0]["dungyen"].y) -  Math.abs(this.getImg(skin_ao[this.inPutHanhTinh]).farm[0]["dungyen"].y);
        quan.y = Math.abs(this.getImg(skin_dau[this.inPutHanhTinh][this.inPutAvatarNhanVat]).farm[0]["dungyen"].y);
        nhanVat.addChild(quan, dau, ao);
        nhanVat.y = 10;
        nhanVat.x = khung2.width / 2 - nhanVat.width / 2 ;
        this.InputSetInverti = setInterval(() => {
            if(ao.load ==1) 
            {
                dau.y +=1;
                ao.y +=1;
            }
            if(ao.load ==2)
            {
                dau.y -=1;
                ao.y -=1;
            }
            ao.load++;
            if(ao.load == 3) ao.load = 0;
            this.updateMapGuest();
        }, 50);


        let InputNameNhanVat = new PIXI.TextInput({
            input: {
                fontSize: '16px',
                padding: '10px',
                color: '#7a1125'
            },
            box: {
                default: {fill: 0xeec385, rounded: 12, stroke: {color: 0xfff6eb, width: 1}},
                focused: {fill: 0xa7f2ac, rounded: 12, stroke: {color: 0xfff6eb, width: 1}},
                disabled: {fill: 0xDBDBDB, rounded: 12}
            }
        })
        InputNameNhanVat.width = khung2.width * 0.5;
        InputNameNhanVat.height = khung2.height * 0.1;
        InputNameNhanVat.y = nhanVat.height + InputNameNhanVat.height ;
        InputNameNhanVat.x = khung2.width / 2 - InputNameNhanVat.width / 2;
        InputNameNhanVat.placeholder = 'Tên nhân vật';
        InputNameNhanVat.text = this.InputTenNhanVat;
        khung2.addChild(InputNameNhanVat); // !!!!!!!!!!!!
        InputNameNhanVat.on('input', () => {
            this.InputTenNhanVat = InputNameNhanVat.text;
        });

        let khung3 = new PIXI.Graphics();
        backgorund.addChild(khung3); // !1
        khung3.beginFill(0xe6dd8d, 0);
        khung3.lineStyle(0.3, 0xefe5c2, 0.1);
        khung3.drawRoundedRect(0, 0, backgorund.width * 1, backgorund.height * 0.45, 10);
        khung3.endFill();
        khung3.x = backgorund.width / 2 - khung3.width / 2;
        khung3.y =InputNameNhanVat.y + InputNameNhanVat.height + 10;

        let listButton = ["","Tr.Đất", "Saiyan", "Namek"];
        let nameNhanVat = [
            [],
            ["","Gohan","Kirin","Yamcha"], // gohan, kirin, yamcha
            ["","Vegeta","Calic", "Kakarot"], // vegete, calic, kakarot
            ["","Picolo","Kemi","Octiiu"] // picolo, kemi, octiu
        ];
        let containerHanhTinh = new PIXI.Container();
        khung3.addChild(containerHanhTinh); // !1
        for(let i = 1; i<=3; i++)
        {
            let buttonBackgourond = new PIXI.Graphics();
            buttonBackgourond.beginFill(i == this.inPutHanhTinh ? 0x67da89:  0xe57e3b, 1);
            buttonBackgourond.lineStyle(2, 0x5c0518, 1);
            buttonBackgourond.drawRoundedRect(0, 0, khung3.width * 0.25, khung3.height * 0.25, 10);
            buttonBackgourond.endFill();
            buttonBackgourond.x = (i-1) * (buttonBackgourond.width + 10);
            buttonBackgourond.y = 0;
            containerHanhTinh.addChild(buttonBackgourond); // !1
            let button = new PIXI.Text(listButton[i], {
                fontSize: 16,
                fill: 0x570c22,
                fontFamily: 'fontchinh',
                
                align: "center",
                
                wordWrap: true,
                wordWrapWidth: buttonBackgourond.width - 20
            });
           
            // beauty text
            button.x = buttonBackgourond.width / 2 - button.width / 2;
            button.y = buttonBackgourond.height / 2 - button.height / 2;
            buttonBackgourond.addChild(button); // !1
            buttonBackgourond.interactive = true;
            buttonBackgourond.cursor = 'pointer';
            buttonBackgourond.on('pointerdown', () => {
                this.inPutHanhTinh = i;
                this.MenuCreateNewPlayer();
            }
            );

            if(i == this.inPutHanhTinh) 
            {
                for(let j = 1; j<=3; j++)
                {
                    let buttonBackgourond = new PIXI.Graphics();
                    buttonBackgourond.beginFill(j == this.inPutAvatarNhanVat ? 0x67da89:  0xe57e3b, 1);
                    buttonBackgourond.lineStyle(2, 0x5c0518, 1);
                    buttonBackgourond.drawRoundedRect(0, 0, khung3.width * 0.25, khung3.height * 0.25, 10);
                    buttonBackgourond.endFill();
                    buttonBackgourond.x = (j-1) * (buttonBackgourond.width + 10);
                    buttonBackgourond.y = buttonBackgourond.height + 10;
                    containerHanhTinh.addChild(buttonBackgourond); // !1
                    let button = new PIXI.Text(nameNhanVat[i][j], {
                        fontSize: 16,
                        fill: 0x570c22,
                        fontFamily: 'fontchinh',
                        
                        align: "center",
                        
                        wordWrap: true,
                        wordWrapWidth: buttonBackgourond.width - 20
                    });
                   
                    // beauty text
                    button.x = buttonBackgourond.width / 2 - button.width / 2;
                    button.y = buttonBackgourond.height / 2 - button.height / 2;
                    buttonBackgourond.addChild(button); // !1
                    buttonBackgourond.interactive = true;
                    buttonBackgourond.cursor = 'pointer';
                    buttonBackgourond.on('pointerdown', () => {
                        this.inPutHanhTinh = i;
                        this.inPutAvatarNhanVat = j;
                        this.MenuCreateNewPlayer();
                    });
                }
            }

           


        }
        containerHanhTinh.x = khung3.width / 2 - containerHanhTinh.width / 2;


        let buttonBackgourond = new PIXI.Graphics();
        buttonBackgourond.beginFill(0xe57e3b, 1);
        buttonBackgourond.lineStyle(1, 0x5c0518, 1);
        buttonBackgourond.drawRoundedRect(0, 0, backgorund.width * 0.15, backgorund.height * 0.08, 10);
        buttonBackgourond.endFill();
        buttonBackgourond.x = 0;
        buttonBackgourond.y = 0;
        backgorund.addChild(buttonBackgourond); // !1
        let button = new PIXI.Text((this._('X')), {
            fontSize: 16,
            fill: 0x570c22,
            fontFamily: 'fontchinh',
            
            align: "center",
            
            wordWrap: true,
            wordWrapWidth: buttonBackgourond.width - 20
        });

        // beauty text
        button.x = buttonBackgourond.width / 2 - button.width / 2;
        button.y = buttonBackgourond.height / 2 - button.height / 2;
        buttonBackgourond.addChild(button); // !1

        buttonBackgourond.interactive = true;
        buttonBackgourond.cursor = 'pointer';
        buttonBackgourond.on('pointerdown', () => {
            this.CreateMainGuestGame() 
        });


        let buttonCreate = new PIXI.Graphics();
        buttonCreate.beginFill(0xe57e3b, 1);
        buttonCreate.lineStyle(1, 0x5c0518, 1);
        buttonCreate.drawRoundedRect(0, 0, backgorund.width * 0.20, backgorund.height * 0.08, 10);
        buttonCreate.endFill();
        buttonCreate.x = backgorund.width - buttonCreate.width - backgorund.width * 0;
        buttonCreate.y =  0;
        backgorund.addChild(buttonCreate); // !1
        let button2 = new PIXI.Text((this._('Chơi')), {
            fontSize: 16,
            fill: 0x570c22,
            fontFamily: 'fontchinh',
            
            align: "center",
            
            wordWrap: true,
            wordWrapWidth: buttonCreate.width - 20
        });

        // beauty text
        button2.x = buttonCreate.width / 2 - button2.width / 2;
        button2.y = buttonCreate.height / 2 - button2.height / 2;
        buttonCreate.addChild(button2); // !1

        buttonCreate.interactive = true;
        buttonCreate.cursor = 'pointer';
        buttonCreate.on('pointerdown', () => {
            this.outPutCreateNhanVat();
        });


    }
}

export default ScientTaoNhanVat;