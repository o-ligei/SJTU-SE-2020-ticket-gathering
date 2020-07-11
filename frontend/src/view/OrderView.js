import React from 'react';
import {Order} from "../component/Order";
import {HeaderInfo} from "../component/Header";
import {FooterInfo} from "../component/Footer";



export class OrderView extends React.Component{
    render(){
        return(
            <div>
                <HeaderInfo/>
                <Order/>
                <p> </p>
                <FooterInfo/>
            </div>
        )
    }
}