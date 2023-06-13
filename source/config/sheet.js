import Since04Graphics from './graphics.js';

export default class Since04SheetImges extends Since04Graphics {
    constructor() {
        super();
        this.publicListSheet = []; 
        this.insertSheet();
        this.srcSheet = ['dam'];
        this.listSheet = []; // size use
        this.listBigSheet = []; // toàn bộ các sheet
        /**
         * loading toàn bộ sheet vào listBigSheet
         * lấy từ listSHeet, chưa có thì load từ listbigSheet sau đó xóa listBigSheet
         */
        this.loadBigSite = true;
        this.listSheetEmpty = []; // danh sách sheet rỗng
    }

    checkSheet(name)  {
        let sheet = this.publicListSheet.find(e => e.name == name);
        if(sheet) return sheet;
        return false;
    }


    coverSheet(name) 
    {
        if(this.loadBigSite && this.listSheetEmpty.findIndex(e => e == name) == -1)
        {
            let sheet = this.listSheet.find(e => e.n == name);
            if(!sheet)
            {
                sheet = this.listBigSheet.find(e => e.n == name);
                if(sheet) {
                    this.listSheet.push(sheet);
                }
            }

            if(sheet) 
            {
                let src = PIXI.Texture.from('/assets/sheet/'+sheet.t+'', {
                    resourceOptions : {
                        createBitmap : false,
                    }, 
                    });
                let run = new PIXI.Sprite(src);
                let newsrc = new PIXI.Texture(run.texture, new PIXI.Rectangle(sheet.x, sheet.y, sheet.w, sheet.h));
                return newsrc;
            }
            else 
            {
                this.listSheetEmpty.push(name);
            }
        }


        let sheet = this.checkSheet(name);
        if(sheet)
        {
            let src = PIXI.Texture.from('/assets/char/'+sheet.sheet+'.png', {
                resourceOptions : {
                    createBitmap : false,
                }, 
                });
            let run = new PIXI.Sprite(src);
            let newsrc = new PIXI.Texture(run.texture, new PIXI.Rectangle(sheet.x, sheet.y, sheet.w, sheet.h));
            return newsrc;
        }
        return false;
    }

    insertSheet = () => {
        this.publicListSheet.push(
            //{name : '', sheet : 'big', x : , y : , w : , h : },
            {name : '259', sheet : 'big1', x : 243, y :826, w : 104, h : 120},
            {"name":"260","sheet":"big1","x":255,"y":768,"w":105,"h":120},
            {"name":"261","sheet":"big1","x":331,"y":308,"w":88,"h":84},
            {"name":"262","sheet":"big1","x":319,"y":517,"w":88,"h":84},
            {"name":"182","sheet":"big1","x":439,"y":413,"w":72,"h":45},
            {"name":"181","sheet":"big1","x":244,"y":227,"w":72,"h":48},
            {"name":"747","sheet":"big3","x":891,"y":0,"w":72,"h":48},
            {"name":"839","sheet":"big4","x":544,"y":94,"w":72,"h":45},
            {"name":"555","sheet":"big3","x":238,"y":634,"w":77,"h":90},
            {"name":"556","sheet":"big3","x":239,"y":726,"w":76,"h":44},
            {"name":"546","sheet":"big3","x":385,"y":450,"w":62,"h":79},
            {"name":"725","sheet":"big3","x":565,"y":416,"w":80,"h":56.00000000000001},
            
            );
    }

}