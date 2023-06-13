import source from './source.js';
class since04 extends source {

    constructor() {
        super();
        this.PixiGame();
        this.createObject();
    }

    loadCanvas() {
        console.log('run game')
    }

    applyBorderToCanvas() {
        return false;
        const canvas = this.app.view;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const canvasWidth = canvas.offsetWidth;
        const canvasHeight = canvas.offsetHeight;
        if (canvasWidth < windowWidth || canvasHeight < windowHeight) {
            canvas.classList.add("bordered-canvas");
            let idGame = document.getElementById('game');
            if(idGame)
            {
                let elementwindow = document.getElementById('window');
                if(elementwindow)
                {
                    let title = document.getElementById('title-bar');
                    let titleHeight = title.offsetHeight + canvasHeight;
                    elementwindow.style.width = canvasWidth+'px';
                    elementwindow.style.height = titleHeight+'px';
                }
            }
        } else {
            canvas.classList.remove("bordered-canvas");
        }
    }

    resizeCanvas() {
        return false;
        window.addEventListener("resize", this.applyBorderToCanvas());
    }


    checkSize(w,h) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const canvasWidth = w;
        const canvasHeight = h;
        if (canvasWidth < windowWidth || canvasHeight < windowHeight) {
            return true;
        } 
        return false;
    }


    PixiGame() {
        this.gameWidth = window.innerWidth ;
        this.gameHeight = window.innerHeight;
        this.mobi = false;
        if (/Mobi/.test(navigator.userAgent) && 'onorientationchange' in window) {
            this.mobi = true;
        }
        else 
        {
            this.gameWidth = window.innerWidth > 1025 ? 1025 : window.innerWidth;
            this.gameHeight = window.innerHeight > 635 ? 635 : window.innerHeight;
        }

        let idGame = document.getElementById('game');

        if(this.mobi == true)
        {
            if(this.gameHeight > 1025)
            {
                this.gameHeight = 1025;

                this.mobi = false;

            }
        }

        if(this.checkSize(this.gameWidth, this.gameHeight))
        {
            this.gameWidth = idGame.offsetWidth;
            this.gameHeight = idGame.offsetHeight;
        }


        this.app = new PIXI.Application({
            width: this.gameWidth - 0,
            height: this.gameHeight - 0,
            backgroundColor: 0x19b0f8,
            transparent: false,
            //forceCanvas: false,
            //forceWebGL: true,
            powerPreference: "high-performance",
            resolution: window.devicePixelRatio,
            autoDensity: true,
            sharedTicker: true,
            roundPixels: true,
            legacy: false,

            preserveDrawingBuffer: true,
            sharedTicker: true,
            antialias: true,


        });
        this.app.stage.name = "Dragon Boy H5 with Since04";
        globalThis.__PIXI_APP__ = this.app;

        this.app.renderer.plugins.accessibility.destroy();
        
        

        if(this.mobi)
        {
            let elementwindow = document.getElementById('desktop');
            if(elementwindow)
            {
                elementwindow.style.display = 'none';
            }
            document.body.appendChild(this.app.view);
        }
        else 
        {
            idGame.appendChild(this.app.view);
        }
        
    }

    createObject() {
        this.container = new PIXI.Container();
        this.container.name = "Lớp chứa nhân vật, phụ kiện, các lớp bản đồ, hiệu ứng";

        this.nen = new PIXI.Sprite(PIXI.Texture.WHITE);
        this.nen.name = "Lớp nền";
        this.nen.tint = 0x000000;

        this.lopCanhNen = new PIXI.Container();
        this.lopCanhNen.name = 'Lớp cảnh nền';

        this.container.addChild(this.nen);


        this.inGame = new PIXI.Container();
        this.inGame.name = "Lớp trong game";
        this.loadGame = new PIXI.Container();
        this.loadGame.name = "Lớp chờ load game";
        this.container.blendMode = PIXI.BLEND_MODES.SCREEN;
        this.container.resolution = 2;

        this.bando = new PIXI.Container();
        this.bando.name = "Lớp bản đồ"
        this.bando_che = new PIXI.Container();
        this.bando_che.name = "Lớp bản đồ nhân vật"
        this.bando_nuida = new PIXI.Container();
        this.bando_nuida.name = "lớp bản đồ núi "
        this.bando_nuixa = new PIXI.Container();
        this.bando_nuixa.name = "lớp thung lũng"
        this.bando_nuixanua = new PIXI.Container();
        this.bando_nuixanua.name = "lớp chân trời"
        this.bando_bautroi = new PIXI.Container();
        this.bando_bautroi.name = "Lớp bầu trời"
        this.SCnhapnhay = new PIXI.Container();
        this.SCwhite = new PIXI.Container();
        this.SCwhite.name = "lớp trắng màn hình"

        this.gameMap = {
            setting: {
                maxY: 0,
                minY: 0,
                maxX: 0,
                minX: 0,
            },
            size: {
                idMaxX: 0,
                idMaxY: 0,
                idMinX: 0,
                idMinY: 0,

            }
        };

        this.nguoichoi = new PIXI.Container();
        this.nguoichoi.name = "Lớp nhân vật trên bản đồ";
        this.nguoichoi_phukien = new PIXI.Container();
        this.nguoichoi_phukien.name = "Lớp phụ kiện của player";
        this.kiNang = new PIXI.Container();
        this.kiNang.name = "Lớp hiệu ứng kĩ năng";
        this.Chat = new PIXI.Container();
        this.Chat.name = "Lớp hiệu ứng chát";
        this.luoiBlock = new PIXI.Container();


        this.container.addChild(this.bando_bautroi);
        this.container.addChild(this.bando_nuixanua);
        this.container.addChild(this.bando_nuixa);

        this.container.addChild(this.bando_nuida);
        this.container.addChild(this.bando);

        this.container.addChild(this.nguoichoi_phukien, this.nguoichoi); // người chơi khác trên bản đồ

        this.NhanVatGoc = new PIXI.Container();
        this.name = "Lớp nhân vật gốc";

        this.NhanVat = new PIXI.Container();
        this.NhanVat.name = "Lớp nhân vật";

        this.NhanVat_phukien = new PIXI.Container();
        this.NhanVat_phukien.name = "Lớp nhân vật phụ kiện";

        this.container.addChild(this.NhanVatGoc);
        this.container.addChild(this.NhanVat_phukien)
        this.container.addChild(this.NhanVat)




        this.container.addChild(this.kiNang);
        this.container.addChild(this.bando_che);
        this.container.addChild(this.Chat);

        this.postionChar = new PIXI.Text('X,Y:', {
            fill: 'white'
        });


        this.postionChar.position.set(0, this.gameHeight - this.postionChar.height - 10);

        this.app.ticker.add(() => {
            let name = '';
           
            this.postionChar.text = `X: ${Math.round(this.NhanVat.x)} Y: ${Math.round(this.NhanVat.y)} (${name}) `
        })
        // shadow text of this.postionChar

        let donDanh = this.postionChar;
        donDanh.style.stroke = "#000000";
        donDanh.style.strokeThickness = 4;
        donDanh.style.dropShadow = true;
        donDanh.style.dropShadowColor = "#000000";
        donDanh.style.dropShadowBlur = 4;
        donDanh.style.dropShadowAngle = Math.PI / 6;
        donDanh.style.dropShadowDistance = 6;
        //listMap



        this.showFPS = new PIXI.Text('Mouse position: 0, 0', {
            fill: 'white'
        });

        this.box = new PIXI.Container();
        this.box.name = "Các lớp như Hành trang, ...";
        this.box.visible = false;

        this.showFPS.position.set(this.gameWidth - this.showFPS.width - 10, 70);

        this.screen = new PIXI.Container();
        this.screen.name = "Lớp màn hình";

        this.inGame = new PIXI.Container();

        this.khungGiaoTiep = new PIXI.Container();
        this.khungGiaoTiep.name = "Lớp khung giao tiếp";
        this.khungGiaoTiep.visible = false;
        this.bodyChat = new PIXI.Container();
        this.bodyChat.name = "Lớp khung chat";
        this.bodyChat.visible = false;

        this.inGame.addChild( this.lopCanhNen, this.container); // gọi phần chứa contrainer
        this.inGame.addChild(this.SCwhite); // hiệu ứng trắng màn hình

        this.screen.addChild(this.inGame); /// Nhân vật/ map / in game

        this.inGame.addChild(this.postionChar, this.showFPS)

        this.listPlayerInMap  = new PIXI.Container();
        this.listPlayerInMap.name = "Danh sách thông tin nhân vật trên bản đồ";
        this.inGame.addChild(this.listPlayerInMap);

        this.screen.addChild(this.box); // box nhiem vu, hanh trang, ...
        this.screen.addChild(this.khungGiaoTiep) // khung giao tiep
        this.screen.addChild(this.bodyChat); /// Khung chát 

        let GrapSCwhite = new PIXI.Graphics();
        GrapSCwhite.beginFill(0xffffff, 1);
        GrapSCwhite.drawRect(0, 0, this.gameWidth, this.gameHeight);
        GrapSCwhite.endFill();
        GrapSCwhite.alpha = 1;
        GrapSCwhite.visible = false;
        this.GrapSCwhite = GrapSCwhite;
        this.SCwhite.addChild(GrapSCwhite);

        this.NutOnScreen = new PIXI.Container();
        this.NutOnScreen.name = "Các lớp nút trên màn hình";
        this.inGame.addChild(this.NutOnScreen);

        this.guestContainer = new PIXI.Container();
        this.guestContainer.name = "Lớp khách";
        this.screen.addChild(this.guestContainer);

        this.boxPreviewItem = new PIXI.Container();
        this.boxPreviewItem.name = "Thông tin vật phẩm, kĩ năng";
        this.screen.addChild(this.boxPreviewItem);

        this.boxError = new PIXI.Container();
        this.boxError.name = "Box thông báo";
        this.screen.addChild(this.boxError);
        this.boxError.visible = false;

        this.dangerUser = new PIXI.Container();

        this.dangerUser.name = "Box cảnh báo";
        this.screen.addChild(this.dangerUser);




        this.screen.addChild(this.loadGame);
        this.app.stage.addChild(this.screen);

        this.screen.interactive = true;
        this.screen.on('pointerdown', e => {
            this.boxPreviewItem.removeChildren();
        });
    }




    fps() {
        return Math.round(this.app.ticker.FPS / 60) <= 0 ? 1 * 2 : Math.round(this.app.ticker.FPS / 60) * 2;
    }



    findBag(id) {
        let bag = this.my.ruong.item.find(e => e.id == id)
        return bag;
    }

    findItem = (id) => {
        let itemx = this.item.find(e => e.id == id);
        return itemx;
    }


    deleteNguoiChoi = (id = 0) => {
        if (!id) {
            this.nguoichoi.removeChildren();
            this.nguoichoi_phukien.removeChildren();
        } else {
            let player = this.Charset.find(e => e.id == id);
            if (player) {
                this.Charset = this.Charset.filter(e => e.id != id);
            } else {
                let c = this.nguoichoi.children.find(e => e.id == id);
                if (c) {
                    this.nguoichoi.removeChild(c);
                }
                let c2 = this.nguoichoi_phukien.children.find(e => e.id == id);
                if (c2) {
                    this.nguoichoi_phukien.removeChild(c2);
                }
            }
            this.Charset = this.Charset.filter(e => e.id != id);

        }
        this.resetNone();
    }


    thapPhan = (num, n) => {
        try {
            return parseFloat(num.toFixed(n));
        } catch (e) {
            return num;
        }
    }




}

export default since04;