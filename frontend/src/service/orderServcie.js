/**
 * @param userId {number}
 *
 *
 */
import {postRequest,fetchPost1} from "../utils/ajax";

export const getOrderInfoByUser=(value,callback)=>{
    const apiUrl ='/Order/GetOrderInfoByUser';
    const data={userId:value};
    postRequest(apiUrl,data,callback);
}

export const addOrder=(userId,actitemId,price,amount,showtime,orderTime,callback)=>
{
    const apiUrl='/Order/addOrder';
    const data={userId:userId,actitemId:actitemId,price:price,amount:amount,showtime:showtime,orderTime:orderTime};
    postRequest(apiUrl,data,callback);
}