import Since04AwaitLoadingGame from './loadGame.js';

class objectMap extends Since04AwaitLoadingGame
{
    constructor() {
        super();
         console.log('class map')
         this.spritePool = {
            dat: [],
            hoa: [],
            cay: [],
            nuida: [],
            nuixa: [],
            nuixanua: [],
            bautroi: [],
            longdat: [],
            che: [],
        };
        this.srcDaLoad = [];

        this.baseMapCode = 'x2b03^bautroi^-96,-288,258,120!x2b03^bautroi^162,-288,258,120!x2b03^bautroi^420,-288,258,120!x2b03^bautroi^678,-288,258,120!x2b03^bautroi^936,-288,258,120!x2b03^bautroi^1194,-288,258,120!x2b03^bautroi^1452,-288,258,120!x2b03^bautroi^1710,-288,258,120!x2b03^bautroi^1968,-288,258,120!x2b03^bautroi^2226,-288,258,120!x2b03^bautroi^2484,-288,258,120!x2b03^bautroi^2742,-288,258,120!x2b03^bautroi^2808,-288,258,120!x2b02^nuixanua^-96,-288,510,154!x2b02^nuixanua^414,-288,510,154!x2b02^nuixanua^924,-288,510,154!x2b02^nuixanua^1434,-288,510,154!x2b02^nuixanua^1944,-288,510,154!x2b02^nuixanua^2454,-288,510,154!x2b02^nuixanua^2532,-288,510,154!x2b01^nuixa^-96,-192,336,146!x2b01^nuixa^240,-192,336,146!x2b01^nuixa^576,-192,336,146!x2b01^nuixa^912,-192,336,146!x2b01^nuixa^1248,-192,336,146!x2b01^nuixa^1584,-192,336,146!x2b01^nuixa^1920,-192,336,146!x2b01^nuixa^2256,-192,336,146!x2b01^nuixa^2592,-192,336,146!x2b01^nuixa^2688,-192,336,146!x2b00^nuida^-96,-144,336,160!x2b00^nuida^240,-144,336,160!x2b00^nuida^576,-144,336,160!x2b00^nuida^912,-144,336,160!x2b00^nuida^1248,-144,336,160!x2b00^nuida^1584,-144,336,160!x2b00^nuida^1920,-144,336,160!x2b00^nuida^2256,-144,336,160!x2b00^nuida^2592,-144,336,160!x2b00^nuida^2688,-144,336,160!x21$2^dat^-96,0,48,48!2bgItem79^cay^343,-132,348,132!2bgItem82^cay^556,-57,102,72!2bgItem0^cay^672,-250,242,250!2bgItem130^cay^2528,-98,344,104!2bgItem130^cay^1908,-98,344,104!2bgItem83^cay^311,-81,90,94!2bgItem131^cay^2398,-68,126,74!2bgItem0^cay^2768,-248,242,250!2bgItem0^cay^2218,-248,242,250!2bgItem0^cay^1708,-248,242,250!2bgItem0^cay^1218,-248,242,250!2bgItem131^cay^-60,-62,126,74!x21$2^dat^-48,0,48,48!x21$2^dat^0,0,48,48!x21$2^dat^48,0,48,48!x21$2^dat^96,0,48,48!x21$2^longdat^992,180,48,48!x21$2^longdat^944,180,48,48!x21$2^longdat^896,180,48,48!x21$2^longdat^848,180,48,48!x21$2^longdat^800,180,48,48!x21$2^dat^144,0,48,48!x21$2^dat^192,0,48,48!x21$2^dat^240,0,48,48!x21$2^dat^288,0,48,48!x21$2^dat^336,0,48,48!x21$2^dat^384,0,48,48!x21$2^dat^432,0,48,48!x21$2^dat^480,0,48,48!x21$2^dat^528,0,48,48!x21$2^dat^576,0,48,48!x21$2^dat^624,0,48,48!x21$2^dat^1248,0,48,48!x21$2^dat^1296,0,48,48!x21$2^dat^1344,0,48,48!x21$2^dat^1392,0,48,48!x21$2^dat^1440,0,48,48!x21$2^dat^1488,0,48,48!x21$2^dat^1536,0,48,48!x21$2^dat^1584,0,48,48!x21$2^dat^1632,0,48,48!x21$2^dat^1680,0,48,48!x21$2^dat^1728,0,48,48!x21$2^dat^1776,0,48,48!x21$2^dat^1824,0,48,48!x21$2^dat^1872,0,48,48!x21$2^dat^1920,0,48,48!x21$2^dat^1968,0,48,48!x21$2^dat^2016,0,48,48!x21$2^dat^2064,0,48,48!x21$2^dat^2112,0,48,48!x21$2^dat^2160,0,48,48!x21$2^dat^2208,0,48,48!x21$2^dat^2256,0,48,48!x21$2^dat^2304,0,48,48!x21$2^dat^2352,0,48,48!x21$2^dat^2400,0,48,48!x21$2^dat^2448,0,48,48!x21$2^dat^2496,0,48,48!x21$2^dat^2544,0,48,48!x21$2^dat^2592,0,48,48!x21$2^dat^2640,0,48,48!x21$2^dat^2688,0,48,48!x21$2^dat^2736,0,48,48!x21$2^dat^2784,0,48,48!x21$2^dat^2832,0,48,48!x21$2^dat^2880,0,48,48!x21$2^dat^2928,0,48,48!x21$2^dat^2976,0,48,48!x21$21^longdat^-96,48,48,48!x21$21^longdat^-48,48,48,48!x21$21^longdat^0,48,48,48!x21$21^longdat^48,48,48,48!x21$21^longdat^96,48,48,48!x21$21^longdat^144,48,48,48!x21$21^longdat^192,48,48,48!x21$21^longdat^240,48,48,48!x21$21^longdat^288,48,48,48!x21$21^longdat^336,48,48,48!x21$21^longdat^384,48,48,48!x21$21^longdat^432,48,48,48!x21$21^longdat^480,48,48,48!x21$21^longdat^528,48,48,48!x21$21^longdat^576,48,48,48!x21$21^longdat^624,48,48,48!x21$21^longdat^1248,48,48,48!x21$21^longdat^1296,48,48,48!x21$21^longdat^1344,48,48,48!x21$21^longdat^1392,48,48,48!x21$21^longdat^1440,48,48,48!x21$21^longdat^1488,48,48,48!x21$21^longdat^1536,48,48,48!x21$21^longdat^1584,48,48,48!x21$21^longdat^1632,48,48,48!x21$21^longdat^1680,48,48,48!x21$21^longdat^1728,48,48,48!x21$21^longdat^1776,48,48,48!x21$21^longdat^1824,48,48,48!x21$21^longdat^1872,48,48,48!x21$21^longdat^1920,48,48,48!x21$21^longdat^1968,48,48,48!x21$21^longdat^2016,48,48,48!x21$21^longdat^2064,48,48,48!x21$21^longdat^2112,48,48,48!x21$21^longdat^2160,48,48,48!x21$21^longdat^2208,48,48,48!x21$21^longdat^2256,48,48,48!x21$21^longdat^2304,48,48,48!x21$21^longdat^2352,48,48,48!x21$21^longdat^2400,48,48,48!x21$21^longdat^2448,48,48,48!x21$21^longdat^2496,48,48,48!x21$21^longdat^2544,48,48,48!x21$21^longdat^2592,48,48,48!x21$21^longdat^2640,48,48,48!x21$21^longdat^2688,48,48,48!x21$21^longdat^2736,48,48,48!x21$21^longdat^2784,48,48,48!x21$21^longdat^2832,48,48,48!x21$21^longdat^2880,48,48,48!x21$21^longdat^2928,48,48,48!x21$21^longdat^2976,48,48,48!x21$22^longdat^-96,96,48,48!x21$22^longdat^-48,96,48,48!x21$22^longdat^0,96,48,48!x21$22^longdat^0,96,48,48!x21$22^longdat^48,96,48,48!x21$22^longdat^96,96,48,48!x21$22^longdat^144,96,48,48!x21$22^longdat^192,96,48,48!x21$22^longdat^240,96,48,48!x21$22^longdat^288,96,48,48!x21$22^longdat^336,96,48,48!x21$22^longdat^384,96,48,48!x21$22^longdat^432,96,48,48!x21$22^longdat^480,96,48,48!x21$22^longdat^528,96,48,48!x21$22^longdat^528,144,48,48!x21$22^longdat^480,144,48,48!x21$22^longdat^432,144,48,48!x21$22^longdat^432,144,48,48!x21$22^longdat^384,144,48,48!x21$22^longdat^336,144,48,48!x21$22^longdat^288,144,48,48!x21$22^longdat^240,144,48,48!x21$22^longdat^192,144,48,48!x21$22^longdat^144,144,48,48!x21$22^longdat^96,144,48,48!x21$22^longdat^48,144,48,48!x21$22^longdat^48,144,48,48!x21$22^longdat^0,144,48,48!x21$22^longdat^-48,144,48,48!x21$22^longdat^-96,144,48,48!x21$22^longdat^576,144,48,48!x21$22^longdat^576,96,48,48!x21$24^longdat^624,96,48,48!x21$24^longdat^624,144,48,48!x21$28^longdat^672,96,48,48!x21$29^longdat^720,96,48,48!x21$30^longdat^694,144,48,48!x21$23^longdat^1249,48,48,48!x21$23^longdat^1249,96,48,48!x21$30^longdat^1249,144,48,48!x21$27^longdat^1297,96,48,48!x21$27^longdat^1345,96,48,48!x21$27^longdat^1393,96,48,48!x21$27^longdat^1441,96,48,48!x21$27^longdat^1489,96,48,48!x21$27^longdat^1489,96,48,48!x21$27^longdat^1537,96,48,48!x21$27^longdat^1585,96,48,48!x21$27^longdat^1633,96,48,48!x21$27^longdat^1681,96,48,48!x21$27^longdat^1729,96,48,48!x21$22^longdat^1777,96,48,48!x21$22^longdat^1825,96,48,48!x21$22^longdat^1873,96,48,48!x21$22^longdat^1921,96,48,48!x21$22^longdat^1969,96,48,48!x21$22^longdat^2017,96,48,48!x21$22^longdat^2065,96,48,48!x21$22^longdat^2113,96,48,48!x21$22^longdat^2161,96,48,48!x21$22^longdat^2209,96,48,48!x21$22^longdat^2257,96,48,48!x21$22^longdat^2305,96,48,48!x21$22^longdat^2353,96,48,48!x21$22^longdat^2401,96,48,48!x21$22^longdat^2449,96,48,48!x21$22^longdat^2497,96,48,48!x21$22^longdat^2545,96,48,48!x21$22^longdat^2593,96,48,48!x21$22^longdat^2641,96,48,48!x21$22^longdat^2689,96,48,48!x21$22^longdat^2689,96,48,48!x21$22^longdat^2737,96,48,48!x21$22^longdat^2785,96,48,48!x21$22^longdat^2833,96,48,48!x21$22^longdat^2881,96,48,48!x21$22^longdat^2929,96,48,48!x21$22^longdat^2977,96,48,48!2bgItem14^hoa^-95,-23,112,28!2bgItem14^hoa^17,-23,112,28!2bgItem14^hoa^129,-23,112,28!2bgItem14^hoa^241,-23,112,28!2bgItem14^hoa^353,-23,112,28!2bgItem14^hoa^465,-23,112,28!2bgItem14^hoa^577,-23,112,28!2bgItem14^hoa^689,-23,112,28!2bgItem14^hoa^801,-23,112,28!2bgItem14^hoa^913,-23,112,28!2bgItem14^hoa^1025,-23,112,28!2bgItem14^hoa^1137,-23,112,28!2bgItem14^hoa^1249,-23,112,28!2bgItem14^hoa^1361,-23,112,28!2bgItem14^hoa^1473,-23,112,28!2bgItem14^hoa^1585,-23,112,28!2bgItem14^hoa^1697,-23,112,28!2bgItem14^hoa^1809,-23,112,28!2bgItem14^hoa^1921,-23,112,28!2bgItem14^hoa^2033,-23,112,28!2bgItem14^hoa^2145,-23,112,28!2bgItem14^hoa^2257,-23,112,28!2bgItem14^hoa^2369,-23,112,28!2bgItem14^hoa^2481,-23,112,28!2bgItem14^hoa^2593,-23,112,28!2bgItem14^hoa^2705,-23,112,28!2bgItem14^hoa^2817,-23,112,28!2bgItem14^hoa^2913,-23,112,28!2bgItem129^cay^163,-65,80,70!2bgItem80^cay^381,-234,120,108!2bgItem0^cay^586,-226,100,100!x21$10^che^284,-16,48,48!x21$10^che^332,-16,48,48!x21$2^longdat^826,220,48,48!x21$2^longdat^778,220,48,48!x21$2^longdat^730,220,48,48!x21$2^longdat^730,220,48,48!x21$2^longdat^682,220,48,48!x21$2^longdat^634,220,48,48!x21$10^che^380,-16,48,48!x21$22^longdat^1308,232,48,48!x21$22^longdat^1356,232,48,48!x21$22^longdat^1404,232,48,48!x21$22^longdat^1452,232,48,48!x21$22^longdat^1500,232,48,48!2bgItem83^che^2308,-48,90,94!2bgItem82^che^2508,-28,102,72!x21$11^che^1638,-8,48,48!x21$11^che^1896,-8,48,48!x21$11^che^1144,-8,48,48!x21$11^che^2152,-8,48,48!x21$11^che^2730,-8,48,48!x22$26^dat^672,0,48,48!x22$26^dat^720,0,48,48!x22$26^dat^768,0,48,48!x22$26^dat^816,0,48,48!x22$26^dat^864,0,48,48!x22$26^dat^912,0,48,48!x22$26^dat^960,0,48,48!x22$26^dat^1008,0,48,48!x22$26^dat^1056,0,48,48!x22$26^dat^1104,0,48,48!x22$26^dat^1152,0,48,48!x22$26^dat^1200,0,48,48!x22$27^cay^672,-48,48,48!x22$28^cay^720,-48,48,48!x22$28^cay^768,-48,48,48!x22$28^cay^816,-48,48,48!x22$28^cay^864,-48,48,48!x22$28^cay^912,-48,48,48!x22$28^cay^960,-48,48,48!x22$28^cay^1008,-48,48,48!x22$28^cay^1056,-48,48,48!x22$28^cay^1104,-48,48,48!x22$28^cay^1152,-48,48,48!x22$29^cay^1200,-48,48,48!2bgItem0^che^796,-44,242,250!2bgItem0^che^636,-18,242,250!x21$22^longdat^-96,192,48,48!x21$22^longdat^-48,192,48,48!x21$22^longdat^0,192,48,48!x21$22^longdat^96,192,48,48!x21$22^longdat^192,192,48,48!x21$22^longdat^144,192,48,48!x21$22^longdat^48,192,48,48!x21$22^longdat^240,192,48,48!x21$22^longdat^288,192,48,48!x21$22^longdat^336,192,48,48!x21$22^longdat^384,192,48,48!x21$22^longdat^432,192,48,48!x21$22^longdat^480,192,48,48!x21$22^longdat^528,192,48,48!x21$22^longdat^576,192,48,48!x21$22^longdat^576,240,48,48!x21$22^longdat^528,240,48,48!x21$22^longdat^480,240,48,48!x21$22^longdat^432,240,48,48!x21$22^longdat^384,240,48,48!x21$22^longdat^336,240,48,48!x21$22^longdat^288,240,48,48!x21$22^longdat^240,240,48,48!x21$22^longdat^192,240,48,48!x21$22^longdat^144,240,48,48!x21$22^longdat^96,240,48,48!x21$22^longdat^48,240,48,48!x21$22^longdat^0,240,48,48!x21$22^longdat^-48,240,48,48!x21$22^longdat^-96,240,48,48!x21$22^longdat^1296,144,48,48!x21$22^longdat^1344,144,48,48!x21$22^longdat^1392,144,48,48!x21$22^longdat^1440,144,48,48!x21$22^longdat^1488,144,48,48!x21$22^longdat^1536,144,48,48!x21$22^longdat^1584,144,48,48!x21$22^longdat^1632,144,48,48!x21$22^longdat^1680,144,48,48!x21$22^longdat^1728,144,48,48!x21$22^longdat^1776,144,48,48!x21$22^longdat^1872,144,48,48!x21$22^longdat^1872,144,48,48!x21$22^longdat^1824,144,48,48!x21$22^longdat^1920,144,48,48!x21$22^longdat^1968,144,48,48!x21$22^longdat^2016,144,48,48!x21$22^longdat^2064,144,48,48!x21$22^longdat^2112,144,48,48!x21$22^longdat^2160,144,48,48!x21$22^longdat^2208,144,48,48!x21$22^longdat^2256,144,48,48!x21$22^longdat^2304,144,48,48!x21$22^longdat^2352,144,48,48!x21$22^longdat^2400,144,48,48!x21$22^longdat^2448,144,48,48!x21$22^longdat^2496,144,48,48!x21$22^longdat^2544,144,48,48!x21$22^longdat^2592,144,48,48!x21$22^longdat^2640,144,48,48!x21$22^longdat^2688,144,48,48!x21$22^longdat^2736,144,48,48!x21$22^longdat^2784,144,48,48!x21$22^longdat^2832,144,48,48!x21$22^longdat^2880,144,48,48!x21$22^longdat^2928,144,48,48!x21$22^longdat^2976,144,48,48!x21$22^longdat^2976,192,48,48!x21$22^longdat^2928,192,48,48!x21$22^longdat^2880,192,48,48!x21$22^longdat^2832,192,48,48!x21$22^longdat^2784,192,48,48!x21$22^longdat^2736,192,48,48!x21$22^longdat^2688,192,48,48!x21$22^longdat^2640,192,48,48!x21$22^longdat^2592,192,48,48!x21$22^longdat^2544,192,48,48!x21$22^longdat^2496,192,48,48!x21$22^longdat^2448,192,48,48!x21$22^longdat^2400,192,48,48!x21$22^longdat^2352,192,48,48!x21$22^longdat^2304,192,48,48!x21$22^longdat^2256,192,48,48!x21$22^longdat^2208,192,48,48!x21$22^longdat^2160,192,48,48!x21$22^longdat^2112,192,48,48!x21$22^longdat^2064,192,48,48!x21$22^longdat^2016,192,48,48!x21$22^longdat^1968,192,48,48!x21$22^longdat^1920,192,48,48!x21$22^longdat^1872,192,48,48!x21$22^longdat^1824,192,48,48!x21$22^longdat^1776,192,48,48!x21$22^longdat^1728,192,48,48!x21$22^longdat^1632,192,48,48!x21$22^longdat^1632,192,48,48!x21$22^longdat^1536,192,48,48!x21$22^longdat^1584,192,48,48!x21$22^longdat^1680,192,48,48!2bgItem84^cay^2166,42,408,212!2bgItem0^che^1308,-8,242,250!2bgItem84^hoa^-139,28,408,212'
    }

    returnSprite(sprite) {
        this.spritePool[sprite.type].push(sprite);
        sprite.visible = false;
    }

    taoKhung (sp) {
        return sp;
    }

    spri (sprite) {
        let taoKhung = this.taoKhung;
        if (sprite.name == "lacay2" || sprite.name == "lacay3" || sprite.name == "lacay4" || sprite.name == "lacay5" || sprite.name == "lacay6") {
            let loadSprite = new PIXI.Sprite(PIXI.utils.TextureCache[sprite.name]);
            let SrcImg = 4;
            let SrcHeight = 18;
            let yyget = 0;
            let yOne = loadSprite.height / SrcImg;
            let arrayFrame = [];
            for (let i = 0; i < SrcImg; i++) {
    
                arrayFrame.push(new PIXI.Texture(loadSprite.texture, new PIXI.Rectangle(0, yyget, loadSprite.width, yOne)));
                yyget += yOne;
            }
            let newSprite = new PIXI.AnimatedSprite(arrayFrame);
            newSprite.animationSpeed = 0.10;
            newSprite.play();
            newSprite.x = sprite.x;
            newSprite.src = sprite.name;
            newSprite.y = sprite.y;
            newSprite.ygoc = sprite.y;
            newSprite.xgoc = sprite.x;
            newSprite.name = sprite.name;
            newSprite.autofollow = true; // thuộc tính rơi
            newSprite.width = loadSprite.width;
            newSprite.height = loadSprite.height / SrcImg;
            newSprite.type = sprite.type;
            newSprite.coppy = 0;
            newSprite.time = 0;
            newSprite.css = 1;
            newSprite = taoKhung(newSprite);
    
            return newSprite;
        }
    
    
        if (sprite.name == "ImgEffect_6") {
            let image = new PIXI.Sprite(PIXI.utils.TextureCache[sprite.name]);
            arrayFrame = [new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 0, 88, 82)),
                                new PIXI.Texture(image.texture, new PIXI.Rectangle(96, 0, 85, 82)),
                                new PIXI.Texture(image.texture, new PIXI.Rectangle(180, 0, 82, 82)),
                                new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 80, 83, 79)),
                                new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 80, 83, 79)),
                                new PIXI.Texture(image.texture, new PIXI.Rectangle(86, 81, 85, 77)),
                                new PIXI.Texture(image.texture, new PIXI.Rectangle(174, 80, 86, 79)), ];
            let newSprite = new PIXI.AnimatedSprite(arrayFrame);
            newSprite.animationSpeed = 0.15;
            newSprite.play();
            newSprite.x = sprite.x;
            newSprite.y = sprite.y;
            newSprite.ygoc = sprite.y;
            newSprite.xgoc = sprite.x;
            newSprite.src = sprite.name;
            newSprite.name = sprite.name;
            newSprite.width = newSprite.width;
            newSprite.height = newSprite.height;
            newSprite.type = sprite.type;
            newSprite.coppy = 0;
            newSprite.css = 1;
            newSprite.scal = true;
            newSprite = taoKhung(newSprite);
    
            return newSprite;
        }
    
    
        if (sprite.name == "ImgEffect_8") {
            let image = new PIXI.Sprite(PIXI.utils.TextureCache[sprite.name]);
            let newSprite = new PIXI.Container();
            let than = new PIXI.Sprite(new PIXI.Texture(image.texture, new PIXI.Rectangle(190, 0, 93, 57)));
            newSprite.addChild(than);
            newSprite.x = app.screen.width - newSprite.width;
            newSprite.y = app.screen.height / 2;
    
            let canvas_load = new PIXI.AnimatedSprite(
                                [
                                new PIXI.Texture(image.texture, new PIXI.Rectangle(1, 43, 53, 56)),
                                new PIXI.Texture(image.texture, new PIXI.Rectangle(56, 44, 58, 53)),
    
                                ]
            );
            canvas_load.x = than.x + canvas_load.width / 2 - 2;
            canvas_load.y = than.y - than.height / 2 - canvas_load.height / 2 + 5;
            canvas_load.animationSpeed = 0.15;
    
            canvas_load.play();
    
    
            newSprite.addChild(canvas_load)
            newSprite.x = sprite.x;
            newSprite.y = sprite.y;
            newSprite.ygoc = sprite.y;
            newSprite.xgoc = sprite.x;
            newSprite.name = sprite.name;
            newSprite.src = sprite.name;
            newSprite.width = newSprite.width;
            newSprite.height = newSprite.height;
            newSprite.type = sprite.type;
            newSprite.coppy = 0;
            newSprite.css = 1;
            newSprite.scal = true; // hiệu ứng quay phải quay trái
    
            newSprite = taoKhung(newSprite);
    
            return newSprite;
        }
    
    
        if (sprite.name == "ImgEffect_1") {
            let image = new PIXI.Sprite(PIXI.utils.TextureCache[sprite.name]);
            let newSprite = new PIXI.Container();
    
            let canvas_load = new PIXI.AnimatedSprite(
                                [
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 93, 73, 55)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 40, 64, 53)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(1, 0, 71, 40)),
    
                                ]
            );
            canvas_load.animationSpeed = 0.15;
    
            canvas_load.play();
    
    
            newSprite.addChild(canvas_load)
            newSprite.x = sprite.x;
            newSprite.y = sprite.y;
            newSprite.ygoc = sprite.y;
            newSprite.xgoc = sprite.x;
            newSprite.name = sprite.name;
            newSprite.src = sprite.name;
            newSprite.width = newSprite.width;
            newSprite.height = newSprite.height;
            newSprite.type = sprite.type;
            newSprite.coppy = 0;
            newSprite.css = 1;
            newSprite.scal = true; // hiệu ứng quay phải quay trái
    
            newSprite = taoKhung(newSprite);
    
            return newSprite;
        }
    
        if (sprite.name == 'ImgEffect_10') {
            let image = new PIXI.Sprite(PIXI.utils.TextureCache[sprite.name]);
            let newSprite = new PIXI.Container();
    
            let canvas_load = new PIXI.AnimatedSprite(
                                [
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(28, 0, 44, 44)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(72, 0, 40, 43)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(112, 1, 39, 43)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(151, 1, 42, 42)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(193, 0, 42, 43)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(235, 0, 40, 44)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(276, 0, 40, 44)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(315, 0, 41, 42)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(356, 0, 44, 43)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(399, 0, 42, 44)),
    
                                ]
            );
            canvas_load.animationSpeed = 0.15;
    
            canvas_load.play();
    
    
            newSprite.addChild(canvas_load)
            newSprite.x = sprite.x;
            newSprite.y = sprite.y;
            newSprite.ygoc = sprite.y;
            newSprite.xgoc = sprite.x;
            newSprite.name = sprite.name;
            newSprite.src = sprite.name;
            newSprite.width = newSprite.width;
            newSprite.height = newSprite.height;
            newSprite.type = sprite.type;
            newSprite.coppy = 0;
            newSprite.css = 1;
            newSprite.scal = true; // hiệu ứng quay phải quay trái
    
            newSprite = taoKhung(newSprite);
    
            return newSprite;
        }
    
    
        if (sprite.name == 'x2wtf' || sprite.name == 'x2twtf') {
            let image = new PIXI.Sprite(PIXI.utils.TextureCache[sprite.name]);
            let newSprite = new PIXI.Container();
    
            let canvas_load = new PIXI.AnimatedSprite(
                                [
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 0, 48, 48)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 48, 48, 48)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 48 + 48, 48, 48)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 48 + 48 + 48, 48, 48)),
    
                                ]
            );
            canvas_load.animationSpeed = 0.15;
    
            canvas_load.play();
    
    
            newSprite.addChild(canvas_load)
            newSprite.x = sprite.x;
            newSprite.y = sprite.y;
            newSprite.ygoc = sprite.y;
            newSprite.xgoc = sprite.x;
            newSprite.name = sprite.name;
            newSprite.src = sprite.name;
            newSprite.width = newSprite.width;
            newSprite.height = newSprite.height;
            newSprite.type = sprite.type;
            newSprite.coppy = 0;
            newSprite.css = 1;
    
            newSprite = taoKhung(newSprite);
    
            return newSprite;
        }
    
        if (sprite.name == 'x2wts' || sprite.name == 'x2wtsN' || sprite.name == 'x2wtsN2') {
            let image = new PIXI.Sprite(PIXI.utils.TextureCache[sprite.name]);
            let newSprite = new PIXI.Container();
    
            let canvas_load = new PIXI.AnimatedSprite(
                                [
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 0, 48, 49)),
                                    new PIXI.Texture(image.texture, new PIXI.Rectangle(0, 49, 48, 49)),
    
                                ]
            );
            canvas_load.animationSpeed = 0.1;
    
            canvas_load.play();
    
    
            newSprite.addChild(canvas_load)
            newSprite.x = sprite.x;
            newSprite.y = sprite.y;
            newSprite.ygoc = sprite.y;
            newSprite.xgoc = sprite.x;
            newSprite.name = sprite.name;
            newSprite.src = sprite.name;
            newSprite.width = newSprite.width;
            newSprite.height = newSprite.height;
            newSprite.type = sprite.type;
            newSprite.coppy = 0;
            newSprite.css = 1;
    
            newSprite = taoKhung(newSprite);
    
            return newSprite;
        }
    
        return sprite;
    }

    releaseSprite(sprite) {
        this.spritePool[sprite.type].push(sprite);
        sprite.visible = false;
    }

    getSprite(type, texture) {
        let sprite;
    
        if (this.spritePool[type].length > 0) {
            sprite = this.spritePool[type].pop();
            sprite.texture = texture;
            sprite.visible = true;
        } else {
            sprite = new PIXI.Sprite(texture);
            sprite.resolution = 2;
            sprite.type = type;
        }
    
        sprite.release = function() {
            releaseSprite(this);
        }
    
        return sprite;
    }


    DeleteMap() {
        this.bando.removeChildren();
        this.bando_nuida.removeChildren();
        this.bando_nuixa.removeChildren();
        this.bando_nuixanua.removeChildren();
        this.bando_bautroi.removeChildren();
        this.bando_che.removeChildren();
        this.spritePool.dat = [];
        this.spritePool.hoa = [];
        this.spritePool.cay = [];
        this.spritePool.nuida = [];
        this.spritePool.nuixa = [];
        this.spritePool.nuixanua = [];
        this.spritePool.bautroi = [];
        this.spritePool.longdat = [];
        this.spritePool.che = [];
    }

    loadMap = function(textures = false) {
        this.DeleteMap();
        let data_map = this.cacheMap;
        let my = this.my;
        let gameMap = this.gameMap;
        let NhanVat = this.NhanVat;
        let NhanVatGoc = this.NhanVatGoc;
        let coverMap = data_map.split("!");
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
                element.width = +tach2[2];
                element.height = +tach2[3];
                let sprite = this.getSprite(element.type, this.coverImgMap(element.name));
                sprite.x = element.x;
                sprite.y = element.y;
                sprite.width = element.width;
                sprite.height = element.height;
                
    
                // cover size low 0.5
    
                sprite.name = element.name;
    
                if (gameMap.setting.maxY < element.y) {
                    gameMap.setting.maxY = element.y;
                    gameMap.size.idMaxY = element.height;
                }
                if (gameMap.setting.minY > element.y) {
                    gameMap.setting.minY = element.y - element.height ;

                    gameMap.size.idMinY = element.height;
                }
                if (gameMap.setting.maxX < element.x) {
                    gameMap.setting.maxX = element.x;
                    gameMap.size.idMaxX = element.width;
                }
                if (gameMap.setting.minX > element.x) {
                    gameMap.setting.minX = element.x;
                    gameMap.size.idMinX = element.width;
                }
    
    
                sprite = this.spri(sprite);
                sprite.src = element.name;
                if (sprite.scal) {
                    sprite.pivot.x = sprite.width;
                }
                if (sprite.type == 'nuida') {
                    this.bando_nuida.addChild(sprite);
                } else
                if (sprite.type == 'nuixa') {
                    this.bando_nuixa.addChild(sprite);
                } else
                if (sprite.type == 'nuixanua') {
                    this.nen.y =sprite.y ;

                    this.bando_nuixanua.addChild(sprite);
                } else
                if (sprite.type == 'bautroi') {
                    this.bando_bautroi.addChild(sprite);
                } else
                if (sprite.type == 'che') {
                    this.bando_che.addChild(sprite);
                } else {
                    this.bando.addChild(sprite);
                }
            }

            // if last element
            if(i == coverMap.length -1)
            {
                this.checkCreateObjectOnMap();
            }
    
        }
        try {
    
            gameMap.setting.minY -= gameMap.size.idMinY / 2;
            gameMap.setting.maxY += gameMap.size.idMaxY / 2;
            gameMap.setting.minX -= gameMap.size.idMinX;
            gameMap.setting.maxX += gameMap.size.idMaxX;
    
        } catch (e) {
            console.log(e)
        }
    
        gameMap.setting.minX = 0;
        
        if(my.id >=1)
        {
            NhanVat.x = my.pos.x;
            NhanVat.y = my.pos.y;
            NhanVatGoc.x = my.pos.x;
            NhanVatGoc.y = my.pos.y;
        }

        this.nen.width = this.container.width;
        this.nen.height = this.container.height;
    
    }




    // tải asset của người chơi
    LoadAssetPlayer() {
        let my = Object.create(this.my);
        let getAo = [my.skin.ao,my.skin.quan,my.skin.dau];
        getAo.forEach( async e => {
            let run = this.images.find(ee => ee.name == e);
            if (run != undefined) {
                let f = run.farm[0];
                if(f) 
                {
                    for(let type in f) 
                    {
                        let bien = f[type].farme;
                        bien.forEach(async eee => {
                            await PIXI.Sprite.from(this.coverImg(eee));
                        });
                        this.createSkillOnDisplay();
                        this.TaoSprite2();
                    }
                }
            }
        });
        this.joinMap(my.pos.map);

    }


    joinMap = (id) => {
        let base = this.baseMapCode;
        let zone = 1;
        let color = 0x155e1d;
        if(color) 
        {
            this.nen.tint = color;
        }
        let background =null;
        

        this.app.renderer.background.color = background || 0x19b0f8;
        

        let my = this.my;
        
        this.cacheMap = base;
        this.Charset = [];

        this.LoadAssetMap();

        let datanpc = [ {
            id : 'a2',
            name : 'Bulma',
            script: {
                theobo : "XBCwI",
                ao : "",
                quan : "",
                dau : "",
                avatar : "562",
            },
            giaotiep : "Chào cưng ! Chị có một vài món đồ cho hành trình của cậu này..",
            chat : [
                "Xin chào, tôi là since04.",
            ],
            delaychat : 5000,
            map : {
                x : 345,
                y : -41,
                map : 0,
            },
            action : [{_1 : 'Cửa hàng', _2 : 'shop_buma'}],
        }];

        
        console.log(datanpc)
        if (!!datanpc) {
            let Charset = this.Charset;

            for (let i = 0; i < datanpc.length; i++) {
                console.log('have')
                if (Charset.find(e => e.id == datanpc[i].id) == undefined) {
                    let npc = datanpc[i];
                    let ao ="";
                    let quan = "";
                    let dau = "";
                    ao = npc.script.ao;
                    quan = npc.script.quan;
                    dau = npc.script.dau;
                    if(npc.script.theobo)
                    {
                        let findnameAo = this.images.find(e => e.id == npc.script.theobo && e.type == 'ao');
                        if(findnameAo) ao = findnameAo.name;
                        let findnameQuan = this.images.find(e => e.id == npc.script.theobo && e.type == 'quan');
                        if(findnameQuan) quan = findnameQuan.name;
                        let findnameDau = this.images.find(e => e.id == npc.script.theobo && e.type == 'dau');
                        if(findnameDau) dau = findnameDau.name;

                    }

                    Charset.push({
                        source : npc,
                        type : 'npc',
                        id : npc.id,
                        name : npc.name,
                        eff : {
                            choang : {
                                time : 0,
                            }
                        },
                        skin : {
                            ao : ao,
                            quan : quan,
                            dau : dau,
                        }, 
                        info : {
                            chiso :{
                                hp : 1,
                                hpFull : 1,
                            },
                            coban : {
                                avatar : "516",
                                sucmanh : 100,
                            },
                            'act' : 'dungyen',
                            'move' : 'right',
                            speed : 1,
                            
                        },
                        pos : {
                            map : npc.map.map,
                            x :npc.map.x, 
                            y : npc.map.y,
                           
                        },
                        

                    })
                }

            }
        }
    }

    joinChuyenMap = (id) => {
        this.notice(this._('Xin chờ...'),false);
        this.to(-18,id);
    }

    LoadAssetMap = async  function() {
        this.inGame.visible = false; 
        this.loadGame.visible = true;
        this.gameMap = {
            setting: {
                maxY: 0,
                minY: 0,
                maxX: 0,
                minX: 0,
            },
            size: {
                idMaxX: 0,
                idMaxY: 0,
                idMinX: 0,
                idMinY: 0,

            }
        };

        let data_map = this.cacheMap;
        let coverMap = data_map.split("!");

        let listAsset = [];

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
                element.width = +tach2[2];
                element.height = +tach2[3];

                let find = this.assets.find(e => e.name == element.name);
                if(!find) return false;
                if(listAsset.find (e => e == element.name)) continue;


                let loadchua = this.srcDaLoad.find(e => e == element.name);
                if(loadchua) continue;
                this.srcDaLoad.push(element.name);
                listAsset.push(element.name)
            }
        }

        /*
        let texture = PIXI.Assets.load(listAsset);
        texture.then((textures) => {
            console.log('hi')
            this.loadMap(textures);
            
        });
        */
        listAsset.forEach( async (element) => {
            /*
            let src =   PIXI.Texture.from(element, {
                resourceOptions : {
                    createBitmap : false,
                }, 
                });
                */
                

            // awaitPIXI.Texture.from
            await PIXI.Sprite.from(this.coverImgMap(element));

        });

        console.log('Tổng,',listAsset.length)

        this.loadMap();



        




    }

}

export default objectMap;