import allMsgBoxInGame from "./msgbox.js";
class createPlayBase extends allMsgBoxInGame {
    constructor() {
      super();
      console.log('createplayer.js')
      this.TaoSprite();
      
  
    }
  
    TaoSprite2() {
      this.NhanVatGoc.removeChildren();
      let my = this.my;
      let NhanVat = this.NhanVat;
      let NhanVatGoc = this.NhanVatGoc;
      for (let i = 0; i < 1; i++) {
          let load_quan = this.getSkin(this.my.skin.quan);
          let load_ao = this.getSkin(this.my.skin.ao);
          let load_dau = this.getSkin(this.my.skin.dau);
  
         
  
          let quan = new PIXI.Sprite(
              this.coverImg(load_quan.farm[0].dungyen.farme[0])
          );
  
          quan.scale.set(load_quan.farm[0].dungyen.width, load_quan.farm[0].dungyen.height);
          quan.sprite = 0;
          quan.name = "quan222";
  
  
        
  
          let ao = new PIXI.Sprite(
              this.coverImg(load_ao.farm[0].dungyen.farme[0])
          );
          ao.sprite = 0;
          ao.name = 'ao222';
  
          ao.scale.set(load_ao.farm[0].dungyen.width, load_ao.farm[0].dungyen.height);
  
          let dau = new PIXI.Sprite(
              this.coverImg(load_dau.farm[0].dungyen.farme[0])
          );
  
          dau.scale.set(load_dau.farm[0].dungyen.width, load_dau.farm[0].dungyen.height);
          dau.sprite = 0;
          dau.name = 'dau222';
  
          dau.x = load_dau.farm[0].dungyen.x;
  
          quan.x = load_quan.farm[0].dungyen.x;
  
          ao.x =load_ao.farm[0].dungyen.x;
  
          ao.load = 0;
  
         
          dau.y =  Math.abs(this.getImg(my.skin.quan).farm[0]["dungyen"].y);
          ao.y =  Math.abs(this.getImg(my.skin.dau).farm[0]["dungyen"].y) -  Math.abs(this.getImg(my.skin.ao).farm[0]["dungyen"].y);
          quan.y = Math.abs(this.getImg(my.skin.dau).farm[0]["dungyen"].y);
  
  
  
          this.NhanVatGoc.x = this.my.pos.x;
          this.NhanVatGoc.y = this.my.pos.y;
  
  
  
          this.NhanVatGoc.move = 'right';
  
          // remove phần tử mặc định
          //NhanVat.removeChild(foot, body);
       
          this.NhanVatGoc.addChild(quan, dau, ao);
  
  
          
  
  
          // anchor
  
          this.NhanVatGoc.scale.set(1.1,1.1)
  
      this.NhanVatGoc.x = NhanVat.x;
      this.NhanVatGoc.y = NhanVat.y;
      this.NhanVatGoc.visible = false;
      
      }
    }
  
    TaoSprite() {
  

      for (let i = 0; i < 1; i++) {
        let load_quan = this.getSkin(this.my.skin.quan);
        let load_ao = this.getSkin(this.my.skin.ao);
        let load_dau = this.getSkin(this.my.skin.dau);
  
        let quan = new PIXI.Sprite(this.coverImg(load_quan.farm[0].move.farme[0]));
  
        quan.scale.set(
          load_quan.farm[0].move.width,
          load_quan.farm[0].move.height
        );
        quan.sprite = 0;
        quan.name = "quan";
  
        let ao = new PIXI.Sprite(this.coverImg(load_ao.farm[0].move.farme[0]));
        ao.sprite = 0;
        ao.name = "ao";
  
        ao.scale.set(load_ao.farm[0].move.width, load_ao.farm[0].move.height);
  
        let dau = new PIXI.Sprite(this.coverImg(load_dau.farm[0].move.farme[0]));
  
        dau.scale.set(load_dau.farm[0].move.width, load_dau.farm[0].move.height);
        dau.sprite = 0;
        dau.name = "dau";
  
        dau.x = load_dau.farm[0].move.x;
        dau.y = load_dau.farm[0].move.y;
  
        quan.x = load_quan.farm[0].move.x;
        quan.y = load_quan.farm[0].move.y;
  
        ao.x = load_ao.farm[0].move.x;
        ao.y = load_ao.farm[0].move.y;
  
        ao.load = 0;
  
        dau.sety = 0;
        dau.setx = 0;
  
        quan.sety = 0;
        quan.setx = 0;
  
        ao.sety = 0;
        ao.setx = 0;
  
        this.NhanVat.x = this.my.pos.x;
        this.NhanVat.y = this.my.pos.y;
  
        this.NhanVat.move = "right";
  
      
        this.NhanVat.addChild(quan, dau, ao);
  
        this.NhanVat.name = "Nhân vật bản thân";
  
        this.NhanVat.scale.x = 1;
        this.NhanVat.pivot.x = this.NhanVat.width;
  
        // anchor
      
        this.NhanVat.visible = true;
        this.NhanVat.scale.x = -1;
        this.NhanVat.pivot.x = 0;
        this.NhanVat.scale.x *= 1.1;
        this.NhanVat.scale.y *= 1.1;
  
      }
    }
}
export default createPlayBase;