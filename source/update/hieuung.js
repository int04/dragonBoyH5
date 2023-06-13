import { Since04UpdateSprite } from "./actionplay.js";
class Since04UpdateSkillEFF extends Since04UpdateSprite 
{
    constructor() {
        super();
        requestAnimationFrame(this.init);
    }


    getEff(id) {
        let kiNang = this.kiNang;
        if (kiNang.getChildByName(id) == undefined) {
          let addnewskill = new PIXI.Container();
          addnewskill.id = id;
          addnewskill.name = id;
          kiNang.addChild(addnewskill);
          return addnewskill;
        } else {
          return kiNang.getChildByName(id);
        }
      }

    
      
    imgEff(chidren, name) {
        if (chidren.getChildByName(name) == undefined) {
          let img = new PIXI.Sprite();
          img.name = name;
          img.x = null;
          img.y = null;
          chidren.addChild(img);
          return img;
        } else {
          return chidren.getChildByName(name);
        }
      }
      
    textEff(chidren, name) {
        if (chidren.getChildByName(name) == undefined) {
          let text = new PIXI.Text();
          text.name = name;
          text.x  = null;
          text.y = null;
          chidren.addChild(text);
          return text;
        } else {
          return chidren.getChildByName(name);
        }
      }
      
    msgAttack = function(element)
      {
        this.to(-6,element.keyid);
      }


       resetAction = function(id) 
      {
        let my = this.my;
        let NhanVat = this.NhanVat;
        let nguoichoi = this.nguoichoi;

        let getPlayer = id == my.id ? NhanVat : nguoichoi.getChildByName(id);
        if(!getPlayer) return;
      
        getPlayer.actionReset = getPlayer.actionReset || 'dungyen';
        this.addAction({
          id : id,
          action : getPlayer.actionReset,
        })
      }
      
      checkAction = function(id, name) 
      {
        let my = this.my;
        let NhanVat = this.NhanVat;
        let nguoichoi = this.nguoichoi;
        let Charset = this.Charset;
        let infoPlayer = id == my.id ? my :this.Charset.find(e => e.id == id);
        if(!infoPlayer) return;
        if(!infoPlayer.info) return;
        if(!infoPlayer.info.act) return;
        if(infoPlayer.info.act != name) {
          infoPlayer.info.act = name;
          this.addAction({
            id : id,
            action : name,
          })
        }
      }
      
       createArray(start, max) {
        return Array.from({ length: max - start + 1 }, (_, i) => i + start);
      }
      

    init  = () => {
        let dataSkill = this.dataSkill;
        let logChat = this.logChat;

        dataSkill.forEach((element) => {
            
            if (!element.timeOfSkill) {
              element.timeOfSkill = Date.now() + 120 * 1000;
            } else if (element.timeOfSkill < Date.now()) {
              element.type = "delete";
            }
        
        
            if (element.dame >= 1) {
              let to = element.aim;
              let from = element.by;
        
              if (from == this.my.id) {
                if (this.my.info.chiso.hp <= 0) return (element.type = "delete");
              } else {
              }
            }
        
            if (element.type == "delete") {
              if (this.kiNang.getChildByName(element.id) != undefined) {
                this.kiNang.removeChild(this.kiNang.getChildByName(element.id));
              }
        
              this.dataSkill = this.dataSkill.filter(function (obj) {
                return obj.id !== element.id;
              });
            }

        
            if (element.type == "flyKI") {
              let addnewskill = this.getEff(element.id);
              let donDanh = this.imgEff(addnewskill, element.id);
              element.level = 1;
              let infoSkill = this.checkSkill(element.name, element.level);
              if(!infoSkill) return element.type = 'delete';
        
              let mucTieu = element.by == this.my.id ? this.NhanVat : this.nguoichoi.getChildByName(element.by);
              if(!mucTieu) return element.type = 'delete';
              let startSkill = infoSkill.start;
        
              donDanh.start = donDanh.start || 0;
              donDanh.time = donDanh.time+1 || 0;
        
              let quan = element.by == this.my.id ? this.NhanVat.getChildByName('quan') : mucTieu.getChildByName('playerQuan');
              if(!quan) return element.type = 'delete';
        
              donDanh.height = (mucTieu.getBounds().height / 100) * 200;
              donDanh.width = (mucTieu.getBounds().height / 100) * 300;
        
              if (mucTieu.huong == "right") {
                donDanh.x = mucTieu.x - donDanh.width - quan.width;
                donDanh.y = mucTieu.y - donDanh.height / 2;
              }
        
              if (mucTieu.huong == "left") {
                startSkill = infoSkill.end;
                donDanh.x = mucTieu.x + Math.abs(mucTieu.width) - donDanh.width / 2 -
                quan.width;
                  
                  
                donDanh.y = mucTieu.y - donDanh.height / 2;
              }
        
              if (donDanh.time % this.fps() == 0 && donDanh.time >= (this.fps()*5)) {
                donDanh.texture = this.coverImg(startSkill.src[donDanh.start]);
                donDanh.start++;
        
                if (donDanh.start >= startSkill.src.length) {
                  donDanh.start = 0;
                }
        
                donDanh.visible = true;
              }
        
        
        
             
            }
        
           
            
           
            
           
             
        
        
        
        
         
        
        
 
          });
        
          const bubblePadding = 10;
        
          this.logChat.forEach((message) => {
        
            if (this.Chat.getChildByName(message.id) == undefined) {
              const bubble = new PIXI.Graphics();
              bubble.name = message.id;
              bubble.id = message.id;
        
              const newmessage = new PIXI.Text(message.text, {
                fontSize: 13,
                fill: 0x000000,
                fontFamily: "arial",
                wordWrap: true,
                fontWeight : 'bold',
                wordWrapWidth: 100,
              });
        
              newmessage.wordWrapWidth = 200 - bubblePadding * 2;
              newmessage.resolution = 2;
              newmessage.name = message.id;
              newmessage.id = message.id;
              newmessage.anchor.set(0.5);
              newmessage.time = 0;
              newmessage.dem = 0;
        
              bubble.addChild(newmessage);
              newmessage.position.set(bubble.width / 2, bubble.height / 2 - 11);
              newmessage.resolution = 2;
              bubble.beginFill(0xffffff);
              bubble.drawRoundedRect(
                -bubblePadding,
                -bubblePadding,
                newmessage.width + bubblePadding * 2 < 110
                  ? 110
                  : newmessage.width + bubblePadding * 2,
                newmessage.height + bubblePadding * 2 < 50
                  ? 50
                  : newmessage.height + bubblePadding * 2,
                10
              );
              bubble.endFill();
        
              bubble.pivot.set(bubble.width / 2, bubble.height / 2);
        
              this.Chat.addChild(bubble);
            } else {
              let bubble = this.Chat.getChildByName(message.id);
              let mess = bubble.getChildByName(message.id);
        
              if (message.type == "delete") {
                this.Chat.removeChild(bubble);
                this.logChat = this.logChat.filter(function (obj) {
                  return obj.id !== message.id;
                });
                return false;
              }
        
              let mucTieuChat;
              let getinfoDau;
              if (message.uid == this.my.id) {
                mucTieuChat = this.NhanVat;
                getinfoDau = mucTieuChat.getChildByName("dau");
                if (!getinfoDau) return (message.type = "delete");
                bubble.position.set(
                  mucTieuChat.x - 7,
                  mucTieuChat.y - (mess.height + bubblePadding * 2) / 2
                );
              } else {
                mucTieuChat = this.nguoichoi.getChildByName(message.uid);                
                if (!mucTieuChat) return (message.type = "delete");
                if (mucTieuChat != undefined)
                  bubble.position.set(
                    mucTieuChat.x - 7,
                    mucTieuChat.y - (mess.height + bubblePadding * 2) / 2 - 30
                  );
              }
              if (mess.dem % 1 == 0) {
                if (mess.time >= 80*this.fps()) {
                  this.Chat.removeChild(bubble);
                  this.logChat = this.logChat.filter(function (obj) {
                    return obj.id !== message.id;
                  });
                }
              }
              mess.dem++;
              mess.time++;
            }
          });
        requestAnimationFrame(this.init);
    }
}

export default Since04UpdateSkillEFF;