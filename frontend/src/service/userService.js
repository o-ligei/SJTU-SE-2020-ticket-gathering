import {postRequest} from "../utils/ajax";

export const checkUser = (data,callback) => {
    const url = `http://localhost:8080/checkUser`;
    postRequest(url, data, callback);
};