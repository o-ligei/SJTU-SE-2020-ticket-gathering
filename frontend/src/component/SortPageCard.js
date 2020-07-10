import { Card,Collapse,Menu, Dropdown, Button } from 'antd';
import React from "react";
import "../css/HomeCard.css"
import "../css/sortPage.css"
const { Panel } = Collapse;
const { Meta } = Card;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                大麦网 ¥ 666
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                小麦网 ¥ 777
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                小米网 ¥ 888
            </a>
        </Menu.Item>
    </Menu>
);

export class SortPageCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div id="sortCard">
                    <img className='image' alt="example" src={this.props.info.imgurl} />
                 <div>
                    <p>{this.props.info.title}</p>
                    <p>{'¥'+this.props.info.price}</p>
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button>购票</Button>
                    </Dropdown>
                 </div>
            </div>
        )
    }
}
