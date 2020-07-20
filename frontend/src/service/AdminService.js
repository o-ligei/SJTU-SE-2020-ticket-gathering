import {postRequest,fetchPost1} from "../utils/ajax";

export const addActivity = (value,callback) => {
    const data={activity:value};
    const url = '/Activity/add';
    postRequest(url, data, callback);
};

export const deleteActivity=(value,callback)=>{
    const data={activityId:value};
    const url='/Activity/delete';
    postRequest(url,data,callback);
}