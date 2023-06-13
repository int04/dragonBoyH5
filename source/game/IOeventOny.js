import Since04IO from './io.js';
import base_item from './item.js';
class Since04IoEventOnly extends Since04IO {
    constructor() {
        super();
        this.createObjectIO();
    }

    createObjectIO = () => {
        this.item =base_item;
        this.skill_active = [];
        this.listMap = [];

        

    };
}

export default Since04IoEventOnly;