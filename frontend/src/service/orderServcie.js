/**
 * @param userId {number}
 *
 *
 */
import {authRequest} from "../utils/ajax";

export const getOrderInfoByUser=(value,token,callback)=>{
    const apiUrl ='/Order/GetOrderInfoByUser';
    const data={userId:value};
    authRequest(apiUrl,data,token,callback);
}

export const addOrder=(userId,actitemId,price,amount,showtime,orderTime,token,callback)=>
{
    const apiUrl='/Order/addOrder';
    const data={userId:userId,actitemId:actitemId,price:price,amount:amount,showtime:showtime,orderTime:orderTime};
    console.log(data);
    authRequest(apiUrl,data,token,callback);
}