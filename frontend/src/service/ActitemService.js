/**
 * @param actitemid {int}
 *
 */

import {postRequest} from "../utils/ajax";

export const getDetail = (id,userid,callback) => {
    const data={actitemid:id, userId: userid};
    const url = `/Actitem/detail`;
    postRequest(url, data, callback);
};
