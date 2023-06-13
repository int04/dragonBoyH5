import socketIoMsgpackParser from 'https://cdn.jsdelivr.net/npm/socket.io-msgpack-parser@3.0.2/+esm'

class cache {
    constructor() {
      this.gameInfo = {
        version : '0.0.1 Beta',
        name : 'Since04',
        gameName : 'Dragon Ball',
        timeloadWelcome : 2000, 
        font : ['PatrickHandSCRegular','PottaOne-Regular','fontchinh','chelthm','staccato'],

      }
      
      this.listMap = [];
      this.username = '';
      this.password = '';
      this.cacheAction = [];
      this.dataSkill = [];
      this.logNotice = [];
      this.logDanger = [];
      this.logChat = [];
      this.cacheMap = [];
      this.keysPressed = {};
      this.timeRoiTuDo = 0;
      this.actionOld = null;
      this.SkillDataOnScreen = {
        background : [],
        skill : [],
        time : [],
        texture : [],
    }
      this.my = {
        detu : {},
        server: 1,
        username: "since04",
        id: 1,
        name: "since04",
        tien: {
          zeni: 1000,
          vang: 10000000,
        },
        used: {
          dauthan: 0,
          dauthan_time: 10000,
        },
        eff: {
          choang: {
            time: 0,
            active: false,
          },
          taitaonangluong: {
            time: 0,
            active: false,
          },
        },
        skin_move: {
          ao: 0,
          quan: 0,
          dau: 0,
        },
        skin: {"ao":"STHDKHJcHw","quan":"tZMOAdgdmp","dau":"QbPhVhGmRc","bang":5},
        trangbi: {"ao":"78piCKxikT","quan":"EAKQaq4J1H","dau":0,"gang":"EkCVHjQLQ6","rada":"fkiyhdPrQt","giay":"7meqNjf54s","caitrang":0},
        ruong:  {"slot":30,"ruong":10,"item":[{"id":"EAKQaq4J1H","active":"trangbi","info":{"hp":86693,"giap":0,"chimang":0,"sucdanh":0,"ki":0,"hutmau":0,"hoimau":0,"hoiki30s":0,"hoihp30s":0,"hoiki":0,"hutki":0,"phandon":0,"hoichieu":0,"gocgiap":0,"gochp":0,"gocki":0,"gocsucdanh":0},"item":22,"soluong":1,"khoa":0,"level":6,"sao":[-1,-1,-1,-1,-1,-1,-1],"saotrong":0,"lastTime":1686619924318},{"id":"EkCVHjQLQ6","active":"trangbi","info":{"hp":0,"giap":0,"chimang":0,"sucdanh":2863,"ki":0,"hutmau":0,"hoimau":0,"hoiki30s":0,"hoihp30s":0,"hoiki":0,"hutki":0,"phandon":0,"hoichieu":0,"gocgiap":0,"gochp":0,"gocki":0,"gocsucdanh":0},"item":"36","soluong":1,"khoa":0,"level":6,"sao":[-1,-1,-1,-1,-1,-1,-1],"saotrong":0,"lastTime":1686632323204,"sit":1},{"id":"7meqNjf54s","active":"trangbi","info":{"hp":0,"giap":0,"chimang":0,"sucdanh":0,"ki":3647,"hutmau":0,"hoimau":0,"hoiki30s":0,"hoihp30s":0,"hoiki":0,"hutki":0,"phandon":0,"hoichieu":0,"gocgiap":0,"gochp":0,"gocki":0,"gocsucdanh":0},"item":"57","soluong":1,"khoa":0,"level":7,"sao":[-1,-1,-1,-1,-1,-1,-1],"saotrong":0,"lastTime":1686645033004,"sit":0},{"id":"78piCKxikT","active":"trangbi","info":{"hp":10,"giap":6,"chimang":100,"sucdanh":10000,"ki":1000,"hutmau":1000,"hoimau":1000,"hoiki30s":1000,"hoihp30s":1000,"hoiki":100,"hutki":100,"phandon":100,"hoichieu":100,"gocgiap":100,"gochp":100,"gocki":100,"gocsucdanh":100},"item":1,"soluong":1,"khoa":0,"level":4,"sao":0,"saotrong":0,"lastTime":1686631959746,"sit":1},{"id":"fkiyhdPrQt","active":"trangbi","info":{"hp":0,"giap":0,"chimang":16,"sucdanh":0,"ki":0,"hutmau":0,"hoimau":0,"hoiki30s":0,"hoihp30s":0,"hoiki":0,"hutki":0,"phandon":0,"hoichieu":0,"gocgiap":0,"gochp":0,"gocki":0,"gocsucdanh":0},"item":"45","soluong":1,"khoa":0,"level":7,"sao":[-1,-1,-1,-1,-1,-1,-1],"saotrong":0,"lastTime":1686619741240,"sit":0},{"id":"UWmNlvuiNp","active":"detu","info":{"hp":0,"giap":2,"chimang":0,"sucdanh":0,"ki":0,"hutmau":0,"hoimau":0,"hoiki30s":0,"hoihp30s":0,"hoiki":0,"hutki":0,"phandon":0,"hoichieu":0,"gocgiap":0,"gochp":0,"gocki":0,"gocsucdanh":0},"item":1,"soluong":1,"khoa":0,"level":0,"sao":0,"saotrong":0},{"id":"nsReG4obpd","active":"detu","info":{"hp":330,"giap":0,"chimang":0,"sucdanh":0,"ki":0,"hutmau":0,"hoimau":0,"hoiki30s":0,"hoihp30s":0,"hoiki":0,"hutki":0,"phandon":0,"hoichieu":0,"gocgiap":0,"gochp":0,"gocki":0,"gocsucdanh":0},"item":15,"soluong":1,"khoa":0,"level":0,"sao":0,"lastTime":1686482297379,"saotrong":0},{"id":"tYcjso26VA","active":"ruong","info":{"hp":0,"giap":678,"chimang":0,"sucdanh":0,"ki":0,"hutmau":0,"hoimau":0,"hoiki30s":0,"hoihp30s":0,"hoiki":0,"hutki":0,"phandon":0,"hoichieu":0,"gocgiap":0,"gochp":0,"gocki":0,"gocsucdanh":0},"item":12,"soluong":1,"khoa":0,"level":0,"sao":[-1,-1,0,0,0,0,0],"lastTime":1686554054810,"saotrong":0},{"id":"0VtDISCxcs","active":"ruong","info":{"hp":0,"giap":1621,"chimang":0,"sucdanh":0,"ki":0,"hutmau":0,"hoimau":0,"hoiki30s":0,"hoihp30s":0,"hoiki":0,"hutki":0,"phandon":0,"hoichieu":0,"gocgiap":0,"gochp":0,"gocki":0,"gocsucdanh":0},"item":12,"soluong":1,"khoa":0,"level":7,"sao":[-1,-1,-1,0,0,0,0],"lastTime":1686560586333,"saotrong":0,"sit":0},{"id":"p7XRiU","active":"ruong","item":"164","soluong":99,"lastTime":1686560589347,"khoa":0},{"id":"qSbDjT","active":"ruong","item":"165","soluong":99,"lastTime":1686560593381,"khoa":0},{"id":"XKyoF5","active":"ruong","item":"163","soluong":99,"lastTime":1686560596042,"khoa":0},{"id":"WLs4aX","active":"ruong","item":"166","soluong":2,"khoa":0,"level":0,"sao":0,"saotrong":0,"lastTime":1686561259016},{"id":"her5gJ","active":"hanhtrang","item":"154","soluong":4,"khoa":1,"lastTime":1686574424126},{"id":"iwUxRf","active":"hanhtrang","item":"160","soluong":2,"lastTime":1686574425894,"khoa":1},{"id":"xrj7fBuO56","active":"hanhtrang","item":"162","soluong":999,"lastTime":1686633499598,"khoa":0},{"id":"02Nhh5rTff","active":"hanhtrang","item":"165","soluong":900,"lastTime":1686633516745,"khoa":0},{"id":"VbpZGYEGYl","active":"hanhtrang","item":"164","soluong":900,"lastTime":1686636564410,"khoa":0},{"id":"Ba76zQ3rH6","active":"hanhtrang","item":"163","soluong":900,"lastTime":1686636565530,"khoa":0},{"id":"K91kT6RUsh","active":"hanhtrang","item":"161","soluong":536,"lastTime":1686636566639,"khoa":0},{"id":"zOOR97brD2","active":"hanhtrang","info":{"hp":0,"giap":6,"chimang":0,"sucdanh":0,"ki":0,"hutmau":0,"hoimau":0,"hoiki30s":0,"hoihp30s":0,"hoiki":0,"hutki":0,"phandon":0,"hoichieu":0,"gocgiap":0,"gochp":0,"gocki":0,"gocsucdanh":0},"item":1,"soluong":1,"khoa":0,"level":4,"sao":[-1,-1,-1,-1,-1,-1,0],"lastTime":1686644856733,"saotrong":0,"sit":1},{"id":"I0EV7DkhQB","active":"hanhtrang","info":{"hp":780,"giap":0,"chimang":0,"sucdanh":0,"ki":0,"hutmau":0,"hoimau":0,"hoiki30s":0,"hoihp30s":0,"hoiki":0,"hutki":0,"phandon":0,"hoichieu":0,"gocgiap":0,"gochp":0,"gocki":0,"gocsucdanh":0},"item":17,"soluong":1,"khoa":0,"level":0,"sao":0,"lastTime":1686645046747,"saotrong":0},{"id":"luoAQ0","active":"ruong","item":"155","soluong":1,"lastTime":1686645073161,"khoa":1},{"id":"Osnj4CwLth","active":"hanhtrang","item":"158","soluong":1,"lastTime":1686648664890,"khoa":1}]},
        skill: [
          { id: 1, level: 7, time: 1684325615204, lasttime: 1684325614904 },
          { id: 2, level: 7, time: 1684303564825, lasttime: 1684303562225 },
          { id: 3, level: 1, time: 1684216005305, lasttime: 1684216002305 },
          { id: 4, level: 7, time: 1684388722062, lasttime: 1684388721762 },
          { id: 5, level: 1, time: 1684342986727, lasttime: 1684342983727 },
          { id: 6, level: 1, time: 1684161602323, lasttime: 1684161600323 },
          { id: 7, level: 1, time: 1684224677306, lasttime: 1684224676406 },
          { id: 9, level: 7, time: 1684342968720, lasttime: 1684342955720 },
          { id: 8, level: 7, time: 1684388750012, lasttime: 1684388737012 },
          { id: 10, level: 1, time: 1684388742108, lasttime: 1684388739108 },
        ],
        oskill: [1, 2, 4, 3, 5],
  
        info: {
          chiso: {
            suckhoe: 50,
            suckhoe_max: 100,
            hp: 500000,
            hpFull: 1000000,
            ki: 500000,
            kiFull: 1000000,
            sucdanh: 10000,
            giap: 1000,
            chimang: 10,
  
            hoiKi: 0, // % hồi ki sau 30s
            hoiMau: 0, // % hồi máu sau 30s
            hutKi: 0, // % hút ki từ đòn đánh
            hutMau: 0, // % hút máu từ đòn đánh
            phanDon: 0, // % phản đòn khi bị đánh
            hoiChieu: 0, // giảm % hồi chiêu
            gocGiap: 0, // tăng % giáp gốc
            gocHp: 0, // Tăng % hp gốc
            gocKi: 0, // tăng % ki gốc
            gocSucDanh: 0, // tăng % sức đánh
  
            hoiki30s: 0, // hổi ki sau 30s
            hoihp30s: 0, // hồi hp sau 30s,
  
            hpGoc: 1000000, // thông tin góc
            kiGoc: 1000000, // thông tin gốc
            sucdanhGoc: 10000, // thông tin gốc
            giapGoc: 1000, // thông tin gốc
            chimangGoc: 0, // thông tin gốc
          },
          coban: {
            sucmanh: 70000000000,
            tiemnang: 10000,
            tiemnangFull: 100000,
            avatar: "516",
            type: "traidat",
          },
          speed: 6,
          act: "attack",
          move: "right",
        },
        pos: {
          x: 600,
          y: -48,
          map: 1,
          zone: 0,
        },
      };
      this.Charset = [];
      this.ws = null;
      this.CallWebsocket();
      this.methodWebsocket();
      this.setting = {
        'camdi' : 0,
        'mouse' : 0, // id mouse
        'type' : null,
        'blockcanvas' : false,
        'oskill' : -1,
        'setting' : {
          'eff' : true,
        },
        'sprite' : {
          width : 48,
          height : 20,
    
        }
    }
    this.CreatedCookie();
    }

    getCookie = (cname) => {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {

          let c = ca[i];
          while (c.charAt(0) == ' ') {
          c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
          }
      }
      return "";
    }

    setCookie = (cname, cvalue, exdays) => {
      let d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    CreatedCookie() 
    {
      this.username = 'admin';
      this.password = 'test';
    }

  
    addAction(data = null) 
  {
      let obj = {};
      // check type data of my
      let Charset = this.Charset;
      let cacheAction = this.cacheAction;
      // check exist id
      let my = this.my;
      if(data == null) data = {id : my.id, action : my.info.act};
  
      /*
      if(my.id == data.id && this.actionOld != data.action) {
        this.actionOld = data.action;
        this.to(-11,this.actionOld);
      }
      */
  
      if(data.action == undefined) {
        console.log('set phu',data)
        data.action = 'move';
      }
  
      let infoPlayer = data.id == my.id ? my : Charset.find(e => e.id == data.id);
      if(!infoPlayer || !infoPlayer.info || !infoPlayer.info.act) return;
  
      infoPlayer.info.act = data.action;
  
      let check = cacheAction.find(element => element.id === data.id);
      if (check) {
          if(check.action == data.action)
          return;
          // delete
          this.delAction(check);
      }
      obj.action = data.action;
      obj.id = data.id;
      cacheAction.push(obj);
  }
  
  delAction = function(data)
  {
      let cacheAction = this.cacheAction;
      let index = cacheAction.findIndex(element => element.id === data.id);
      if (index !== -1) cacheAction.splice(index, 1);
  }
  
   danger = function(txt) 
  {
    // check exist
    let check = this.logDanger.find(element => element === txt);
    if (check) {
        return;
    }
    else
    {
      this.logDanger.push(txt);
    }
  }

    methodWebsocket () 
    {
      this.send = function (name, data) {
        
      }

      this.to = function (name,data) {
        if(data) this.send(name, data);
        else this.send(name);
      }

    }

    lang =  (e) => {
      return e;
    }
    _ = (e) => {
      return this.lang(e);
    }

    CallWebsocket () {
      // parser with socket.io-msgpack-parser
      this.ws  =  {};
    }
  
   
  
    
  }
  
export default cache;
