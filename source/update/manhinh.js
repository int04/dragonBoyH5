
import Since04EffMap  from "./effmap.js";
class Since04TickUpdate extends Since04EffMap {
    constructor() {
        super();
        this.reloadTickInGame();
        this.dem = 0;
        this.timeUpdateMove = 0;
        this.timeKiemTraBiDo = 0;
        this.vitricu = 0;
        this.setKeoSpeed = 0.6;
    }

    reloadTickInGame = () => {
        this.dem++;
        if(this.dem > 100) this.dem = 0;
        let NhanVat = this.NhanVat;
        let NhanVatGoc = this.NhanVatGoc;
        let my = this.my;

        if(my.id > 0) 
        {
            NhanVat.act = my.info.act;
            this.snowlyupdateSkill(); // cập nhật kĩ năng
            this.snowlyTextnotice(); /// cập nhật thông báo dưới màn hình
            this.snowlyDangerNotice(); // cập nhật thông báo ở giữa màn hình
            this.snowlyKeoMap(); // tự động cho nhân vật ở giữa màn hình
            this.snowlyRoiTuDo(); // rơi tự do
            this.tickerEFF(); // cập nhật hiệu ứng bản đồ
            this.tickerUpdateMouseClickPlayer(); // cập nhật click chuột vào nhân vật
            this.tickerUpdateMyInfo(); // cập nhật thông tin nhân vật
            this.tickerUpdateDauThan(); // cập nhật đầu thần
            this.updateMoveAuto(); // cập nhật di chuyển tự động
            //this.showDisPlayer(); // hiển thị khoảng cách đến đối thủ
            this.checkOnDat();
            this.checkDiQuaCau();

            // tween
            TWEEN.update()
        }

        requestAnimationFrame(this.reloadTickInGame);
    }

    canChinhMap = () => {
        let y= 0;
        /*
            this.gameHeight => height of game
            this.container.y => position of container
            this.bando_bautroi => children on container
        */

        // write program this.bando_bautroi always on top screen this.gameHeight
        
     

       



    }

    checkOnDat = () => {
        return false;
        if(this.my.id <=0) return false;
        if(this.timeKiemTraBiDo < Date.now()) {
            this.timeKiemTraBiDo = Date.now() + 3000;
            if(this.vitricu == this.NhanVat.x && this.my.info.act == 'fly')
            {
                console.log('nằm đất')
                this.xulynamdat(this.my.id);
            }
        }

        this.vitricu = this.NhanVat.x;

    };

    showDisPlayer = () => {
        if(this.my.id <=0) return false;
        this.listPlayerInMap.removeChildren();

        this.nguoichoi.children.forEach((player,i) => {
            if(player.id != this.my.id) 
            {
                let dis = this.khoangCach(player.id, this.my.id);
                let text = new PIXI.Text(player.Ten+" "+ (dis) + "m", {
                    fontFamily: 'Arial',
                    fontSize: 12,
                    fill: 0xFFFFFF,
                    align: 'center'
                });
                text.y = i * text.height;
                this.listPlayerInMap.addChild(text);
            }
        });

        this.listPlayerInMap.x = this.gameWidth - this.listPlayerInMap.width; 
        this.listPlayerInMap.y = this.gameHeight/2 - this.listPlayerInMap.height/2;
    }

    updateMoveAuto = () => {
        if(this.my.id >0 && this.my.info.act == 'dungyen' && this.timeUpdateMove < Date.now()) 
        {
            this.sendMyMove();
            this.timeUpdateMove = Date.now() + 1000;
        }
    }

    tickerUpdateDauThan = () => {
        
    }

    tickerUpdateMyInfo = () => {
        this.hpProgress.width = this.hpProgress.maxWidth/100* ( this.my.info.chiso.hp / this.my.info.chiso.hpFull* 100);
        this.kiProgress.width = this.kiProgress.maxWidth/100* ( this.my.info.chiso.ki / this.my.info.chiso.kiFull* 100);
    
        this.hpText.text = this.my.info.chiso.hp;
        this.hpText.x = 0 + this.hpProgress_BGKhung.getBounds().width/2 - this.hpText.getBounds().width/2  ;
        this.hpText.y =  this.hpProgress_BGKhung.getBounds().height/2 -  this.hpText.getBounds().height / 2;
    
        this.kiText.text = this.my.info.chiso.ki;
        this.kiText.x = this.kiProgress_BGKhung.getBounds().width/2 - this.kiText.getBounds().width/2 ;
        this.kiText.y = this.kiProgress_BGKhung.getBounds().height / 2  - this.kiText.getBounds().height / 2;
    
        if(this.sucmanhText.text != this.number_format(this.my.info.coban.sucmanh))
        {
            this.sucmanhText.eff = true;
            this.sucmanhText.load = 1;
            this.sucmanhText.time = 0;
        }
        this.sucmanhText.text = this.number_format(this.my.info.coban.sucmanh);
        this.sucmanhText.x =  this.sucmanh_BGKhung.getBounds().width / 2 - this.sucmanhText.getBounds().width / 2;
        this.sucmanhText.y = this.sucmanh_BGKhung.getBounds().height / 2  - this.sucmanhText.getBounds().height / 2;
        if(this.sucmanhText.eff)  
        { 
            this.sucmanhText.time++;
            if(this.sucmanhText.time%10 == 0)
            {
                if(this.sucmanhText.load == 1) 
                {
                    this.sucmanhText.x+=2;
                    this.sucmanhText.load = 0;
                }
                else 
                {
                    this.sucmanhText.x-=2;
                    this.sucmanhText.load = 1;
                }
                this.sucmanhText.style.fill = 0xFFFF33;
                this.sucmanhText.style.fontWeight = 'bold';
                
            }
            if(this.sucmanhText.time >= 200) 
            {
                this.sucmanhText.x =  this.sucmanh_BGKhung.getBounds().width / 2 - this.sucmanhText.getBounds().width / 2;
                this.sucmanhText.eff = false;
                this.sucmanhText.style.fill = 0xFFFFFF;
                this.sucmanhText.style.fontWeight = 'normal';
            }
        }
    }

    tickerUpdateMouseClickPlayer = () => {
        this.isClickPlayer();
        this.isNotClickPlayer();
    }

    isNotClickPlayer = () => {
        if(this.setting.mouse == 0 || this.setting.mouse == -1 && this.dem%10 == 0) 
        {
            let gannhat = -1;
            this.khungThongTinDoiThu.visible = false;
            this.Charset.forEach(player => {
                let Dx = Math.abs(  ((this.NhanVat.x - player.pos.x)^2 + (this.NhanVat.y - player.pos.y)^2) );
                if(Dx < 400 &&  ( gannhat == -1 || Dx < gannhat) ) 
                {
                    gannhat = Dx;
                    this.setting.mouse = player.id;
                }
            });
        }
    
    }

    isClickPlayer = () => {
        if(this.setting.mouse != 0) 
        {
            let player = this.Charset.find(e => e.id == this.setting.mouse);
            if(!player) {
                this.setting.mouse = 0;
                this.nameText.text = this.my.name;
                this.nameText.x = this.name_BGKhung.getBounds().width / 2  - this.nameText.getBounds().width / 2;
                this.nameText.height =this.nameText.height >= this.name_BGKhung.getBounds().height ? this.name_BGKhung.getBounds().height : this.nameText.height; 
    
                this.nameText.y = this.name_BGKhung.getBounds().height / 2  - this.nameText.getBounds().height / 2;
                this.khungThongTinDoiThu.visible = false;
            }
            else 
            {
    
                // check khoảng cách 
                let trenmap = this.nguoichoi.children.find(e => e.id == player.id);
                if(!trenmap) return this.setting.mouse = 0;
                let Dx = Math.abs(  ((this.NhanVat.x - trenmap.x)^2 + (this.NhanVat.y - trenmap.y)^2) );
                if(Dx > 400) 
                {
                    this.setting.mouse = -1;
                    this.khungThongTinDoiThu.visible = false;
                }
                this.khungThongTinDoiThu.visible = true;
                this.myHPText.text       = this.number_format(player.info.chiso.hp) + "("+this.thapPhan(Dx/48,2)+"m)";
                this.myNameText.text     = player.name;
                this.myHPText.x          = this.backGoundInfoMMO.getBounds().width / 2  - this.myHPText.getBounds().width / 2;
                this.myNameText.x        = this.backGoundInfoMMO.getBounds().width / 2  - this.myNameText.getBounds().width / 2;
    
            }
        }
    }

    tickerEFF = () => {
        if (this.setting.setting.eff && this.dem % 5 == 0) {
            let datd = this.bando.children.filter(item => item.type === "dat");
            let hieuUngMap = this.bando_che.children.filter(item => item.autofollow == true);
            let HieuUngScal = this.bando.children.filter(item => item.scal == true);
            let hieuUngMay = this.bando_che.children.filter(item => item.src == 'may1' || item.src == 'may2' || item.src == 'may3');
            hieuUngMay.forEach(item => {
                if (item.posStartX == undefined) item.posStartX = item.x;
                item.x -= 1;
                if (item.x <= gameMap.setting.minX) {
                    item.x = item.posStartX;
                }
            });
    
            HieuUngScal.forEach(item => {
                if (this.rand(1, 30) <= 10) {
                    if (item.scale.x != 1) {
                        item.scale.x = 1;
                        item.pivot.x = item.width;
                    } else {
                        item.scale.x = -1;
                        item.pivot.x = 0;
    
                    }
                }
            })
            hieuUngMap.forEach(item => {
    
                if (item.time <= 0) {
                    let xrand = this.rand(-1, 1);
                    let yrand = this.rand(1, 3);
    
    
    
                    for (let i = 0; i < datd.length; i++) {
                        let dat = datd[i];
                        if (this.hitTestRectangle(item, dat)) {
                            if (this.calculateDistance(item, dat) < item.height) {
    
                                item.time = 100;
                                item.y = dat.y + item.height / 2;
                                item.stop();
                                break;
                            }
                        }
                    }
                    if (item.time <= 0) {
                        item.x += xrand;
                        item.y += yrand;
                    }
                } else {
                    item.time--;
                    if (item.time == 1) {
                        item.play();
                        item.x = item.xgoc;
                        item.y = item.ygoc;
                    }
                }
    
            });
    
        }
    }


    countScenes(xxzczxc) {
        let count = 0;

        // Đếm số lượng cảnh con trong container hiện tại
        count += xxzczxc.children.length;

        // Duyệt qua từng cảnh con và đệ quy gọi lại hàm countScenes để đếm số lượng cảnh con trong cảnh con
        for (const child of xxzczxc.children) {
            if (child instanceof PIXI.Container) {
                count += this.countScenes(child);
            }
        }

        return count;
    }


    snowlyKeoMap() {
        
        let NhanVat = this.NhanVat;
        let NhanVatGoc = this.NhanVatGoc;
        let my = this.my;
        let container = this.container;
        this.showFPS.text = `FPS x: ${Math.round(this.app.ticker.FPS)} - Spr: `+this.countScenes(this.container)+` `;

        let nhanVatX_set = NhanVat.x * (container.scale.x);
        let nhanVatY_set = NhanVat.y * (container.scale.y);
       // nhanVatY_set += -this.setKeoSpeed;
        let gameMap = this.gameMap;


      
        




        // Tính toán tọa độ trung tâm màn hình
        let screenCenterX = this.gameWidth / 2;
        let screenCenterY = this.gameHeight / 2;

        if(this.vaomap == 1)
        {
            container.y = 0;
            this.vaomap = 0;
        }

        if(NhanVat.x+screenCenterX >= gameMap.setting.maxX) {
           
            container.x = -(gameMap.setting.maxX - screenCenterX * 2);
        }
        else if(NhanVat.x-screenCenterX <= gameMap.setting.minX) {
            container.x = 0;
        }
        else {
            container.x = this.gameWidth / 2 - nhanVatX_set;
        }

       
        
        

        if(container.y == 0) 
        {
            container.y = this.gameHeight *this.setKeoSpeed- nhanVatY_set;


            
        }
        
        else
        if (NhanVat.y - (this.gameHeight / 2) < gameMap.setting.minY) {
            this.setKeoSpeed = 0.6;
            
        } else if (NhanVat.y + (this.gameHeight / 2) > gameMap.setting.maxY) {
                this.setKeoSpeed = 0.6;
        } else {

            container.y = this.gameHeight*this.setKeoSpeed - nhanVatY_set;
            let  containerPosition = NhanVat.toGlobal(new PIXI.Point(0, 0));
            if(containerPosition.y + NhanVat.height*2 > this.gameHeight)
            {
                this.setKeoSpeed -=0.1;
            }

            


        }

        
       
        











    }

    snowlyDangerNotice() {
        let dem = this.dem;
        let dangerUser = this.dangerUser;
        let noiDungDanger = this.noiDungDanger;
        let maskNoiDungDanger = this.maskNoiDungDanger;


        if(dangerUser.visible == false)
        {
            if(this.logDanger.length >=1)
            {
                dangerUser.visible = true;
                noiDungDanger.text = this.logDanger[0];
                noiDungDanger.x = maskNoiDungDanger.x + 10;
                this.logDanger.splice(0,1);
                dangerUser.time = Date.now() + 500;
            }
        }
        else 
        {
            if(this.logDanger.length >=1 && noiDungDanger.width < this.gameWidth )
            {
                noiDungDanger.text = noiDungDanger.text + ', ' + this.logDanger[0];
                this.logDanger.splice(0,1);
        
            }
            if(dem % 2 == 0 && dangerUser.time <= Date.now())
            {
                noiDungDanger.x--;
                if(noiDungDanger.x <= -(maskNoiDungDanger.width + noiDungDanger.width/2))
                {
                    dangerUser.visible = false;
                }
            }
        }
    }

    snowlyTextnotice() {
        let dem = this.dem;
        let text_notice = this.text_notice;
        let bg_notice = this.bg_notice;
        if (text_notice && text_notice.visible == true) {

            text_notice.x--;
            if (text_notice.x <= -text_notice.width) {
                text_notice.x = 0;
                text_notice.visible = false;
                bg_notice.visible = false;
    
            }
        }

        if (text_notice && text_notice.visible == false) {
            if (this.logNotice.length > 0) {
                text_notice.x = this.gameWidth;
                text_notice.text = this.logNotice[0];
                text_notice.visible = true;
                bg_notice.visible = true;
                this.logNotice.splice(0, 1);
            }
    
        }
    }

    snowlyRoiTuDo () {
        
        
        if (this.timeRoiTuDo != 0 ) {
            if (this.timeRoiTuDo <= Date.now()) {
                this.keysPressed[40] = true;

                
                
            }
        }
    }

    snowlyupdateSkill() {
        let i = 0;
        let SkillDataOnScreen = this.SkillDataOnScreen;
        let my = this.my;
        my.oskill.forEach(element => {
            element = -1 ? 0 : element;
            let infoSkill = this.usedSkill(element);
            if(infoSkill && SkillDataOnScreen.time[i]) 
            {
                let infoUseSkill = my.skill.find(e => e.id == infoSkill.id);
                if(infoUseSkill) 
                {
                    if (infoUseSkill.time > Date.now()) {
                        let timecon  = infoUseSkill.time - Date.now();
    
    
                        let phantramcon = ((infoUseSkill.time - Date.now()) / (infoUseSkill.time - infoUseSkill.lasttime)) * 100;
                        SkillDataOnScreen.time[i].height = SkillDataOnScreen.time[i].max / 100 * phantramcon;
                    }
                    else 
                    {
                        SkillDataOnScreen.time[i].height = 0;
                    } 
    
                }
            }
            i++;
        });
    }


}

export default Since04TickUpdate;