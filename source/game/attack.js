import snowlyVNattackDeTu from './detu_attack.js';
class snowlyvnAttack extends snowlyVNattackDeTu {
    constructor() {
        super();
    }


    reposiveSkillEff(data) {
        if (!data.type) return false;
        switch (data.type) {
        case 'thhs':
            this.addEff({
                type: 'nhapnhay',
                keyid: data.keyid,
                from: data.from,
            });
            this.addEff({
                type: 'tdhseff',
                keyid: data.keyid,
                from: data.from,
            });
            break;
        case 'dicuu':
            this.addEff({
                type: 'dicuu',
                keyid: data.keyid,
                from: data.from,
            });
            break;
        case 'duoccuu':
            this.addEff({
                type: 'chung',
                keyid: data.keyid,
                aim: data.from,
                src: this.createArray(1, 28),
                folder: 'other/buff',
                width: 250,
                height: 250,
            });
            break;
        default:
            this.addEff({
                type: data.type,
                keyid: data.keyid,
                from: data.from,
            });
        }


    }


    reposiveAttack(data) {
        let from = data.from; // người sử dụng
        let to = data.victim; // mục tiêu
        let idskill = data.id; // kĩ năng
        let lvKilluse = data.level; // level kĩ năng
        let infoSkill = this.usedSkill(idskill);
        let script = infoSkill.script;
        let delay = infoSkill.delay[lvKilluse];
        let eff = infoSkill.eff[lvKilluse];
        let effdelay = infoSkill.effdelay[lvKilluse];
        let detu = data.detu;
        let dataNhanVat;

        let my = this.my;
        let nguoichoi = this.Charset;
        let NhanVat = this.NhanVat;


        if (data.id == 5) {
            // quả cầu kênh khí 

            effdelay.forEach(e => {
                effdelay.forEach(e => {
                    this.addEff({
                        type: 'quacauKenhKi',
                        level: 1,
                        aim: from,
                        to: to,
                        name: 'quacauKenhKi',
                        keyid: data.keyid,
                        detu : detu,
                    })
                });
            });


            return false;
        }


        if (data.id == 4) {
            // kaioken

            setTimeout(() => {
                // thời gian delay hoàn tất
                // hiệu ứng kĩ năng
                eff.forEach(e => {

                    this.addEff({
                        name: e,
                        level: 1,
                        aim: to,
                        keyid: data.keyid,
                        type: infoSkill.ob,
                        by: from,
                        detu : detu,

                    })

                });

            }, delay);


            return false;
        }

        if (data.id == 1) {
            // đám dragon



            if (from == this.my.id) {
                dataNhanVat = this.NhanVat;
            } else {
                dataNhanVat = this.nguoichoi.getChildByName(from);

            }
            if(!dataNhanVat) return false;




            // hiệu ứng trước delay 

            effdelay.forEach(e => {
                this.addEff({
                    name: e,
                    level: lvKilluse,
                    startX: dataNhanVat.x,
                    startY: dataNhanVat.y,
                    aim: to,
                    type: infoSkill.ob,
                    by: from,
                    detu : detu,


                })
            });

            setTimeout(() => {
                // thời gian delay hoàn tất
                // hiệu ứng kĩ năng
                eff.forEach(e => {

                    this.addEff({
                        name: e,
                        level: lvKilluse,
                        startX: dataNhanVat.x,
                        startY: dataNhanVat.y,
                        aim: to,
                        type: infoSkill.ob,
                        by: from,
                        keyid: data.keyid,
                        detu : detu,

                    })
                });

            }, delay);

            return false;
        }

        if (data.id == 2 || data.id == 6 || data.id == 7) // kamejoko
        {

            if (from == my.id) {
                dataNhanVat = this.NhanVat;
            } else {
                dataNhanVat = this.nguoichoi.getChildByName(from);

            }
            if(!dataNhanVat) return false;

            script.forEach(element => {
                this.addAction({
                    id: from,
                    action: element
                })
            });

            // hiệu ứng trước delay 

            effdelay.forEach(e => {
                this.addEff({
                    name: e,
                    level: 1,
                    type: e,
                    aim: from,
                })
            });

            setTimeout(() => {
                // thời gian delay hoàn tất
                // hiệu ứng kĩ năng
                eff.forEach(e => {

                    this.addEff({
                        name: e,
                        level: 1,
                        startX: dataNhanVat.x,
                        startY: dataNhanVat.y,
                        aim: to,
                        type: infoSkill.ob,
                        by: from,
                        action: 'keepKame',
                        keyid: data.keyid,
                        detu : detu,

                    })
                });

            }, delay);


        }




    }

    numberAttack(num) 
    {
        if(this.checkKey()) return false;
        if(this.my.id <=0) return false; 
        let SkillDataOnScreen = this.SkillDataOnScreen;

        let oskill = -1;
        (num == 49)  && (oskill = 0);
        (num == 50)  && (oskill = 1);
        (num == 51)  && (oskill = 2);
        (num == 52)  && (oskill = 3);
        (num == 53)  && (oskill = 4);
        (num == 97) && (oskill = 0);
        (num == 98) && (oskill = 1);
        (num == 99) && (oskill = 2);
        (num == 100) && (oskill = 3);
        (num == 101) && (oskill = 4);
         
        if(this.setting.oskill == oskill) return this.interAttack();

        if (this.setting.oskill !=-1) SkillDataOnScreen.background[this.setting.oskill].tint = 0xffffff;
        SkillDataOnScreen.background[oskill].tint = 0x2cd158;
        this.setting.oskill = oskill;
    }

    interAttack() {
        if(this.checkKey()) return false;
        let my = this.my;
        let Charset = this.Charset;
        let setting = this.setting;
        let keysPressed = this.keysPressed;

        let muctieu = setting.mouse;
        let database = null;
        if (setting.mouse != 0 && setting.mouse != my.id && setting.mouse != undefined && setting.mouse != null && setting.mouse != -1) {
            database = Charset.find(e => e.id == setting.mouse);
        }

        if(database && database.type == 'item') {
            return this.ItemNhat(database.id);
        }

        if(database && database.type == 'zone') {
            return this.joinChuyenMap(database.id);
        }

        if(database && database.type == 'npc') {
            return this.talkWith(database.id);
        }


        if (setting.oskill <= -1) return this.bug('lỗi');

        if (my.oskill[setting.oskill] <= 0) return this.bug('không có lựa chọn'); // lấy thông tin ô kĩ năng của con trỏ

        let findskill = my.skill.find(e => e.id == my.oskill[setting.oskill]); // tìm kiếm thông tin kĩ năng level, time của bản thân
        if (!findskill) return this.bug('không tìm thấy kĩ năng'); // nếu không tìm thấy

        if (findskill.time > Date.now()) return this.bug('Chưa hồi xong'); // nếu thời gian chưa hồi xong




        let posKillUse = findskill.id; // id kĩ năng
        let lvKilluse = findskill.level; // level kĩ năng sử dụng

        

        let infoSkill = this.usedSkill(posKillUse);
        if (infoSkill) {

            if (!setting.mouse && infoSkill.type == 'attack') return this.bug('tấn công ko có mục'); // kiểm tra mục tiêu đánh là tấn công, đồng thời kĩ năng không phải là buff




            if (infoSkill.need && infoSkill.need == true && infoSkill.type == 'buff') {
                if (!database) return this.danger('Chưa có mục tiêu.');
                if (infoSkill.to && infoSkill.to == 'player' && database.type == 'mob') {
                    return this.danger('Mục tiêu không hợp lệ.');
                }
            }

            let ki = 0;

            if (infoSkill.kit == 1) ki = infoSkill.ki[lvKilluse];
            if (infoSkill.kit == 2) ki = my.info.chiso.kiFull / 100 * infoSkill.ki[lvKilluse];

            if (my.info.chiso.ki < ki) return this.danger('Không đủ KI để thực hiện'); // ki không đủ


            // add script cho Charset
            let script = infoSkill.script;
            let delay = infoSkill.delay[lvKilluse];
            let eff = infoSkill.eff[lvKilluse];
            let effdelay = infoSkill.effdelay[lvKilluse];


            // add cd skill
            console.log(infoSkill.time[lvKilluse])
            findskill.time = Date.now() + (infoSkill.time[lvKilluse] * 1000);
            findskill.lasttime = Date.now();
            
            let serverCode = 1;
            serverCode = database && database.type == 'mob' ? 1 : serverCode;
            serverCode = database && database.type == 'player' ? 2 : serverCode;

            if (infoSkill.type == 'attack') {
              
                this.to(-5,{
                    _1 : posKillUse,
                    _2 : muctieu,
                    _3 : serverCode,
                })
            } else {

                this.to(-7, {
                    _1 : posKillUse,
                    _2 : muctieu,
                    _3 : serverCode,
                })
               
            }

            keysPressed[13] = false;
            return false;

        }


    }



    reposiveAttackInfo(data) {

        let fromID = data.fromID;
        let toID = data.toID;
        let my = this.my;
        let Charset = this.Charset;

        if (fromID == my.id || toID == my.id) {
            if (fromID == my.id) {
                my.info.chiso.hp = data.from.hp;
                my.info.chiso.hpFull = data.from.hpFull;
                my.info.chiso.ki = data.from.ki;
                my.info.chiso.kiFull = data.from.kiFull;

                if (data.from.sucmanh) {
                    if ((data.from.sucmanh - my.info.coban.sucmanh) > 0) {
                        this.addEff({
                            type: 'congexp',
                            to: my.id,
                            value: Math.round(data.from.sucmanh - my.info.coban.sucmanh)
                        })
                    }
                    my.info.coban.tiemnang = data.from.tiemnang;
                    my.info.coban.sucmanh = data.from.sucmanh;

                }

            }

            if (toID == my.id) {
                my.info.chiso.hp = data.to.hp;
                my.info.chiso.hpFull = data.to.hpFull;
                my.info.chiso.ki = data.to.ki;
                my.info.chiso.kiFull = data.to.kiFull;

                if (data.to.sucmanh) {
                    if (data.to.sucmanh - my.info.coban.sucmanh > 0)
                        this.addEff({
                            type: 'congexp',
                            to: my.id,
                            value: Math.round(data.to.sucmanh - my.info.coban.sucmanh)
                        })
                    my.info.coban.tiemnang = data.to.tiemnang;
                }
            }
        }
        if (fromID != my.id || toID != my.id) {

            let from = Charset.find(e => e.id == fromID);
            let to = Charset.find(e => e.id == toID);
           

            if(this.my.detu && this.my.detu.id) {
                if(this.my.detu.id == fromID) 
                {
                    this.my.detu.info.chiso.hp = data.from.hp;
                    this.my.detu.info.chiso.hpFull = data.from.hpFull;
                    this.my.detu.info.chiso.ki = data.from.ki;
                    this.my.detu.info.chiso.kiFull = data.from.kiFull;
                    if(data.from.sucmanh) {
                        this.my.detu.info.coban.sucmanh = data.from.sucmanh;
                        this.my.detu.info.coban.tiemnang = data.from.tiemnang;
                    }
                }
                if(this.my.detu.id == toID)
                {
                    this.my.detu.info.chiso.hp = data.to.hp;
                    this.my.detu.info.chiso.hpFull = data.to.hpFull;
                    this.my.detu.info.chiso.ki = data.to.ki;
                    this.my.detu.info.chiso.kiFull = data.to.kiFull;
                    if(data.to.sucmanh) {
                        this.my.detu.info.coban.sucmanh = data.to.sucmanh;
                        this.my.detu.info.coban.tiemnang = data.to.tiemnang;
                    }

                }
            }

            if (from) {
                from.info.chiso.hp = data.from.hp;
                from.info.chiso.hpFull = data.from.hpFull;
                from.info.chiso.ki = data.from.ki;
                from.info.chiso.kiFull = data.from.kiFull;

                if (data.from.sucmanh) {

                    from.info.coban.sucmanh = data.from.sucmanh;
                    from.info.coban.tiemnang = data.from.tiemnang;
                }


            }
            if (to) {
                to.info.chiso.hp = data.to.hp;
                to.info.chiso.hpFull = data.to.hpFull;
                to.info.chiso.ki = data.to.ki;
                to.info.chiso.kiFull = data.to.kiFull;
                if (data.to.sucmanh) {
                    to.info.coban.sucmanh = data.to.sucmanh;
                    to.info.coban.tiemnang = data.to.tiemnang;
                }

            }

            
        }

        this.addEff({
            type: data.type,
            to: toID,
            value: data.value
        })



    }




}

export default snowlyvnAttack;
