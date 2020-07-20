import React from 'react';
import {Descriptions,Badge} from "antd";
import "../css/profile.css"
import {HeaderInfo} from "../component/Header";
import {getPersonInfo} from "../service/userService";

export class ProfileView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            userInfo:null
        }
    }

    componentDidMount() {
        const callback=(data)=>{
            this.setState({userInfo:data})
        };
        let userId=localStorage.getItem("userId");
        getPersonInfo(userId,callback);
    }

    render() {
        if (this.state.userInfo == null) {
            return (
                <p>404</p>
            )
        } else {
            return (
                <div>
                    <HeaderInfo/>
                    <div style={{paddingTop:50}}>
                        <div id="profileDiv">
                            <Descriptions title="个人信息" bordered>
                                <Descriptions.Item label="用户名">{this.state.userInfo.username}</Descriptions.Item>
                                <Descriptions.Item label="性别">{this.state.userInfo.gender}</Descriptions.Item>
                                <Descriptions.Item label="用户类型">{this.state.userInfo.type?("用户"):("管理员")}</Descriptions.Item>
                                <Descriptions.Item label="电话号码">{this.state.userInfo.phone}</Descriptions.Item>
                                <Descriptions.Item label="邮箱" span={2}>
                                    {this.state.userInfo.email}
                                </Descriptions.Item>
                                {/*<Descriptions.Item label="Status" span={3}>*/}
                                {/*    <Badge status="processing" text="Running" />*/}
                                {/*</Descriptions.Item>*/}
                                <Descriptions.Item label="账户余额">$80.00</Descriptions.Item>
                                {/*<Descriptions.Item label="Discount">$20.00</Descriptions.Item>*/}
                                {/*<Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>*/}
                                <Descriptions.Item label="Config Info">
                                    <img alt="userIcon" style={{height:100}} src={this.state.userInfo.personIcon}/>
                                </Descriptions.Item>
                            </Descriptions>
                        </div>
                    </div>
                </div>
            )
        }
    }
}