import React from 'react';
import { Form, Input, Button } from 'antd';
import {Redirect,Link}  from 'react-router-dom';
import {message} from "antd";
import "../css/Login.css"
import {checkUser} from "../service/userService";
import {userInfo} from "../const/userInfo";

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
        if(values.username==userInfo.username && values.password==userInfo.password){
            this.setState({firstLogin:false,user:userInfo})
        }
        this.setState({firstLogin:false});
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render(){
        if(this.state.user==null &&this.state.firstLogin==false){
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
            <Form
                {...layout}
                name="basic"
                initialValues={{remember: true}}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                    <Link to={{pathname:"/register"}}>
                        <Button>
                            注册
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        );
    }
}


