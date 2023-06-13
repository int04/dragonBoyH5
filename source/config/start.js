import { reviceWebSocket } from "../game/revicews.js";

import { assetCayCoi, assetDat, assetEff, assetKhac, assetNhaCua, assetTrangTri } from "./source/asset.js";



class loadGame extends reviceWebSocket {
  constructor() { 
      super();
      this.assetStartGame();

  }

  AwaitLoadSheet = async () => {
      let src = this.srcSheet;
      // mutile load src and callback
      await src.forEach( async (element)  => {
        // load .json file
        let list = await fetch('/assets/sheet/'+element+'.json');
        let json = await list.json();
        try 
        {
          let sheet = json.frames;
          let bigImg = json.meta.image;
          let src = PIXI.Texture.from('/assets/sheet/'+bigImg+'', {
            resourceOptions : {
                createBitmap : true,
            }, 
            });
          for(let i in sheet) 
          {
            let obj = sheet[i].frame;
            let name2 = i.replace('.png','');
            this.listBigSheet.push({n : name2, t : bigImg, x : obj.x, y : obj.y, w : obj.w, h : obj.h});
          }

        }
        catch(e)
        {
          console.log(e)
        }
      });
      
  }

  async assetStartGame() 
  {

      await this.AwaitLoadSheet();
      console.log('load sheet done')
      assetEff.forEach(element => {

          this.assets.push({name: element, url: '/assets/map/eff/'+element+'.png'});
          
        });
      
      
        assetCayCoi.forEach(element => {
          
          this.assets.push({name: element, url: '/assets/map/caycoi/'+element+'.png'});
        });
      
        assetDat.forEach(element => {
      
          this.assets.push({name: element, url: '/assets/map/dat/'+element+'.png'});
         
        });
      
        assetKhac.forEach(element => {
      
          this.assets.push({name: element, url: '/assets/map/khac/'+element+'.png'});
       
        });
      
        assetNhaCua.forEach(element => {
         
          this.assets.push({name: element, url: '/assets/map/nhacua/'+element+'.png'});
        });
      
        assetTrangTri.forEach(element => {
      
          this.assets.push({name: element, url: '/assets/map/trangtri/'+element+'.png'});
         
        });

        console.log( this.assets)

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      } else {
        this.PC = true;
      }

      await PIXI.Assets.load('/assets/item/saoden.png')

      await PIXI.Assets.load('/assets/item/saoxanh.png')
      await PIXI.Assets.load('/assets/char/close.png')
    
      await PIXI.Assets.load('/assets/char/myTexture2dbtX-resources.assets-1494.png')
      await PIXI.Assets.load('/assets/char/loadgame.png');
      await PIXI.Assets.load('/assets/char/myTexture2dPea1-resources.assets-859.png');
      await PIXI.Assets.load('/assets/char/myTexture2dPea0-resources.assets-813.png');
    
      await PIXI.Assets.load('/assets/char/change.png');
      await PIXI.Assets.load('/assets/char/change_click.png');
    
      await PIXI.Assets.load('/assets/char/skill.png');
      await PIXI.Assets.load('/assets/char/skill_click.png');
    
      await PIXI.Assets.load('/assets/char/bg_attack.png');
      await PIXI.Assets.load('/assets/char/bg_attack_click.png');
     
       await PIXI.Assets.load('/assets/char/myTexture2darrow-resources.assets-279.png');
       await PIXI.Assets.load('/assets/char/myTexture2darrow2-resources.assets-910.png');
       await PIXI.Assets.load('/assets/char/myTexture2dchat-resources.assets-101.png');
       await PIXI.Assets.load('/assets/char/myTexture2dchat2-resources.assets-430.png');
       await PIXI.Assets.load('/assets/char/chat-resources.assets-749.png');
       await PIXI.Assets.load('/assets/char/chat2-resources.assets-1613.png');
       await PIXI.Assets.load('/assets/char/giaotiep.png');
       await PIXI.Assets.load('/assets/char/4028.png');
       await PIXI.Assets.load('/assets/char/Small189.png');
       await PIXI.Assets.load('/assets/char/zeni.png');
       await PIXI.Assets.load('/assets/char/kimcuong.png');
       await PIXI.Assets.load('/assets/char/516.png');

      this.loadCanvas();

    
     
  }


}



class playGame extends loadGame {
  constructor() { 
      super();
      this.cacheMap = [];
  }


}


export {playGame, loadGame};