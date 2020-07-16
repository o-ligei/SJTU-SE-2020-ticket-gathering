/**
 * @param actitemid {int}
 *
 */

import {postRequest} from "../utils/ajax";

export const getDetail = (value,callback) => {
    const data={actitemid:value};
    const url = `/Actitem/detail`;
    postRequest(url, data, callback);
};