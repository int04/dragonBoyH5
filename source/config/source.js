
import Since04SheetImges from './sheet.js';
import ao from './source/ao.js';
import caitrang from './source/caitrang.js';
import dau from './source/dau.js';
import quan from './source/quan.js';
import quai from './source/quai.js';
import skill from './source/srcskill.js';
import base_co from './source/co.js';
import npc from './source/npc.js';
import {spriteComBo, base_combo} from './source/combo.js';
export default class source extends Since04SheetImges {
    constructor() {
        super();
        this.images = [];
        this.assets = [];
        this.nhapPath(ao);
        this.nhapPath(caitrang);
        this.nhapPath(dau);
        this.nhapPath(quan);
        this.nhapPath(quai);
        this.nhapPath(npc);
        this.PC = 0;
        this.skill_active = [];
        this.item = [];
        this.skill = skill;

        this.base_co = base_co;

        this.spriteComBo = spriteComBo;
        this.base_combo = base_combo;

        this.createObjectItem();

        console.log(this.images)
    }

    danhHieu = (sucmanh) => {
        return 'Tân binh';
    }

    nhapPath(path) {
        for(let i = 0; i < path.length; i++) {
            this.images.push(path[i]);
        }
    }

    getSkin(name) 
    {
        let skin = this.images.find(e => e.name == name);
        if(!skin) return this.images[0];
        return skin;
    }

    coverImgMap = (url) => {

        let sheet = this.coverSheet(url);
        if(sheet) return sheet;

        let find = this.assets.find(e => e.name == url);

        let src = PIXI.Texture.from(find.url, {
            resourceOptions : {
                createBitmap : false,
            }, 
            });
        return src;
    }

    coverImg(name,folder = 'char') 
    {
        // check Sheet 
        let sheet = this.coverSheet(name);
        if(sheet) return sheet;
        
        if(typeof name == 'number') name = name.toString();
        let src = PIXI.Texture.from('/assets/'+folder+'/'+name+'.png', {
            resourceOptions : {
                createBitmap : false,
            }, 
            });
        return src;
    }

    number_format = function(number) 
    {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    usedSkill = function(id) {
        let re = this.skill_active.find(e => e.id == id);
        if(!re) return false;
        return re;
    }

    getImg  = function(name) {
        let imgx = this.images.find((image) => {
            return image.name == name;
        });
        return imgx;
    };

    getFarm =  function (name, num, type) {
        let skin = this.getSkin(name);
        if(!skin) return false;
        skin = skin.farm[0];
        let old = skin;
        skin = skin[type];
        if(!skin) {
            for(let g in old) 
            {
                skin = old[g];
                console.log(skin)
                break;
            }
        }
        if(num > skin.farme.length) num = 0;
        return skin.farme[num];
    };

    checkSkill = function(name, level) {
    
        const skillElement = this.skill.find(element => element.name === name);
        if (skillElement) {
            const srcElement = skillElement.src.find(e => e.level === level);
            if (srcElement) {
                return srcElement;
            }
        }
    }

    deleteSkill = function (id) {
        // set type = delete
        let check = this.dataSkill.find(element => element.id === id);
        if (check) {
            check.type = 'delete';
        }
    }

    rand = function(min,max) 
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    createObjectItem = function() {
        this.itemTypeName = {
            hp : {
                name : 'HP',
                type : '+',
            },
            giap : {
                name : 'Giáp',
                type : '+',
            },
        
            chimang : {
                name : 'Chí mạng',
                type : '%',
            },
            sucdanh : {
                name : 'Sức đánh',
                type : '+',
            },
            ki : {
                name : 'Ki',
                type : '+',
            },
            hutmau : {
                name : '% HP từ đòn đánh',
                type : '%',
            },
            hoimau : {
                name : '% HP sau 30s',
                type : '%',
            },
            hoiki : {
                name : '% KI sau 30s',
                type : '%',
            },
            hutki : {
                name : '% KI từ đòn đánh',
                type : '%',
            },
            hoiki30s : {
                name : ' KI sau 30s',
                type : '%',
            },
            hoihp30s : {
                name : ' HP sau 30s',
                type : '%',
            },
            phandon : {
                name : '% Phản đòn',
                type : '%',
            },
            hoichieu : {
                name : '% Hồi chiêu',
                type : '%',
            },
            gocgiap : {
                name : '% Giáp',
                type : '%',
            },
            gochp : {
                name : '% HP',
                type : '%',
            },
            gocki : {
                name : '% Ki',
                type : '%',
            },
            gocsucdanh : {
                name : '% Sức đánh',
                type : '%',
            },
        
        }
    }

}