import {postRequest} from "../utils/ajax";

export const getAuctions = (callback) => {
    const data={searching:null};
    const url = `/Auction/get`;
    postRequest(url, data, callback);
};

export const addAuction = (actitemid,ddl,showtime,price,amount,callback) => {
    const data={actitemid:actitemid,ddl:ddl,showtime:showtime,price:price,amount:amount};
    const url = `/Auction/add`;
    postRequest(url, data, callback);
};

export const joinAuctions = (auctionid,userid,price,callback) => {
    const data={auctionid:auctionid,userid:userid,price:price};
    const url = `/Auction/join`;
    postRequest(url, data, callback);
};
