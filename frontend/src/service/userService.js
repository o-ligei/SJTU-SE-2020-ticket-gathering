import {postRequest,fetchPost1,authRequest} from "../utils/ajax";

export const checkUser = async (value, callback) => {
    const data = {username: value};
    const url = '/User/ExistsByUsername';
    await postRequest(url, data, callback);
};


export const login = async (value, callback) => {
    const data = {username: value.username, password: value.password};
    const url = '/User/Login';
    await postRequest(url, data, callback);
};

export const register = async (username, password, email, personicon, phone, gender, callback) => {
    const url = '/User/Register';
    const data = {
        'username': username,
        'password': password,
        'type': "User",
        'gender': gender,
        'email': email,
        'phone': phone,
        'personIcon': personicon
    };
    await fetchPost1(url, data, callback);
};

export const getPersonInfo= async (userId, token, callback) => {
    const url = '/User/FindByUserId';
    const data = {userId: userId};
    await authRequest(url, data, token, callback);
};


