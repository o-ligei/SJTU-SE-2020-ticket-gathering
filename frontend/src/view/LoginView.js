import React from 'react';
import {LoginForm} from "../component/LoginForm";
import background from "../resources/Login_background.jpg"
import "../css/Login.css"
import { PageHeader } from 'antd';

let sectionStyle = {
    backgroundImage: `url(${background})`
};

export class LoginView extends React.Component{
    render(){
        return(
            <div id="container" style={sectionStyle}>
                <LoginForm/>
            </div>
        )
    }
}
