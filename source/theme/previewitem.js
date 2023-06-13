import Since04InfoPlayerMMO from './boxInfoMMO.js';
class Since04PrviewItem extends Since04InfoPlayerMMO {
    constructor() {
        super();
    }

    useItem(id) {
        let my = this.my;
        if(my.id <=0) this.notice('Có lỗi xảy ra.');
        if(my.ruong.item.find(e => e.id == id) == undefined) return this.notice('Có lỗi xảy ra. code:1.');
        this.notice("xin chờ...",false);
        this.to(-10, id);
    }

    useItemDetu(id) 
    {
        let my = this.my;
        if(my.id <=0) this.notice('Có lỗi xảy ra.');
        if(my.ruong.item.find(e => e.id == id) == undefined) return this.notice('Có lỗi xảy ra. code:1.');
        this.notice("xin chờ...",false);
        this.to(-16, id);
    }

    userSkill(id,o) 
    {
        if(this.my.id <=0) return false;
        // function is select skill for user   
        for(let i = 0; i < this.my.oskill.length; i++)
        {
            if(this.my.oskill[i] == id) 
            {
                this.my.oskill[i] = 0;
            }
        }
        this.my.oskill[o] = id;
        this.createSkillOnDisplay();
        this.to(-9,this.my.oskill);
    }

    Open_preSkill = function(data,action = null) 
    {
        let my = this.my;
        let heightKhung = 0;
        let itemPos = data.getBounds();
        let id = data.skill;
        if(!id) return false;

        let myidskill = my.skill.find(e => e.id == id);
        
        let skill = this.skill_active.find(e => e.id == id && (e.class == 'all' || e.class == my.info.coban.type));
    
        if(!skill) return false;

        if(!myidskill)
        {
            return this.notice(this._('Bạn chưa có kĩ năng này.'));
        }
        else if(skill.id >= 1)
        {
            if(myidskill.level < 1) return this.notice(this._('Bạn chưa học kĩ năng này. Hãy tới sưu phụ để học (Miễn phí) hoặc mua sách võ công tại URON.'));
        }
        
    
        // clear preview item
        this.boxPreviewItem.removeChildren();
    
        this.boxPreviewItem.visible = true;
    
    
        let boxBackground = new PIXI.Graphics();
        this.boxPreviewItem.addChild(boxBackground);
    
       
    
        let width = this.gameWidth * 0.4;
        let wMin = 350;
        if(width < wMin) width = wMin;
        if(width > this.gameWidth) width = this.gameWidth*1;

        let height = this.gameHeight*0.15;
        let hMin = 85;
        if(height < hMin) height = hMin;


        boxBackground.mwidth = width;
        boxBackground.mheight = height;
    
        
        boxBackground.beginFill(0xfefefe, 1);
        boxBackground.drawRoundedRect(0,0,boxBackground.mwidth,boxBackground.mheight, 5);
        boxBackground.endFill();
    
        boxBackground.x = 10;
    
    
        if(skill.type == 'bidong') 
        {
            let txt = "";
    
            if(skill.object == 'hpGoc') txt = "Sử dụng "+this.number_format(this.tangHP(my.info.chiso[skill.object],20))+" tiềm năng để tăng 20 HP gốc.";
            else if(skill.object == 'kiGoc') txt = "Sử dụng "+this.number_format(this.tangHP(my.info.chiso[skill.object],20))+" tiềm năng để tăng 20 KI gốc.";
            else if(skill.object == 'sucdanhGoc') txt = "Sử dụng "+this.number_format(this.tangSucDanh(my.info.chiso[skill.object],1))+" tiềm năng để tăng 1 Sức đánh gốc.";
            else if(skill.object == 'giapGoc') txt = "Sử dụng "+this.number_format(this.tangGiap(my.info.chiso[skill.object],1))+" tiềm năng để tăng 1 giáp gốc.";
            else if(skill.object == 'chimangGoc') txt = "Sử dụng "+this.number_format(this.tangchiMang(my.info.chiso[skill.object],1))+" tiềm năng để tăng 1 chí mạng gốc.";
    
            console.log(skill)
            let TxtBox = new PIXI.Text(txt, {
                fontSize: 13,
                fill: 0x0080fe,
                fontFamily: 'chelthm',
                fontWeight: 'bold',
                align: "center",
                fontWeight: 'bold',
                fontWrap: true,
                wordWrap: true,
                wordWrapWidth: boxBackground.mwidth /2
            });
            TxtBox.y =5;
            TxtBox.x = boxBackground.mwidth/2 - TxtBox.width/2;
            TxtBox.resolution = 2;
            heightKhung += TxtBox.height + 10;
            boxBackground.addChild(TxtBox);
        }
        else 
        {
            let mySkill = my.skill.find(e => e.id == skill.id);
            if(mySkill && my.skill.level <=0) 
            {
    
        
                let TxtBox = new PIXI.Text("Bạn chưa học kĩ năng này, hãy tới Quy Lão Kame để học miễn phí hoặc mua sách võ công để học", {
                    fontSize: 13,
                    fill: 0x0080fe,
                    fontFamily: 'chelthm',
                    fontWeight: 'bold',
                    align: "center",
                    fontWeight: 'bold',
                    fontWrap: true,
                    wordWrap: true,
                    wordWrapWidth: boxBackground.mwidth /2
                });
                TxtBox.y =5;
                TxtBox.x = boxBackground.mwidth/2 - TxtBox.width/2;
                TxtBox.resolution = 2;
                heightKhung += TxtBox.height + 10;
                boxBackground.addChild(TxtBox);
            }
            else 
            {
                 let nameSkill = new PIXI.Text(skill.name, {
                    fontSize: 13,
                    fill: 0x532905,
                    fontFamily: 'chelthm',
                    fontWeight: 'bold',
                    align: "center",
                    fontWeight: 'bold',
                    fontWrap: true,
                    wordWrap: true,
                    wordWrapWidth: boxBackground.mwidth /2
                });
                nameSkill.y =5;
                nameSkill.x = boxBackground.mwidth/2 - nameSkill.width/2;
                nameSkill.resolution = 2;
                heightKhung += nameSkill.height + 10;
                boxBackground.addChild(nameSkill);
    
                let motaSkill = new PIXI.Text(skill.mota, {
                    fontSize: 13,
                    fill: 0xc6e59d,
                    fontFamily: 'chelthm',
                    fontWeight: 'bold',
                    align: "center",
                    fontWeight: 'bold',
                    fontWrap: true,
                    wordWrap: true,
                    wordWrapWidth: boxBackground.mwidth /1.3
                });
                motaSkill.y =nameSkill.y + nameSkill.height ;
                motaSkill.x = boxBackground.mwidth/2 - motaSkill.width/2;
                motaSkill.resolution = 2;
                heightKhung += motaSkill.height;
                boxBackground.addChild(motaSkill);
    
                
                let hr = new PIXI.Graphics();
                hr.lineStyle(1, 0x000000, 1);
                hr.moveTo(0, motaSkill.y + motaSkill.height + 10);
                hr.lineTo(boxBackground.mwidth*0.8, motaSkill.y + motaSkill.height +   10);
                // hr x = center
                hr.x = (boxBackground.mwidth - hr.width)/2;
                boxBackground.addChild(hr);
    
                let levelSkill = new PIXI.Text("Cấp độ: "+mySkill.level, {
                    fontSize: 13,
                    fill: 0x637dfe,
                    fontFamily: 'chelthm',
                    fontWeight: 'bold',
                    align: "center",
                    fontWeight: 'bold',
                    fontWrap: true,
                    wordWrap: true,
                    wordWrapWidth: boxBackground.mwidth /2
                });
                levelSkill.y = motaSkill.y + motaSkill.height + 15;
                levelSkill.x = boxBackground.mwidth/2 - levelSkill.width/2;
                levelSkill.resolution = 2;
                heightKhung += levelSkill.height + 15 ;
                boxBackground.addChild(levelSkill);
    
                
    
                let dameSkill = new PIXI.Text( (skill.type == 'attack' ? 'Gây sát thương '+skill.dame[mySkill.level]+'%' : 'Thời gian tác dụng '+skill.dame[mySkill.level]+' giây ') , {
                    fontSize: 13,
                    fill: 0x0080fe,
                    fontFamily: 'chelthm',
                    fontWeight: 'bold',
                    align: "center",
                    fontWeight: 'bold',
                    fontWrap: true,
                    wordWrap: true,
                    wordWrapWidth: boxBackground.mwidth /2
                });
                dameSkill.y = levelSkill.y + levelSkill.height ;
                dameSkill.x = boxBackground.mwidth/2 - dameSkill.width/2;
                dameSkill.resolution = 2;
                heightKhung += dameSkill.height;
                boxBackground.addChild(dameSkill);
    
    
                let kiSkill = new PIXI.Text("KI tiêu hao: "+skill.ki[mySkill.level]+(skill.kit == 2 ? '%' :''), {
                    fontSize: 13,
                    fill: 0x0080fe,
                    fontFamily: 'chelthm',
                    fontWeight: 'bold',
                    align: "center",
                    fontWeight: 'bold',
                    fontWrap: true,
                    wordWrap: true,
                    wordWrapWidth: boxBackground.mwidth /2
                });
                kiSkill.y = dameSkill.y + dameSkill.height ;
                kiSkill.x = boxBackground.mwidth/2 - kiSkill.width/2;
                kiSkill.resolution = 2;
                heightKhung += kiSkill.height;
                boxBackground.addChild(kiSkill);
    
                let timeSkill = new PIXI.Text("Thời gian hồi: "+skill.time[mySkill.level]*1000+" mili giây", {
                    fontSize: 13,
                    fill: 0x0080fe,
                    fontFamily: 'chelthm',
                    fontWeight: 'bold',
                    align: "center",
                    fontWeight: 'bold',
                    fontWrap: true,
                    wordWrap: true,
                    wordWrapWidth: boxBackground.mwidth /2
                });
    
                timeSkill.y = kiSkill.y + kiSkill.height ;
                timeSkill.x = boxBackground.mwidth/2 - timeSkill.width/2;
                timeSkill.resolution = 2;
                heightKhung += timeSkill.height;
                boxBackground.addChild(timeSkill);
    
                let hr2 = new PIXI.Graphics();
                hr2.lineStyle(1, 0x000000, 1);
                hr2.moveTo(0, timeSkill.y + timeSkill.height + 10);
                hr2.lineTo(boxBackground.mwidth*0.8, timeSkill.y + timeSkill.height +   10);
                // hr x = center
                hr2.x = (boxBackground.mwidth - hr2.width)/2;
                boxBackground.addChild(hr2);
    
    
                let descUpLevel = new PIXI.Text(mySkill.level < 7 ? 'Để lên cấp '+(mySkill.level+1)+', hãy đến Quy Lão Kame để học miễn phí hoặc mua sách võ công.' : 'Đã đạt cấp độ tối đa.', {
                    fontSize: 13,
                    fill: 0x532905,
                    fontFamily: 'chelthm',
                    fontWeight: 'bold',
                    align: "center",
                    fontWeight: 'bold',
                    fontWrap: true,
                    wordWrap: true,
                    wordWrapWidth: boxBackground.mwidth /2
                });
                descUpLevel.y = timeSkill.y + timeSkill.height + 15;
                descUpLevel.x = boxBackground.mwidth/2 - descUpLevel.width/2;
                descUpLevel.resolution = 2;
                heightKhung += descUpLevel.height + 15 ;
                boxBackground.addChild(descUpLevel);
    
    
            }
        }
       
    
        
       
    
    
    
    
    
        boxBackground.mwidth = boxBackground.mwidth < width ? width : boxBackground.mwidth;

    
    
    
    
        boxBackground.clear();
        boxBackground.lineStyle(1, 0x000000, 1);
        boxBackground.beginFill(0xffffff, 1);
        boxBackground.drawRoundedRect(0, 0, boxBackground.mwidth, heightKhung, 10);
        boxBackground.endFill();
    
        
        // create button use item height = 30% of boxBackground, width = 30% of boxBackground use Graphics
        
        let useContainer = new PIXI.Container();
        this.boxPreviewItem.addChild(useContainer);
    
    
        if(skill.type == 'bidong')
        {
    
            
            if(1+1 == 2) 
            {
                let arrayUp = [20,200,2000];
    
                arrayUp = skill.object == 'hpGoc' ? [20,200,2000] : arrayUp;
                arrayUp = skill.object == 'kiGoc' ? [20,200,2000] : arrayUp;
                arrayUp = skill.object == 'sucdanhGoc' ? [1,10,100] : arrayUp;
                arrayUp = skill.object == 'chimangGoc' ? [1] : arrayUp;
                arrayUp = skill.object == 'giapGoc' ? [1,10,100] : arrayUp;
    
    
                arrayUp.forEach(element => {
                    
                    let buttonUp = new PIXI.Graphics();
                    buttonUp.lineStyle(1, 0x5f1a30, 1);
                    buttonUp.beginFill(0xd68f32, 1);
                    buttonUp.drawRoundedRect(0, 0, boxBackground.mwidth*0.2, boxBackground.mwidth*0.2, 5);
                    buttonUp.endFill();
                    buttonUp.x = (useContainer.children.length * (buttonUp.getBounds().width + 10));
                    buttonUp.y = 0;
                    buttonUp.name = 'since04';
                    useContainer.addChild(buttonUp);
                    buttonUp.interactive = true;
                    buttonUp.buttonMode = true;
                    buttonUp.on('pointerdown', function () {
                        userTang(skill.object,element);
                    }
                    );
    
                    // change color when hover
                    buttonUp.on('pointerover', function () {
                        buttonUp.tint = 0x49be62;
                    }
                    );
                    buttonUp.on('pointerout', function () {
                        buttonUp.tint = 0xffffff;
                    }
                    );
    
                    let t = "";
    
                    t = skill.object == 'hpGoc' ? "tăng "+element+" HP -"+this.intToM(this.tangHP(my.info.chiso[skill.object],element))+" " : t;
                    t = skill.object == 'kiGoc' ? "tăng "+element+" KI -"+this.intToM(this.tangHP(my.info.chiso[skill.object],element))+" " : t;
                    t = skill.object == 'sucdanhGoc' ? "tăng "+element+" Sức đánh -"+this.intToM(this.tangSucDanh(my.info.chiso[skill.object],element))+" " : t;
                    t = skill.object == 'chimangGoc' ? "tăng "+element+" Chí mạng -"+this.intToM(this.tangchiMang(my.info.chiso[skill.object],element))+" " : t;
                    t = skill.object == 'giapGoc' ? "tăng "+element+" Giáp -"+this.intToM(this.tangGiap(my.info.chiso[skill.object],element))+" " : t;
    
    
                    let txt = new PIXI.Text(t, {
                        fontSize: 13,
                        fill: 0x532905,
                        fontFamily: 'chelthm',
                        fontWeight: 'bold',
                        align: "center",
                        fontWeight: 'bold',
                        fontWrap: true,
                        wordWrap: true,
                        wordWrapWidth: buttonUp.getBounds().width /1.3
    
    
                    });
                    txt.resolution = 2;
                    txt.y = buttonUp.getBounds().height / 2 - txt.height / 2;
                    txt.x = buttonUp.getBounds().width / 2 - txt.width / 2;
                    buttonUp.addChild(txt);
    
    
                    useContainer.addChild(buttonUp);
    
    
                });
            }
    
        }
        else 
        {
            let mySkill = my.skill.find(e => e.id == skill.id);
            if(mySkill && mySkill.level >=1) 
            {
                let soO = 5;
                let arrayUp = [0,1,2,3,4];
                arrayUp.forEach(element => {
                        
                        let buttonUp = new PIXI.Graphics();
                        buttonUp.lineStyle(1, 0x5f1a30, 1);
                        buttonUp.beginFill(0xd68f32, 1);
                        buttonUp.drawRoundedRect(0, 0, boxBackground.mwidth*0.2, boxBackground.mwidth*0.2, 5);
                        buttonUp.endFill();
                        buttonUp.x = (useContainer.children.length * (buttonUp.getBounds().width + 10));
                        buttonUp.y = 0;
                        useContainer.addChild(buttonUp);
                        buttonUp.interactive = true;
                        buttonUp.buttonMode = true;
                        let self = this;
                        buttonUp.on('pointerdown', function () {
                            self.userSkill(skill.id,element);
                        }
                        );
                        buttonUp.name = 'since04';
                        // change color when hover
                        buttonUp.on('pointerover', function () {
                            buttonUp.tint = 0x49be62;
                        }
                        );
                        buttonUp.on('pointerout', function () {
                            buttonUp.tint = 0xffffff;
                        }
                        );
        
        
    
                        let txt = new PIXI.Text("Gán phím "+(element+1)+" ", {
                            fontSize: 13,
                            fill: 0x532905,
                            fontFamily: 'chelthm',
                            fontWeight: 'bold',
                            align: "center",
                            fontWeight: 'bold',
                            fontWrap: true,
                            wordWrap: true,
                            wordWrapWidth: buttonUp.getBounds().width /1.3
                        })
                        txt.resolution = 2;
                        txt.y = buttonUp.getBounds().height / 2 - txt.height / 2;
                        txt.x = buttonUp.getBounds().width / 2 - txt.width / 2;
                        buttonUp.addChild(txt);
    
                    });
    
    
    
            }
        }
    
      
    
    
    
    
    
    
    
    
        boxBackground.y = itemPos.y  - boxBackground.getBounds().height +  itemPos.height ;
    
        if(boxBackground.y +  boxBackground.getBounds().height + useContainer.getBounds().height > this.gameHeight){
            boxBackground.y = this.gameHeight -  boxBackground.getBounds().height - 10 - useContainer.getBounds().height;
        }
    
        if(boxBackground.y < 0){
            boxBackground.y = 10;
        }
    
    
        useContainer.x = (boxBackground.getBounds().width - useContainer.getBounds().width)/2;
        if( useContainer.x < 0) useContainer.x = boxBackground.getBounds().x;
        useContainer.y = boxBackground.getBounds().height + boxBackground.getBounds().y;



        let point = 0;
        if(this.pcKey == 'Enter') this.pcKey = '1';

        let banphimPc = setInterval(() => {
            if(this.boxPreviewItem.children.length <= 0)
            {
                clearInterval(banphimPc);
                return false;
            }

            let children = useContainer.children.filter(e => e.name == 'since04');
            let event = this.pcKey;

            if (event === 'ArrowLeft') {
                point -= 1;
                if(point <0) point = children.length-1;

            } else if (event === 'ArrowRight') {
                point += 1;
                if(point >= children.length) point = 0;
            }

            if (event === 'ArrowUp') {
                this.boxPreviewItem.removeChildren();
               
            } else if (event === 'ArrowDown') {
                this.boxPreviewItem.removeChildren();
                
            }

            if(event === 'Enter') {
                let current = children[point];
                let event = this.getAllInteractiveChildren(current);
                if(event.length > 0) {
                    event[0].emit('pointerdown');
                    event[0].emit('pointerup');
                    this.boxPreviewItem.removeChildren();
                }
            }

            if(children[point] && this.pcKey.length >=1) {
                for(let i = 0; i < children.length; i++) {
                    children[i].removeChild(children[i].getChildByName('xanhle'));
                }

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
                let eventclick = this.getAllInteractiveChildren(current);

                if(eventclick.length > 0) {
                    background.interactive = true;
                    background.cursor = 'pointer';
                    // coppy interacive from children[point]
                    background.on('pointerdown', () => {
                        eventclick[0].emit('pointerdown');
                        this.boxPreviewItem.removeChildren();

                    });
                    background.on('pointerup', () => {
                        eventclick[0].emit('pointerup');
                        this.boxPreviewItem.removeChildren();
                    });

                }
            }


            this.pcKey = '';
        },this.app.ticker.deltaMS);
    
    }

    open_PreviewItem(data, action = {}) {
        let heightKhung = 0;
        let itemPos = data.getBounds();
        let id = data.item;
        if (!id) return false;
        let inBag = this.findBag(id);
        if (!inBag) return false;
        let item = inBag.item;
        let inItem = this.findItem(item);
        let my = this.my;
        // clear preview item
        this.boxPreviewItem.removeChildren();

        this.boxPreviewItem.visible = true;

        


        let boxBackground = new PIXI.Graphics();
        this.boxPreviewItem.addChild(boxBackground);

        let width = this.gameWidth * 0.4;
        let wMin = 350;
        if(width < wMin) width = wMin;
        if(width > this.gameWidth) width = this.gameWidth*1;

        let height = this.gameHeight*0.15;
        let hMin = 85;
        if(height < hMin) height = hMin;


        boxBackground.mwidth = width;
        boxBackground.mheight = height;




        boxBackground.beginFill(0xfefefe, 1);
        boxBackground.drawRoundedRect(0, 0, boxBackground.mwidth, boxBackground.mheight, 5);
        boxBackground.endFill();

        boxBackground.x = 10;

        let AvatarItem = new PIXI.Sprite(this.coverImg(inItem.avatar));
        AvatarItem.width = 25;
        AvatarItem.height = 25;
        AvatarItem.x = boxBackground.width - AvatarItem.width - 10;
        AvatarItem.y = 0;
        boxBackground.addChild(AvatarItem);

        let itemName = new PIXI.Text(inItem.name + (inBag.level && inBag.level >= 1 ? " [+" + inBag.level + "]" : ""), {
            fontFamily: 'Arial',
            fontSize: 16,
            fill: 0x532905,
            align: 'center'
        });
        itemName.style.fontWeight = 'bold';
        itemName.style.fontSize = itemPos.height * 0.4;
        itemName.height = itemName.style.fontSize;

        itemName.x = boxBackground.getBounds().width *0.05 ;
        itemName.y = 0;
        itemName.resolution = 2;
        boxBackground.addChild(itemName);

        let yy = itemName.y;
        let heightOld = itemName.height;

        /// info vật phẩm Của hành trang 

        let maxX = itemName.x + itemName.width ;
        console.log(maxX)
        if (inItem.type == 'trangbi') {
            let chiso = inBag.info;


            for (let t in chiso) {
                if (chiso[t] == 0) continue;
                let txt = "";
                if (this.itemTypeName[t].type == '%') {
                    txt = "" + (chiso[t] > 0 ? '+' : '-') + "" + chiso[t] + this.itemTypeName[t].name;
                } else {
                    txt = this.itemTypeName[t].name + "" + (chiso[t] > 0 ? '+' : '-') + "" + chiso[t];
                }
                let hp = new PIXI.Text(txt, {
                    fontFamily: 'Arial',
                    fontSize: 16,
                    fill: 0x00cb00
                });


                hp.x = boxBackground.getBounds().width *0.05 ;
                hp.style.fontWeight = 'bold';




                hp.y = yy + heightOld;
                hp.style.fontSize = itemPos.height * 0.25;
                hp.height = hp.style.fontSize;
                hp.resolution = 2;
                boxBackground.addChild(hp);
                yy = hp.y;
                heightOld = hp.height;
                heightKhung += hp.height;

            }


        }

        if (inBag.khoa && inBag.khoa == 1) {
            let txt = "Không thể giao dịch";
            let hp = new PIXI.Text(txt, {
                fontFamily: 'Arial',
                fontSize: 16,
                fill: 0x00cb00
            });
            hp.x = boxBackground.getBounds().width - hp.getBounds().width;
            hp.style.fontWeight = 'bold';
            hp.y = yy + heightOld;
            hp.style.fontSize = itemPos.height * 0.27;
            hp.height = hp.style.fontSize;
            hp.resolution = 2;
            boxBackground.addChild(hp);
            yy = hp.y;
            heightOld = hp.height;
            heightKhung += hp.height;

        }

        // create <hr> 
        let hr = new PIXI.Graphics();
        hr.lineStyle(1, 0x000000, 1);
        hr.moveTo(0, yy + heightOld + 20);
        hr.lineTo(boxBackground.mwidth * 0.8, yy + heightOld + 20);
        // hr x = center
        hr.x = (boxBackground.mwidth - hr.width) / 2;
        boxBackground.addChild(hr);



            // create desc item, item text on center of hr and word wrap hr

        let desc = new PIXI.Text(inItem.motadai, {
            fontFamily: 'Arial',
            fontSize: 14,
            fill: 0x000000,
            align: 'center',
            wordWrap: true,
            wordWrapWidth: boxBackground.mwidth * 0.8,
        });
        desc.style.fontWeight = 'bold';
        desc.style.fontSize = itemPos.height * 0.25;
        desc.resolution = 2;
        desc.x = (boxBackground.mwidth - desc.width) / 2;
        desc.y = yy + heightOld + 20;
        boxBackground.addChild(desc);
        heightKhung += desc.height + 5;
        yy = desc.y;
        heightOld = desc.height + 5;


        let listSao = inBag.sao;
        let saoContainer = new PIXI.Container();
        if (listSao) {
            let num = 0;
            for (let i = 0; i < 7; i++) {
                if (listSao[i] && listSao[i] >= 1 || listSao[i] == -1) {
                    let sao = new PIXI.Sprite(this.coverImg(listSao[i] >= 1 ? 'saoxanh' : 'saoden'));
                    sao.width = itemPos.width * 0.1;
                    sao.height = itemPos.height * 0.4;

                    saoContainer.addChild(sao);
                    sao.x = (num % 3) * sao.width;
                    sao.y = Math.floor(num / 3) * sao.height;
                    num++;
                }

            }

            saoContainer.x = (boxBackground.mwidth - saoContainer.width) / 2;
            saoContainer.y = yy + heightOld;
            boxBackground.addChild(saoContainer);
            heightKhung += saoContainer.height + saoContainer.height / 100 * 10;

        }




        heightKhung += itemName.height + AvatarItem.height;


        boxBackground.mwidth = boxBackground.mwidth < width ? width : boxBackground.mwidth;
        heightKhung = heightKhung < height ? height : heightKhung;
        boxBackground.clear();
        boxBackground.lineStyle(1, 0x000000, 1);
        boxBackground.beginFill(0xffffff, 1);
        boxBackground.drawRoundedRect(0, 0, boxBackground.mwidth, heightKhung, 10);
        boxBackground.endFill();


        let vut = 0;
        if(action.sell == true)
        {
            vut = 1;
        }

        let chon = 0;
        if(action.nangcap)
        {
            chon = 1;
        }

        let layra = 0;
        if(action.layra)
        {
            layra = 1;
        }
        let layragiaodich = 0;
        if(action.layragiaodich) layragiaodich = 1;

        let giaodich = 0;
        if(action.giaodich) giaodich = 1;


        let useContainer = new PIXI.Container();
        this.boxPreviewItem.addChild(useContainer);

        let useButton = new PIXI.Graphics();
        useButton.name ="since04";
        useButton.lineStyle(1, 0x000000, 1);
        useButton.beginFill(0xd68f32, 1);
        useButton.drawRoundedRect(0, 0, boxBackground.mwidth * 0.2, boxBackground.mwidth * 0.2, 10);
        useButton.endFill();
        useButton.interactive = true;
        useButton.buttonMode = true;
        let self = this;
        useButton.on('pointerdown', () => {
            if(inBag.active == 'ruong') return this.ruongBoRa(inBag.id);
            if(layragiaodich ==1 || giaodich == 1)  return this.notice(this._('Không thể thực hiện khi đang giao dịch'));
            if(inBag.active == 'detu') self.useItemDetu(inBag.id);
            else
            self.useItem(inBag.id);
        });
        // move mouse to useButton change background
        useButton.on('pointerover', () => {
            useButton.clear();
            useButton.lineStyle(1, 0x000000, 1);
            useButton.beginFill(0x49be62, 1);
            useButton.drawRoundedRect(0, 0, boxBackground.mwidth * 0.2, boxBackground.mwidth * 0.2, 10);
            useButton.endFill();
        });
        // move mouse out of useButton change background
        useButton.on('pointerout', () => {
            useButton.clear();
            useButton.lineStyle(1, 0x000000, 1);
            useButton.beginFill(0xd68f32, 1);
            useButton.drawRoundedRect(0, 0, boxBackground.mwidth * 0.2, boxBackground.mwidth * 0.2, 10);
            useButton.endFill();
        });


        let useText = new PIXI.Text((inBag.active == 'ruong' ? 'Lấy ra' : inBag.active == 'hanhtrang' ? 'Sử dụng' : 'Tháo ra'), {
            fontFamily: 'Arial',
            fontSize: 16,
            fill: 0x532905,
            fontWrap: true,
            align: 'center',
            WrapWidth: useButton.getBounds().width
        });
        useText.style.fontWeight = 'bold';
        useText.style.fontSize = itemPos.height * 0.25;
        useText.resolution = 2;
        useText.x = (useButton.getBounds().width - useText.getBounds().width) / 2;
        useText.y = (useButton.getBounds().height - useText.getBounds().height) / 2;
        useButton.addChild(useText);

        // create button close like use button

        let catvao = 0;
        if(action.catvao) catvao = 1;

        let bora = 0;
        if(action.bora) bora = 1;


        let closeButton = new PIXI.Graphics();
        closeButton.lineStyle(1, 0x000000, 1);
        closeButton.name ="since04";
        closeButton.beginFill(0xd68f32, 1);
        closeButton.drawRoundedRect(0, 0, boxBackground.getBounds().width * 0.2, boxBackground.getBounds().width * 0.2, 10);
        closeButton.endFill();
        closeButton.x = useButton.getBounds().width + 10;

        closeButton.interactive = true;
        closeButton.cursor = 'pointer';
        
        let pointerStartTimeDung = 0;
        let pointerEndTimeDung = 0;
        closeButton.on("pointerdown", function (event) {
            if(catvao ==1) self.ruongCatVao(inBag.id);
            else if(bora ==1) self.ruongBoRa(inBag.id);
            else
            if(layragiaodich ==1) self.chonGiaoDichRemove(inBag.id);
            else
            if(giaodich ==1) self.chonGiaoDich(inBag.id);
            else
            if(layra ==1) self.RemoveChonNangCap(inBag.id);
            else
            if(chon == 1)
            self.ChooseInNangCap(inBag);
            else 
            if(vut == 1)
            self.comfirmSell(inBag.id);
            else 
            self.comfirmVutItem(inBag.id);

        });
       

        closeButton.on('pointerover', () => {
            closeButton.clear();
            closeButton.lineStyle(1, 0x000000, 1);
            closeButton.beginFill(0x49be62, 1);
            closeButton.drawRoundedRect(0, 0, boxBackground.getBounds().width * 0.2, boxBackground.getBounds().width * 0.2, 10);
            closeButton.endFill();
        });

        closeButton.on('pointerout', () => {
            closeButton.clear();
            closeButton.lineStyle(1, 0x000000, 1);
            closeButton.beginFill(0xd68f32, 1);
            closeButton.drawRoundedRect(0, 0, boxBackground.getBounds().width * 0.2, boxBackground.getBounds().width * 0.2, 10);
            closeButton.endFill();
        });


        

        let closeText = new PIXI.Text(bora ==1 ? 'Lấy ra' :catvao == 1 ? 'Cất vào' : layragiaodich ==1 ? 'Bỏ ra' : giaodich == 1 ? 'Chọn' : layra  == 1 ? 'Lấy ra' : chon == 1 ? 'Chọn' : vut == 0 ? 'Vứt' : 'Bán', {
            fontFamily: 'Arial',
            fontSize: 16,
            fill: 0x532905,
            fontWrap: true,
            align: 'center',
            WrapWidth: useButton.getBounds().width
        });
        closeText.style.fontWeight = 'bold';
        closeText.style.fontSize = itemPos.height * 0.25;
        closeText.resolution = 2;
        closeText.x = (closeButton.getBounds().width - closeText.getBounds().width) / 2;
        closeText.y = (closeButton.getBounds().height - closeText.getBounds().height) / 2;
        closeButton.addChild(closeText);

        useContainer.addChild(useButton, closeButton);


        if(inItem.type == 'trangbi' && inBag.active == 'hanhtrang' && my.detu && my.detu.id) {
            let useButtonDetu = new PIXI.Graphics();
            useButtonDetu.name = 'since04';
            useButtonDetu.lineStyle(1, 0x000000, 1);
            useButtonDetu.beginFill(0xd68f32, 1);
            useButtonDetu.drawRoundedRect(0, 0, boxBackground.mwidth * 0.2, boxBackground.mwidth * 0.2, 10);
            useButtonDetu.endFill();
            useButtonDetu.interactive = true;
            useButtonDetu.buttonMode = true;
            let self = this;
            useButtonDetu.on('pointerdown', () => {
                if(layragiaodich ==1 || giaodich == 1)  return this.notice(this._('Không thể thực hiện khi đang giao dịch'));
                self.useItemDetu(inBag.id);
            }
            );
            // move mouse to useButton change background
            useButtonDetu.on('pointerover', () => {
                useButtonDetu.clear();
                useButtonDetu.lineStyle(1, 0x000000, 1);
                useButtonDetu.beginFill(0x49be62, 1);
                useButtonDetu.drawRoundedRect(0, 0, boxBackground.mwidth * 0.2, boxBackground.mwidth * 0.2, 10);
                useButtonDetu.endFill();
            }
            );
            // move mouse out of useButton change background
            useButtonDetu.on('pointerout', () => {
                useButtonDetu.clear();
                useButtonDetu.lineStyle(1, 0x000000, 1);
                useButtonDetu.beginFill(0xd68f32, 1);
                useButtonDetu.drawRoundedRect(0, 0, boxBackground.mwidth * 0.2, boxBackground.mwidth * 0.2, 10);
                useButtonDetu.endFill();
            }
            );


            let useTextDetu = new PIXI.Text('Đệ tử', {
                fontFamily: 'Arial',
                fontSize: 16,
                fill: 0x532905,
                fontWrap: true,
                align: 'center',
                WrapWidth: useButtonDetu.getBounds().width, 
                WrapHeight: useButtonDetu.getBounds().height
            });
            useTextDetu.name ="since04";
            useTextDetu.style.fontWeight = 'bold';
            useTextDetu.style.fontSize = itemPos.height * 0.25;
            useTextDetu.resolution = 2;
            useTextDetu.x = (useButtonDetu.getBounds().width - useTextDetu.getBounds().width) / 2;
            useTextDetu.y = (useButtonDetu.getBounds().height - useTextDetu.getBounds().height) / 2;
            useButtonDetu.addChild(useTextDetu);

            useContainer.addChild(useButtonDetu);
            useButtonDetu.x = closeButton.getBounds().x + closeButton.getBounds().width + 10;
            useButtonDetu.y = 0;
        }




        if(action.display == 'right')
        {
            boxBackground.x = this.gameWidth - boxBackground.width;
        }



        boxBackground.y = itemPos.y - boxBackground.getBounds().height + itemPos.height;

        if (boxBackground.y + boxBackground.getBounds().height + useContainer.getBounds().height > this.gameHeight) {
            boxBackground.y = this.gameHeight - boxBackground.getBounds().height - 10 - useContainer.getBounds().height;
        }

        if (boxBackground.y < 0) {
            boxBackground.y = 10;
        }


        useContainer.x = boxBackground.getBounds().x + (boxBackground.getBounds().width - useContainer.getBounds().width) / 2;
        useContainer.y = boxBackground.getBounds().height + boxBackground.getBounds().y;


        let point = 0;
        if(this.pcKey == 'Enter') this.pcKey = '1';

        let banphimPc = setInterval(() => {
            if(this.boxPreviewItem.children.length <= 0)
            {
                clearInterval(banphimPc);
                return false;
            }

            let children = useContainer.children.filter(e => e.name == 'since04');
            let event = this.pcKey;

            if (event === 'ArrowLeft') {
                point -= 1;
                if(point <0) point = children.length-1;

            } else if (event === 'ArrowRight') {
                point += 1;
                if(point >= children.length) point = 0;
            }

            if (event === 'ArrowUp') {
                self.boxPreviewItem.removeChildren();
               
            } else if (event === 'ArrowDown') {
                self.boxPreviewItem.removeChildren();
                
            }

            if(event === 'Enter') {
                let current = children[point];
                let event = self.getAllInteractiveChildren(current);
                if(event.length > 0) {
                    event[0].emit('pointerdown');
                    event[0].emit('pointerup');
                    this.boxPreviewItem.removeChildren();
                }
            }

            if(children[point] && self.pcKey.length >=1) {
                for(let i = 0; i < children.length; i++) {
                    children[i].removeChild(children[i].getChildByName('xanhle'));
                }

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
                let eventclick = self.getAllInteractiveChildren(current);

                if(eventclick.length > 0) {
                    background.interactive = true;
                    background.cursor = 'pointer';
                    // coppy interacive from children[point]
                    background.on('pointerdown', () => {
                        eventclick[0].emit('pointerdown');
                        this.boxPreviewItem.removeChildren();

                    });
                    background.on('pointerup', () => {
                        eventclick[0].emit('pointerup');
                        this.boxPreviewItem.removeChildren();
                    });

                }
            }


            this.pcKey = '';
        },this.app.ticker.deltaMS);




    }

}


export default Since04PrviewItem;