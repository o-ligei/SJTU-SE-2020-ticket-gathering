import React from "react"
import { Row, Col, Divider,Avatar } from 'antd';
import { AndroidOutlined } from '@ant-design/icons';
import "../css/home.css"

export class Navigate extends React.Component{
    render(){
        return(
            <Row justify="center">
                <Col span={2}>
                    <Avatar size={60}>二次元</Avatar>
                </Col>
                <Col span={2}>
                    <Avatar size={60}>旅游</Avatar>
                </Col>
                <Col span={2}>
                    <Avatar size={60}>音乐会</Avatar>
                </Col>
                <Col span={2}>
                    <Avatar size={60}>舞蹈</Avatar>
                </Col>
                <Col span={2}>
                    <Avatar size={60}>演唱会</Avatar>
                </Col>
                <Col span={2}>
                    <Avatar size={60}>话剧歌剧</Avatar>
                </Col>
                <Col span={2}>
                    <Avatar size={60}>体育</Avatar>
                </Col>
                <Col span={2}>
                    <Avatar size={60}>展览</Avatar>
                </Col>
            </Row>
        )
    }
}

