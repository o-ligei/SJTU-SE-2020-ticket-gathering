import React from 'react';
import { sports} from "../const/activity";
import {Avatar, Button, Divider, Dropdown, Input, Layout, List, Menu,message,Radio,Collapse,Tag,BackTop} from "antd";
import {SortPageCard} from "../component/SortPageCard";
import "../css/sortPage.css"
import "../css/headerInfo.css"
import {category_search, search} from "../service/searchService";
import { CaretRightOutlined } from '@ant-design/icons';
import {async} from "fast-glob";
// import Redirect from "react-router-dom/es/Redirect";
import { UserOutlined } from '@ant-design/icons';
const {Header} = Layout;
const { Search } = Input;
const { Panel } = Collapse;

export class SortPageView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            activity:[],
            search:null,
            login:false,
            username:null,
            usertype:null,
            city:"全国",
            category:"全部",
            type:"category"
        }
    }

    toggleSearch=(value)=>{
        console.log("搜索内容："+value+"!!!");
        this.setState({
            type:"category",
            category:"全国"
        });
        if (value !== this.state.search) {
            // localStorage.setItem("search", value);
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
        this.setState({login:false,username:null,usertype:null});
    }

    handleCategoryClick = (key) => {
        return (e) => {
            console.log(key);
            this.setState({category:key,type:"category"});
            // const data = {type:"category",name:key};
            // category_search(data,(res) => {
            category_search("category",key,this.state.city,(res) => {
                console.log(res);
                if (res != null)
                    this.setState({activity: res})
            })
        };
    };

    handleSubcategoryClick = (e) => {
        this.setState({category:e.key,type:"subcategory"});
        // const data = {type:"subcategory",name:e.key};
        // category_search(data,(res) => {
        category_search("subcategory",e.key,this.state.city,(res) => {
            console.log(res);
            if (res != null)
                this.setState({activity: res})
        })
    };


    onChange=(e)=> {
        console.log(`radio checked:${e.target.value}`);
        this.setState({city:e.target.value});
        category_search(this.state.type,this.state.category,e.target.value,(res) => {
            console.log(res);
            if (res != null)
                this.setState({activity: res})
        })
    }

    clear1=(e)=>{
        e.stopPropagation();
        this.setState({category:"全部",type:"category"});
        category_search("category","全部",this.state.city,(res) => {
            console.log(res);
            if (res != null)
                this.setState({activity: res})
        })
    }

    clear2=(e)=>{
        e.stopPropagation();
        this.setState({city:"全国"});
        category_search(this.state.type,this.state.category,"全国",(res) => {
            console.log(res);
            if (res != null)
                this.setState({activity: res})
        })
    }

    componentDidMount() {
        let username=localStorage.getItem("username");
        if(username!=null){
            this.setState({username:username,login:true});
            this.setState({usertype:localStorage.getItem("usertype")})
        }
        console.log(this.state.usertype);

        this.setState({activity: sports});
        const value =localStorage.getItem("search");
        localStorage.removeItem("search");
        const category=localStorage.getItem("category");
        localStorage.removeItem("category");
        this.setState({search: value,type:"category"});
        if(category!=null)this.setState({category:category});
        console.log("!" +value);
        console.log("!!"+category);
        const cardInfo=localStorage.getItem("cardInfo");
        if(cardInfo!=null){
            localStorage.removeItem("cardInfo");
            console.log(JSON.stringify(cardInfo));
            let list=[];
            list.push(JSON.parse(cardInfo));
            this.setState({activity:list})
        }
        else if(category!=null)
            category_search("category",category,"全国",(res) => {
                console.log("??123:" + JSON.stringify(res));
                if(res!=null)
                    this.setState({activity: res});
            });
        else search(value, (res) => {
            console.log("??123:" + JSON.stringify(res));
            if(res!=null)
                this.setState({activity: res})
        });
    }

    componentWillUnmount() {
        // message.error("?????");
        localStorage.removeItem("search");
        localStorage.removeItem("category");
    }

    render(){
        const menu1 = (
            <Menu onClick={this.handleSubcategoryClick}>
                <Menu.Item key="展会">展会</Menu.Item>
                <Menu.Item key="特色体验">特色体验</Menu.Item>
                <Menu.Item key="其他展览休闲">其他展览休闲</Menu.Item>
            </Menu>
        );
        const menu2 = (
            <Menu onClick={this.handleSubcategoryClick}>
                <Menu.Item key="话剧">话剧</Menu.Item>
                <Menu.Item key="音乐剧">音乐剧</Menu.Item>
                <Menu.Item key="其他话剧歌剧">其他话剧歌剧</Menu.Item>
            </Menu>
        );
        const menu3 = (
            <Menu onClick={this.handleSubcategoryClick}>
                <Menu.Item key="摇滚">摇滚</Menu.Item>
                <Menu.Item key="流行">流行</Menu.Item>
                <Menu.Item key="音乐节">音乐节</Menu.Item>
                <Menu.Item key="其他演唱会">其他演唱会</Menu.Item>
            </Menu>
        );
        const menu4 = (
            <Menu onClick={this.handleSubcategoryClick}>
                <Menu.Item key="室内乐及古乐">室内乐及古乐</Menu.Item>
                <Menu.Item key="独奏">独奏</Menu.Item>
                <Menu.Item key="管弦乐">管弦乐</Menu.Item>
                <Menu.Item key="其他音乐会">其他音乐会</Menu.Item>
            </Menu>
        );
        const menu5 = (
            <Menu onClick={this.handleSubcategoryClick}>
                <Menu.Item key="戏曲">戏曲</Menu.Item>
                <Menu.Item key="相声">相声</Menu.Item>
                <Menu.Item key="魔术">魔术</Menu.Item>
                <Menu.Item key="其他曲苑杂坛">其他曲苑杂坛</Menu.Item>
            </Menu>
        );
        const menu6 = (
            <Menu onClick={this.handleSubcategoryClick}>
                <Menu.Item key="球类运动">球类运动</Menu.Item>
                <Menu.Item key="田径">田径</Menu.Item>
                <Menu.Item key="篮球">篮球</Menu.Item>
                <Menu.Item key="足球">足球</Menu.Item>
                <Menu.Item key="其他体育">其他体育</Menu.Item>
            </Menu>
        );
        const menu7 = (
            <Menu onClick={this.handleSubcategoryClick}>
                <Menu.Item key="舞蹈">舞蹈</Menu.Item>
                <Menu.Item key="其他舞蹈芭蕾">其他舞蹈芭蕾</Menu.Item>
            </Menu>
        );
        const menu8 = (
            <Menu onClick={this.handleSubcategoryClick}>
                <Menu.Item key="其他儿童亲子">其他儿童亲子</Menu.Item>
            </Menu>
        );
        const genExtra1 = () => (
            <a onClick={this.clear1}>清除</a>
        );
        const genExtra2 = () => (
            <a onClick={this.clear2}>清除</a>
        );
        function onChange(e) {
            console.log(`radio checked:${e.target.value}`);
        }
        function callback(key) {
            console.log(key);
        }
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

                        {this.state.usertype==="Admin" &&
                        <div style={{paddingLeft:1100}}>
                            <Dropdown
                                overlay={(
                                    <Menu visible={false}>
                                        <Menu.Item>
                                            <a href="/admin">添加活动</a>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <a href= "/login">订单管理</a>
                                        </Menu.Item>
                                    </Menu>
                                )}>
                                <Button> Admin </Button>
                            </Dropdown>
                        </div>
                        }
                    </div>
                </Header>
                <Divider plain className="divider"> </Divider>
                <div id="classify">
                    <div id="cityDiv">
                        {/*defaultActiveKey={['1']}*/}
                        <Collapse onChange={callback} bordered={false}
                                  expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                            <Panel key="1" header={"分类："+this.state.category} className="site-collapse-custom-panel" extra={genExtra1()}>
                                <div>
                                    <Dropdown.Button type="primary" overlay={menu1} onClick={this.handleCategoryClick("展览休闲")}>展览休闲</Dropdown.Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Dropdown.Button type="primary" overlay={menu2} onClick={this.handleCategoryClick("话剧歌剧")}>话剧歌剧</Dropdown.Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Dropdown.Button type="primary" overlay={menu3} onClick={this.handleCategoryClick("演唱会")}>演唱会</Dropdown.Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Dropdown.Button type="primary" overlay={menu4} onClick={this.handleCategoryClick("音乐会")}>音乐会</Dropdown.Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <div style={{paddingTop:20}}> </div>
                                    <Dropdown.Button type="primary" overlay={menu5} onClick={this.handleCategoryClick("曲苑杂坛")}>曲苑杂坛</Dropdown.Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Dropdown.Button type="primary" overlay={menu6} onClick={this.handleCategoryClick("体育")}>体育</Dropdown.Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Dropdown.Button type="primary" overlay={menu7} onClick={this.handleCategoryClick("舞蹈芭蕾")}>舞蹈芭蕾</Dropdown.Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Dropdown.Button type="primary" overlay={menu8} onClick={this.handleCategoryClick("儿童亲子")}>儿童亲子</Dropdown.Button>
                                </div>
                            </Panel >
                            <Panel header={"城市选择："+this.state.city} key="2" className="site-collapse-custom-panel" extra={genExtra2()}>
                                <Radio.Group onChange={this.onChange}  buttonStyle="solid" >
                                    {/*<Radio.Button value="全国">全国</Radio.Button>*/}
                                    <div><Tag color="volcano">a~g</Tag></div>
                                    <Radio.Button value="北京">北京</Radio.Button>
                                    <Radio.Button value="成都">成都</Radio.Button>
                                    <Radio.Button value="重庆">重庆</Radio.Button>
                                    <Radio.Button value="长春">长春</Radio.Button>
                                    <Radio.Button value="长沙">长沙</Radio.Button>
                                    <Radio.Button value="大连">大连</Radio.Button>
                                    <Radio.Button value="东莞">东莞</Radio.Button>
                                    <Radio.Button value="佛山">佛山</Radio.Button>
                                    <Radio.Button value="福州">福州</Radio.Button>
                                    <Radio.Button value="广州">广州</Radio.Button>
                                    <Radio.Button value="贵阳">贵阳</Radio.Button>
                                    <Radio.Button value="国际及港澳台">国际及港澳台</Radio.Button>
                                    <div style={{paddingTop:10}}><Tag color="volcano">h~n</Tag></div>
                                    <Radio.Button value="哈尔滨">哈尔滨</Radio.Button>
                                    <Radio.Button value="海口">海口</Radio.Button>
                                    <Radio.Button value="杭州">杭州</Radio.Button>
                                    <Radio.Button value="合肥">合肥</Radio.Button>
                                    <Radio.Button value="呼和浩特">呼和浩特</Radio.Button>
                                    <Radio.Button value="济南">济南</Radio.Button>
                                    <Radio.Button value="昆明">昆明</Radio.Button>
                                    <Radio.Button value="南昌">南昌</Radio.Button>
                                    <Radio.Button value="南京">南京</Radio.Button>
                                    <Radio.Button value="南宁">南宁</Radio.Button>
                                    <Radio.Button value="宁波">宁波</Radio.Button>
                                    <div style={{paddingTop:10}}><Tag color="volcano">q~w</Tag></div>
                                    <Radio.Button value="青岛">青岛</Radio.Button>
                                    <Radio.Button value="厦门">厦门</Radio.Button>
                                    <Radio.Button value="上海">上海</Radio.Button>
                                    <Radio.Button value="深圳">深圳</Radio.Button>
                                    <Radio.Button value="沈阳">沈阳</Radio.Button>
                                    <Radio.Button value="石家庄">石家庄</Radio.Button>
                                    <Radio.Button value="苏州">苏州</Radio.Button>
                                    <Radio.Button value="太原">太原</Radio.Button>
                                    <Radio.Button value="天津">天津</Radio.Button>
                                    <Radio.Button value="无锡">无锡</Radio.Button>
                                    <Radio.Button value="武汉">武汉</Radio.Button>
                                    <div style={{paddingTop:10}}><Tag color="volcano">x~z</Tag></div>
                                    <Radio.Button value="西安">西安</Radio.Button>
                                    <Radio.Button value="郑州">郑州</Radio.Button>
                                    <Radio.Button value="中国香港">中国香港</Radio.Button>
                                    <Radio.Button value="珠海">珠海</Radio.Button>
                                </Radio.Group>
                            </Panel>
                        </Collapse>
                    </div>
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
                                <SortPageCard info={item} usertype={this.state.usertype}/>
                            </List.Item>
                        )}
                    />
                </div>
                <BackTop/>
                {/*<button onClick={()=>search(this.state.search,(res)=>{*/}
                {/*    console.log("??123:"+JSON.stringify(res));*/}
                {/*    this.setState({activity:res})*/}
                {/*})}>push</button>*/}
            </div>
        )
    }
}
