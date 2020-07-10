import { Card } from 'antd';
import React from "react";
import "../css/HomeCard.css"

const { Meta } = Card;

export class HomeCard extends React.Component{
    render(){
        return(
            <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={this.props.info.imgurl} />}
    >
    <Meta title={this.props.info.title} description={'¥'+this.props.info.price} />
    </Card>
        )
    }
}