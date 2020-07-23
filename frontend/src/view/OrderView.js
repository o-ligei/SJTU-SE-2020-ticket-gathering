import React from 'react';
import {Order} from "../component/Order";
import {HeaderInfo} from "../component/Header";
import {FooterInfo} from "../component/Footer";
import { Redirect } from 'react-router-dom'


export class OrderView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            logOut:false
        };
        this.logOut=this.logOut.bind(this);
    }

    logOut(){
        this.setState({logOut:true});
    }

    render(){
        if(this.state.logOut){
            return <Redirect to={{pathname: "/"}}/>;
        }
        return(
            <div>
                <HeaderInfo logOut={this.logOut}/>
                <Order/>
                <p> </p>
                <FooterInfo/>
            </div>
        )
    }
}