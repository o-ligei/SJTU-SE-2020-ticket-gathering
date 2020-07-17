import React from 'react';
import { sports} from "../const/activity";
import {Avatar, Button, Divider, Dropdown, Input, Layout, List, Menu} from "antd";
import {SortPageCard} from "../component/SortPageCard";
import "../css/sortPage.css"
import "../css/headerInfo.css"
import {RecommendList} from "../component/RecommendList";
import {search} from "../service/searchService";
import {async} from "fast-glob";
import Redirect from "react-router-dom/es/Redirect";
import { UserOutlined } from '@ant-design/icons';
import {ClassCard} from "../component/ClassCard";
const {Header} = Layout;
const { Search } = Input;

export class SortPageView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            activity:[],
            search:null,
            login:false,
            username:null,
        }
    }

    toggleSearch=(value)=>{
        console.log("搜索内容："+value+"!!!");
        if (value !== this.state.search) {
            localStorage.setItem("search", value);
            this.setState({search: value});
            search(value, (res) => {
                console.log(value);
                console.log("??res:" + JSON.stringify(res));
                if (res != null)
                    this.setState({activity: res})
            });
        }
    }

    logOut(){
        localStorage.clear();
        this.setState({login:false,username:null});
    }

    async componentDidMount() {
        let username=localStorage.getItem("username");
        if(username!=null){
            this.setState({username:username,login:true});
        }

        this.setState({activity: sports});
        const value = await localStorage.getItem("search");
        this.setState({search: value});
        console.log("!!" + this.state.search);
        search(this.state.search, (res) => {
            console.log("??123:" + JSON.stringify(res));
            if(res!=null)
                this.setState({activity: res})
        });
    }

    render(){
        return(
            <div >
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
                <Divider plain className="divider"> </Divider>
                <div id="classify">
                    <ClassCard />
                </div>
                <div id="sortPageDiv" style={{paddingBottom:100}}>
                    <List
                        grid={{gutter: 10, column: 1}}
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 10,
                        }}
                        footer={
                            <div style={{textAlign:"center"}}>
                                <b>O_ligei ! </b> footer part
                            </div>
                        }
                        dataSource={this.state.activity}
                        renderItem={item => (
                            <List.Item>
                                <SortPageCard info={item}/>
                            </List.Item>
                        )}
                    />
                </div>
                <RecommendList/>
                {/*<button onClick={()=>search(this.state.search,(res)=>{*/}
                {/*    console.log("??123:"+JSON.stringify(res));*/}
                {/*    this.setState({activity:res})*/}
                {/*})}>push</button>*/}
            </div>
        )
    }
}