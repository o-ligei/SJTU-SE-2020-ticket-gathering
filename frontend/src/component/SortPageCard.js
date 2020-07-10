import { Card,Collapse } from 'antd';
import React from "react";
import "../css/HomeCard.css"
import "../css/sortPage.css"
const { Panel } = Collapse;
const { Meta } = Card;

export class SortPageCard extends React.Component{
    render(){
        return(
            <div style={{paddingBottom:30}}>
                <div>
                    <img className='image' alt="example" src={this.props.info.imgurl} />
                    <p id="title">{this.props.info.title}</p>
                    <p id="info">地点： {this.props.info.city} | {this.props.info.venue}</p>
                    <p style={{paddingLeft:200}}>{this.props.info.category}</p>
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