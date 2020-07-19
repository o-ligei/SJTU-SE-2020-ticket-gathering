import {postRequest,fetchPost1} from "../utils/ajax";

export const checkUser = (value,callback) => {
    const data={username:value};
    const url = '/User/ExistsByUsername';
    postRequest(url, data, callback);
};


export const login = (value,callback) => {
    const data={username:value.username,password:value.password};
    const url = '/User/Login';
    postRequest(url, data, callback);
};

export const register = (username,password,email,personicon,phone,gender,callback) => {
    const url = '/User/Register';
    const data={
        'username':username,
        'password':password,
        'type':"User",
        'gender': gender,
        'email':email,
        'phone':phone,
        'personIcon':personicon
    };
    fetchPost1(url, data, callback);
};

export const getPersonInfo=(userId,callback)=>{
    const url='/User/FindByUserId';
    const data={userId:userId};
    postRequest(url,data,callback);
};


