import Since04BoxShop from "./boxShop.js";
import Keo from "./test.js";
class Since04BoxClass extends Since04BoxShop {

    constructor() {
        super();
        this.profileMenu = [
            {name : "Nhiệm vụ", onclick : 'nhiemvu'},
            {name : "Hành trang", onclick : 'hanhtrang'},
            {name : "Kỹ năng", onclick : 'kynang'},
            {name : "Bang hội", onclick : 'banghoi'},
            {name : "Chức năng", onclick : 'chucnang'},
        ];
    }
 
    snowlyGraphics = (width, height, color, color2, line,round = 0,show = 1) => {
        let background = new PIXI.Graphics();
        background.beginFill(color, show);
        background.lineStyle(line, color2, 1);
        background.drawRoundedRect(0, 0, width, height,round);
        background.endFill();
        return background;
    }
    snowlyImg = (src,base = 'char') => {
        return new PIXI.Sprite(this.coverImg(src));
    }
    snowlyEvent = (element, callback) => {
        element.interactive = true;
        element.cursor = 'pointer';
        element.on('pointerdown', () => {
            callback();
        });
    }
    snowlyText = (txt,size,falmily = 'fontchinh',color,edit = false,mw = 0,mh = 0) => {
        let text = new PIXI.Text(txt, {
            fontSize: size,
            fill: color,
            fontFamily: falmily,
            align: "center",
            wordWrap: true,
            wordWrapWidth: mw
            });
        if(edit)
        {
            if(mw == 0) text.x = text.width/2;
            if(mh == 0) text.y = text.height/2;
            if(mw != 0) text.x = mw/2 - text.width/2;
            if(mh != 0) text.y = mh/2 - text.height/2;
        }

       
        return text;
    }
    
    
    boxBaseBackground = (eff = true) => {
        let height = this.gameHeight * 1;
        let width = this.gameWidth * 0.4;
        let wMin = 350;
        if(width < wMin) width = wMin;
        if(width > this.gameWidth) width = this.gameWidth*1;
        let background = this.snowlyGraphics(width, height, 0xd9c8b3, 0x664400, 3);
        background.name = "Lớp BOX";
        this.box.visible = true;

        if(eff) {
            
            if(this.boxFirst == true) 
            {
                this.boxFirst = false;
                
                background.x -= background.width;

                // create a new eff background.x +=1 with settimeout
                let eff = setInterval(() => {
                    background.x += 10;
                    if(background.x >= 0) {
                        background.x = 0;
                        clearInterval(eff);
                    }
                }
                , 1);



            }
        }

        return background;
    }

    boxBaseClose  = () => {
        this.boxFirst = true;
        this.closeBox();
        if(this.giaodich.doiphuong.id >=1 && this.giaodich.xong == 0) 
        {
            this.cancelGiaoDich();
        }
        this.danhSachItem = [];
    }

    boxBaseHead = (background) => {
        let height = background.height*0.15;
        let hMin = 85;
        if(height < hMin) height = hMin;
        let head = this.snowlyGraphics(background.width*0.98, height, 0x977b55, 0x8d845b, 0);
        head.name = "Lớp BOX head";
        let close = this.snowlyImg('myTexture2dbtX-resources.assets-1494');
        close.width = head.width * 0.1;
        close.height = head.height * 0.4;
        close.x = head.width - close.width;
        head.addChild(close);
        this.snowlyEvent(close, () => {
            this.boxBaseClose();
        });
        return head;
    }
    

    boxCreateMenu = (menu,name,list) => {
        let Container = new PIXI.Container();
        list.forEach((element,i) => {
            let test = menu.width * 0.98;
            let space = 2;
            test -= space * (list.length - 1);
            let min = test * 0.2;
            let minM = test/ list.length;
            if(min > minM) min = minM;
            let button = this.snowlyGraphics(min, menu.height * 0.85, (element.onclick == name ? 0xb8e9b1 :   0xffe6c8), 0x6c4a00, 2,10)
            button.x = i * button.width + i * space;
            let text = this.snowlyText(element.name, 16,'fontchinh', 0x555555,true,button.width,button.height);
            button.addChild(text);
            this.snowlyEvent(button, () => {
                this.OpenBox(element.onclick);
            });
            Container.addChild(button);
        });
        Container.y = menu.height/2 - Container.height/2;
        return Container;
    }

    boxBaseMenuTXT = (head,text) => {
        let menu = this.snowlyGraphics(head.width, head.height*0.5, 0xd9c8b3, 0xcd5e0c, 1);

        let txt = this.snowlyText(text, 16,'fontchinh', 0x532905,true,menu.width,menu.height);

        menu.addChild(txt);

        menu.x = head.width/2 - menu.width/2;
        menu.y = head.height;

        return menu;
    }

    boxBaseMenu = (head,name,list) => {
        let menu = this.snowlyGraphics(head.width, head.height*0.5, 0xd9c8b3, 0x8d845b, 0);
        menu.addChild(this.boxCreateMenu(menu,name,list));

        menu.x = head.width/2 - menu.width/2;
        menu.y = head.height;

        return menu;
    }

    boxBaseFoot = (head,backgr) => {
        let foot = this.snowlyGraphics(backgr.width*0.985, head.height*0.2, 0xb39e83, 0x664400, 2)
        foot.name = "1235"
        foot.y = backgr.height*0.995 - foot.height;
        let pt50 = this.snowlyGraphics(foot.width*0.5, foot.height * 0.80, 0xb39e83, 0x8d845b, 0);
        let ContainerVang = new PIXI.Container();
        let vang = this.snowlyImg('930');
        vang.width = foot.height * 0.8;
        vang.height = foot.height * 0.8;
        let txtVang = this.snowlyText(this.number_format(this.my.tien.vang), 16,'Arial', 0xfefe00,false,pt50.width,pt50.height);
        txtVang.x = vang.width + vang.width*0.2;
        ContainerVang.addChild(vang,txtVang);
        ContainerVang.x = pt50.width/2 - ContainerVang.width/2;
        pt50.addChild(ContainerVang);
        pt50.y = foot.height/2 - pt50.height/2;
        let pt50_ = this.snowlyGraphics(foot.width*0.5, foot.height * 0.80, 0xb39e83, 0x8d845b, 0);
        let ContainerXu = new PIXI.Container();
        let xu = this.snowlyImg('932');
        xu.width = foot.height * 0.8;
        xu.height = foot.height * 0.8;
        let txtXu = this.snowlyText(this.number_format(this.my.tien.zeni), 16,'Arial', 0xfefe00,false,pt50_.width,pt50_.height);
        txtXu.x = xu.width + xu.width*0.2;
        ContainerXu.addChild(xu,txtXu);
        ContainerXu.x = pt50_.width/2 - ContainerXu.width/2;
        pt50_.addChild(ContainerXu);
        pt50_.y = foot.height/2 - pt50_.height/2;
        pt50_.x = foot.width - pt50_.width;
        foot.addChild(pt50,pt50_);


        return foot;
    }

    boxBaseBody = (background,head,menu) => {
        let tinhhead = 0;
        tinhhead = background.height*0.99 - head.height - menu.height;
        tinhhead-= head.height*0.2;
        let body = this.snowlyGraphics(head.width,tinhhead,0xd9c8b3,0xcd5e0c,1);
        body.y = menu.y + menu.height;
        return body; 
    }

    boxBaseMask = (body,background) => {
        let hienthinoidung = new PIXI.Container();
        let mask = new PIXI.Graphics();
        mask.beginFill(0x000000, 0.5);
        mask.drawRect(0, 0, body.width*0.99, background.height);
        mask.endFill();
        hienthinoidung.name="tabname";
        hienthinoidung.mask = mask;
        return hienthinoidung;
    }

    

    

    OpenBox = (name) => {
        this.clickButton(name);

    };

    boxNewNhiemVu   = () => {
        this.closeBox();
        let background = this.boxBaseBackground();
        this.box.addChild(background);
        let my = this.my;

        //! HEAD
        let head = this.boxBaseHead(background);

        let avatar = this.snowlyImg(this.my.info.coban.avatar);
        avatar.width = head.width * 0.25;
        avatar.height = (head.height * 0.99) > avatar.width ? avatar.width : head.height * 0.99;
        avatar.x = head.width * 0.01;
        avatar.y = head.height*0.99 - avatar.height;
        head.addChild(avatar);
        let info = new PIXI.Container();

        let myname = this.snowlyText(my.name, 20,'fontchinh', 0xFFFFFF,false,head.width,head.height);
        info.addChild(myname);


        let suckhoe = this.snowlyText('Sức khỏe: ' + (my.info.chiso.suckhoe / my.info.chiso.suckhoe_max * 100) + '%', 16,'fontchinh', 0xFFFF00,false,head.width,head.height);
        info.addChild(suckhoe);
        suckhoe.y = myname.height;
        let danh = this.snowlyText(this.danhHieu(my.info.coban.sucmanh), 16,'fontchinh', 0xFFFF00,false,head.width,head.height);
        danh.y = suckhoe.height + myname.height;
        info.addChild(danh);
        
        let sucmanh = this.snowlyText('Sức mạnh: ' + this.number_format(my.info.coban.sucmanh), 16,'fontchinh', 0xFFFF00,false,head.width,head.height);
        sucmanh.y =  danh.y + danh.height;
        info.addChild(sucmanh);


        head.addChild(info);
        info.x = avatar.x + avatar.width  + avatar.width * 0.05;
        info.y =  head.height/2 - info.height/2;

        //! menu
        let menu = this.boxBaseMenu(head,'nhiemvu',this.profileMenu);
        


        //! body
        let body = this.boxBaseBody(background,head,menu);
        background.addChild(body);

        let hienthinoidung = this.boxBaseMask(body,background);


        //
        let noidung = "\n";
        noidung += "Thông tin nhiệm vụ:\n";
        noidung += "1. Nhiệm vụ 1\n";
        noidung += "2. Nhiệm vụ 2\n";
        noidung += "3. Nhiệm vụ 3\n";
        noidung += "4. Nhiệm vụ 4\n";
        noidung += "5. Nhiệm vụ 5\n";



        noidung += "\nChà, tỉnh rồi à ? đây là chú ý nhéư bạn\n";
        noidung += "\nHãy đến gặp ông Gohan để nhận nhiệm vụ\n";

        noidung += "\nPhần thưởng:\n";
        noidung += "1. Thưởng 1\n";
        noidung += "2. Thưởng 2\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";

        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";
        noidung += "3. Thưởng 3\n";

        let hienthinoidung2 = new PIXI.Text(noidung, {
            fontSize: 14,
            fill: 0x532905,
            richText: {},
            lineHeight: 20,
            fontFamily: 'fontchinh',
            wordWrap: true,
            wordWrapWidth: body.width - 1,
        });

       hienthinoidung.addChild(hienthinoidung2);

        // end
     
        let sc = this.snowlySroll(body,hienthinoidung);


        //! foot
        let foot = this.boxBaseFoot(head,background);
        background.addChild(head,menu,foot);

        
    }

    boxNewChucNang  = () => {
        this.closeBox();
        let background = this.boxBaseBackground();
        this.box.addChild(background);

        //! HEAD
        let head = this.boxBaseHead(background);

        let avatar = this.snowlyImg(this.my.info.coban.avatar);
        avatar.width = head.width * 0.25;
        avatar.height = (head.height * 0.99) > avatar.width ? avatar.width : head.height * 0.99;
        avatar.x = head.width * 0.01;
        avatar.y = head.height*0.99 - avatar.height;
        head.addChild(avatar);
        let info = new PIXI.Container();

        let gameInfo = this.snowlyText(this.gameInfo.gameName+ ' ' + this.gameInfo.version, 18,'fontchinh', 0xFFFFFF,false,head.width,head.height);
        info.addChild(gameInfo);
        
        let nhanVat = this.snowlyText("Nhân vật: "+this.my.name, 16,'fontchinh', 0xFFFF00,false,head.width,head.height);
        nhanVat.y = gameInfo.height;
        info.addChild(nhanVat);

        let server = this.snowlyText("Tài khoản máy chủ: "+this.my.server+ " sao", 16,'fontchinh', 0xFFFF00,false,head.width,head.height);
        server.y = gameInfo.height + nhanVat.height;
        info.addChild(server);

        let username = this.snowlyText(""+this.my.username, 16,'fontchinh', 0xFFFF00,false,head.width,head.height);
        username.y = gameInfo.height + nhanVat.height + server.height;
        info.addChild(username);

        head.addChild(info);
        info.x = avatar.x + avatar.width  + avatar.width * 0.05;
        info.y =  head.height/2 - info.height/2;

        //! menu
        let menu = this.boxBaseMenu(head,'chucnang',this.profileMenu);
        


        //! body
        let body = this.boxBaseBody(background,head,menu);
        background.addChild(body);

        let hienthinoidung = this.boxBaseMask(body,background);


        let slotwidth = body.width;
        let slotheight = head.width * 0.15;
        slotheight = slotheight > 50 ? 50 : slotheight;
        let my = this.my;

        let arrayMenu = [{
            name: 'Đệ tử',
            action: 'detu',
        }, {
            name: 'Đổi khu',
            action: 'doiKhu'
        }, 
        {
            name : 'Thoát',
            action : 'thoat',
        }
    
    ];

        for (let i = 0; i < arrayMenu.length; i++) {
            let slot = new PIXI.Graphics();
            slot.lineStyle(1, 0xd9c8b3, 1);
            slot.name = "since04KEY";

            slot.beginFill(0xe6ded1, 1);
            slot.drawRoundedRect(0, 0, slotwidth, slotheight, 0);
            slot.endFill();
            slot.y = i * slotheight * 1.09;
            hienthinoidung.addChild(slot);

            let slot_text = new PIXI.Text(arrayMenu[i].name, {
                fontSize: 14,
                fill: 0x684323,
                fontFamily: 'fontchinh',
                wordWrap: true,
                wordWrapWidth: slotwidth,
                fontWeight: '900',

                strokeThickness: 0,
            });
            slot_text.resolution = 2;
            slot_text.style.align = 'center';

            slot_text.position.set(
                (slotwidth - slot_text.width * slot_text.scale.x) / 2, (slotheight - slot_text.height * slot_text.scale.y) / 2);
            slot.addChild(slot_text);

            slot.interactive = true;
            slot.buttonMode = true;


            let pointerStartTime = 0;
            let pointerEndTime = 0;

            slot.on("pointerdown", function (event) {
                pointerStartTime = Date.now();
            });
            let self = this;
            slot.on("pointerup", function (event) {
                pointerEndTime = Date.now();
                if (pointerEndTime - pointerStartTime < 200) {
                    (arrayMenu[i].action == 'detu') && self.detuBoxInfo();
                    (arrayMenu[i].action == 'doiKhu') && self.boxNewDoiKhu();
                    (arrayMenu[i].action == 'thoat') && (self.outGame(), self.closeBox());
                } else {
                }
            });


        }

        // end
     
        let sc = this.snowlySroll(body,hienthinoidung);


        //! foot
        let foot = this.boxBaseFoot(head,background);
        background.addChild(head,menu,foot);

        
    }

    boxNewKyNang = () => {
        this.closeBox();
        let background = this.boxBaseBackground();
        this.box.addChild(background);

        //! HEAD
        let head = this.boxBaseHead(background);

        let avatar = this.snowlyImg(this.my.info.coban.avatar);
        avatar.width = head.width * 0.25;
        avatar.height = (head.height * 0.99) > avatar.width ? avatar.width : head.height * 0.99;
        avatar.x = head.width * 0.01;
        avatar.y = head.height*0.99 - avatar.height;
        head.addChild(avatar);
        let info = new PIXI.Container();
       
        let txtDiemtiemnang = this.snowlyText('Điểm tiềm năng: ', 16,'fontchinh', 0xFFFF00,false,head.width,head.height);
        info.addChild(txtDiemtiemnang);
        let tiemnang = this.snowlyText(this.number_format(this.my.info.coban.tiemnang), 16,'fontchinh', 0xFFFF00,false,head.width,head.height);
        tiemnang.y = txtDiemtiemnang.y + txtDiemtiemnang.height;
        info.addChild(tiemnang);

        let diemnangdong = this.snowlyText('Điểm hoạt động: 0', 16,'fontchinh', 0xFFFF00,false,head.width,head.height);
        diemnangdong.y = tiemnang.y + tiemnang.height;
        info.addChild(diemnangdong);

        let diemnangdong2 = this.snowlyText('TOP: 0', 16,'fontchinh', 0xFFFF00,false,head.width,head.height);
        diemnangdong2.y = diemnangdong.y + diemnangdong.height;
        info.addChild(diemnangdong2);
        
        head.addChild(info);
        info.x = avatar.x + avatar.width  + avatar.width * 0.05;
        info.y =  head.height/2 - info.height/2;

        //! menu
        let menu = this.boxBaseMenu(head,'kynang',this.profileMenu);
        


        //! body
        let body = this.boxBaseBody(background,head,menu);
        background.addChild(body);

        let hienthinoidung = this.boxBaseMask(body,background);


        let slotwidth = body.width;
        let slotheight = head.width * 0.15;
        slotheight = slotheight > 50 ? 50 : slotheight;
        let my = this.my;

        let listSkill = this.skill_active.filter(e => e.type == 'bidong');
        listSkill.forEach(element => {
            let f =  my.skill.find(e => e.id == element.id);
            if(!f) my.skill.push({id:element.id,level:0});
        });
        let myskill = my.skill;
        // sort ASC ID 
        myskill.sort(function(a, b){return a.id - b.id});
        let iShow = 0;
        for (let i = 0; i < myskill.length; i++) {
            let t = this.skill_active.find(e => e.id == myskill[i].id);
            if(!t) continue;
            let skill = t;
            if (skill.id == 0) continue;
            let skillContainer = new PIXI.Container();
            hienthinoidung.addChild(skillContainer);
            skillContainer.name = "since04KEY";
            skillContainer.x = 0;
            skillContainer.y = iShow * slotheight * 1.1;

            let skillBackground = new PIXI.Graphics();
            skillBackground.lineStyle(1, 0xd9c8b3, 1);
            skillBackground.beginFill(0xd9c8b3, 0.5);
            skillBackground.drawRoundedRect(0, 0, slotwidth, slotheight, 0);
            skillBackground.endFill();
            skillContainer.addChild(skillBackground);
            skillBackground.skill = skill.id;

            skillBackground.interactive = true;
            skillBackground.cursor = 'pointer';
            let pointerStartTime = 0;
            let pointerEndTime = 0;


            skillBackground.on("pointerdown", function (event) {
                pointerStartTime = Date.now();
            });
            let self = this;
            skillBackground.on("pointerup", function (event) {
                pointerEndTime = Date.now();
                if (pointerEndTime - pointerStartTime < 200) {
                    self.Open_preSkill(this);
                } else {}
            });


            let skillTab20 = new PIXI.Graphics();
            skillTab20.lineStyle(1, 0xff9410, 1);
            skillTab20.beginFill(0xd9c8b3, 0.5);
            skillTab20.drawRoundedRect(0, 0, slotwidth * 0.15, slotheight, 1);
            skillTab20.endFill();
            skillBackground.addChild(skillTab20);

            let skillIcon = new PIXI.Sprite(this.coverImg(skill.avatar));
            skillIcon.width = skillTab20.getBounds().width * 0.90;
            skillIcon.height = skillTab20.getBounds().height * 0.90;
            skillIcon.x = (skillTab20.getBounds().width - skillIcon.width) / 2;
            skillIcon.y = (skillTab20.getBounds().height - skillIcon.height) / 2;
            skillTab20.addChild(skillIcon);


            let SkillTab85 = new PIXI.Graphics();
            SkillTab85.lineStyle(1, 0xe6ded1, 1);
            SkillTab85.beginFill(0xe6ded1, 0.5);
            SkillTab85.drawRoundedRect(slotwidth * 0.17, 0, slotwidth * 0.83, slotheight, 0);
            SkillTab85.endFill();
            skillBackground.addChild(SkillTab85);

            let txtNameSkill = skill.name;

            if (skill.type == 'bidong') {
                txtNameSkill = skill.name + ": " + this.number_format(my.info.chiso[skill.object]);
            }

            let skillName = new PIXI.Text(txtNameSkill, {
                fontSize: 14,
                fill: 0x637dfe,
                fontFamily: 'fontchinh',
                
                wordWrap: true,
                wordWrapWidth: SkillTab85.getBounds().width * 0.9,
            });
            skillName.resolution = 2;
            skillName.style.align = 'center';
            skillName.x = SkillTab85.getBounds().x + SkillTab85.getBounds().x / 100 * 10;
            skillName.y = 0;
            SkillTab85.addChild(skillName);




            let mota = skill.mota;

            if (skill.type == 'bidong') {
                if (skill.object == 'hpGoc' || skill.object == 'kiGoc')
                    mota = this.number_format(this.tangHP(my.info.chiso[skill.object], 20)) + " tiềm năng: tăng 20";
                if (skill.object == 'sucdanhGoc') {
                    mota = this.number_format(this.tangSucDanh(my.info.chiso[skill.object], 1)) + " tiềm năng: tăng 1";
                }
                if (skill.object == 'chimangGoc') {
                    mota = this.number_format(this.tangchiMang(my.info.chiso[skill.object])) + " tiềm năng: tăng 1";
                }
                if (skill.object == 'giapGoc') {
                    mota = this.number_format(this.tangGiap(my.info.chiso[skill.object], 1)) + " tiềm năng: tăng 1";
                }
            }

            let skillDes = new PIXI.Text(mota, {
                fontSize: 12,
                fill: 0x005325,
                fontFamily: 'fontchinh',
                
            });

            skillDes.resolution = 2;
            skillDes.style.align = 'center';
            skillDes.x = SkillTab85.getBounds().x + SkillTab85.getBounds().x / 100 * 10;
            skillDes.y = skillName.y + skillName.height + 5;
            SkillTab85.addChild(skillDes);




            iShow++;
        }


        // end
     
        let sc = this.snowlySroll(body,hienthinoidung);


        //! foot
        let foot = this.boxBaseFoot(head,background);
        background.addChild(head,menu,foot);

        
    }

    boxNewBag = () => {
        this.closeBox();
        let background = this.boxBaseBackground();
        this.box.addChild(background);

        //! HEAD
        let head = this.boxBaseHead(background);

        let avatar = this.snowlyImg(this.my.info.coban.avatar);
        avatar.width = head.width * 0.25;
        avatar.height = (head.height * 0.99) > avatar.width ? avatar.width : head.height * 0.99;
        avatar.x = head.width * 0.01;
        avatar.y = head.height*0.99 - avatar.height;
        head.addChild(avatar);
        let info = new PIXI.Container();
        let hp = this.snowlyText("HP: " + this.my.info.chiso.hp + " / " + this.my.info.chiso.hpFull + "", 16,'fontchinh', 0xfefe00,false,head.width,head.height);
        hp.y = 0;
        info.addChild(hp);

        let ki = this.snowlyText("KI: " + this.my.info.chiso.ki + " / " + this.my.info.chiso.kiFull + "", 16,'fontchinh', 0xfefe00,false,head.width,head.height);
        ki.y = hp.y + hp.height;
        info.addChild(ki);

        let sucdanh = this.snowlyText("Sức đánh: " + this.my.info.chiso.sucdanh + "", 16,'fontchinh', 0xfefe00,false,head.width,head.height);
        sucdanh.y = ki.y + ki.height;
        info.addChild(sucdanh);

        let giap = this.snowlyText("Giáp: " + this.my.info.chiso.giap + ", Chí mạng: "+this.my.info.chiso.chimang+"%", 16,'fontchinh', 0xfefe00,false,head.width,head.height);
        giap.y = sucdanh.y + sucdanh.height;
        info.addChild(giap);
        
        head.addChild(info);
        info.x = avatar.x + avatar.width  + avatar.width * 0.05;
        info.y =  head.height/2 - info.height/2;

        //! menu
        let menu = this.boxBaseMenu(head,'hanhtrang',this.profileMenu);
        


        //! body
        let body = this.boxBaseBody(background,head,menu);
        background.addChild(body);

        let hienthinoidung = this.boxBaseMask(body,background);


        // body
        let self = this;
        let clickItem = (listItem) => {
            listItem.interactive = true;
            listItem.cursor = 'pointer';
            let pointerStartTime = 0;
            let pointerEndTime = 0;

            listItem.on("pointerdown", function (event) {
                pointerStartTime = Date.now();
            });

            listItem.on("pointerup", function (event) {
                pointerEndTime = Date.now();
                if (pointerEndTime - pointerStartTime < 300) {
                    self.open_PreviewItem(listItem);
                } 
            });
        }

        let slotwidth = body.width;
        let slotheight = head.width * 0.15;
        slotheight = slotheight > 50 ? 50 : slotheight;
        let my = this.my;

        let oTrangBi = 6;

        let fewUse = ['ao', 'quan', 'gang', 'giay', 'rada', 'caitrang']; // thông tin các món trang bị
        let fewY = 0;
        for (let i = 0; i < oTrangBi; i++) {
            let listItem = new PIXI.Container();

            listItem.name = "since04KEY";

            hienthinoidung.addChild(listItem);

            listItem.maxWight = slotwidth;
            listItem.maxHeight = slotheight;
            listItem.width = listItem.maxWight;
            listItem.height = listItem.maxHeight;

            listItem.x = 0;
            listItem.y = slotheight * i + 0;



            let ItemBG = new PIXI.Graphics();

            ItemBG.lineStyle(1, 0xd9c8b3, 1);
            ItemBG.beginFill(0x000000, 0.5);
            ItemBG.drawRoundedRect(0, 0, listItem.maxWight, listItem.maxHeight, 0);
            ItemBG.endFill();

            let BgBolderAvatar = new PIXI.Graphics();
            BgBolderAvatar.lineStyle(1, 0xd9c8b3, 1);
            BgBolderAvatar.beginFill(0x977b55, 1);
            BgBolderAvatar.drawRoundedRect(0, 0, listItem.maxWight * 0.2, listItem.maxHeight, 0);
            BgBolderAvatar.endFill();
            BgBolderAvatar.x = 0;
            BgBolderAvatar.y = 0;


            let BgBolderInfo = new PIXI.Graphics();
            BgBolderInfo.lineStyle(1, 0xd9c8b3, 1);
            BgBolderInfo.beginFill(0xe6ded1, 1);
            BgBolderInfo.drawRoundedRect(BgBolderAvatar.x + BgBolderAvatar.getBounds().width, 0, listItem.maxWight * 0.8, listItem.maxHeight, 0);
            BgBolderInfo.endFill();



            if (my.trangbi[fewUse[i]] && my.trangbi[fewUse[i]] != 0) {
                let id = my.trangbi[fewUse[i]];
                let inBag = this.findBag(id);
                if (inBag) {
                    let inItem = this.findItem(inBag.item);
                    if (inItem) {
                        let showImgItem = new PIXI.Sprite(this.coverImg(inItem.avatar));
                        showImgItem.width =25;
                        showImgItem.height =25;
                        showImgItem.x = (BgBolderAvatar.width - showImgItem.width) / 2;
                        showImgItem.y = (BgBolderAvatar.height - showImgItem.height) / 2;
                        BgBolderAvatar.addChild(showImgItem);

                        
                        let showInfoItem = this.snowlyText(inItem.name, 16,'fontchinh', 0x005325,false,BgBolderInfo.width,BgBolderInfo.height);
                        showInfoItem.resolution = 2;
                        showInfoItem.x = BgBolderInfo.getBounds().x + BgBolderInfo.getBounds().width * 0.04;
                        showInfoItem.height = BgBolderInfo.height * 0.38;
                        showInfoItem.y = 0 + BgBolderInfo.height * 0.1;

                        let showDesItem = this.snowlyText(inItem.mota, 14,'fontchinh', 0x0683fd,false,BgBolderInfo.width,BgBolderInfo.height);
                        showDesItem.resolution = 2;
                        showDesItem.x = BgBolderInfo.getBounds().x + BgBolderInfo.getBounds().width * 0.04;
                        showDesItem.height = BgBolderInfo.height * 0.38;
                        showDesItem.y = showInfoItem.y + showInfoItem.height;

                        BgBolderInfo.addChild(showInfoItem, showDesItem);
                        BgBolderInfo.item = inBag.id;




                    }
                }
            }




            ItemBG.addChild(BgBolderAvatar, BgBolderInfo);




            listItem.addChild(ItemBG);

            listItem.item = BgBolderInfo.item;

            clickItem(BgBolderInfo)



        }


        let iItem = 0;
        let dataItem = my.ruong.item.filter(item => item.active === "hanhtrang");
        dataItem.forEach(element => {
            element.lastTime = element.lastTime || Date.now();
        });
        dataItem.sort(function(a, b){return a.lastTime - b.lastTime});
        for (let i = oTrangBi; i < my.ruong.slot + oTrangBi; i++) {
            let listItem = new PIXI.Container();
            listItem.name = "since04KEY";
            hienthinoidung.addChild(listItem);

            listItem.maxWight = slotwidth;
            listItem.maxHeight = slotheight;
            listItem.width = listItem.maxWight;
            listItem.height = listItem.maxHeight;

            listItem.x = 0;
            listItem.y = slotheight * i + 0;



            let ItemBG = new PIXI.Graphics();

            ItemBG.lineStyle(1, 0xd9c8b3, 1);
            ItemBG.beginFill(0x000000, 0.5);
            ItemBG.drawRoundedRect(0, 0, listItem.maxWight, listItem.maxHeight, 0);
            ItemBG.endFill();

            let BgBolderAvatar = new PIXI.Graphics();
            BgBolderAvatar.lineStyle(1, 0xd9c8b3, 1);
            BgBolderAvatar.beginFill(0xb39e83, 1);
            BgBolderAvatar.drawRoundedRect(0, 0, listItem.maxWight * 0.2, listItem.maxHeight, 0);
            BgBolderAvatar.endFill();
            BgBolderAvatar.x = 0;
            BgBolderAvatar.y = 0;


            let BgBolderInfo = new PIXI.Graphics();
            BgBolderInfo.lineStyle(1, 0xd9c8b3, 1);
            BgBolderInfo.beginFill(0xeeebe6, 1);
            BgBolderInfo.drawRoundedRect(BgBolderAvatar.x + BgBolderAvatar.getBounds().width, 0, listItem.maxWight * 0.8, listItem.maxHeight, 0);
            BgBolderInfo.endFill();



            if (dataItem[iItem]) {
                let inBag = dataItem[iItem];
                if (inBag) {
                    let inItem = this.findItem(inBag.item);
                    if (inItem) {
                        let showImgItem = new PIXI.Sprite(this.coverImg(inItem.avatar));
                        showImgItem.width = 25;
                        showImgItem.height = 25;
                        showImgItem.x = (BgBolderAvatar.width - showImgItem.width) / 2;
                        showImgItem.y = (BgBolderAvatar.height - showImgItem.height) / 2;
                        BgBolderAvatar.addChild(showImgItem);

                        if (inBag.soluong > 1) {
                            let showImgQuantity = new PIXI.Text(inBag.soluong, {
                                fontSize: 16,
                                fill: 0xfefe00,
                                fontFamily: 'fontchinh',
                                wordWrap: true,
                                
                                wordWrapWidth: BgBolderAvatar.width,
                            });

                            // showImgQuantity.width = BgBolderAvatar.width * 0.1;
                            //showImgQuantity.height = BgBolderAvatar.height * 0.1;
                            showImgQuantity.height = BgBolderAvatar.height * 0.38;
                            showImgQuantity.x = BgBolderAvatar.width - showImgItem.width;
                            showImgQuantity.y = BgBolderAvatar.height - showImgItem.height;
                            BgBolderAvatar.addChild(showImgQuantity);


                        }


                        let showInfoItem = new PIXI.Text(inItem.name, {
                            fontSize: 16,
                            fill: 0x005325,
                            fontFamily: 'fontchinh',
                            wordWrap: true,
                            
                            wordWrapWidth: BgBolderInfo.width,
                        });

                        showInfoItem.resolution = 2;
                        showInfoItem.x = BgBolderInfo.getBounds().x + BgBolderInfo.getBounds().width * 0.04;
                        showInfoItem.height = BgBolderInfo.height * 0.38;
                        showInfoItem.y = 0 + BgBolderInfo.height * 0.1;

                        let showDesItem = new PIXI.Text(inItem.mota, {
                            fontSize: 14,
                            fill: 0x0683fd,
                            fontFamily: 'fontchinh',
                            wordWrap: true,
                            
                            wordWrapWidth: BgBolderInfo.width,
                        });

                        showDesItem.resolution = 2;
                        showDesItem.x = BgBolderInfo.getBounds().x + BgBolderInfo.getBounds().width * 0.04;
                        showDesItem.height = BgBolderInfo.height * 0.38;
                        showDesItem.y = showInfoItem.y + showInfoItem.height;




                        BgBolderInfo.addChild(showInfoItem, showDesItem);




                    }
                }
            }




            ItemBG.addChild(BgBolderAvatar, BgBolderInfo);




            listItem.addChild(ItemBG);
            listItem.item = dataItem[iItem] ? dataItem[iItem].id : null;


            clickItem(listItem)

            iItem++;




        }

        // end
     
        let sc = this.snowlySroll(body,hienthinoidung);




        //! foot
        let foot = this.boxBaseFoot(head,background);
        background.addChild(head,menu,foot);

        
    }
}

export default Since04BoxClass;