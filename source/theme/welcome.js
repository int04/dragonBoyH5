import Since04loadingGame from './pageLoadgame.js';
class Since04SicentWelcome extends Since04loadingGame {
    constructor() {
        super();
    }

    createMapNui = (x, y, src, width = false, height = false) => {
        let element = new PIXI.Sprite(this.coverImg(src, 'map/khac'));
        element.x = x;
        element.y = y;
        if (width) element.width = width > element.width ? width : element.width;
        if (height) element.height = height > element.height ? height : element.height;
        return element;
    }

    set = (id) =>
    {
        this.to(-27,id);
    }



    updateMapGuest = () => {
        let map = this.guestContainer.getChildByName('map');
        if (!map) return clearInterval(this.InputSetInverti);
        let nuida = map.getChildByName('load1');
        nuida.x -= 1;
        if (nuida.x <= -336) nuida.x = 0;
        let nuidaxa = map.getChildByName('load2');
        nuidaxa.x -= 0.5;
        if (nuidaxa.x <= -336) nuidaxa.x = 0;
    }

    createBackgroundMap = () => {
        let background = new PIXI.Graphics();
        background.name = "map"
        background.beginFill(0x155e1d, 1);
        background.lineStyle(0, 0x570b21, );
        background.drawRoundedRect(0, 0, this.gameWidth, this.gameHeight, 0);
        background.endFill();
        let bautroi = new PIXI.Graphics();
        bautroi.beginFill(0x19b0f8, 1);
        bautroi.lineStyle(0, 0x570b21, 1);
        bautroi.drawRoundedRect(0, 0, this.gameWidth, this.gameHeight * 0.3, 0);
        bautroi.endFill();
        background.addChild(bautroi);

        let Giuatroi = new PIXI.Container();
        background.addChild(Giuatroi);
        for (let i = 0; i < Math.round(this.gameWidth / 258) * 2; i++) {
            let base = this.createMapNui(i * 258, 0, 'x2b03', 0, this.gameHeight * 0.15);
            Giuatroi.addChild(base);
        }
        Giuatroi.y = bautroi.height / 2 + 30;


        let nuidaxanua = new PIXI.Container();
        background.addChild(nuidaxanua);
        for (let i = 0; i < Math.round(this.gameWidth / 510) * 2; i++) {
            let base = this.createMapNui(i * 510, 0, 'x2b02', 0, this.gameHeight * 0.30);
            nuidaxanua.addChild(base);
        }
        nuidaxanua.y = Giuatroi.height + 20;


        let nuidaxa = new PIXI.Container();
        nuidaxa.name = "load2";
        background.addChild(nuidaxa);
        for (let i = 0; i < Math.round(this.gameWidth / 336) * 2; i++) {
            let base = this.createMapNui(i * 336, 0, 'x2b01', 0);
            nuidaxa.addChild(base);
        }
        nuidaxa.y = nuidaxanua.height + 30;


        let nuida = new PIXI.Container();
        nuida.name = "load1";
        let soluong = Math.round(this.gameWidth / 336) * 2;
        let ynui = this.gameHeight - this.gameHeight * 0.35;
        let heightnui = this.gameHeight * 0.3;
        for (let i = 0; i < soluong; i++) {
            let nui = this.createMapNui(i * 336, 0, 'x2b00');
            nuida.addChild(nui);
        }

        background.addChild(nuida);
        nuida.x = 0;
        nuida.y = nuidaxanua.y + nuidaxa.y + 30;

        return background;
    }




    CreateLogo = (width) => {
        let txt = "CHÚ BÉ RỒNG";
        let logoc = new PIXI.Container();
        let logo = new PIXI.Text(txt, new PIXI.TextStyle({
            fontFamily: 'PottaOne-Regular',

            fontSize: 40,
            fill: 0xfb9d63,
            fontWeight: 'bold',

        }));

        logo.resolution = 2;
        logo.style.stroke = '#591327';
        logo.style.strokeThickness = 10;
        logo.style.dropShadow = true;
        logo.style.dropShadowColor = '#591327';
        logo.style.dropShadowBlur = 2;
        logo.style.dropShadowAngle = Math.PI / 10;
        logo.style.dropShadowDistance = 3;
        let set = {
            x: 300,
            y: 200
        };
        logo.width = this.gameWidth * 1;
        logo.width = logo.width > set.x ? set.x : logo.width;
        logo.width = logo.width > this.gameWidth * 0.5 ? this.gameWidth * 0.5 : logo.width;

        let txt2 = 'H5 ONLINE';
        let logo2 = new PIXI.Text(txt2, new PIXI.TextStyle({
            fontFamily: 'PottaOne-Regular',
            fontSize: 20,

            fill: 0x59c269,
            fontWeight: 'bold',

        }));
        logo2.resolution = 2;
        logo2.style.stroke = '#3c4b24';
        logo2.style.strokeThickness = 6;
        logo2.style.dropShadow = true;
        logo2.style.dropShadowColor = '#3c4b24';
        logo2.style.dropShadowBlur = 2;
        logo2.style.dropShadowAngle = Math.PI / 10;
        logo2.style.dropShadowDistance = 3;
        logo2.y = logo2.height + 5;
        logo2.x = logo.width / 2 - logo2.width / 2;

        let set2 = {
            x: 100,
            y: 200
        };
        logo2.width = this.gameWidth * 1;
        logo2.width = logo2.width > set2.x ? set2.x : logo2.width;
        logo2.width = logo2.width > this.gameWidth * 0.5 ? this.gameWidth * 0.5 : logo2.width;

        logoc.addChild(logo2);



        logoc.addChild(logo);
        return logoc;
    }

    CreateMainGuestGame = () => {
        this.loadGame.visible = false;
        clearInterval(this.InputSetInverti);
        this.guestContainer.visible = true;
        this.guestContainer.removeChildren();
        this.guestContainer.addChild(this.createBackgroundMap());
        this.InputSetInverti = setInterval(this.updateMapGuest, 1000 / 60);

        let background = new PIXI.Graphics();
        this.guestContainer.addChild(background);
        background.beginFill(0xfee4c6, 0);
        background.lineStyle(0.0001, 0x6c4a00, 1);

        let set = {
            x: 500,
            y: 600
        };
        let bW = this.gameWidth * 1;
        bW = bW > set.x ? set.x : bW;
        bW = bW > this.gameWidth * 0.8 ? this.gameWidth * 0.8 : bW;
        let bH = this.gameHeight * 1;
        bH = bH > set.y ? set.y : bH;
        bH = bH > this.gameHeight * 0.5 ? this.gameHeight * 0.5 : bH;


        background.drawRoundedRect(0, 0, bW, bH, 10);
        background.endFill();

        let TxtCreateBy = new PIXI.Text('SourceCode', {
            fontSize: 14,
            fill: 0xFF0000,
            fontFamily: 'Arial',
            align: "center",
            fontWeight: 'bold',
            wordWrap: true,
            wordWrapWidth: background.width - 20
        });
        TxtCreateBy.x = this.gameWidth - TxtCreateBy.width - 10;
        TxtCreateBy.y = 0;

        TxtCreateBy.style.stroke = 0xFFFFFF;
        TxtCreateBy.style.strokeThickness = 2;
        TxtCreateBy.interactive = true;
        TxtCreateBy.cursor = 'pointer';
        TxtCreateBy.on('pointerdown', () => {
            this.openURL();
        });

        let TxtCreateBy2 = new PIXI.Text('Made with PixiJS', {
            fontSize: 16,
            fill: 0xe72264,
            fontFamily: 'Arial',
            align: "center",
            wordWrap: true,
            fontWeight: 'bold',

            wordWrapWidth: background.width - 20,
        });
     
        TxtCreateBy2.x = 0;
        TxtCreateBy2.y = this.gameHeight - TxtCreateBy2.height ;
        TxtCreateBy2.style.stroke = 0xFFFFFF;
        TxtCreateBy2.style.strokeThickness = 2;
        TxtCreateBy2.interactive = true;
        TxtCreateBy2.cursor = 'pointer';
        TxtCreateBy2.on('pointerdown', () => {
            this.openURL('https://pixijs.com/');
        });

        this.guestContainer.addChild(TxtCreateBy, TxtCreateBy2);


        let listbutton = new PIXI.Container();
        background.addChild(listbutton);

        let array = [{
            name: 'Chơi TK.' + this.username + '',
            action: 'ingame',
        }, {
            name: 'Chơi mới',
            action: 'newgame',
        }, {
            name: 'Đổi tài khoản',
            action: 'login',
        }, {
            name: 'Máy chủ 1 sao',
            action: 'server',
        }];

        for (let i = 0; i < array.length; i++) {
            let button = new PIXI.Graphics();
            button.beginFill(0xe37d3a, 1);
            button.lineStyle(3, 0x6b1d28, 1);

            let set = {
                x: background.width * 0.7,
                y: background.height * 0.2,
            };

            let bw = background.width * 1;
            bw = bw > set.x ? set.x : bw;
            bw = bw > background.width * 0.8 ? background.width * 0.8 : bw;

            let bh = background.height * 1;
            bh = bh > set.y ? set.y : bh;
            bh = bh > background.height * 0.5 ? background.height * 0.5 : bh;

            button.drawRoundedRect(0, 0, bw, bh, 10);
            button.endFill();
            button.x = background.width / 2 - button.width / 2;
            button.y = (i * (button.height + 10));
            button.name = array[i].action;
            button.interactive = true;
            button.cursor = 'pointer';
            button.on('pointerdown', () => {
                if (array[i].action == 'ingame') this.logInGame();
                if (array[i].action == 'newgame') this.MenuCreateNewPlayer();
                if (array[i].action == 'login') this.pageLogin();
                if (array[i].action == 'server') this.send(-4);
            })

            if (array[i].action == 'ingame' && (this.username == '' || this.password == '')) button.visible = false;

            listbutton.addChild(button);

            let text = new PIXI.Text(array[i].name, {
                fontSize: 18,
                fill: 0x532905,
                fontFamily: 'fontchinh',
                align: "center",
                wordWrap: true,
                wordWrapWidth: button.width - 20
            });
            text.x = button.width / 2 - text.width / 2;
            text.y = button.height / 2 - text.height / 2;
            button.addChild(text);


        }

        background.x = this.gameWidth / 2 - background.width / 2;
        background.y = (this.gameHeight - (this.gameHeight * 0.3)) / 2;

        if (background.y + background.height > this.gameHeight) background.y = this.gameHeight - background.height - 10;

        let logo = this.CreateLogo(background.width);
        logo.x = background.width / 2 - logo.width / 2;
        logo.y = listbutton.y - logo.height;
        background.addChild(logo);

        let desc = new PIXI.Text('*:Demo test.', {
            fontFamily: 'Arial',
            fontSize: 15,
            fill: 0xFFFFFF,
            fontWeight: 'bold',
            Wrap: true,
        });
        // wrap text
        desc.style.wordWrap = true;
        desc.style.wordWrapWidth = this.gameWidth - TxtCreateBy2.width - 20;
        desc.style.align = 'right';
        // stroke
        desc.style.stroke = '#000000';
        desc.style.strokeThickness = 5;
        desc.y = this.gameHeight - desc.height;
        desc.x = this.gameWidth - desc.width - 10;
        this.guestContainer.addChild(desc);

        let copyright = new PIXI.Text(
            '© Dragon Boy HTML5.', {
                fontFamily: 'Arial',
                fontSize: 15,
                fill: 0x000000,
                fontWeight: 'bold',
                Wrap: true,
                
            }
        );
        copyright.style.wordWrap = true;
        copyright.style.wordWrapWidth = this.gameWidth - TxtCreateBy.width - 20;
        copyright.style.align = 'left';


        copyright.style.stroke = 0xFFFFFF;
        copyright.style.strokeThickness = 1;
        copyright.y = 0 ;
        copyright.x = 0;
        this.guestContainer.addChild(copyright);


      

    }

}

export default Since04SicentWelcome;