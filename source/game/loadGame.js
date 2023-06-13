import createPlayBase from '../show/taonhanvat.js';

export default class Since04AwaitLoadingGame extends createPlayBase
{
    constructor() {
        super();
    }

    /**
     * @module loadGame
     * @desc: Kiểm tra các đối tượng trên bản đồ đã được tạo và hiển thị lên màn hình chưa, nếu chưa thì tiếp tục quay lại render.
     * @if  : Nếu đối tượng chưa render, có thể xẩy ra một số lỗi như: không thể cho NPC chạm đất, cho nhân vật chính khi vào bản đồ chạm đất (dẫn tới tình trạng lơ lửng).
     */

    successLoadGame = () => {
        this.cacheAction = [];
        this.Charset = [];
        this.resetNone();
        this.inGame.visible = true;
        this.loadGame.visible = false;
        this.vaomap = 1;
        this.xulynamdat(this.my.id);
        this.snowlyKeoMap();
    }

    checkCreateObjectOnMap = () => {
        let checkSpriteOnMap = function(globalthis, sprite) {
            let check = globalthis.children.find(e => e.name == sprite.name && e.type == sprite.type && e.x == sprite.x && e.y == sprite.y && e.src == sprite.src);
            if(check) return true;
            return false;
        }
        let coverMap = this.cacheMap.split("!");

        for (let i = 0; i < coverMap.length; i++) {
            let e = coverMap[i];
            if (e.length >= 1) {
                let element = {};
                let tach = e.split("^");
                element.name = tach[0];
                element.type = tach[1];
                let tach2 = tach[2].split(",");
                element.x = +tach2[0];
                element.y = +tach2[1];
                let sprite = element;
                sprite.x = element.x;
                sprite.y = element.y;
                sprite.width = element.width;
                sprite.height = element.height;
                sprite.name = element.name;
                sprite.src = element.name;
                
                if (sprite.type == 'nuida') {
                    if(!checkSpriteOnMap(this.bando_nuida, sprite)) return this.checkCreateObjectOnMap();
                } else
                if (sprite.type == 'nuixa') {
                    if(!checkSpriteOnMap(this.bando_nuixa, sprite)) return this.checkCreateObjectOnMap();
                } else
                if (sprite.type == 'nuixanua') {
                    if(!checkSpriteOnMap(this.bando_nuixanua, sprite)) return this.checkCreateObjectOnMap();
                } else
                if (sprite.type == 'bautroi') {
                    if(!checkSpriteOnMap(this.bando_bautroi, sprite)) return this.checkCreateObjectOnMap();
                } else
                if (sprite.type == 'che') {
                    if(!checkSpriteOnMap(this.bando_che, sprite)) return this.checkCreateObjectOnMap();

                } else {
                    if(!checkSpriteOnMap(this.bando, sprite)) return this.checkCreateObjectOnMap();
                }
            }

            // if last element
            if(i == coverMap.length -1)
            {
                this.successLoadGame();
            }
    
        }
    }
}