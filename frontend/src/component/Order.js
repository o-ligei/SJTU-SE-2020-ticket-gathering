import React from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import "../css/order.css"
import {sports} from "../const/activity";

const listData = [];
for (let i = 0; i < 5; i++) {
    // listData.push({
    //     href: 'https://ant.design',
    //     title: `user test${i}`,
    //     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //     description:
    //         'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    //     content:
    //         'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    // });
    listData.push({
        href: '',
        title: sports[i].title,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            sports[i].time+sports[i].city,
        venue:
            sports[i].venue,
        url:
            sports[i].imgurl,
        cnt:
            2,
        totPrice:
            sports[i].price*2,
        orderTime:
            "2020.7.11 17:47"
    });
}
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export class Order extends React.Component{
    render(){
        return(
            <div>
                <div id="orderDiv">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 2,
                        }}
                        dataSource={listData}
                        footer={
                            <div style={{textAlign:"center"}}>
                                <b>O_ligei ! </b> footer part
                            </div>
                        }
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                extra={
                                    <img width={150} alt="activity image" src={item.url}/>
                                }
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                <div id="contentDiv">
                                    <p>地点：{item.venue}</p>
                                    <p>数量：{item.cnt}张</p>
                                    <p>总价: ￥{item.totPrice}</p>
                                    <p>下单时间: {item.orderTime}</p>
                                </div>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}