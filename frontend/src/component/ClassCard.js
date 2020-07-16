import { Card,Collapse,Menu, Dropdown, Button } from 'antd';
import React from "react";

export class ClassCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const menu1 = (
            <Menu>
                <Menu.Item key="1">展会</Menu.Item>
                <Menu.Item key="2">特色体验</Menu.Item>
                <Menu.Item key="3">其他展览休闲</Menu.Item>
            </Menu>
        );
        const menu2 = (
            <Menu>
                <Menu.Item key="1">话剧</Menu.Item>
                <Menu.Item key="2">音乐剧</Menu.Item>
                <Menu.Item key="3">其他话剧歌剧</Menu.Item>
            </Menu>
        );
        const menu3 = (
            <Menu>
                <Menu.Item key="1">摇滚</Menu.Item>
                <Menu.Item key="2">流行</Menu.Item>
                <Menu.Item key="3">音乐节</Menu.Item>
                <Menu.Item key="4">其他演唱会</Menu.Item>
            </Menu>
        );
        const menu4 = (
            <Menu>
                <Menu.Item key="1">室内乐及古乐</Menu.Item>
                <Menu.Item key="2">独奏</Menu.Item>
                <Menu.Item key="3">管弦乐</Menu.Item>
                <Menu.Item key="4">其他音乐会</Menu.Item>
            </Menu>
        );
        const menu5 = (
            <Menu>
                <Menu.Item key="1">戏曲</Menu.Item>
                <Menu.Item key="2">相声</Menu.Item>
                <Menu.Item key="3">魔术</Menu.Item>
                <Menu.Item key="4">其他曲苑杂坛</Menu.Item>
            </Menu>
        );
        const menu6 = (
            <Menu>
                <Menu.Item key="1">球类运动</Menu.Item>
                <Menu.Item key="2">田径</Menu.Item>
                <Menu.Item key="3">篮球</Menu.Item>
                <Menu.Item key="4">足球</Menu.Item>
                <Menu.Item key="5">其他体育</Menu.Item>
            </Menu>
        );
        const menu7 = (
            <Menu>
                <Menu.Item key="1">舞蹈</Menu.Item>
                <Menu.Item key="2">其他舞蹈芭蕾</Menu.Item>
            </Menu>
        );
        const menu8 = (
            <Menu>
                <Menu.Item key="1">其他儿童亲子</Menu.Item>
            </Menu>
        );
        return(
            <div>
                <Dropdown.Button type="primary" overlay={menu1}>展览休闲</Dropdown.Button>
                &nbsp;&nbsp;&nbsp;
                <Dropdown.Button type="primary" overlay={menu2}>话剧歌剧</Dropdown.Button>
                &nbsp;&nbsp;&nbsp;
                <Dropdown.Button type="primary" overlay={menu3}>演唱会</Dropdown.Button>
                &nbsp;&nbsp;&nbsp;
                <Dropdown.Button type="primary" overlay={menu4}>音乐会</Dropdown.Button>
                &nbsp;&nbsp;&nbsp;
                <Dropdown.Button type="primary" overlay={menu5}>曲苑杂坛</Dropdown.Button>
                &nbsp;&nbsp;&nbsp;
                <Dropdown.Button type="primary" overlay={menu6}>体育</Dropdown.Button>
                &nbsp;&nbsp;&nbsp;
                <Dropdown.Button type="primary" overlay={menu7}>舞蹈芭蕾</Dropdown.Button>
                &nbsp;&nbsp;&nbsp;
                <Dropdown.Button type="primary" overlay={menu8}>儿童亲子</Dropdown.Button>
            </div>
        )
    }
}
