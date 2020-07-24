import {authRequest, postRequest} from "../utils/ajax";

export const getAuctions = (token,callback) => {
    const data={searching:null};
    const url = `/Auction/get`;
    authRequest(url, data,token, callback);
};

export const addAuction = (actitemid,ddl,showtime,price,amount,token,callback) => {
    const data={actitemid:actitemid,ddl:ddl,showtime:showtime,price:price,amount:amount};
    const url = `/Auction/add`;
    authRequest(url, data,token, callback);
};

export const joinAuctions = (auctionid,userid,price,token,callback) => {
    const data={auctionid:auctionid,userid:userid,price:price};
    const url = `/Auction/join`;
    postRequest(url, data,token, callback);
};
