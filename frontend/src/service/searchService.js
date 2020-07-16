import {postRequest,fetchPost1} from "../utils/ajax";

export const search = (value,callback) => {
    const data={search:value};
    const url = '/Activity/search';
    postRequest(url, data, callback);
};