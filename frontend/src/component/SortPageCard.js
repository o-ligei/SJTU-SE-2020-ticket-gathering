/**
 * @param actitemid {number}
 * @param this.props.info.activityId {String}
 */
import { Card,Collapse,Menu, Dropdown, Button } from 'antd';
import React from "react";
import "../css/HomeCard.css"
import "../css/sortPage.css"
import {history} from "../utils/history";
import Redirect from "react-router-dom/es/Redirect";
import {Link} from "react-router-dom";
// import Link from "react-router-dom/modules/Link";
const { Panel } = Collapse;
const { Meta } = Card;


export class SortPageCard extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            ifdetail:false
        }
    }

    requestData = {
        "image": this.props.info.imgurl,
    };

    handleDetail = id =>{
        // console.log(website);
        // let request = {
        //     "imgurl":this.props.info.activityIcon,
        //     "title":this.props.info.title,
        //     "city":this.props.info.city,
        //     "venue":this.props.info.venue,
        //     "category":this.props.info.category,
        //     "timescale":this.props.info.timescale,
        //     "price":this.props.info.price,
        //     "website":website,
        // };
        window.localStorage.setItem("actitemid",id);
        console.log("detail:"+id);
        console.log("???");
        // this.setState({
        //     ifdetail:true
        // })
    }


    render(){
        // if(this.state.ifdetail){
        //     console.log("jumping...");
        //     return <Redirect to={{pathname: "/detail"}}/>;
        // }
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
                             {/*onClick={this.handleDetail(parseInt(this.props.info.actitems[0].actitemid))}*/}
                             <a  href="/detail" onClick={()=>this.handleDetail(parseInt(this.props.info.actitems[0].actitemId)).bind(this)} >
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
                             <a href="/detail" onClick={()=>this.handleDetail(parseInt(this.props.info.actitems[1].actitemId)).bind(this)} >
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
                             <a href="/detail" onClick={()=>this.handleDetail(parseInt(this.props.info.actitems[2].actitemId)).bind(this)} >
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
