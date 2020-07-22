import {authRequest} from "../utils/ajax";

export const addActivity = (value,token,callback) => {
    const data={activity:value};
    const url = '/Activity/add';
    authRequest(url, data,token, callback);
};

export const deleteActivity=(value,token,callback)=>{
    const data={activityId:value};
    const url='/Activity/delete';
    authRequest(url,data,token,callback);
}