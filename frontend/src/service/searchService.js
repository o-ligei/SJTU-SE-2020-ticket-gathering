import {postRequest,fetchPost1} from "../utils/ajax";

export const search = (value,callback) => {
    const data={search:value};
    const apiUrl = '/Activity/search';
    postRequest(apiUrl, data, callback);
};