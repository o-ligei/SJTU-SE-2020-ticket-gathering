import {postRequest,fetchPost1} from "../utils/ajax";

export const search = (value,callback) => {
    const data={search:value};
    const url = 'http://localhost:8080/Activity/search';
    postRequest(url, data, callback);
};