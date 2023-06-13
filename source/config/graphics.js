
import cache from './cache.js';

export default class Since04Graphics extends cache {
    constructor() {
        super();
    }

    Graphics = () => {
        let graphics = new PIXI.Graphics();

        graphics.mau = (color = 0x000000, alpha =1) => {
            graphics.beginFill(color, alpha);
            return graphics;
        }

        graphics.vien = (color = 0x000000, size = 1, alpha =1) => {
            graphics.lineStyle(size, color, alpha);
            return graphics;
        }


        graphics.size = (width = 100, height = 100) => {
            graphics.drawRect(0, 0, width, height);
            return graphics;
        }

        graphics.botron = (res = 0) => {
            let width = graphics.width;
            let height = graphics.height;
            graphics.drawRoundedRect(0, 0, width, height, res);
            return graphics;
        }

        

        graphics.endFill();

        return graphics;
    }

    Text = (noidung) => {
        let text = new PIXI.Text(noidung,{
            fontFamily: 'Arial',
            fontSize: 16,
            fill: 0xFFFFFF,

        });

        text.font = (font = 'Arial') => {
            text.style.fontFamily = font;
            return text;
        }

        text.size = (size = '14') => {
            text.style.fontSize = size;
            return text;
        }

        text.mau = (color) => {
            text.style.fill = color;
            return text;
        }

        text.dam = (bold = 'bold') => {
            text.style.fontWeight = bold;
            return text;
        }

        text.vitri = (align) => {
            text.style.align = align;
            return text;
        }

        text.vien = (color = 0x000000, size = 1) => {
            text.style.stroke = color;
            text.style.strokeThickness = size;
            return text;
        }

        text.xuongdong = (wordWrap = true, wordWrapWidth = 100) => {
            text.style.wordWrap = wordWrap;
            text.style.wordWrapWidth = wordWrapWidth;
            return text;
        }

        return text;
    }
}