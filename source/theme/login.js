import ScientTaoNhanVat from './newgame.js';
class scientLogin extends  ScientTaoNhanVat 
{
    constructor() {
        super();
        this.guestWelcome = new PIXI.Container();
        this.guestMenu = new PIXI.Container();
        this.CreateFontLogin();
    }
    pageLogin() {
        this.guestContainer.removeChildren();
        clearInterval(this.InputSetInverti);
        this.loadGame.visible = false;
        this.guestContainer.visible = true;

        this.guestContainer.addChild(this.createBackgroundMap());

        let background = new PIXI.Graphics();
        this.guestContainer.addChild(background);
        background.beginFill(0xfee4c6, 1);
        background.lineStyle(2, 0x6c4a00, 1);

        let set = {
            width: 500, 
            height : 200,
        }
        let bw = this.gameWidth * 1;
        bw = bw >= this.gameWidth*0.8 ? this.gameWidth*0.8 : bw; // nếu khung lớn hơn 0,8 (căn cho ra giữa)
        bw = bw > set.width ? set.width : bw; // nếu khung lớn hơn khung cài đặt
        bw = bw < this.gameWidth * 0.5 ? this.gameWidth * 0.5 : bw; // nếu khung nhỏ hơn khung game

        let bh = this.gameHeight* 0.5;
        bh = bh > set.height ? set.height : bh; // nếu khung lớn hơn khung cài đặt

        


        background.drawRoundedRect(0, 0, bw, bh, 10);
        background.endFill();

        background.x = this.gameWidth / 2 - background.width / 2;
        background.y = this.gameHeight / 2 - background.height / 2;

        let ContaiNerInput = new PIXI.Container();
        background.addChild(ContaiNerInput);

        let usernameInput = new PIXI.TextInput({
            input: {
                fontSize: '16px',
                padding: '10px',
                color: '#7a1125'
            },
            box: {
                default: {fill: 0xeec385, rounded: 12, stroke: {color: 0xfff6eb, width: 1}},
                focused: {fill: 0xa7f2ac, rounded: 12, stroke: {color: 0xfff6eb, width: 1}},
                disabled: {fill: 0xDBDBDB, rounded: 12}

            }
        })
        usernameInput.width = background.width * 0.7;
        usernameInput.height = background.height * 0.2;
        usernameInput.placeholder = 'Tên tài khoản'
        ContaiNerInput.addChild(usernameInput);
        usernameInput.text = this.username;

        let passwordInput = new PIXI.TextInput({
            input: {
                fontSize: '16px',
                padding: '10px',
                color: '#26272E',
                type : 'password',

            },
            box: {
                default: {fill: 0xeec385, rounded: 10, stroke: {color: 0xfff6eb, width: 1}},
                focused: {fill: 0xa7f2ac, rounded: 10, stroke: {color: 0xfff6eb, width: 1}},
                disabled: {fill: 0xDBDBDB, rounded: 10}
            }
        });
        passwordInput.width = background.width * 0.7;
        passwordInput.height = background.height * 0.2;
        passwordInput.placeholder = 'Mật khẩu'
        passwordInput.y =  usernameInput .height +  background.height * 0.1;
        passwordInput.htmlInput.setAttribute('type', 'password')
        passwordInput.text = this.password;
        ContaiNerInput.addChild(passwordInput);

        ContaiNerInput .x = (background.width - (background.width * 0.7)) / 2;
        ContaiNerInput .y = background.height * 0.3;

        let conTainerButtonLogin = new PIXI.Container();
        background.addChild(conTainerButtonLogin);

        let ActionLogin = () => {
            passwordInput.blur();
            usernameInput.blur();
            this.setCookie('username',usernameInput.text,30);
            this.setCookie('password',passwordInput.text,30);
            this.CreatedCookie();
            return this.CreateMainGuestGame();
           
        }

        let buttonLogin = new PIXI.Graphics();
        buttonLogin.lineStyle(2, 0x6c4a00, 1);
        buttonLogin.beginFill(0xe57f3b, 1);
        buttonLogin.drawRoundedRect(0,0,background.width * 0.4,background.height * 0.2, 20);
        buttonLogin.endFill();
        buttonLogin.x =0;
        buttonLogin.y = 0;
        buttonLogin.interactive = true;
        buttonLogin. cursor = 'pointer';
        buttonLogin.zIndex = 100;

        let btntext = new PIXI.Text('OK', {
            fontFamily: 'fontchinh',
            fontSize: 17,
            fill: 0x532905,
            align: 'center',
            fontWeight: 'bold',
        });
        
      
        btntext.x = buttonLogin.x + (buttonLogin.width - btntext.width) / 2;
        btntext.y = buttonLogin.y + (buttonLogin.height - btntext.height) / 2;
        
        buttonLogin.addChild(btntext);

        buttonLogin.on('pointerdown', () => {
            ActionLogin();
        });
        

        let buttonRegister = new PIXI.Graphics();
        buttonRegister.lineStyle(2, 0x6c4a00, 1);
        buttonRegister.beginFill(0xe57f3b, 1);
        buttonRegister.drawRoundedRect(0,0,background.width * 0.4,background.height * 0.2, 20);
        buttonRegister.endFill();
        buttonRegister.x =  buttonLogin.width + background.width * 0.1;
        buttonRegister.y = 0;
        buttonRegister.interactive = true;
        buttonRegister.buttonMode = true;
        buttonRegister.on('pointerdown', () => {
            console.log('register');
        });

        let buttonRegisterText = new PIXI.Text('Forget Pass?', {
            fontFamily: 'fontchinh',
            fontSize: 14,
            fill: 0x532905,
            align: 'center'
        });

        buttonRegisterText.x =(buttonRegister.width - buttonRegisterText.width) / 2;
        buttonRegisterText.y = buttonRegister.y + (buttonRegister.height - buttonRegisterText.height) / 2;


        buttonRegister.addChild(buttonRegisterText);



        conTainerButtonLogin.addChild(buttonLogin,buttonRegister);


        
        conTainerButtonLogin.x = (background.width - (buttonLogin.width + buttonRegister.width + background.width * 0.1)) / 2;
        conTainerButtonLogin.y = background.height + background.height * 0.1;


        let logo = this.CreateLogo(background.width);
        logo.x = background.width / 2 - logo.width / 2;
        logo.y =0 - logo.height + logo.height / 2;
        background.addChild(logo);



    }
   
}

export default scientLogin;
