

export default class Keo {
    constructor(body, hienthinoidung,self) 
    {
        this.body = body;
        this.hienthinoidung = hienthinoidung;
        this.self = self;
        this.snowlySroll();

    }

    snowlySroll = () => {
        let body = this.body;
        let hienthinoidung = this.hienthinoidung;
        let self = this.self;

        let bouns = body.height / 100 * 150;
        bouns = 0;
        let viewport = new pixi_viewport.Viewport({
            screenWidth: body.width,
            screenHeight: body.height + bouns,
            worldWidth: hienthinoidung.width,
            worldHeight: hienthinoidung.height + bouns,
            passiveWheel: true,
        });

        viewport.addChild(hienthinoidung);
        viewport.name ="Con trỏ";
        viewport.interactive = true; 
        viewport.cursor = 'pointer';

        viewport.on('pointerdown', () => {
            console.log('hi')
        });

        //get chidlren since04KEY from hienthinoidung

        

        document.removeEventListener('keyup', handleKeyUp);



        document.addEventListener('keyup', handleKeyUp);
        
        let isScrollingUp = false;
        let isScrollingDown = false;
        

        let point = -1;
        function handleKeyUp(event) {
            if(self.box.visible == false) {
                document.removeEventListener('keyup', handleKeyUp);
                return false;
            }
            let children = hienthinoidung.children.filter(e => e.name == 'since04KEY');

            if (event.key === 'ArrowUp') {
                self.boxPreviewItem.removeChildren();
                if(point <=0) point = 0;
                point -= 1;
            } else if (event.key === 'ArrowDown') {
                self.boxPreviewItem.removeChildren();
                point += 1;
                if(point >= children.length) point = children.length - 1;
            }

            if(event.key === 'Enter') {
                let current = children[point];
                let event = self.findInteractiveObjects(current);
                if(event.length > 0 && self.boxPreviewItem.children.length == 0) {
                    console.log(current)
                    event[0].emit('pointerdown');
                    event[0].emit('pointerup');
                }
            }

            if(children[point]) {
                for(let i = 0; i < children.length; i++) {
                    children[i].removeChild(children[i].getChildByName('xanhle'));
                }

                viewport.moveCenter(children[point].x,children[point].y);
                let width = children[point].width;
                let height = children[point].height;
                let background = new PIXI.Graphics();
                background.lineStyle(0, 0x000000, 1);
                background.beginFill(0xf8fe4a, 0.5);
                background.drawRoundedRect(0, 0, width, height, 0);
                background.endFill();
                background.name = "xanhle";
                children[point].addChild(background);

                let current = children[point];
                let event = self.findInteractiveObjects(current.children);

                // set interacive give background from children[point]
                if(event.length > 0) {
                    background.interactive = true;
                    background.cursor = 'pointer';
                    // coppy interacive from children[point]
                    background.on('pointerdown', () => {
                        event[0].emit('pointerdown');
                    });
                    background.on('pointerup', () => {
                        event[0].emit('pointerup');
                    });

                }
            

                // set interacive give background from children[point]



            }
        }

        body.addChild(viewport);
        body.name="lớp body"
        viewport
            .drag({
                direction: 'y',
                pressDrag: true,
                factor: 1,

            })
            .decelerate({
                friction: 0.95,
                bounce: 0.8,
                minSpeed: 0.01,
            })
        viewport.bounce({
            top: true,
            bottom: true,
            friction: 0.5,
            time: 0,
            ease: 'easeInOutSine',
        });
        return viewport;
    }
}