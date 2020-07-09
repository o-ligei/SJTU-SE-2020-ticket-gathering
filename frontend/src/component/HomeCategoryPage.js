import { List,PageHeader } from 'antd';
import React from "react";
import {sports,concerts} from "../const/activity";
import {HomeCard} from "./HomeCard";
import "../css/home.css"

export class HomeCategoryPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            sports:[],
            concerts:[]
        }
    }

    componentDidMount() {
        this.setState({sports:sports,concerts:concerts})
    }

    render(){
        return(
            <div>
                <div className="category">
                    <PageHeader className="site-page-header"
                                title="体育"/>
                    <List
                        grid={{gutter: 10, column: 4}}
                        dataSource={this.state.sports}
                        renderItem={item => (
                            <List.Item>
                                <HomeCard info={item} />
                            </List.Item>
                        )}
                    />
                </div>
                <div className="category">
                    <PageHeader className="site-page-header"
                                title="音乐会"/>
                    <List
                        grid={{gutter: 10, column: 4}}
                        dataSource={this.state.concerts}
                        renderItem={item => (
                            <List.Item>
                                <HomeCard info={item} />
                            </List.Item>
                        )}
                    />
                </div>

            </div>

        )
    }
}