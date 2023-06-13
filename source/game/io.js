import { Since04IOMethod } from "./IOMethod.js";

class Since04IO extends Since04IOMethod
{
    constructor() {
        super();
        this.Since04IO_Only();
    }

    readData = (data) => {

        if(!(data instanceof ArrayBuffer)) {
            return data;
        }
        let data2 = msgpack.decode(new Uint8Array(data));
        if(data2) return data2;
        return data;
    }

    Since04IO_Only = () => {
        
    }

    IoMsgNotice = (data) => {

        if (!!data.notice) {
            if (data.notice.load)
                return this.notice(data.notice.text, false);

            return this.notice(data.notice.text);
        }
    }


        

}

export default Since04IO;