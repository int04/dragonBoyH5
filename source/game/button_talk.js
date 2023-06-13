import Since04Sound from '../game/sound.js';


export default class Since04DataButtonTalk extends Since04Sound {
    constructor() {
        super();
    }

    talkAction(name){
        if(name == 'shop_buma') this.to(-21,'a2');
        if(name == 'shop_buma_vo') this.to(-21,'a3');
        if(name == 'nangcap')
        {
            this.danhSachItem = [];
            this.luaChonNangCap = 0;

            this.boxNangCapLv('ba');
        }

        if(name == 'duclo')
        {
            this.danhSachItem = [];
            this.luaChonNangCap = 1;

            this.boxNangCapLv('ba');
        }

        if(name == 'epsao')
        {
            this.danhSachItem = [];
            this.luaChonNangCap = 2;

            this.boxNangCapLv('ba');

        }
        if(name == 'ruongdo')
        {
            this.openRuongDo();
        }
    }
};