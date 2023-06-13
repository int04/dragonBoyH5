
import Since04Attack from '../game/attack.js';
class Since04Action extends Since04Attack {

    constructor() {
        super();
    }

    clickPlayer(info) 
    {
        this.setting.mouse = info.id;
    }

    randomAZ = function (n) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (let i = 0; i < n; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;

    }

    addEff = function (data) 
    {
    
        data.id = data.id == null ? this.randomAZ(10) : data.id;
        data.type = data.type == null ? 'skill' : data.type;
    
    
        // check exist id
        let check = this.dataSkill.find(element => element.id === data.id);
        if (check) {
            return;
        }
        else 
        {
            this.dataSkill.push(
              data
            )
            return data.id;
        }
    
    }

    bug(e) {
        console.log(e)
    }


    addSkill = function (name,level,startX,startY,aim,type = 'skill', id = null,dame = 0) 
    {
        if (id == null) {
            id = this.randomAZ(10);
        }
        // check exist id
        let check = this.dataSkill.find(element => element.id === id);
        if (check) {
            return;
        }
        else 
        {
            this.dataSkill.push(
                {
                id : id,
                type : type,
                name : name,
                level : level,
                startX : startX,
                startY : startY,
                aim : aim,
                }
            )
            return id;
        }
    
    }


    tangHP(now, soluong) 
    {
        soluong = soluong || 20;
        let can = 0;
        let datang = 0;
        while(soluong != datang) 
        {
            datang+= 20;
            can+= now/20 + now;
        }
        return Math.round(can);
    }
    
    tangSucDanh(now, soluong) 
    {
        soluong = soluong || 1;
        let can = 0;
        let datang = 0;
        while(soluong != datang) 
        {
            datang+= 1;
            if(now < 1000) 
            {
                can+= now/10 + now;
            }
            else 
            {
                can+= (now/10 + now)*100;
            }
        }
        return Math.round(can);           
    }
    
    tangchiMang(now) 
    {
        let can = 0;
        let datang = 0;
        let Array = [50,5000,25000,50000,125000,300000,400000];
    
        return Array[now]*1000000 || 0;
    }
    
    tangGiap(now,soluong) 
    {
        soluong = soluong || 1;
        let can =0;
        let datang = 0;
        while(soluong != datang) 
        {
            datang+= 1;
            if(now < 100) 
            {
                can+=now * 500000 / 50 + 500000;
            }
            else 
            if(now < 3000) 
            {
                can+= (now * 500000 / 50 + 500000)*10;
            }
            else 
            {
                can+= (now * 500000 / 50 + 500000)*100;
            }
        }
        return can;
    }
    
    
    intToM = num => {
        num = num.toString().replace(/[^0-9.]/g, '');
        if (num < 1000) {
            return num;
        }
        let si = [
          {v: 1E3, s: "K"},
          {v: 1E6, s: "Tr"},
          {v: 1E9, s: "Tỷ"},
          {v: 1E12, s: "T"},
          {v: 1E15, s: "P"},
          {v: 1E18, s: "E"}
          ];
        let index;
        for (index = si.length - 1; index > 0; index--) {
            if (num >= si[index].v) {
                break;
            }
        }
        return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
    };
    

    
    
    
}

export default Since04Action;