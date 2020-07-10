import React from 'react';
import {HeaderInfo} from "../component/Header";
import {FooterInfo} from "../component/Footer";
import { sports} from "../const/activity";
import {List} from "antd";
import {SortPageCard} from "../component/SortPageCard";
import "../css/sortPage.css"

export class SortPageView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            activity:[]
        }
    }

    componentDidMount() {
        this.setState({activity:sports})
    }

    render(){
        return(
            <div >
                <HeaderInfo/>
                <div id="sortPageDiv">
                <List
                    grid={{gutter: 10, column: 1}}
                    dataSource={this.state.activity}
                    renderItem={item => (
                        <List.Item>
                            <SortPageCard info={item} />
                        </List.Item>
                    )}
                />
                </div>
                <FooterInfo/>
            </div>
        )
    }
}