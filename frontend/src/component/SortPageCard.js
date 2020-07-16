import { Card,Collapse,Menu, Dropdown, Button } from 'antd';
import React from "react";
import "../css/HomeCard.css"
import "../css/sortPage.css"
const { Panel } = Collapse;
const { Meta } = Card;

export class SortPageCard extends React.Component{

    requestData = {
        "image": this.props.info.imaurl,
    };

    handleDetail = website =>{
        console.log(website);
        let request = {
            "imgurl":this.props.info.imgurl,
            "title":this.props.info.title,
            "city":this.props.info.city,
            "venue":this.props.info.venue,
            "category":this.props.info.category,
            "time":this.props.info.time,
            "price":this.props.info.price,
            "website":website,
        };
        window.localStorage.setItem("detail",JSON.stringify(request))
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
                             <a href="/detail" onClick={this.handleDetail("大麦网")}>大麦网 ¥ 777</a>
                             <a href="/detail" onClick={this.handleDetail("小麦网")}>小麦网 ¥ 888</a>
                         </Panel>
                     </Collapse>
                 </div>
            </div>
        )
    }
}
