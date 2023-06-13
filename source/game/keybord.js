import DisplayOnScreen from '../show/nutmanhinh.js';
class snowlyMove extends DisplayOnScreen {
    constructor() {
        super();
        this.moveTimeout = 0;
        this.sinceKeyDown(); // ấn xuống
        this.sinceKeyUp(); // nhả phím
        this.sinceKeyOne(); // nhấn phím một lần
        requestAnimationFrame(this.sinceRunAction);
        this.sendToServer = true;
        this.logChange = [];
        this.timeSetRoiTuDo = 0;
        this.thoigianroitudo = 0;
        this.speedOld = 1;
        this.lanDauBay = true;
    }

    checkOnDat22 = (id,key = 'down') => {
        let player = this.my.id == id ? this.NhanVat : this.nguoichoi.children.find(e => e.id == id);
        let data = this.my.id == id ? this.my : this.Charset.find(e => e.id == id);
        if(!player) return true;
        if(!data) return true;
        let datd = this.bando.children.filter(item => item.type === "dat");

        // check on dat
        let isPlayerOnDatLayer = false;
        let k = 0;
        for (let i = 0; i < datd.length; i++) {
            let mapSprite = datd[i];

            if (this.hitTestRectangle(player, mapSprite,key,10)) {
                isPlayerOnDatLayer = true;
                k = i;
                break;
            }
        }
        if(!isPlayerOnDatLayer)
        {
            if(data.id == this.my.id) {
                this.timeRoiTuDo = Date.now() + 500;
            }
        }

        if (isPlayerOnDatLayer) {
            if(data.id == this.my.id) {
                this.timeRoiTuDo = Date.now() + 500;
            }
            console.log('chạm đất')
            return true;
        }
        return false;
    }

    xulynamdat = (id) => {
        if(id != this.my.id) return false;

        if(!this.cacheAction.find(e => e.id == id)) {
            this.cacheAction.push({
                id : id,
                action : 'dungyen',
            });
        }
      
        let datd = this.bando.children.filter(item => item.type === "dat");

        let data = this.my.id == id ? this.my : this.Charset.find(e => e.id == id);
        if(!data) return false;

        let player = this.my.id == id ? this.NhanVat : this.nguoichoi.children.find(e => e.id == id);
        if(!player) return false;
        let gannhat = null;
        let k = null;
        for (let i = 0; i < datd.length; i++) {
            let dat = datd[i];
            
            let dx = this.calculateDistance(player, dat);
            if(gannhat == null || gannhat > dx)
            {
                gannhat = dx;
                k = i;
            }
        }

        if(k != null)
        {
            console.log('có nè')
            player.y = Math.round(datd[k].y - player.height + 24);
            player.y = Math.round(player.y);
            data.pos.y = player.y;
            this.lanDauBay = true;
            this.checkOnDat22(id);

        }

        
        player.namdat = 1;
        this.sendMyMove();
        console.log('xử lý')


    }

    checkKey = () => {
        // if list box is visible, No action
        if(this.box.children.length <= 0) this.box.visible = false; 
        if(this.boxError.children.length <= 0) this.boxError.visible = false;
        if(this.khungGiaoTiep.children.length <= 0) this.khungGiaoTiep.visible = false;
        if(this.bodyChat.children.length <= 0) this.bodyChat.visible = false;


        if(this.box.visible == true) return true;
        if(this.boxError.visible == true) return true;
        if(this.khungGiaoTiep.visible == true) return true;
        if(this.bodyChat.visible == true) return true;

        return false;
    }

    /*
        v = g*t  
    */

    sendMyMove = () => {
        let _move = this.NhanVat.huong ? this.NhanVat.huong : 'right';
        
    }

    changeClickAuto() {
        if ((this.setting.mouse != 0 || this.setting.mouse != 1) && this.logChange.find(e => e == this.setting.mouse) == undefined) {
            this.logChange.push(this.setting.mouse);
        }
        let have = 0;
        for (let i = 0; i < this.Charset.length; i++) {
            let dx = Math.abs(((this.NhanVat.x - this.Charset[i].pos.x) ^ 2 + (this.NhanVat.y - this.Charset[i].pos.y) ^ 2));
            if (dx < 400 && this.logChange.find(e => e == this.Charset[i].id) == undefined) {
                this.setting.mouse = this.Charset[i].id;
                have = 1;
                this.logChange.push(this.Charset[i].id);
                break;
            }
        }
        if (have == 0) {
            this.logChange = [];
        }
    }

    sinceKeyUp = () => {
        document.addEventListener("keyup", (e) => {
            if (this.my.info.act == 'fly' || this.my.info.act == 'baylen' || this.my.info.act == 'flymove') {
                this.timeRoiTuDo = Date.now() + 500;
            } else {
                this.timeRoiTuDo = Date.now() + 500;
            }
            if (this.my.info.act == 'move') {

                this.my.info.act = 'dungyen';
                this.addAction()
            }


            if(this.my.info.act == 'fly')
            {
                this.my.info.act = 'baylen';
                this.addAction();
            }

            if ((this.keysPressed[40] || this.keysPressed[38] || this.keysPressed[37] || this.keysPressed[39]) && this.my.id > 0) {
                setTimeout(() => {
                    this.sendMyMove();
                }, 1);
            }

            delete this.keysPressed[e.keyCode];
        });
    }
    sinceKeyDown = () => {
        document.addEventListener("keydown", (e) => {
            
            this.timeRoiTuDo = 0;
            delete this.keysPressed[40];
            if ((e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 37 || e.keyCode == 39)) {
                if (this.my && this.my.id >= 1 && this.my.info.chiso.hp <= 0) {
                    return false;
                }
            }

            if (e.keyCode == 112) {
                e.preventDefault();
            }
            this.keysPressed[e.keyCode] = true;

            if ((this.keysPressed[40] || this.keysPressed[38] || this.keysPressed[37] || this.keysPressed[39] || this.keysPressed[13]) && this.my.id == 0 || this.checkKey() == true) {
                this.keysPressed[40] = false;
                this.keysPressed[38] = false;
                this.keysPressed[37] = false;
                this.keysPressed[39] = false;
                this.keysPressed[13] = false;

            }
        });
    }

    sinceKeyOne = () => {
        document.addEventListener("keydown", (e) => {
            if(e.keyCode >= 49 && e.keyCode <= 53)
            {
                return this.numberAttack(e.keyCode);
            }
            if(e.keyCode >= 97 && e.keyCode <= 101)
            {
                return this.numberAttack(e.keyCode);
            }

            if(e.keyCode == 13) 
            {
                return this.interAttack();
            }
             
            if (e.keyCode == 82) {
                this.openChat();
            }

            if (e.keyCode == 112) {
                this.openLastMenu();
            }

            if (e.keyCode == 113) {
                this.changeClickAuto();
            }
            
          
        },{ capture : true, passive : false });
    }



    sinceRunAction = () => {

        this.moveTimeout++;
        // if(this.moveTimeout%(this.fps()/2)) return requestAnimationFrame(this.sinceRunAction);
        if (this.moveTimeout > 100) this.moveTimeout = 0;

        let speednew = 0;
        speednew += this.my.info.speed;
        speednew -= this.app.ticker.FPS / 60;
        if (this.my.info.act == 'fly') {
            speednew += 0.5;
        }
        // forec
        let datd = this.bando.children.filter(item => item.type === "dat");
        let longdat = this.bando.children.filter(item => item.type === "longdat");
        let NhanVatX = this.NhanVat.x;
        let NhanVatY = this.NhanVat.y;


        if(this.lanDauBay && this.keysPressed[38])
        {
            if(this.checkOnDat22(this.my.id)) {
                this.lanDauBay = false;
                speednew+=this.NhanVat.height * 1.5;
                console.log('Lần đầu báy')
            }
        }



        // end forec




        // ! di chuyển thì xóa trạng thái nhả phím
        if (this.keysPressed[37] || this.keysPressed[38] || this.keysPressed[39] || this.keysPressed[40]) {

            // kiểm tra chặn không cho lên map 
            if (this.keysPressed[38]) {
                this.timeRoiTuDo = 0;
                if ((this.NhanVat.y - speednew) <= this.gameMap.setting.minY) {
                    // speednew = speed to this.gameMap.setting.minY 
                    speednew = Math.max(0, this.NhanVat.y - this.gameMap.setting.minY);

                }
            } else
            if (this.keysPressed[40]) {

                if (this.timeRoiTuDo <= Date.now() && this.timeRoiTuDo != 0) {
                    this.CreateRoi = this.CreateRoi || 1;
                    if (this.CreateRoi == 1) {
                        this.thoigianroitudo = 0;
                        this.timeSetRoiTuDo = 0;
                        this.speedOld = 2.5;
                        this.CreateRoi = 2;
                    }

                    this.timeSetRoiTuDo = 0;
                    this.thoigianroitudo += 1 / 1000;
                    this.speedOld += (10 / 1000 * this.thoigianroitudo);


                }

                speednew =this.speedOld;
                
              




                if ((this.NhanVat.y + speednew) >= this.gameMap.setting.maxY) {
                    speednew = Math.max(0, this.gameMap.setting.maxY - this.NhanVat.y);
                }
            } else
            if (this.keysPressed[37]) {
                this.timeRoiTuDo = 0;
                if ((this.NhanVat.x - speednew) <= this.gameMap.setting.minX) {
                    speednew = Math.max(0, this.NhanVat.x - this.gameMap.setting.minX);
                }
            } else
            if (this.keysPressed[39]) {
                this.timeRoiTuDo = 0;
                if ((this.NhanVat.x + speednew) >= this.gameMap.setting.maxX) {
                    speednew = Math.max(0, this.gameMap.setting.maxX - this.NhanVat.x);
                }
            }



            if (this.keysPressed[40]) {

                let isPlayerOnDatLayer = false;
                let k = 0;
                for (let i = 0; i < datd.length; i++) {
                    let mapSprite = datd[i];
                    /*
                    let TinhY = this.NhanVatGoc.y - speednew;
                    if (this.NhanVatGoc.x + this.NhanVatGoc.width > mapSprite.x + mapSprite.width &&
                        this.NhanVatGoc.x < mapSprite.x + mapSprite.width &&
                        TinhY + this.NhanVatGoc.height > mapSprite.y &&
                        TinhY < mapSprite.y + mapSprite.height) {
                        isPlayerOnDatLayer = true;
                        k = i;
                        break;
                    }
                    */
                    if (this.hitTestRectangle(this.NhanVat, mapSprite, 'down', speednew)) {
                        isPlayerOnDatLayer = true;
                        k = i;
                        break;
                    }
                }

                if (isPlayerOnDatLayer) {
                    this.my.info.act = 'dungyen';
                    this.addAction();
                    // deleteSkill('dauvan_' + this.my.id);




                    this.NhanVat.y = Math.round(datd[k].y - this.NhanVatGoc.height + 24);
                    this.NhanVatGoc.y = Math.round(datd[k].y - this.NhanVatGoc.height + 24);

                    this.NhanVat.y = Math.round(this.NhanVat.y)

                    this.CreateRoi = 1;
                    this.lanDauBay = true;
                    this.timeRoiTuDo = 0;
                    delete this.keysPressed[40];
                    speednew = 0;

                }




                // ? di chuyển xuống dưới 

                if (this.bando_nuida.y < 0)
                    this.bando_nuida.y += speednew / 2;

                if (this.bando_nuixa.y < 0)
                    this.bando_nuixa.y += speednew / 1.3;

                if (this.bando_nuixanua.y < 0)
                    {
                        this.bando_nuixanua.y += speednew / 1.2;
                        this.bando_bautroi.y += speednew / 1.2;
                    }


            }

            if (this.keysPressed[38]) {

                for (let i = 0; i < longdat.length; i++) {
                    let dat = longdat[i];
                    if (this.hitTestRectangle(this.NhanVat, dat, 'up', speednew)) {
                        if (this.calculateDistanceX(this.NhanVat, dat, 'up', speednew * 2) + 1 <= this.NhanVat.height) {
                            console.log(this.calculateDistanceY(this.NhanVat, dat, 'up', speednew * 2), this.NhanVat.height / 2)
                            speednew = 0;
                            break;

                        }
                    }
                }

                // ? di chuyển lên trên


                if (Math.abs(this.bando_nuida.y) < this.bando_nuida.height / 3) {
                    this.bando_nuida.y -= speednew / 2;
                    this.bando_nuixa.y -= speednew / 1.3;
                    this.bando_nuixanua.y -= speednew / 1.2;
                    this.bando_bautroi.y -= speednew / 1.2;


                }




            }

            if (this.keysPressed[37]) {
                
                let chamdat = 0;
                let k = 0;
                for(let i = 0; i< longdat.length; i++) 
                {
                    let dat = longdat[i];
                    if(longdat[i].x + longdat[i].width  > this.NhanVat.x - speednew) continue;

                    if (this.hitTestRectangle(this.NhanVat, dat, 'left', speednew)) {
                        chamdat = 1;
                        k = i;
                        break;
                    }
                }

                if (chamdat) {
                    //this.NhanVat.x = Math.round(longdat[k].x + longdat[k].width + Math.abs(this.NhanVat.width) );
                    //this.NhanVat.x += Math.abs(this.NhanVat.width/2);
                    //this.NhanVat.x = Math.round(this.NhanVat.x);
                    delete this.keysPressed[37];
                    speednew = 0;
                }


            }

            if (this.keysPressed[39]) {

                let chamdat = 0;
                let k = 0;

                for (let i = 0; i < longdat.length; i++) {
                    if(longdat[i].x + longdat[i].width  < this.NhanVat.x + speednew) continue;

                    let dat = longdat[i];
                    if (this.hitTestRectangle(this.NhanVat, dat, 'right', speednew)) {
                        chamdat = 1;
                        k = i;
                        break;
                    }
                }

                if (chamdat) {
                   
                    delete this.keysPressed[39];
                    speednew = 0;
                }



            }

            if (this.keysPressed[37] || this.keysPressed[39]) {
                if (this.my.info.act == 'move') {
                    let chamdat = 0;
                    for (let i = 0; i < datd.length; i++) {
                        let dat = datd[i];
                        /*
                        if (this.hitTestRectangle(this.NhanVat, dat)) {
                            if (this.calculateDistanceY(this.NhanVat, dat) <= this.NhanVat.height) {
                                chamdat++;
                                break;
                            }
                        }
                        */ 
                        if(this.hitTestRectangle(this.NhanVat, dat, 'down', speednew))
                        {
                            chamdat++;
                            break;
                        }
                    }
                    if (chamdat <= 0) {
                        this.my.info.act = 'baylen';

                        this.addAction()
                            //addSkill('philong', 1, this.NhanVat.x, this.NhanVat.y, this.my.id, 'eff_fly_now', 'dauvan_' + this.my.id)
                        this.my.info.act = 'fly';

                    }
                }

                if(this.my.info.act == 'fly')
                {
                    /*
                    // kiểm tra khoảng cách so với mặt đất
                    let chamdat = 0;
                    let thapnhat = null;
                    for (let i = 0; i < datd.length; i++) {
                        let dat = datd[i];
                        //distance = Math.sqrt((x1-x2)^2 + (y1-y2)^2)
                        if(this.calculateDistance(this.NhanVat, dat) < this.NhanVat.height*1.5)
                        {
                            if(thapnhat == null || thapnhat > dat.y)
                            {
                                thapnhat = dat.y;
                            }
                        }
                    }
                    if(thapnhat) 
                    {
                        this.my.info.act = 'move'
                        this.xulynamdat(this.my.id);
                    }
                    */
                }


                if(this.my.info.act == 'fly')
                {
                    let biendo = 5;
                    this.NhanVat.biendo = this.NhanVat.biendo || 0;
                    if(this.NhanVat.biendo == 1) 
                    {
                    }
                    if(this.NhanVat.biendo == 5) 
                    {
                    }
                    this.NhanVat.biendo++;
                    if(this.NhanVat.biendo > 50) this.NhanVat.biendo = 1;

                    

                }
            }


        }




        if (this.keysPressed[38] || this.keysPressed[40] && speednew >= 1) {
            // up

            this.NhanVat.y += this.keysPressed[38] ? -speednew : speednew;
            this.NhanVatGoc.y += this.keysPressed[38] ? -speednew : speednew;
            this.NhanVat_phukien.y += this.keysPressed[38] ? -speednew : speednew;
            this.my.info.move = this.keysPressed[38] ? 'up' : 'down';

            this.my.info.act = 'baylen';
            this.addAction()
        }
        if (this.keysPressed[39] || this.keysPressed[37]) {


            let skewX = 0;


            if (this.keysPressed[39]) {
                this.NhanVat.x += speednew;
                this.NhanVatGoc.x += speednew;
                this.NhanVat_phukien.x += speednew;
                this.my.info.move = 'right';
                skewX = -0.1; // Góc nghiêng khi di chuyển về bên phải
                this.NhanVat.huong = 'right';

                if (this.NhanVat.scale.x != 1) {
                    this.NhanVat.scale.x = 1;
                    this.NhanVat.pivot.x = this.NhanVat.width;
                }
            } else {
                this.my.info.move = 'left';
                this.NhanVat.x -= speednew;
                this.NhanVatGoc.x -= speednew;
                this.NhanVat_phukien.x -= speednew;
                if (this.NhanVat.scale.x != -1) {
                    this.NhanVat.scale.x = -1;
                    this.NhanVat.pivot.x = 0;
                }
                this.NhanVat.huong = 'left';

                skewX = 0.1; // Góc nghiêng khi di chuyển về bên trái
            }

            this.NhanVat.move = this.my.info.move;


            if (this.keysPressed[37]) {
                //  this.NhanVat.rotation = -Math.PI/2 ;
            } else if (this.keysPressed[39]) {
                // this.NhanVat.rotation = Math.PI/2 ;
            }

            if (this.my.info.act == 'baylen') {
                this.my.info.act = 'fly';
            } else
            if (this.my.info.act == 'fly') {
                this.my.info.act = 'fly';
            } else {
                this.my.info.act = 'move';

            }
            this.addAction()


        }


       



        if (this.keysPressed[16]) {
            //giaoTiep();
        }


        // reset sprite 

        if (this.keysPressed[37] || this.keysPressed[38] || this.keysPressed[39] || this.keysPressed[40]) {

            /**
             * @desc: nếu khi nhân vật đang bay mà bấm nút lên sẽ tạo hiệu ứng bay lên thay vì bay tiếp.
             */

            if(this.my.info.act =='fly' && this.keysPressed[38])
            {
                if((this.keysPressed[37]) || this.keysPressed[39])
                {
                    this.my.info.act =='baylen';
                    this.addAction({
                        action : 'baylen',
                        id : this.my.id,
                    })
                }
            
            }

            if (speednew >= 1 && this.sendToServer == true) {
                if (this.keysPressed[37]) this.my.info.move = 'left';
                if (this.keysPressed[38]) this.my.info.move = 'up';
                this.NhanVat.move = this.my.info.move;

                this.sendMyMove();

                this.sendToServer = false;

                setTimeout(() => {
                    this.sendToServer = true;
                }, 500)


            }




        }

        requestAnimationFrame(this.sinceRunAction);

    }
}

export default snowlyMove;
