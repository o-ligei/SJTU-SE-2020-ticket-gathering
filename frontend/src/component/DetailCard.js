/**
 * @param this.state.info.activityicon {String}
 * @param this.state.info.website {String}
 * @param this.state.info.timescale {String}
 * @param this.state.info.actor {String}
 * @param data.prices {Array}
 * @param data.prices[].class {Array}
 * @param value.num {number}
 *
 */

import { Card,Collapse,Menu, Dropdown, Button,Radio } from 'antd';
import React from "react";
import "../css/sortPage.css";
import {getDetail} from "../service/ActitemService";

export class DetailCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            info:{},
            tickets:[],
            times:[],
            time:"",
            prices:[],
            price:"",
            numbers:[],
            number:"",
        }
    }

    componentDidMount() {
        const callback = data =>{
            this.setState({
                info:data,
                tickets:data.prices
            });
            let times = [];
            this.state.tickets.map(function (value,key) {
                times.push(value.time);
            })
            let prices=[];
            let numbers=[];
            this.state.tickets[0].class.map(function (value,key) {
                prices.push(value.price.toString());
                numbers.push(value.num.toString());
            })
            this.setState({
                times:times,
                time:times[0],
                prices:prices,
                numbers:numbers,
                price:prices[0],
                number:numbers[0],
            });
            console.log(this.state);
        }
        let id = window.localStorage.getItem("actitemid");
        getDetail(id,callback);
    }

    onChangeTime = e => {
        console.log(e);
        console.log('radio4 checked', e.target.value);
        let i=0;
        this.state.times.map(function (value,key) {
            if(value === e.target.value)
                i = key;
        })
        let prices=[];
        let numbers=[];
        this.state.tickets[i].class.map(function (value,key) {
            prices.push(value.price.toString());
            console.log(value.price);
            console.log(value.price.toString());
            numbers.push(value.num);
        })
        this.setState({
            time: e.target.value,
            prices:prices,
            numbers:numbers,
            price:prices[0],
            number:numbers[0],
        });
        console.log(this.state);
    };

    onChangePrice = e =>{
        let i=0;
        this.state.prices.map(function (value,key) {
            if(value === e.target.value)
                i = key;
        })
        this.setState({
            price:e.target.value,
            number:this.state.numbers[i],
        });
        console.log(i);
    }

    render() {
        return(
            <div>
                <img className='image' alt="example" src={this.state.info.activityicon} />
                <p id="title">{this.state.info.title}</p>
                <p id="info">地点：{this.state.info.venue}</p>
                <p id="info">表演者：{this.state.info.actor}</p>
                <p id="info">票源：{this.state.info.website}</p>
                <p id="info">时间范围：{this.state.info.timescale}</p>
                <Radio.Group
                    options={this.state.times}
                    onChange={this.onChangeTime}
                    value={this.state.time}
                    optionType="button"
                    buttonStyle="solid"
                />
                <br/>
                <Radio.Group
                    options={this.state.prices}
                    onChange={this.onChangePrice}
                    value={this.state.price}
                    optionType="button"
                    buttonStyle="solid"
                />
                <br/>
                <Button type="primary" shape="round" id="PurchaseButton">立即购买</Button>
            </div>
        )
    }
}