
import Since04chatClass from "../theme/chat.js";
class Since04dauThan extends Since04chatClass 
{
    constructor() {
        super();
    }

    useDauThan() {
        if(this.my.id <=0) return;
        let my = this.my;
        if (my.used.dauthan <= Date.now()) {
            this.bg_dauthan_circle.height = 0;
            my.used.dauthan = Date.now() + my.used.dauthan_time;
        }
    }

}

export default Since04dauThan;