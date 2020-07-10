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


             <div style={{paddingBottom:30}}>
                 <div>
                     <img className='image' alt="example" src={this.props.info.imgurl} />
                     <p id="title">{this.props.info.title}</p>
                     <p id="info">地点： {this.props.info.city} | {this.props.info.venue}</p>
                     <p style={{paddingLeft:200,fontSize:12}}>{this.props.info.category}</p>
                     <p id="info">{this.props.info.time}</p>
                     <p id="price">{'¥'+this.props.info.price_str}</p>
                 </div>
                 <div>
                     <Collapse accordion>
                         <Panel header="选择时间">
                             <p>2020.07.07-07.12</p>
                             <p>2020.07.08</p>
                         </Panel>
                     </Collapse>
                 </div>
            </div>
        )
    }
}
