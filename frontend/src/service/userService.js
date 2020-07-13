import {postRequest,fetchPost1} from "../utils/ajax";

export const checkUser = (value,callback) => {
    const data={username:value};
    const url = `http://localhost:8080/ExistsByUsername`;
    postRequest(url, data, callback);
};


export const login = (value,callback) => {
    const data={username:value.username,password:value.password}
    const url = 'http://localhost:8080/Login';
    fetchPost1(url, data, callback);
};

export const register = (username,password,email,personicon,phone,gender,callback) => {
    const url = 'http://localhost:8080/Register';
    const data={
        username:username,
        password:password,
        type:"User",
        gender: gender,
        email:email,
        phone:phone,
        personIcon:personicon
    };
    postRequest(url, data, callback);
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