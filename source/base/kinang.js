
let skill_active = [
    {
        'id' : -9,
        'type' : 'bidong',
        'name' : 'HP gốc',
        'object': 'hpGoc',
        'value' : {
            traidat : 20,
            saiyan : 20,
            namek : 20,
        }, // HP/20 + HP
        'class' : 'all', // tộc
        'avatar' : '567' 
    },
    {
        'id' : -8,
        'type' : 'bidong',
        'name' : 'KI gốc',
        'object': 'kiGoc',
        'value' : {
            traidat : 20,
            saiyan : 20,
            namek : 20,
        }, // HP/20 + HP
        'class' : 'all', // tộc
        'avatar' : '569' 
    },
    {
        'id' : -7,
        'type' : 'bidong',
        'name' : 'Sức đánh gốc',
        'object': 'sucdanhGoc',
        'value' : {
            traidat : 20,
            saiyan : 20,
            namek : 20,
        }, // HP/20 + HP
        'class' : 'all', // tộc
        'avatar' : '538' 
    },
    {
        'id' : -6,
        'type' : 'bidong',
        'name' : 'Chí mạng gốc',
        'object': 'chimangGoc',
        'value' : {
            traidat : [],
            saiyan : [],
            namek : [],
        }, // HP/20 + HP
        'class' : 'all', // tộc
        'avatar' : '568' 
    },
    {
        'id' : -5,
        'type' : 'bidong',
        'name' : 'Giáp gốc',
        'object': 'giapGoc',
        'value' : {
            traidat : 500000,
            saiyan : 500000,
            namek : 500000,
        }, // HP/500000 + HP
        'class' : 'all', // tộc
        'avatar' : '721' 
    },
    {
        id : 0,
        'name' : 'Đấm Dragon',
        'class' : 'traidat',
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'time' : [0,2.0,1.9,1.8,1.7,1.6,1.5,1.0], // thời gian hồi
        'dame' : [0,100,110,120,130,140,150,160], // sát thương
        'ki' : [0,2,5,8,11,15,21,26], // ki tiêu tốn
        'script' : ['attack'], // script của nhân vật
        'effdelay' : [[],[]], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [[], ['eff_attack']], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'attack', // loại kĩ năng: attack, buff, 
        'delay' : [0,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : -1,

    }
    ,
    {
        id : 1,
        'name' : 'Đấm Dragon',
        'class' : 'traidat',
        'mota' : 'Đòn đánh cận chiến',
        'dx' : 0.5,
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'kit' : 1,
        'time' : [0,0.5,1.9,1.8,1.7,1.6,1.5,0.3], // thời gian hồi
        'dame' : [0,100,110,120,130,140,150,160], // sát thương
        'ki' : [0,2,5,8,11,15,21,26], // ki tiêu tốn
        'script' : ['attack'], // script của nhân vật
        'effdelay' : [
            [],
            [],
            [], [], [], [], [], []
        ], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [[], ['eff_skill_dam'],['eff_skill_dam'],['eff_skill_dam'],['eff_skill_dam'],['eff_skill_dam'],['eff_skill_dam'],['eff_skill_dam']], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'attack', // loại kĩ năng: attack, buff, 
        'delay' : [0,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : 539,
        'ob' : 'donDam',

    }, 

    {
        id : 2,
        'name' : 'Kamejoko',
        'class' : 'traidat',
        'dx' : 10, 
        'mota' : 'Chưởng kamejoko của Quy Lão tiên sinh, có sức mạnh công phá lớn.',
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'kit' : 1,

        'time' : [0,3,2.9,2.8,2.7,2.6,2.5,2.6], // thời gian hồi
        'dame' : [0,150,170,185,200,220,230,240], // sát thương
        'ki' : [0,15,35,60,90,150,225,400], // ki tiêu tốn
        'script' : ['kamejoko'], // script của nhân vật
        'effdelay' : [
            [],
            [],
            [], [], ['het_traidat'], ['het_traidat'], ['het_traidat'], ['het_traidat']
        ], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [[], ['Kamejoko'],['Kamejoko'],['Kamejoko'],['Kamejoko'],['Kamejoko'],['Kamejoko'],['Kamejoko']], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'attack', // loại kĩ năng: attack, buff, 
        'delay' : [0,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : 540,
        'ob' : 'skill',

    }, 

    {
        id : 3,
        'name' : 'Thái dương hạ san',
        'mota' : 'Làm chói mắt kẻ thù',
        'class' : 'traidat',
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'kit' : 1,

        'time' : [0,3,19,18,16,15,14,13], // thời gian hồi
        'dame' : [0,3,4,5,6,7,8,9], // sát thương
        'ki' : [0,2,5,8,11,15,21,26], // ki tiêu tốn
        'script' : ['gong'], // script của nhân vật
        'effdelay' : [
            [],
            ['choang'],
            [], [], [], [], [], []
        ], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'buff', // loại kĩ năng: attack, buff, 
        'delay' : [0,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : 717,
        'ob' : 'skill',

    }

,
    {
        id : 4,
        'name' : 'Kaioken',
        'class' : 'traidat',
        'mota' : 'Đòn đánh với sát thương cực kì mạnh lên đối thủ',
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'kit' : 1,

        'time' : [0,0.9,0.8,0.7,0.6,0.5,0.4,0.3], // thời gian hồi
        'dame' : [0,170,180,190,200,210,220,230], // sát thương
        'ki' : [0,2,5,8,11,15,21,26], // ki tiêu tốn
        'script' : ['attack'], // script của nhân vật
        'effdelay' : [
            [],
            ['kaioken','nen_kaioken'],
            ['kaioken','nen_kaioken'], ['kaioken','nen_kaioken'], ['kaioken','nen_kaioken'], ['kaioken','nen_kaioken'], ['kaioken','nen_kaioken'], []
        ], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [[],['kaioken_attack'],['kaioken_attack'],['kaioken_attack'],['kaioken_attack'],['kaioken_attack'],['kaioken_attack'],['kaioken_attack']], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'attack', // loại kĩ năng: attack, buff, 
        'delay' : [0,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : 716,
        'ob' : 'donDamKaioKen',

    },

    {
        id : 5,
        'name' : 'Quả cầu kênh khí',
        'class' : 'traidat',
        'mota' : 'Hấp thụ toàn bộ năng lượng của vạn vật, tạo ra một quả cầu có sức mạnh công phá siêu lớn vào đối phương.',
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'kit' : 2,
        'time' : [0,3,19,18,16,15,14,13], // thời gian hồi
        'dame' : [0,2500,2800,3000,3100,3300,3500,4000], // sát thương
        'ki' : [0,2,5,8,11,15,21,26], // ki tiêu tốn
        'script' : ['gong'], // script của nhân vật
        'effdelay' : [
            [],
            ['quacauKenhKi'],
            ['quacauKenhKi'],
            ['quacauKenhKi'],
            ['quacauKenhKi'],
            ['quacauKenhKi'],
            ['quacauKenhKi'],
            ['quacauKenhKi'],
            ['quacauKenhKi'],
            ['quacauKenhKi'],
        ], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [[],['quacauKenhKi_attack'],['kaioken_attack'],['kaioken_attack'],['kaioken_attack'],['kaioken_attack'],['kaioken_attack'],['kaioken_attack']], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'attack', // loại kĩ năng: attack, buff, 
        'delay' : [10000,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : 711,
        'ob' : 'skill',

    }, 

    {
        id : 6,
        'name' : 'Atomic',
        'class' : 'traidat',
        'mota' : 'Chưởng atomic của người xaiyan, tấn công với nguồn năng lượng lớn.',
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'kit' : 1,

        'time' : [0,2,1.9,1.8,1.7,1.6,1.5,1.4], // thời gian hồi
        'dame' : [0,110,120,130,140,150,160,170], // sát thương
        'ki' : [0,10,14,25,30,75,100,150], // ki tiêu tốn
        'script' : ['kamejoko'], // script của nhân vật
        'effdelay' : [
            [],
            ['het'],
            ['het'], ['het'], ['het'], ['het'], ['het'], ['het']
        ], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [[], ['AtumoicEff'],['AtumoicEff'],['AtumoicEff'],['AtumoicEff'],['AtumoicEff'],['AtumoicEff'],['AtumoicEff']], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'attack', // loại kĩ năng: attack, buff, 
        'delay' : [0,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : 540,
        'ob' : 'skill',

    }, 

    {
        id : 7,
        'name' : 'Masenko',
        'class' : 'traidat',
        'mota' : 'Vận công của người Namek với tốc độ siêu nhanh.',
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'kit' : 1,

        'time' : [0,0.9,0.8,0.7,0.6,0.5,0.4,0.7], // thời gian hồi
        'dame' : [0,100,105,110,115,120,125,130], // sát thương
        'ki' : [0,2,4,8,10,12,15,20], // ki tiêu tốn
        'script' : ['kamejoko'], // script của nhân vật
        'effdelay' : [
            [],
            ['het_namek'],
            ['het_namek'], ['het_namek'], ['het_namek'], ['het_namek'], ['het_namek'], ['het_namek']
        ], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [[], ['masenkoName'],['masenkoName'],['masenkoName'],['masenkoName'],['masenkoName'],['masenkoName'],['masenkoName']], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'attack', // loại kĩ năng: attack, buff, 
        'delay' : [0,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : 540,
        'ob' : 'skill_one',

    }, 

    {
        id : 8,
        'name' : 'Tái tạo năng lượng',
        'mota' : 'Hồi phục HP và KI',
        'class' : 'traidat',
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'kit' : 1,

        'time' : [0,20,18,17,16,15,14,13], // thời gian hồi
        'dame' : [0,3,4,5,6,7,8,9], // tác dụng
        'ki' : [0,0,0,0,0,0,0,0,0,0], // ki tiêu tốn
        'script' : ['gong'], // script của nhân vật
        'obb' : 'taitaonangluong',
        'to' : 'me',
        'effdelay' : [
            [],
            ['taitaonnl'],
            [], [], [], [], [], []
        ], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'buff', // loại kĩ năng: attack, buff, 
        'delay' : [0,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : 720,
        'ob' : 'skill',

    }, 

    {
        id : 9,
        'name' : 'Trị thương',
        'mota' : 'Hồi phục KI và HP cho những người xung quanh',
        'class' : 'traidat',
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'kit' : 2, // 1 là trừ bình thường, 2 là trừ % hành trang

        'time' : [0,1,18,17,16,15,14,13], // thời gian hồi
        'dame' : [0,20,30,40,50,60,70,80], // tác dụng
        'ki' : [0,5,10,15,20,25,30,35], // ki tiêu tốn
        'script' : ['gong'], // script của nhân vật
        'obb' : 'taitaonangluong',
        'to' : 'player',
        'need' : true,
        'effdelay' : [
            [],
            ['taitaonnl'],
            [], [], [], [], [], []
        ], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'buff', // loại kĩ năng: attack, buff, 
        'delay' : [0,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : 724,
        'ob' : 'skill',

    }, 

    {
        id : 10,
        'name' : 'Tự phát nổ',
        'mota' : 'Tự biến bản thân thành quả boom để tiêu diệt đối phương.',
        'class' : 'traidat',
        'pos' : {
            x : 30,
            y : 20, // max
        }, 
        'kit' : 2,

        'time' : [0,3,19,18,16,15,14,13], // thời gian hồi
        'dame' : [0,100,110,120,130,140,150,160], // sát thương
        'ki' : [0,2,5,8,11,15,21,26], // ki tiêu tốn
        'script' : ['gong'], // script của nhân vật
        'effdelay' : [
            [],
            ['choang'],
            [], [], [], [], [], []
        ], // hiệu ứng đòn đánh trong thời gian chờ delay
        'eff' : [], // tên hiệu ứng
        'sound' : ['sound_attack'], // tên âm thanh
        'type' : 'buff', // loại kĩ năng: attack, buff, 
        'delay' : [0,0,0,0,0,0,0,0], // thời gian ra đòn.
        'avatar' : 2248,
        'ob' : 'skill',

    },
];

let addEff = function (data) 
{

    data.id = data.id == null ? randomAZ(10) : data.id;
    data.type = data.type == null ? 'skill' : data.type;


    // check exist id
    let check = dataSkill.find(element => element.id === data.id);
    if (check) {
        return;
    }
    else 
    {
        dataSkill.push(
          data
        )
        return data.id;
    }

}


let usedSkill = function(id) {
    let re = skill_active.find(e => e.id == id);
    if(!re) return false;
    return re;
}


function tangHP(now, soluong) 
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

function tangSucDanh(now, soluong) 
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

function tangchiMang(now) 
{
    let can = 0;
    let datang = 0;
    let Array = [50,5000,25000,50000,125000,300000,400000];

    return Array[now]*1000000 || 0;
}

function tangGiap(now,soluong) 
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


const intToM = num => {
    num = num.toString().replace(/[^0-9.]/g, '');
    if (num < 1000) {
        return num;
    }
    let si = [
      {v: 1E3, s: "K"},
      {v: 1E6, s: "M"},
      {v: 1E9, s: "B"},
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