import {postRequest,fetchPost1} from "../utils/ajax";

export const getOrderInfoByUser=(value,callback)=>{
    const apiUrl ='/Order/GetOrderInfoByUser';
    const data={userId:value};
    postRequest(apiUrl,data,callback);
}