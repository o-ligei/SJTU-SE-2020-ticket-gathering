import React from 'react';
import {Layout, Input, Dropdown, Menu,Avatar,Button} from 'antd';
import "../css/headerInfo.css"
import { UserOutlined } from '@ant-design/icons';
import {history} from "../utils/history";
import Redirect from "react-router-dom/es/Redirect";
const {Header} = Layout;
const { Search } = Input;
// import { Redirect } from 'react-router-dom'
// import {withRouter} from "react-router-dom";

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

    toggleSearch=(value)=>{
        console.log("搜索内容："+value+"!!!");
        localStorage.setItem("search",value);
        // history.push('/sortPage')
        return <Redirect to="/sortPage"/>;
    }

    logOut(){
        localStorage.clear();
        this.setState({login:false,username:null});
    }

    render() {
        return (
            <Header className="site-layout-background" style={{padding: 0}}>
                <div id="header-content">
                    <div id="oligei">
                        <img src={require('../resources/oligei.png')} width="200px" height="80px"/>
                    </div>
                    <div id="menusortDiv">
                        <Button id="menuButton" href="/" type={"primary"}>首页</Button>
                        <Button id="sortButton" href="/sortPage" type={"primary"}>分类</Button>
                    </div>
                    <div id="searchDiv">
                        <Search
                            id="searchInput"
                            placeholder="搜索明星、演出、体育赛事"
                            onSearch={value => this.toggleSearch(value)}
                            enterButton="搜索"
                            size="large"
                        />
                    </div>
                    <Avatar id="profileOperate" icon={<UserOutlined />} />
                    <Dropdown
                        overlay={(
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
                                    <Button id="profileOperate" href="/login">登录</Button>
                                ):(
                                    <Button id="profileOperate" href="/profile">{this.state.username}</Button>
                                )}
                    </Dropdown>
                </div>
            </Header>
        )
    }
}
