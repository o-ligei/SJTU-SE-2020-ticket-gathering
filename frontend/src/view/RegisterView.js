import React from 'react';
import '../App.css'
import '../css/register.css'
import {Button, Input, Layout, message, Alert, Result, Card,Radio} from 'antd';
import {  UserOutlined } from '@ant-design/icons';
import {findUser, addUser, register} from "../service/userService";
import {UploadImage} from "../component/UploadImage";
import {Link}  from 'react-router-dom';

/**
 * @ClassName RegisterView
 * @Description register page
 * @Author Yang Yicheng
 * @Date 2020/7/10
 */

export class RegisterView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:null,
            password:null,
            email:null,
            phone:null,
            personicon:null,
            gender:0,
            usernameErrorVisible:false,
            passwordErrorVisible:false,
            emailErrorVisible:false,
            registered:false,
        };
        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.checkPassword=this.checkPassword.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handlePhone=this.handlePhone.bind(this);
        this.handleCommitImage=this.handleCommitImage.bind(this);
        this.handleGender=this.handleGender.bind(this);
    }

    handleUsername(e){
        const value=e.target.value;
        // const callback=(data)=>{
        //     if(data){
        //         this.setState({usernameErrorVisible:true});
        //     }
        //     else{
        //         this.setState({username:value,usernameErrorVisible:false})
        //     }
        // }
        // findUser(value,callback);

        /**frontend only*/
        this.setState({username:value});
    }

    handlePassword(e){
        this.setState({password:e.target.value})
    }

    checkPassword(e){
        const value=e.target.value;
        if(value==""){
            this.setState({password:null});
        }
        else{
            if (value!=this.state.password){
                this.setState({passwordErrorVisible:true})
            }
            else{
                this.setState({passwordErrorVisible:false})
            }
        }
    }

    handlePhone(e){
        const value=e.target.value;
        this.setState({phone:value});
    }

    handleEmail(e){
        let value = e.target.value;
        console.log(value);
        if(value==""){
            this.setState({email:null});
        }
        else{
            if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
                this.setState({emailErrorVisible: true});
            } else {
                this.setState({email: value, emailErrorVisible: false});
            }
        }
    }

    handleSubmit(){
        // const callback =  (data) => {
        //     this.setState({registered:true});
        // };
        // if(this.state.username!=null &&this.state.password!=null &&this.state.email!=null){
        //     if(!this.state.usernameErrorVisible && !this.state.passwordErrorVisible && !this.state.emailErrorVisible){
        //         addUser(this.state.username,this.state.password,this.state.address,callback);
        //     }
        // }

        /**frontend only*/
        // this.setState({registered:true});
        register(this.state.username,this.state.password,this.state.address,self);
    }

    handleCommitImage(data){
        this.setState({personicon:data});
    }

    handleGender(e){
        this.setState({gender:e.target.value});
    }
    render(){
        if(this.state.registered){
            return(
                <div id="bg">
                <div id="regDiv">
                <Result
                    status="success"
                    title="注册成功"
                    subTitle="欢迎来到聚票网"
                    extra={[
                        <Link to={{
                            pathname: '/login',
                        }}
                        >
                            <Button type="primary" key="console">
                                去登陆
                            </Button>
                        </Link>
                    ]}
                />
                </div>
                </div>
            )
        }
        return(
            <div id="bg">
            <div id="regDiv">
                <p>请输入用户名:</p>
                <Input
                    placeholder="Enter your username"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    onBlur={this.handleUsername}
                >
                </Input>
                <div>
                    {this.state.usernameErrorVisible?(
                        <Alert message="该用户名已被注册过" type="error"/>
                    ):null}
                </div>
                <p>请输入密码:</p>
                <Input.Password
                    placeholder="Enter your password"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    onBlur={this.handlePassword}
                >
                </Input.Password>
                <p>请再次输入密码:</p>
                <Input.Password
                    placeholder="Enter your password again"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    onBlur={this.checkPassword}
                >
                </Input.Password>
                <div>
                    <p>性别：</p>
                    <Radio.Group onChange={this.handleGender} value={this.state.gender}>
                        <Radio value={0}>男</Radio>
                        <Radio value={1}>女</Radio>
                    </Radio.Group>
                </div>
                <div>
                    {this.state.passwordErrorVisible?(
                        <Alert message="请输入相同的密码" type="error"/>
                    ):null}
                </div>
                <p>请输入手机号:</p>
                <Input
                    placeholder="Enter your phone number"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    onBlur={this.handlePhone}
                >
                </Input>
                <p>请输入邮箱:</p>
                <Input
                    placeholder="Enter your address"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    onBlur={this.handleEmail}
                >
                </Input>
                <div>
                    {this.state.emailErrorVisible?(
                        <Alert message="请输入正确的Email" type="error"/>
                    ):null}
                </div>
                <p>上传头像：</p>
                <UploadImage onCommitImage={this.handleCommitImage}/>
                <Button onClick={this.handleSubmit.bind(this)}>
                    提交
                </Button>
                <div>
                    {(this.state.personicon==null)?null:(
                        <img className="personIcon" alt="personIcon" src={this.state.personicon}/>
                    )}
                </div>
            </div>
            </div>
        )
    }
}