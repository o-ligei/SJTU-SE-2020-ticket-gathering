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

    handleDetail = website =>{
        // console.log(website);
        let request = {
            "imgurl":this.props.info.activityIcon,
            "title":this.props.info.title,
            "city":this.props.info.city,
            "venue":this.props.info.venue,
            "category":this.props.info.category,
            "timescale":this.props.info.timescale,
            "price":this.props.info.price,
            "website":website,
        };
        window.localStorage.setItem("detail",JSON.stringify(request))
    }


    render(){
        return(
             <div style={{paddingBottom:30}}>
                 <div>
                     <img className='image' alt="example" src={this.props.info.activityIcon} />
                     <p id="title">{this.props.info.title}</p>
                     <p id="info">地点： {this.props.info.city} | {this.props.info.venue}</p>
                     <p style={{paddingLeft:200,fontSize:12}}>{this.props.info.category}</p>
                     <p id="info">{this.props.info.timescale}</p>
                     <p id="price">{'¥'+this.props.info.actitems[0].price[0].class[0].price+'-'+this.props.info.actitems[0].price[0].class[2].price}</p>
                 </div>
                 <div style={{paddingTop:20}}>
                     <Collapse accordion>
                         <Panel header="票源">
                             <a href="/detail" onClick={this.handleDetail( this.props.info.actitems[0].website)} >
                                 {this.props.info.actitems[0].website}:
                             </a>
                             <p style={{fontFamily:'HeiTi'}}>时间1：{this.props.info.actitems[0].price[0].time}
                             ￥{this.props.info.actitems[0].price[0].class[0].price},
                             ￥{this.props.info.actitems[0].price[0].class[1].price},
                             ￥{this.props.info.actitems[0].price[0].class[2].price}
                             。时间2：{this.props.info.actitems[0].price[1].time}
                             ￥{this.props.info.actitems[0].price[1].class[0].price},
                             ￥{this.props.info.actitems[0].price[1].class[1].price},
                             ￥{this.props.info.actitems[0].price[1].class[2].price}
                             </p>
                             <p> </p>
                             <a href="/detail" onClick={this.handleDetail( this.props.info.actitems[1].website)}>
                                 {this.props.info.actitems[1].website}:
                             </a>
                             <p style={{fontFamily:'HeiTi'}}>时间1：{this.props.info.actitems[1].price[0].time}
                             ￥{this.props.info.actitems[1].price[0].class[0].price},
                             ￥{this.props.info.actitems[1].price[0].class[1].price},
                             ￥{this.props.info.actitems[1].price[0].class[2].price}
                             。时间2：{this.props.info.actitems[1].price[1].time}
                             ￥{this.props.info.actitems[1].price[1].class[0].price},
                             ￥{this.props.info.actitems[1].price[1].class[1].price},
                             ￥{this.props.info.actitems[1].price[1].class[2].price}
                             </p>
                             <p> </p>
                             <a href="/detail" onClick={this.handleDetail(this.props.info.actitems[2].website)} target="_blank">
                                 {this.props.info.actitems[2].website}:
                             </a>
                             <p style={{fontFamily:'HeiTi'}}>时间1：{this.props.info.actitems[2].price[0].time}
                             ￥{this.props.info.actitems[2].price[0].class[0].price},
                             ￥{this.props.info.actitems[2].price[0].class[1].price},
                             ￥{this.props.info.actitems[2].price[0].class[2].price}
                             。时间2：{this.props.info.actitems[2].price[1].time}
                             ￥{this.props.info.actitems[2].price[1].class[0].price},
                             ￥{this.props.info.actitems[2].price[1].class[1].price},
                             ￥{this.props.info.actitems[2].price[1].class[2].price}
                             </p>
                         </Panel>
                     </Collapse>
                 </div>
            </div>
        )
    }
}
