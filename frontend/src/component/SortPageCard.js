import { Card,Collapse } from 'antd';
import React from "react";
import "../css/HomeCard.css"
import "../css/sortPage.css"
const { Panel } = Collapse;
const { Meta } = Card;

export class SortPageCard extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img className='image' alt="example" src={this.props.info.imgurl} />
                    <p>{this.props.info.title}</p>
                    <p>{'¥'+this.props.info.price}</p>
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