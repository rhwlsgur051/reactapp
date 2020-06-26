import _ from 'lodash';
import { get, post, put, remove } from '../../../server/axios';

class MemoService {
    private endpoint = '/memo';

    /**
     * 메모 목록을 조회한다.
     */
    async getList(): Promise<string> {
        return await get(this.endpoint, {}).then(data => data.data);
    }
}

export default new MemoService();