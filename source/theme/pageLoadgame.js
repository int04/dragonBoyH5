import objectMap from '../game/map.js';
class Since04loadingGame extends objectMap {
    constructor() {
        super();
        
    }

    openURL = (url = false) => {
        if(!url) return this.notice('Chưa có địa chỉ nhấn');
        if (window.cordova) {
            window.open(url, '_system', 'location=yes');
        } else {
            window.open(url, '_blank');
        }
    }






    LoadFont = (name) => {
        let font1 = new PIXI.Text('Since04', {
            fontFamily: name,
            fontSize: 40,
            fill: 0xFFFFFF,
            fontWeight: 'bold',
            align: 'center'
        });
        font1.x = 0;
        font1.y = this.gameHeight / 2 - font1.height / 2;
        return font1;
    }

    CreateFontLogin = () => {
        this.loadGame.removeChildren();
        let background = new PIXI.Graphics();
        this.loadGame.addChild(background);
        background.beginFill(0x000000, 1);
        background.lineStyle(0, 0x570b21, 1);
        background.drawRoundedRect(0, 0, this.gameWidth, this.gameHeight, 0);
        background.endFill();
        background.interactive = true;

        let listLoad = new PIXI.Container();
        this.loadGame.addChild(listLoad);
        let listfont = this.gameInfo.font;
        for (let i = 0; i < listfont.length; i++) {
            let font = this.LoadFont(listfont[i]);
            listLoad.addChild(font);
        }
        listLoad.visible = false;


        let logoAuth = new PIXI.Text(this.gameInfo.name, {
            fontFamily: 'Arial',
            fontSize: 60,
            fill: 0xFFFFFF,
            fontWeight: 'bold',
            align: 'center'
            });
            logoAuth.resolution = 2;
            logoAuth.style.stroke = '#591327';
            logoAuth.style.strokeThickness = 6;
            logoAuth.style.dropShadow = true;
            logoAuth.style.dropShadowColor = '#591327';
            logoAuth.style.dropShadowBlur = 2;
            logoAuth.style.dropShadowAngle = Math.PI / 10;
            logoAuth.style.dropShadowDistance = 3;

            let maxW = this.gameWidth * 0.7;
            logoAuth.width = maxW > 350 ? 350 : maxW;

            logoAuth.x = this.gameWidth / 2 - logoAuth.width / 2;
            logoAuth.y = this.gameHeight / 2 - logoAuth.height / 2;
        this.loadGame.addChild(logoAuth);

        
      

        let logo2 = new PIXI.Text('PixiJS', {
            fontFamily: 'Arial',
            fontSize: 30,
            fill: 0xe72264,
            fontWeight: 'bold',
            align: 'center'
            });


            logo2.y =logoAuth.height + logoAuth.y; 
            logo2.x = logoAuth.width + logoAuth.x -   logo2.width;


            let Madewith = new PIXI.Text('Made with ', {
                fontFamily: 'Arial',
                fontSize: 11,
                fill: 0xFFFFFF,
                fontWeight: 'bold',
                align: 'center'
                });
                Madewith.y =logo2.y + Madewith.height/2  ;
                Madewith.x =logo2.x - Madewith.width ;

            this.loadGame.addChild(Madewith,logo2);


        let version = new PIXI.Text('Client v. ' + this.gameInfo.version, {
            fontFamily: 'Arial',
            fontSize: 14,
            fill: 0xFFFFFF,
            fontWeight: 'bold',
            align: 'center'
            });
            version.y =this.gameHeight  - version.height - 10;
            version.x = 10;
            this.loadGame.addChild(version);


            let PixiVersion = new PIXI.Text('Since04', {
                fontFamily: 'Arial',
                fontSize: 9,
                fill: 0xFFFFFF,
                fontWeight: 'bold',
                align: 'center'
                });
                PixiVersion.y =this.gameHeight  - PixiVersion.height - 5;
                PixiVersion.x = this.gameWidth - PixiVersion.width - 30;
                this.loadGame.addChild(PixiVersion);


        let PixijsHtml = new PIXI.Text('PixiJS v. ' + PIXI.VERSION, {
            fontFamily: 'Arial',
            fontSize: 14,
            fill: 0xFFFFFF,
            fontWeight: 'bold',
            align: 'center'
            });
            PixijsHtml.y =version.y  - PixijsHtml.height ;
            PixijsHtml.x = 10;
            this.loadGame.addChild(PixijsHtml);
    
        const callback = () => {
            this.ObjectCreatePageLoading();
        };
    
       setTimeout(callback, this.gameInfo.timeloadWelcome);
       
        
    }

    ObjectCreatePageLoading() {
        this.loadGame.removeChildren();
        let bg_loadGame = new PIXI.Graphics();
        bg_loadGame.beginFill(0x000000);
        bg_loadGame.drawRect(0, 0, this.gameWidth, this.gameHeight);
        bg_loadGame.endFill();
        bg_loadGame.x = 0;
        bg_loadGame.y = 0;
        bg_loadGame.alpha = 1;
        bg_loadGame.visible = true;

        
        
        
    
        let bg_imgLoad = new PIXI.Sprite(this.coverImg('loadgame'));
        let bg_imgLoad_1 = new PIXI.Sprite(new PIXI.Texture(bg_imgLoad.texture, new PIXI.Rectangle(0, 0, 16, 16)));
        let bg_imgLoad_2 = new PIXI.Sprite(new PIXI.Texture(bg_imgLoad.texture, new PIXI.Rectangle(0, 16, 16, 16)));
        let bg_imgLoad_3 = new PIXI.Sprite(new PIXI.Texture(bg_imgLoad.texture, new PIXI.Rectangle(0, 32, 16, 16)));
        let bg_imgLoad_4 = new PIXI.Sprite(new PIXI.Texture(bg_imgLoad.texture, new PIXI.Rectangle(0, 48, 16, 16)));
        let bg_imgLoad_5 = new PIXI.Sprite(new PIXI.Texture(bg_imgLoad.texture, new PIXI.Rectangle(0, 64, 16, 16)));
        let bg_imgLoad_6 = new PIXI.Sprite(new PIXI.Texture(bg_imgLoad.texture, new PIXI.Rectangle(0, 80, 16, 16)));
        let bg_imgLoad_7 = new PIXI.Sprite(new PIXI.Texture(bg_imgLoad.texture, new PIXI.Rectangle(0, 96, 16, 16)));
        let bg_imgLoad_8 = new PIXI.Sprite(new PIXI.Texture(bg_imgLoad.texture, new PIXI.Rectangle(0, 112, 16, 16)));
        let bg_imgLoad_9 = new PIXI.Sprite(new PIXI.Texture(bg_imgLoad.texture, new PIXI.Rectangle(0, 128, 16, 16)));
    
    
        let bgLoadGameAnimation = new PIXI.AnimatedSprite([bg_imgLoad_1.texture, bg_imgLoad_2.texture, bg_imgLoad_3.texture, bg_imgLoad_4.texture, bg_imgLoad_5.texture, bg_imgLoad_6.texture, bg_imgLoad_7.texture, bg_imgLoad_8.texture, bg_imgLoad_9.texture]);
        bgLoadGameAnimation.animationSpeed = 2;
        bgLoadGameAnimation.play();
    
        bgLoadGameAnimation.x = this.gameWidth / 100 * 50 - bgLoadGameAnimation.width / 100 * 50;
        bgLoadGameAnimation.y = this.gameHeight / 100 * 50 - bgLoadGameAnimation.height / 100 * 50;


        let logo = this.CreateLogo(bg_loadGame.width);
        logo.x = bg_loadGame.width / 2 - logo.width / 2;
        logo.y = bgLoadGameAnimation.y - logo.height - 10;
        bg_loadGame.addChild(logo);
    
        let bgLoadText = new PIXI.Text('Xin chờ', {
            fontFamily: 'Arial',
            fontSize: 16,
            fill: 0xFFFFFF,
            fontWeight: 'bold',
        });
    
        bgLoadText.x = this.gameWidth / 100 * 50 - bgLoadText.width / 100 * 50;
        bgLoadText.y = this.gameHeight / 100 * 50 - bgLoadText.height / 100 * 50 + bgLoadGameAnimation.height / 100 * 50 + 20;
    
    
    
        let textTip = ["Trái đất có khả năng choáng", "ăn đậu để nhanh hơn"];
    
        let bgLoadTip = new PIXI.Text(textTip[Math.floor(Math.random() * textTip.length)], {
            fontFamily: 'Arial',
            fontSize: 16,
            fill: 0xE6E6A9,
            fontWeight: 'bold',
        });
    
        bgLoadTip.x = this.gameWidth / 100 * 50 - bgLoadTip.width / 100 * 50;
        bgLoadTip.y = this.gameHeight / 100 * 50 - bgLoadTip.height / 100 * 50 + bgLoadGameAnimation.height / 100 * 50 + 20 + bgLoadText.height / 100 * 50 + 20;

        

    
        this.loadGame.addChild(bg_loadGame, bgLoadGameAnimation, bgLoadText, bgLoadTip);
        this.loadGame.visible = true;
        this.CreateMainGuestGame();
        
    }
}

export default Since04loadingGame;