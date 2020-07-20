import {postRequest,fetchPost1} from "../utils/ajax";

export const search = (value,callback) => {
    const data={search:value};
    const url = '/Activity/search';
    postRequest(url, data, callback);
};

export const category_search = (value,callback) => {
    const data = value;
    const url = '/Activity/FindActivityByCategory';
    console.log(value);
    fetchPost1(url,data,callback);
}
