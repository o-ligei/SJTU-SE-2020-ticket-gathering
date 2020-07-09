import React from 'react';
import {Layout, Input, Dropdown, Menu,Avatar} from 'antd';
import {Redirect,Link}  from 'react-router-dom';
import "../css/headerInfo.css"
import { UserOutlined } from '@ant-design/icons';
const {Header} = Layout;
const { Search } = Input;

export class HeaderInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            login:false,
            username:null,
        }
    }

    componentDidMount() {
        let username=localStorage.getItem("username");
        if(username!=null){
            this.setState({username:username,login:true});
        }
    }

    toggleSearch(value){
        console.log("搜索内容："+value);
    }

    logOut(){
        localStorage.clear();
        this.setState({login:false,username:null});
    }

    render() {
        return (
            <Header className="site-layout-background" style={{padding: 0}}>
                <div id="header-content">
                    <a href="/">首页</a>
                    <a href="/sortPage">分类</a>
                    <Search
                        placeholder="搜索明星、演出、体育赛事"
                        onSearch={value => this.toggleSearch(value)}
                        style={{ width: 200 }}
                    />
                    <Avatar icon={<UserOutlined />} />
                    <Dropdown overlay={(
                        <Menu>
                            <Menu.Item>
                                <a href={this.state.login?"/profile":"/login"}>个人信息</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href={this.state.login?"/order":"/login"}>订单管理</a>
                            </Menu.Item>
                            <Menu.Item>
                                <p className="menuItem" onClick={this.logOut.bind(this)}>登出</p>
                            </Menu.Item>
                        </Menu>
                    )}>
                                {!this.state.login?(
                                    <a href="/login">登录</a>
                                ):(
                                    <a href="/profile">{this.state.username}</a>
                                )}
                    </Dropdown>
                </div>
            </Header>
        )
    }
}
