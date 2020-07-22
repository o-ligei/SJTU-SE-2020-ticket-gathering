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