/**
 * @param actitemid {int}
 *
 */

import {authRequest} from "../utils/ajax";

export const getDetail = (value,token,callback) => {
    const data={actitemid:value};
    const url = `/Actitem/detail`;
    authRequest(url, data,token,callback);
};
// export const getDetail = (id,userid,callback) => {
//     const data={actitemid:id, userId: userid};
//     const url = `/Actitem/detail`;
//     postRequest(url, data, callback);
// };
