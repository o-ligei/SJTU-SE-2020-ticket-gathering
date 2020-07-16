import {postRequest,fetchPost1} from "../utils/ajax";
/**用于服务器跨域*/
const server_url='http://54.83.132.136:8080';

/**用于本地跨域，平时用这个*/
const local_url='http://localhost:8080';

export const checkUser = (value,callback) => {
    const data={username:value};
    const url =local_url+ '/User/ExistsByUsername';
    postRequest(url, data, callback);
};


export const login = (value,callback) => {
    const data={username:value.username,password:value.password};
    const url = local_url+'/User/Login';
    postRequest(url, data, callback);
};

export const register = (username,password,email,personicon,phone,gender,callback) => {
    const url = local_url+'/User/Register';
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

// export const register = (self) => {
//     const url = 'http://localhost:8080/User/Register';
//     const callback = (data) => {
//         if(data.status >= 0) {
//             localStorage.setItem('userId', data.data.userId);
//             localStorage.setItem('userName', data.data.username);
//             self.$message({
//                 message: "Register successfully",//data.msg,
//                 type: "success",
//             });
//             self.$router.replace("/");
//         }
//         else{
//             //message.error(data.msg);
//             self.$message({
//                 message: "Username is repetitive! Please choose another one.",//data.msg,
//                 type: "error",
//             });
//         }
//     };
//     let user={username:self.username,password:self.password,type:"User",gender: "Male",email:self.email,phone:self.phone,personIcon:image2Base64(self.personicon)};
//     postRequest(url, user, callback);
// };

// function image2Base64(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;
//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0, img.width, img.height);
//     var dataURL = canvas.toDataURL("image/png");
//     return dataURL;
// }
