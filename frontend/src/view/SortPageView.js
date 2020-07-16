import React from 'react';
import {HeaderInfo} from "../component/Header";
import {FooterInfo} from "../component/Footer";
import { sports} from "../const/activity";
import {Divider, List} from "antd";
import {SortPageCard} from "../component/SortPageCard";
import "../css/sortPage.css"
import {RecommendList} from "../component/RecommendList";
import {search} from "../service/searchService";

export class SortPageView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            activity:[],
            search:null
        }
    }

    componentDidMount() {
        this.setState({activity:sports});
        this.setState({search:localStorage.getItem("search")});
        console.log("!!"+this.state.search);
        search(this.state.search,(res)=>{console.log("123:"+JSON.stringify(res))});
    }

    render(){
        return(
            <div >
                <HeaderInfo/>
                {this.state.search}
                <Divider plain className="divider"> </Divider>
                {this.state.search}
                <div id="sortPageDiv" style={{paddingBottom:100}}>
                    <List
                        grid={{gutter: 10, column: 1}}
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 10,
                        }}
                        footer={
                            <div style={{textAlign:"center"}}>
                                <b>O_ligei ! </b> footer part
                            </div>
                        }
                        dataSource={this.state.activity}
                        renderItem={item => (
                            <List.Item>
                                <SortPageCard info={item}/>
                            </List.Item>
                        )}
                    />
                </div>
                <RecommendList/>
                <button onClick={()=>search(this.state.search,(res)=>{
                    console.log("??123:"+JSON.stringify(res));
                    this.setState({activity:res})
                })}>push</button>
            </div>
        )
    }
}