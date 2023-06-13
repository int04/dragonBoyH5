import snowlyMove from '../game/keybord.js';
class Since04CreatePlayerOnMap extends snowlyMove {
    constructor() {
        super();
        this.updateUserTimeRender = 0;
        this.updateCreatePlayerOnMap();
        this.debut = ["thaiduonghasan"];

    }

    updateCreatePlayerOnMap = () => {
        clearTimeout(this.updateUserTimeRender);
        requestAnimationFrame(this.snowlyProcessLoadPlayer);
    };


    Since04XuLyItem = (mmo) => {
        let self = this;
        if(!mmo.data) { 
        }
        else
        if (self.nguoichoi.getChildByName(mmo.id) == undefined) {
            let itemInfo = self.item.find(e => e.id == mmo.data.item);
            if(!itemInfo) {
            }
            else 
            {
                let vatpham = new PIXI.Container();
                vatpham.id = mmo.id; //id nhân vật
                vatpham.name = mmo.id; // name nhân vật
                mmo.name = itemInfo.name;
                mmo.info.chiso.hp = mmo.data.soluong;
                vatpham.Ten = mmo.name; // tên nhân vật
                vatpham.type = mmo.type; // type nhân vật

                let hienthi = new PIXI.Sprite(this.coverImg(itemInfo.avatar));
                hienthi.name = 'hienthi';
                vatpham.addChild(hienthi);
                self.nguoichoi.addChild(vatpham);

                vatpham.interactive = true;
                vatpham.cursor = 'pointer';
                vatpham.width = 25;
                vatpham.height = 25;
                vatpham.x = mmo.pos.x;
                vatpham.y = mmo.pos.y;

                // click event to function 
                vatpham.on('pointerdown', (infoclick) => {
                    self.clickPlayer({
                        id: vatpham.id
                    });
                });

                let player_phukien = new PIXI.Container();
                player_phukien.name = vatpham.id;
                player_phukien.id = vatpham.id;
                player_phukien.type = vatpham.type;

                player_phukien.interactive = true;
                player_phukien.cursor = 'pointer';

                player_phukien.on('pointerdown', (infoclick) => {
                    self.clickPlayer({
                        id: vatpham.id
                    });
                });

                self.nguoichoi_phukien.addChild(player_phukien);
            }
        } else {
            let vatpham = self.nguoichoi.getChildByName(mmo.id);
            let hienthi = vatpham.getChildByName('hienthi');
            vatpham.width = 25;
            vatpham.height = 25;
            vatpham.x = mmo.pos.x;
            vatpham.y = mmo.pos.y;
            hienthi.texture =  hienthi.texture;
            vatpham.roi = vatpham.roi || -1;

            if(vatpham.roi == -1) 
            {
                // tạo hiệu ứng cho vật phẩm nằm trên đất.
                let datd = self.bando.children.filter(item => item.type === "dat");
                let isPlayerOnDatLayer = false;
                let k = 0;
                let speednew = 10;

                for (let i = 0; i < datd.length; i++) {
                    let mapSprite = datd[i];
                    let TinhY =  vatpham.y - speednew;
                    if (vatpham.x + vatpham.width > mapSprite.x &&
                        vatpham.x < mapSprite.x + mapSprite.width &&
                        TinhY + vatpham.height > mapSprite.y &&
                        TinhY < mapSprite.y + mapSprite.height) {
                        isPlayerOnDatLayer = true;
                        k = i;
                        break;
                    }
                }
                if (isPlayerOnDatLayer) {
                  vatpham.roi = 1;
                  vatpham.y = Math.round(datd[k].y - vatpham.height + 24);
                    mmo.pos.y = vatpham.y;
                  speednew = 0;
                }
                if(speednew >0 && datd.length >=1) 
                {
                    vatpham.y += speednew;
                    mmo.pos.y = vatpham.y;

                    // save pos item to array MMO
                    self.Charset[self.Charset.findIndex(e => e.id == mmo.id)].pos.y = mmo.pos.y;
                }
            }

            let player_phukien = self.nguoichoi_phukien.getChildByName(mmo.id);


            if (player_phukien) {
                player_phukien.x = vatpham.x;
                player_phukien.y = vatpham.y;
                player_phukien.scale.x = vatpham.scale.x;
                player_phukien.scale.y = vatpham.scale.y;
                player_phukien.pivot.x = vatpham.pivot.x;
                player_phukien.pivot.y = vatpham.pivot.y;
                player_phukien.resolution = 2;
                player_phukien.rotation = vatpham.rotation;
            }

            let ItemBG = player_phukien.getChildByName('itemBG');
            if(ItemBG == undefined) {
                /*
                ItemBG = new PIXI.Sprite(this.coverImg'PreviewClick'));
                ItemBG.start = 0;
                ItemBG.src = self.createArray(82,85);
                ItemBG.name = 'itemBG';
                ItemBG.width = 100;
                ItemBG.height =100;
                */
               let ItemBG = new PIXI.Graphics();
                ItemBG.lineStyle(0); 
                ItemBG.beginFill(0xFFFF33, 1);
                ItemBG.drawCircle(vatpham.width/2 + 17.5, vatpham.height/2 + 7, 35);
                ItemBG.endFill();
                ItemBG.start = 0;
                ItemBG.name = 'itemBG';
                ItemBG.visible = false;

                player_phukien.addChild(ItemBG);
            }
            else 
            {
                ItemBG.visible = true;
              // change color 
                if(ItemBG.start%2) {
                    ItemBG.clear();
                    ItemBG.lineStyle(0); 
                    ItemBG.beginFill(0xFFCC66 , 1);
                    ItemBG.drawCircle(vatpham.width/2 + 17.5, vatpham.height/2 + 7, 35);
                    ItemBG.endFill();
                }
                else
                {
                    ItemBG.clear();
                    ItemBG.lineStyle(0); 
                    ItemBG.beginFill(0xFFFF33, 1);
                    ItemBG.drawCircle(vatpham.width/2 + 17.5, vatpham.height/2 + 7, 35);
                    ItemBG.endFill();
                }
                ItemBG.start++;
                ItemBG.start = ItemBG.start > 20 ? 0 : ItemBG.start;

                
                    

                
            }

            let playerisClick = player_phukien.getChildByName('playerisClick');
            if (playerisClick == undefined) {
                playerisClick = new PIXI.Sprite(this.coverImg('PreviewClick'));
                playerisClick.name = 'playerisClick';
                player_phukien.addChild(playerisClick);
                playerisClick.load = 1;
            } else {
                playerisClick.width = 20;
                playerisClick.height = 20;
               
                playerisClick.x =  Math.abs(vatpham.width)  - Math.abs(vatpham.width)/2 + Math.abs(playerisClick.width) / 2;
                playerisClick.y =0 - playerisClick.height - 10;
                if (playerisClick.load == 2) {
                    playerisClick.y -= 1;
                }
                if (playerisClick.load == 4) {
                    playerisClick.y += 1;
                    playerisClick.load = 0;
                }
                playerisClick.load++;
            }

            if (self.setting.mouse != -1 && self.setting.mouse == mmo.id) {
                playerisClick.visible = true;
            } else {
                playerisClick.visible = false;
            }

            
        }
    }

    snowlyXuLyMob = (mmo) => {
        let debut = this.debut;
        let self = this;
        if (self.nguoichoi.getChildByName(mmo.id) == undefined) {
            let Player = new PIXI.Container();
            Player.id = mmo.id; //id nhân vật 
            Player.name = mmo.id; // name nhân vật
            Player.Ten = mmo.name; // tên nhân vật
            Player.type = mmo.type; // type nhân vật
            let myPlayer = mmo;
            // khởi tạo body ban đầu 
            let load_playerQuan = self.getImg(myPlayer.skin.quan);
            let load_playerAo = self.getImg(myPlayer.skin.ao);
            let load_playerDau = self.getImg(myPlayer.skin.dau);

            // khởi tạo nút click vào nhân vật


           


            let playerAo = new PIXI.Sprite(
                this.coverImg(
                    this.getFarm(myPlayer.skin.ao, 0, 'move')
                )
            );
            playerAo.sprite = 0;

            playerAo.scale.set(load_playerAo.farm[0].move.width, load_playerAo.farm[0].move.height);



            playerAo.x = 0;
            playerAo.y = 0;
            playerAo.load = 0;
            playerAo.name = "playerAo";


            Player.move = myPlayer.info.move;

            Player.x = myPlayer.pos.x;
            Player.y = myPlayer.pos.y;

            Player.addChild(playerAo);
            Player.interactive = true;
            Player.cursor = 'pointer';

            // click event to function 
            Player.on('pointerdown', (infoclick) => {
                self.clickPlayer({
                    id: Player.id
                });
            });




            Player.scale.x = 1;
            Player.pivot.x = Player.width;




            self.nguoichoi.addChild(Player);

            let player_phukien = new PIXI.Container();
            player_phukien.name = Player.id;
            player_phukien.id = Player.id;
            player_phukien.type = Player.type;


            self.nguoichoi_phukien.addChild(player_phukien);

        } else {

            let Player = self.nguoichoi.getChildByName(mmo.id);
            let player_phukien = self.nguoichoi_phukien.getChildByName(mmo.id);


            if (player_phukien) {
                player_phukien.x = Player.x;
                player_phukien.y = Player.y;
                player_phukien.width = Player.width;
                player_phukien.height = Player.height;
                player_phukien.scale.x = Player.scale.x;
                player_phukien.scale.y = Player.scale.y;
                player_phukien.pivot.x = Player.pivot.x;
                player_phukien.pivot.y = Player.pivot.y;
                player_phukien.resolution = 2;
                player_phukien.rotation = Player.rotation;
            }





            let xNew = mmo.pos.x;
            let yNew = mmo.pos.y;
            let xOld = Player.x;
            let yOld = Player.y;
            let myPlayer = mmo;

            Player.move = myPlayer.info.move;

            // xử lý cờ icon bang



            // encode

            if (Player.move == 'right') {
                Player.huong = 'right';
                if (Player.scale.x != 1) {
                    Player.scale.x = 1;
                    Player.pivot.x = Player.width;
                }



                Player.checkLeft = 1;
            } else if (Player.move == 'left') {
                Player.huong = 'left';
                if (Player.scale.x != -1) {
                    Player.scale.x = -1;
                    Player.pivot.x = 0;
                }


            }



            let blockDi = 0;

            debut.forEach(eff => {
                if (mmo.eff[eff]) {
                    if (mmo.eff[eff].active == true) {
                        blockDi = 1;
                    }

                }
            });

            if(mmo.namdat == true)
            {
                this.xulyMobOnMap(Player, mmo);
            }

            if (mmo.info && mmo.info.act == 'bidanh') {
                
            }
            else
            if (mmo.info && mmo.info.act == 'choang') {
                
            }
            
            else
            if (mmo.info && mmo.info.act == 'attack') {

            } else
            if (blockDi == 1) {

            } else
            if ((xNew != xOld || yNew != yOld)) {



                mmo.info.act = 'move';
                self.addAction({
                    id: mmo.id,
                    action: mmo.info.act
                })
                let xOthor = Math.abs(xNew - xOld);
                let yOthor = Math.abs(yNew - yOld);
                let speed = mmo.info.speed;
                let speed2 = mmo.info.speed;

                if (yOthor < 300 && yOthor > 0) {
                    // xuống
                    if (yNew > yOld) {
                        speed2 = yOld + speed2 >= yNew ? yNew - yOld : speed2;
                        Player.y += speed2;
                    } else {
                        // lên
                        speed2 = yOld - speed2 <= yNew ? yOld - yNew : speed2;
                        Player.y -= speed2;
                    }
                }
                if (xOthor < 300 && xOthor > 0) // nhỏ hơn 50 thì có di chuyển, không thì loading
                {
                    if (xNew != xOld || xNew != xOld) { // di chuyển sang phải or sang trái



                        if (xNew > xOld) {

                            speed = xOld + speed > xNew ? xNew - xOld : speed;
                            Player.x += speed;
                        } else {

                            speed = xOld - speed <= xNew ? xOld - xNew : speed;

                            Player.x -= speed;


                        }


                    }

                } else {
                    Player.visible = false;
                    Player.x = xNew;
                    Player.y = yNew;
                    self.addSkill('dichchuyen', 1, Player.x, Player.y, Player.id, 'dichchuyen', 'dichchuyen_' + Player.id)

                }

            } else
            if (xNew == xOld && yNew == yOld && mmo.info.act == 'move') {
                mmo.info.act = 'dungyen';
            }


            // update action 
            if (Player.act != mmo.info.act  ) {
                Player.act = mmo.info.act;
                self.addAction({
                    id: mmo.id,
                    action: mmo.info.act
                })
            }


            if (mmo.delete) {
                if (mmo.delete == true) {
                    self.nguoichoi.removeChild(Player);
                    self.nguoichoi_phukien.removeChild(player_phukien);
                    self.Charset.splice(self.Charset.findIndex(e => e.id == mmo.id), 1);
                }
            }


        }
    }


    Since04XuLyPlayer = (mmo) => {
        let debut = this.debut;
        let self = this;
        if (self.nguoichoi.getChildByName(mmo.id) == undefined) {
            let Player = new PIXI.Container();
            Player.id = mmo.id; //id nhân vật 
            Player.name = mmo.id; // name nhân vật
            Player.Ten = mmo.name; // tên nhân vật
            Player.type = mmo.type; // type nhân vật
            let myPlayer = mmo;
            // khởi tạo body ban đầu 
            let load_playerQuan = self.getImg(myPlayer.skin.quan);
            let load_playerAo = self.getImg(myPlayer.skin.ao);
            let load_playerDau = self.getImg(myPlayer.skin.dau);

            // khởi tạo nút click vào nhân vật

            let head = new PIXI.Sprite(this.coverImg("9208"));

            Player.act = mmo.info.act;
            self.addAction({
                id: mmo.id,
                action: mmo.info.act
            })

            // sprite bang hội


            let player_phukien = new PIXI.Container();
            player_phukien.name = Player.id;
            player_phukien.id = Player.id;
            player_phukien.type = Player.type;


            self.nguoichoi_phukien.addChild(player_phukien);

            //end


            head.scale.set(0.47, 0.49);
            head.x += 5;
            head.y += 13;

            let foot = new PIXI.Sprite(this.coverImg("596"));
            foot.scale.set(0.40, 0.32);
            foot.x += 4;
            foot.y += 39 + 6;

            let body = new PIXI.Sprite(this.coverImg("581"));

            body.scale.set(0.4, 0.38);
            body.x += 3;
            body.y += 39;

            body.visible = false;
            foot.visible = false;
            head.visible = false;

            Player.addChild(head, foot, body);

            // khởi tạo quần áo của họ

            let playerQuan = new PIXI.Sprite(
                this.coverImg(
                    this.getFarm(myPlayer.skin.quan, 0, 'dungyen')
                )
            );

            playerQuan.scale.set(load_playerQuan.farm[0].dungyen.width, load_playerQuan.farm[0].dungyen.height);
            playerQuan.sprite = 0;

            let playerAo = new PIXI.Sprite(
                this.coverImg(this.getFarm(myPlayer.skin.ao, 0, 'dungyen'))
            );
            playerAo.sprite = 0;

            playerAo.scale.set(load_playerAo.farm[0].dungyen.width, load_playerAo.farm[0].dungyen.height);

            let playerDau = new PIXI.Sprite(
                this.coverImg(
                    this.getFarm(myPlayer.skin.dau, 0, 'dungyen')
                )
            );

            playerDau.scale.set(load_playerDau.farm[0].dungyen.width, load_playerDau.farm[0].dungyen.height);
            playerDau.sprite = 0;

            playerDau.x = head.x + load_playerDau.farm[0].dungyen.x;
            playerDau.y = head.y + load_playerDau.farm[0].dungyen.y;

            playerQuan.x = foot.x + load_playerQuan.farm[0].dungyen.x;
            playerQuan.y = foot.y + load_playerQuan.farm[0].dungyen.y;

            playerAo.x = body.x + load_playerAo.farm[0].dungyen.x;
            playerAo.y = body.y + load_playerAo.farm[0].dungyen.y;
            playerAo.load = 0;
            playerAo.name = "playerAo";
            playerQuan.name = "playerQuan";
            playerDau.name = "playerDau"
            head.name = "head";
            foot.name = "foot";
            body.name = "body";

            Player.move = myPlayer.info.move;

            Player.x = myPlayer.pos.x;
            Player.y = myPlayer.pos.y;

            //Player.removeChild(foot, body);
            Player.addChild(playerDau, playerQuan, playerAo);
            Player.interactive = true;
            Player.cursor = 'pointer';

            // click event to function 
            Player.on('pointerdown', (infoclick) => {
                self.clickPlayer({
                    id: Player.id
                });
            });




            Player.scale.x = 1;
            Player.pivot.x = Player.width;




            self.nguoichoi.addChild(Player);

            Player.scale.x *= 1.1;
            Player.scale.y *= 1.1;

        } else {
            let Player = self.nguoichoi.getChildByName(mmo.id);
            let Player_phukien = self.nguoichoi_phukien.getChildByName(mmo.id);

            if (Player_phukien != undefined) {
                Player_phukien.x = Player.x;
                Player_phukien.y = Player.y;
                Player_phukien.width = Player.width;
                Player_phukien.height = Player.height;
                Player_phukien.scale.x = Player.scale.x;
                Player_phukien.scale.y = Player.scale.y;
                Player_phukien.pivot.x = Player.pivot.x;
                Player_phukien.pivot.y = Player.pivot.y;
                Player_phukien.resolution = 2;
                Player_phukien.rotation = Player.rotation;
            }

           


            let xNew = mmo.pos.x;
            let yNew = mmo.pos.y;
            let xOld = Player.x;
            let yOld = Player.y;
            let myPlayer = mmo;

            Player.move = myPlayer.info.move;




            // encode

            if (Player.move == 'right') {

                Player.huong = 'right';
                if (Player.scale.x != 1) {
                    Player.scale.x = 1;
                    Player.pivot.x = Player.width;
                }


                Player.checkLeft = 1;
            } else if (Player.move == 'left') {
                Player.huong = 'left';
                if (Player.scale.x != -1) {
                    Player.scale.x = -1;
                    Player.pivot.x = 0;
                }

            }

            
            // trạng thái rơi tự do nếu đang bay
           


            // kết thuc trạng thái rơi tự do nếu đang bay




            let blockDi = 0;

            debut.forEach(eff => {
                if (mmo.eff[eff]) {
                    if (mmo.eff[eff].active == true) {
                        blockDi = 1;
                    }

                }
            });

            if(mmo.info.chiso.hp <=0)
            { 
                blockDi = 1;
            }

            if(Player.type =='npc')
            self.xulyNPCOnMap(Player, mmo);

            if (blockDi == 1) {

            } else
            if(Player.type =='npc' && (xNew != xOld || yNew != yOld))
            {
                Player.x = xNew;
                Player.y = yNew;
            }
            else 
            if ((xNew != xOld || yNew != yOld)) {
                
                // x
                let xOthor = Math.abs(xNew - xOld);
                let yOthor = Math.abs(yNew - yOld);
                let speed = mmo.info.speed + (Player.type == 'detu' ? 0 : 0);
                let speed2 = mmo.info.speed + (Player.type == 'detu' ? 0 : 0);

                if (yOthor < 300 && yOthor > 0) {
                    if(yNew == yOld)
                    {
                    
                    }
                    else
                    if(yNew < yOld)
                    {
                        // bay lên
                        mmo.info.act = 'baylen';
                    }
                    else 
                    {
                        if (mmo.info.act != 'fly')
                        {
                            mmo.info.act = 'dotay';
                        }
                    }



                }



                

                if(yOthor < 300 && yOthor > 0){
                    if (yNew > yOld) {
                        speed2 = yOld + speed2 >= yNew ? yNew - yOld : speed2;
                        Player.y += speed2;
                    } else {
                        // lên
                        speed2 = yOld - speed2 <= yNew ? yOld - yNew : speed2;
                        Player.y -= speed2;
                    }
                }
                else
                if (xOthor < 300 && xOthor > 0) // nhỏ hơn 50 thì có di chuyển, không thì loading
                {
                    if (xNew != xOld || xNew != xOld) { // di chuyển sang phải or sang trái

                        if(mmo.info.act == 'dotay' || mmo.info.act == 'baylen' || mmo.info.act == 'fly')
                        {
                            mmo.info.act = 'fly';
                        }
                        if (mmo.info.act != 'fly')
                            mmo.info.act = 'move';

                            

                        if(Player.type == 'detu') 
                        {
                             
                            let sp = mmo.of == self.my.id ? self.my : self.Charset.find(e => e.id == mmo.of);
                            if(sp) {
                                if(sp.info.act == 'fly') 
                                {
                                    mmo.info.act = 'fly';
                                }
                            }
                        }

                        if (xNew > xOld) {
                            Player.move = 'right';
                            speed = xOld + speed > xNew ? xNew - xOld : speed;
                            Player.x += speed;
                            Player_phukien.x += speed;
                        } else {

                            speed = xOld - speed <= xNew ? xOld - xNew : speed;

                            Player.x -= speed;
                            Player_phukien.x -= speed;
                            Player.move = 'left';


                        }


                    }

                }

                if(xOthor >300 || yOthor >300)
                {
                    Player.visible = false;
                    Player.x = xNew;
                    Player.y = yNew;
                    self.addSkill('dichchuyen', 1, Player.x, Player.y, Player.id, 'dichchuyen', 'dichchuyen_' + Player.id)
                }

            } 

            if(xNew == xOld && yNew == yOld )
            {
                if(mmo.info.act == 'fly' && !self.checkOnDat22(mmo.id)) 
                {
                    mmo.info.act = 'baylen';
                }

                if(mmo.info.act == 'fly' && self.checkOnDat22(mmo.id)) 
                {
                    mmo.info.act = 'dungyen';
                }

                if(mmo.info.act == 'dotay' && self.checkOnDat22(mmo.id)) 
                {
                    console.log('ngta đứng')
                    mmo.info.act = 'dungyen';
                }

            }

            if (xNew == xOld && yNew == yOld && mmo.info.act == 'move') {
                mmo.info.act = 'dungyen';
            }


            // nếu là đệ tự, update các trạng thái giống như sưu phụ
            if (Player.type == 'detu') {
                let sp = mmo.of == self.my.id ? self.my : self.Charset.find(e => e.id == mmo.of);
                if(sp) 
                {
                    // nếu sp bay lên, thì cũng bay theo.
                    if(sp.info.act == 'fly')
                    {
                        mmo.info.act = 'fly';
                    }
                    if(sp.info.act == 'baylen') 
                    {
                        mmo.info.act = 'baylen';
                    }
                }
            }


            // update action 
            if (Player.act != mmo.info.act) {
                Player.act = mmo.info.act;
                self.addAction({
                    id: mmo.id,
                    action: mmo.info.act
                })
            }

            if (mmo.delete) {
                if (mmo.delete == true) {
                    self.nguoichoi.removeChild(Player);
                    self.nguoichoi_phukien.removeChild(Player_phukien);
                    self.Charset.splice(self.Charset.findIndex(e => e.id == mmo.id), 1);
                }
            }




        }
    }

    Since04XuLyZone = (mmo) => {
        if(this.my.id <=0) return false;
        let objectZone = this.nguoichoi.getChildByName(mmo.id);
        if (objectZone == undefined) {
            let Graphics = new PIXI.Graphics();
            Graphics.name = mmo.id;
            Graphics.id = mmo.id;
            Graphics.type = mmo.type;
            Graphics.beginFill(0x000000, 0.5);
            Graphics.drawRect(0, 0, 200, 50);
            Graphics.endFill();
            Graphics.x = mmo.pos.x ;
            Graphics.y = mmo.pos.y ;
           
            Graphics.interactive = true;
            Graphics.cursor = 'pointer';
            Graphics.on('pointerdown', (infoclick) => {
                this.clickPlayer({
                    id: Graphics.id
                });
            }
            );
            
            let Text = new PIXI.Text(mmo.name, {
                fontFamily: 'Arial',
                fontSize: 14,
                fill: 0xffffff,
                align: 'center',
                fontWeight: 'bold'
            });
            Text.x = Graphics.width / 2 - Text.width / 2;
            Text.y = Graphics.height / 2 - Text.height / 2;
            Graphics.addChild(Text);
            
            this.nguoichoi.addChild(Graphics);  

            

        }
        else 
        {
            // dx  
            if(this.gameMap.setting.maxX <=0) return false;
            let dx = this.calculateDistance(this.NhanVat,objectZone );
            if(dx <200) objectZone.visible = true;
            else objectZone.visible = false;
            let can = 0;
            if(objectZone.x + objectZone.width > this.gameMap.setting.maxX)
            {
                objectZone.x = this.gameMap.setting.maxX - objectZone.width;
                can = 1;
            }

            if(mmo.auto)
            {
                if(this.nguoichoi.getChildByName(mmo.id+'_auto') == undefined)
                {
                    let Graphics2 = new PIXI.Graphics();
                    Graphics2.name = mmo.id+'_auto';
                    Graphics2.id = Graphics2.name;
                    Graphics2.type = mmo.type;
                    Graphics2.beginFill(0x000000, 0.5);
                    Graphics2.drawRect(0, 0, 200, 50);
                    Graphics2.endFill();
                    Graphics2.x = mmo.pos.x;
                    Graphics2.y = mmo.pos.y;
                   
                    Graphics2.rotation = Math.PI/2;
                    this.nguoichoi.addChild(Graphics2);  
                }
                else 
                {
                    let Graphics2 = this.nguoichoi.getChildByName(mmo.id+'_auto');
                    Graphics2.y = objectZone.y;
                    if(can == 1) Graphics2.x += Graphics2.width;
                    let dx2 = this.hitTestRectangle(this.NhanVat,Graphics2 );
                    
                    if(dx2) 
                    {
                        if(this.NhanVat.huong == 'left')
                        {
                            this.NhanVat.x += Math.abs(this.NhanVat.width);
                            this.NhanVatGoc.x += Math.abs(this.NhanVatGoc.width);
                        }
                        if (this.NhanVat.huong == 'right') {
                            this.NhanVat.x -= Math.abs(this.NhanVat.width);
                            this.NhanVatGoc.x -= Math.abs(this.NhanVatGoc.width);
                        }
                        this.joinChuyenMap(mmo.id);
                    }

                }

            }
        }


    }

    snowlyProcessLoadPlayer = () => {
        this.updateUserTimeRender++;
        if (this.updateUserTimeRender > 100) this.updateUserTimeRender = 0;
        if (this.updateUserTimeRender % this.fps()) return requestAnimationFrame(this.snowlyProcessLoadPlayer);
        let self = this;

        if(this.loadGame.visible == true) return requestAnimationFrame(this.snowlyProcessLoadPlayer);
        
        for(let i = 0; i < this.Charset.length; i++)
        {
            let mmo = this.Charset[i];

            if(mmo.type == 'zone')      this.Since04XuLyZone(mmo);
            else if(mmo.type == 'item') this.Since04XuLyItem(mmo);
            else if (mmo.type == 'mob') this.snowlyXuLyMob(mmo);
            else                        this.Since04XuLyPlayer(mmo);

            

            if (mmo.info.chiso.hp <= 0 && mmo.type == 'mob') {
                let Player = self.nguoichoi.getChildByName(mmo.id);
                let Player_phukien = self.nguoichoi_phukien.getChildByName(mmo.id);
                if(Player)  self.nguoichoi.removeChild(Player);
                if(Player_phukien)  self.nguoichoi_phukien.removeChild(Player_phukien);
                self.Charset.splice(self.Charset.findIndex(e => e.id == mmo.id), 1);
            }
        }

        requestAnimationFrame(this.snowlyProcessLoadPlayer);

    };

    xulyNPCOnMap(Player, mmo) {
        Player.npcChat = Player.npcChat || 0;
        if(Player.npcChat < Date.now())
        {
            if(mmo.source.chat.length >=1) 
            {
                let listnoidung = mmo.source.chat;
                let lay = listnoidung[this.rand(0,listnoidung.length-1)];
                this.ioInsertChat({
                    _1 : mmo.id,
                    _2 : lay
                })
                Player.npcChat = Date.now() + (mmo.source.delaychat*1);
            }
        }
        else {
        }

        Player.checked = Player.checked || 0;
        if(Player.checked >=1) return false;
        let datd = this.bando.children.filter(item => item.type === "dat");
        if(datd.length <=0) return false;

        let data = mmo;
        let player = Player;
        if(!player) return false;

        

        let gannhat = null;
        let k = null;
       
        let self = this;
        Promise.all(

            datd.map((dat, index) => {

                return new Promise((resolve, reject) => {
                    if(player.height <=0) resolve(false);
                    if(dat.height <=0) resolve(false);
                    let dx = this.calculateDistance(player, dat);
                    if(gannhat == null || gannhat > dx)
                    {
                        gannhat = dx;
                        k = index;
                    }
                    resolve(true);
            })
        })



        ).then(e => {

            if(k != null)
            {
                mmo.pos.y = Math.round(datd[k].y - player.height + 10);
                mmo.pos.y = Math.round(mmo.pos.y);
                Player.y = mmo.pos.y;
                Player.checked  +=1;
    
            }

            if(!self.checkOnDat22(mmo.id,'up'))
            {
                Player.checked = 0;
                console.log('Lỗi')
            }
            
            
        })

        

        // sử lý chát
        
        
    }


    xulyMobOnMap(Player, mmo) {
    
        Player.checked = Player.checked || 0;
        if(Player.checked >=1) return false;
        let datd = this.bando.children.filter(item => item.type === "dat");
        if(datd.length <=0) return false;

        let data = mmo;
        let player = Player;
        if(!player) return false;

        

        let gannhat = null;
        let k = null;
       
        let self = this;
        Promise.all(

            datd.map((dat, index) => {

                return new Promise((resolve, reject) => {
                    if(player.height <=0) resolve(false);
                    if(dat.height <=0) resolve(false);
                    let dx = this.calculateDistance(player, dat);
                    if(gannhat == null || gannhat > dx)
                    {
                        gannhat = dx;
                        k = index;
                    }
                    resolve(true);
            })
        })



        ).then(e => {

            if(k != null)
            {
                mmo.pos.y = Math.round(datd[k].y - player.height + 24);
                mmo.pos.y = Math.round(mmo.pos.y);
                Player.y = mmo.pos.y;
                Player.checked  +=1;
    
            }

            if(!self.checkOnDat22(mmo.id,'up'))
            {
                Player.checked = 0;
                console.log('Lỗi')
            }
            
            
        })

        

        // sử lý chát
        
        
    }
}

export default Since04CreatePlayerOnMap;