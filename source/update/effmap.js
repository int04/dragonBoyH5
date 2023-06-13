import Since04UpdateSkillEFF from './hieuung.js';

class Since04EffMap extends Since04UpdateSkillEFF {
    constructor() {
        super();
    }

    checkDiQuaCau = () => {
        let name = 'x22$26';
        let data = this.bando.children.filter(e => e.name == name);
        data.forEach(cau => {
            cau.yOld = cau.yOld || cau.y;
            cau.danhun = cau.danhun || 0;
            let conguoidung = 0;
            this.cacheAction.forEach(u => {
                let player = u.id == this.my.id ? this.NhanVat : this.nguoichoi.children.find(e => e.id == u.id);
                if(player)
                {
                    if(this.hitTestRectangle(player, cau) && player.act && player.act != 'fly' )
                    {
                        conguoidung = 1;
                    }
                }                
            });
            if(conguoidung == 1 && cau.danhun == 0)
            {
                cau.danhun = 1;
                cau.y = cau.yOld+3;
            }
            else if(conguoidung == 0 && cau.danhun == 1)
            {
                cau.danhun = 0;
                cau.y = cau.yOld-3;
            }
        });

    }
}
export default Since04EffMap;