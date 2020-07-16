/**
 * @param actitemid {int}
 *
 */
import { Card,Collapse,Menu, Dropdown, Button } from 'antd';
import React from "react";
import "../css/HomeCard.css"
import "../css/sortPage.css"
import {history} from "../utils/history";
const { Panel } = Collapse;
const { Meta } = Card;


export class SortPageCard extends React.Component{

    requestData = {
        "image": this.props.info.imaurl,
    };

    handleDetail = actitemid =>{
        window.localStorage.setItem("actitemid",actitemid);
        console.log("jumping..");

        // history.push("/detail");
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
                     <p id="price">{'¥'+this.props.info.price}</p>
                 </div>
                 <div>
                     <Collapse accordion>
                         <Panel header="票源">
                             <Button onClick={this.handleDetail(1)}>大麦网</Button>
                             <Button href="/detail">小麦网</Button>
                         </Panel>
                     </Collapse>
                 </div>
            </div>
        )
    }
}
