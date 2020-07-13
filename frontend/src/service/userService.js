import {postRequest,fetchPost1} from "../utils/ajax";

export const checkUser = (data,callback) => {
    const url = `http://localhost:8080/checkUser`;
    postRequest(url, data, callback);
};


export const login = (data,self) => {
    const url = 'http://localhost:8080/User/Login';
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('userId', data.data.userId);
            localStorage.setItem('userName', data.data.username);
            self.$message({
                message: data.msg,
                type: "success",
            });
            self.$router.replace("/");
        }
        else{
            //message.error(data.msg);
            self.$message({
                message: data.msg,
                type: "error",
            });
        }
    };
    fetchPost1(url, data, callback);
};

export const register = (name,password,address,self) => {
    const url = 'http://localhost:8080/User/Register';
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('userId', data.data.userId);
            localStorage.setItem('userName', data.data.username);
            self.$message({
                message: "Register successfully",//data.msg,
                type: "success",
            });
            self.$router.replace("/");
        }
        else{
            //message.error(data.msg);
            self.$message({
                message: "Username is repetitive! Please choose another one.",//data.msg,
                type: "error",
            });
        }
    };
    let user={username:name,password:password,type:"User",gender: "Male",email:"123@456.cn",phone:"123456"};
    postRequest(url, user, callback);
};