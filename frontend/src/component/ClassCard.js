import { Card,Collapse,Menu, Dropdown, Button } from 'antd';
import React from "react";

export class ClassCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        function handleMenuClick(e) {
            console.log(e);
        }
        const menu1 = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="展会">展会</Menu.Item>
                <Menu.Item key="特色体验">特色体验</Menu.Item>
                <Menu.Item key="其他展览休闲">其他展览休闲</Menu.Item>
            </Menu>
        );
        const menu2 = (
            <Menu>
                <Menu.Item key="话剧">话剧</Menu.Item>
                <Menu.Item key="音乐剧">音乐剧</Menu.Item>
                <Menu.Item key="其他话剧歌剧">其他话剧歌剧</Menu.Item>
            </Menu>
        );
        const menu3 = (
            <Menu>
                <Menu.Item key="摇滚">摇滚</Menu.Item>
                <Menu.Item key="流行">流行</Menu.Item>
                <Menu.Item key="音乐节">音乐节</Menu.Item>
                <Menu.Item key="其他演唱会">其他演唱会</Menu.Item>
            </Menu>
        );
        const menu4 = (
            <Menu>
                <Menu.Item key="室内乐及古乐">室内乐及古乐</Menu.Item>
                <Menu.Item key="独奏">独奏</Menu.Item>
                <Menu.Item key="管弦乐">管弦乐</Menu.Item>
                <Menu.Item key="其他音乐会">其他音乐会</Menu.Item>
            </Menu>
        );
        const menu5 = (
            <Menu>
                <Menu.Item key="戏曲">戏曲</Menu.Item>
                <Menu.Item key="相声">相声</Menu.Item>
                <Menu.Item key="魔术">魔术</Menu.Item>
                <Menu.Item key="其他曲苑杂坛">其他曲苑杂坛</Menu.Item>
            </Menu>
        );
        const menu6 = (
            <Menu>
                <Menu.Item key="球类运动">球类运动</Menu.Item>
                <Menu.Item key="田径">田径</Menu.Item>
                <Menu.Item key="篮球">篮球</Menu.Item>
                <Menu.Item key="足球">足球</Menu.Item>
                <Menu.Item key="其他体育">其他体育</Menu.Item>
            </Menu>
        );
        const menu7 = (
            <Menu>
                <Menu.Item key="舞蹈">舞蹈</Menu.Item>
                <Menu.Item key="其他舞蹈芭蕾">其他舞蹈芭蕾</Menu.Item>
            </Menu>
        );
        const menu8 = (
            <Menu>
                <Menu.Item key="其他儿童亲子">其他儿童亲子</Menu.Item>
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
