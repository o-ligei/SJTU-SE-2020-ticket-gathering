import { Card } from 'antd';
import React from "react";
import "../css/HomeCard.css"

const { Meta } = Card;

export class HomeCard extends React.Component{
    render(){
        return(
    //         <Card
    //     hoverable
    //     style={{ width: 240 }}
    //     cover={<img alt="example" src={this.props.info.imgurl} />}
    // >
    // <Meta title={this.props.info.title} description={'¥'+this.props.info.price} style={{fontFamily:"HeiTi"}}/>
    // </Card>
            <Card  bordered={false} hoverable={true}>
                <img alt="example" src={this.props.info.imgurl} id="cardImg"/>
                <div>
                    <p className="box">{this.props.info.title}</p>
                    <p id="venue">{this.props.info.venue}</p>
                    <p id="venue">{this.props.info.time}</p>
                    <p id="pricestr">{this.props.info.price_str}</p>
                </div>
            </Card>
        )
    }
}