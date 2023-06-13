let  item;


item = [
    {
        id : 0,
        avatar : "390",
        name : '',
        type : 'trangbi',
        type2 : 'ao',
        class : 'traidat',
        mota : 'Trang bị giúp tăng giáp.',
        motadai : 'Bạn sẽ trở nên đẹp trai và phong độ nhất thế giới khi bạn mặc trang phục này. Gái theo cứ phải ầm ầm và như nước. Chúc bạn may mắn.',
        level : 0,
        sao : 0,
        saotrong : 0,
        khoa : 0,
        info : {
            hp : 0, // tăng hp: vd 50
            giap : 0, // tăng giáp: vd 50 giáp
            chimang : 0, // tăng chí mạng: vd: 10
            sucdanh : 0, // tăng sức đánh
            ki : 0, // tăng ki
            hutmau : 0, // tăng % hút máu
            hoimau : 0, // tăng % hồi máu sau 30s
            hoiki30s : 0, // hổi ki sau 30s 
            hoihp30s : 0, // hồi hp sau 30s,
            hoiki : 0, // tăng % hồi ki sau 30s
            hutki : 0, // tăng % hút ki khi đánh
            phandon : 0, // tắng % phản lại đòn đánh
            hoichieu : 0, // giảm % thời gian hồi chiêu,
            gocgiap : 0, // tăng % giáp lấy từ gốc
            gochp : 0, // tăng % lượng hp gốc
            gocki : 0, // tăng % lượng ki gốc
            gocsucdanh : 0, // tăng % lượng sức đánh gốc
        }, 
        script : { // nếu là trangbi thì liên kết với script để thay ảnh nhân vật
            ao : "",
            quan : "",
            dau : "",  
            avatar : "",
        }

    }
    ,
    {
        id : 1,
        avatar : "390",
        name : 'Áo vải thô',
        type : 'trangbi',
        type2 : 'ao',
        class : 'traidat',
        mota : 'Trang bị giúp tăng giáp.',
        motadai : 'Bạn sẽ trở nên đẹp trai và phong độ nhất thế giới khi bạn mặc trang phục này. Gái theo cứ phải ầm ầm và như nước. Chúc bạn may mắn.',
        level : 0,
        sao : 0,
        saotrong : 0,
        khoa : 0,
        info : {
            hp : 0, // tăng hp: vd 50
            giap : 2, // tăng giáp: vd 50 giáp
            chimang : 0, // tăng chí mạng: vd: 10
            sucdanh : 0, // tăng sức đánh
            ki : 0, // tăng ki
            hutmau : 0, // tăng % hút máu
            hoimau : 0, // tăng % hồi máu sau 30s
            hoiki30s : 0, // hổi ki sau 30s 
            hoihp30s : 0, // hồi hp sau 30s,
            hoiki : 0, // tăng % hồi ki sau 30s
            hutki : 0, // tăng % hút ki khi đánh
            phandon : 0, // tắng % phản lại đòn đánh
            hoichieu : 0, // giảm % thời gian hồi chiêu,
            gocgiap : 0, // tăng % giáp lấy từ gốc
            gochp : 0, // tăng % lượng hp gốc
            gocki : 0, // tăng % lượng ki gốc
            gocsucdanh : 0, // tăng % lượng sức đánh gốc
        }, 
        script : { // nếu là trangbi thì liên kết với script để thay ảnh nhân vật
            ao : "STHDKHJcHw",
            quan : "",
            dau : "",  
            avatar : "",
        }

    }
]

let findItem = (id) => {
    let itemx = item.find(e => e.id == id);
    return itemx;
}
let findBag = (id) => {
    let bag = my.ruong.item.find(e => e.id == id);
    return bag;
}




let itemTypeName = {
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