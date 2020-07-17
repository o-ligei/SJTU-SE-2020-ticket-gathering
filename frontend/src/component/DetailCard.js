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

import { Card,Collapse,Menu, Dropdown, Button,Radio, notification, Space,InputNumber } from 'antd';
import React from "react";
// import "../css/sortPage.css";
import "../css/Detail.css"
import {getDetail} from "../service/ActitemService";
import {addOrder} from "../service/orderServcie";
import moment from 'moment'
import {Redirect} from "react-router-dom";

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
            success:false,
            chosenNum:1,
        }
    }

    renderDetail = () =>{
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


    componentDidMount() {
        this.renderDetail();
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
            numbers.push(value.num);
        })
        this.setState({
            time: e.target.value,
            prices:prices,
            numbers:numbers,
            price:prices[0],
            number:numbers[0],
        });
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
    }

    openNotificationWithIcon = type => {
        notification[type]({
            message: 'Notification Title',
            description:
                '余票不足，请减少购票量',
        });
    };

    handleNumberChange = value =>{
        this.setState({chosenNum:value});
    }

    handlePurchase = () =>{
        if(this.state.chosenNum > this.state.number)
            this.openNotificationWithIcon('warning')
        else{
            const callback = data => {
                console.log("result:"+data);
                this.setState({success:true});
            }
            addOrder(parseInt(localStorage.getItem("userId")),parseInt(localStorage.getItem("actitemid")),parseInt(this.state.price),
                parseInt(this.state.chosenNum),this.state.time,moment().format('YYYY-MM-DD HH:mm:ss'),callback);
        }
    }

    render() {
        if(this.state.success===true) {

            return <Redirect to={{pathname: "/success"}}/>;
        }
        return(
            <div>
                <img id='Dimg' alt="example" src={this.state.info.activityicon} />
                <p id="Dtitle">{this.state.info.title}</p>
                <p id="Dinfo">地点：{this.state.info.venue}</p>
                <p id="Dinfo">表演者：{this.state.info.actor}</p>
                <p id="Dinfo">票源：{this.state.info.website}</p>
                <p id="Dinfo">时间范围：{this.state.info.timescale}</p>
                <p id="Dnote">时间选择：</p>
                <div id="Radio">
                <Radio.Group
                    options={this.state.times}
                    onChange={this.onChangeTime}
                    value={this.state.time}
                    optionType="button"
                    buttonStyle="solid"
                />
                </div>
                <br/>
                <p id="Dnote">票价选择：</p>
                <div id="Radio">
                <Radio.Group
                    options={this.state.prices}
                    onChange={this.onChangePrice}
                    value={this.state.price}
                    optionType="button"
                    buttonStyle="solid"
                />
                </div>
                <br/>
                <div id="Radio">
                <InputNumber min={1} max={10} defaultValue={1} onChange={this.handleNumberChange} />
                </div>
                <br/>
                <div id="Dnote">
                    <Button type="primary" shape="round" id="PurchaseButton" onClick={this.handlePurchase}>立即购买</Button>
                </div>
            </div>
        )
    }
}