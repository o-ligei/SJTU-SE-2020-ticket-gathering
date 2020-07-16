
/**用于服务器跨域
 * url:'http://54.83.132.136:8080'
 * 用于跑本地
 * url:'http://localhost:8080'
 * */

const baseUrl='http://localhost:8080';

let postRequest = (apiUrl, data, callback) => {
    const url=baseUrl+apiUrl;
    let formData = new FormData();

    for (let p in data){
        if(data.hasOwnProperty(p))
            formData.append(p, data[p]);
    }
    let opts = {
        method: "POST",
        body: formData,
        credentials: "omit"
    };

    fetch(url,opts)
        .then((response) => {
            if(response.status===201){
                console.log("empty response");
                callback(null);
            }
            else {
                return response.json()
            }
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            callback(null);
            // console.log(error);
        });
};

let fetchPost1=(apiUrl, json,callback) =>{
    const url=baseUrl+apiUrl;
    let opts = {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
    };

    fetch(url,opts)
        .then((response) => {
            if(response.status===201){
                console.log("empty response");
                callback(null);
            }
            else {
                return response.json()
            }
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            callback(null);
            // console.log(error);
        });
};

export {postRequest,fetchPost1};
