import React from 'react';
import { Form, Input, Button } from 'antd';
import {Redirect,Link}  from 'react-router-dom';
import {message} from "antd";
import "../css/Login.css"
import {checkUser} from "../service/userService";
import {userInfo} from "../const/userInfo";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {login} from "../service/userService";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:null,
            firstLogin:true,
        };
    }
    onFinish = values => {
        // const callback =  (data) => {
        //     this.setState({user:data,firstLogin:false});
        // };
        // checkUser(values,callback);
        // console.log(values);
        if(values.username===userInfo.username && values.password===userInfo.password){
            // this.setState({firstLogin:false,user:userInfo});
            login(values,this);
        }
        this.setState({firstLogin:false});
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render(){
        if(this.state.user==null &&this.state.firstLogin===false){
            message.error("密码错误")
        }
        if(this.state.user!=null) {
            localStorage.clear();
            // console.log(this.state.user.userId);
            localStorage.setItem("userId", this.state.user.userId);
            localStorage.setItem("username",this.state.user.username);
            return <Redirect to={{pathname: "/"}}/>;
        }
        return (
            <div>
            <Form
                id = "login_form"
                {...layout}
                name="basic"
                initialValues={{remember: true}}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    // label="Username"
                    // labelCol={{font-size:20px}}
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size="large"
                           style={{fontFamily:"BookMan Old Style",borderRadius: 10,width:400}}/>
                </Form.Item>
                <Form.Item
                    // label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        size="large"
                        style={{fontFamily:"BookMan Old Style",borderRadius: 10,width:400}}
                    />
                </Form.Item>
            </Form>

                <div id="buttonDiv">
                    <Button type="primary" htmlType="submit" size="large" id="loginBtn">
                        登 录
                    </Button>
                    <p> </p>
                    <Link to={{pathname: "/register"}}>
                        <Button size="large" id="regBtn">
                            注册
                        </Button>
                    </Link>
                </div>

            </div>
        );
    }
}


