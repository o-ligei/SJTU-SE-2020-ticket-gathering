import {postRequest,fetchPost1} from "../utils/ajax";

export const checkUser = (data,callback) => {
    const url = `http://localhost:8080/checkUser`;
    postRequest(url, data, callback);
};


export const login = (data,self) => {
    const url = 'http://localhost:8080/User';
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