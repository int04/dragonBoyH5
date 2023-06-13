import Since04TalkBox from './giaotiep.js';

/**
 * @class Since04VutItemClass
 * @extends {Since04TalkBox}
 * @desc : Xử lý vứt đồ
 * !!! Các hàm chính
 * @submitVutItem : gửi yêu cầu vứt đồ
 * @IoNhatItem : Nhặt vật phẩm từ đất
 * @ItemNhat : Xử lý thời gian, mỗi lần nhặt là 1 giây
 * @comfirmVutItem : Xác nhận vứt đồ
 * @menuComfirmVut : Menu xác nhận vứt đồ
 */


class Since04VutItemClass extends Since04TalkBox 
{
    constructor() {
        super();
        this.item = this.item || {};
        this.TimeNhatDo = 0;
    }

}

export default Since04VutItemClass;