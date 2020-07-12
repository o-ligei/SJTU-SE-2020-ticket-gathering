import { Card,Collapse,Menu, Dropdown, Button } from 'antd';
import React from "react";
import "../css/sortPage.css"

export class DetailCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img className='image' alt="example" src={this.props.info.imgurl} />
                <p id="title">{this.props.info.title}</p>
                <p id="info">地点： {this.props.info.city} | {this.props.info.venue}</p>
                <p id="info">票源：{this.props.info.website}</p>
                <p style={{paddingLeft:200,fontSize:12}}>{this.props.info.category}</p>
                <p id="info">{this.props.info.time}</p>
                <p id="price">{'¥'+this.props.info.price}</p>
                <Button type="primary" shape="round" id="PurchaseButton">立即购买</Button>
            </div>
        )
    }
}