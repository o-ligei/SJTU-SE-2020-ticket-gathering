import React from "react";
import {Card, Col, Divider, List, Row} from 'antd';
import "../css/recommendList.css"
import { sports} from "../const/activity";

export class RecommendList extends React.Component{

    render(){
        return(
            <div className="site-card-wrapper" id="recommendList">
                {/*<Row gutter={[16, 24]}>*/}
                {/*    <Col className="gutter-row" span={6}>*/}
                {/*        <div style={style}>col-6</div>*/}
                {/*    </Col>*/}
                {/*    <Col className="gutter-row" span={6}>*/}
                {/*        <div style={style}>col-6</div>*/}
                {/*    </Col>*/}
                {/*    <Col className="gutter-row" span={6}>*/}
                {/*        <div style={style}>col-6</div>*/}
                {/*    </Col>*/}
                {/*    <Col className="gutter-row" span={6}>*/}
                {/*        <div style={style}>col-6</div>*/}
                {/*    </Col>*/}
                {/*    <Col className="gutter-row" span={6}>*/}
                {/*        <div style={style}>col-6</div>*/}
                {/*    </Col>*/}
                {/*    <Col className="gutter-row" span={6}>*/}
                {/*        <div style={style}>col-6</div>*/}
                {/*    </Col>*/}
                {/*    <Col className="gutter-row" span={6}>*/}
                {/*        <div style={style}>col-6</div>*/}
                {/*    </Col>*/}
                {/*    <Col className="gutter-row" span={6}>*/}
                {/*        <div style={style}>col-6</div>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                    <p id="recommendp">猜你喜欢</p>
                <Card className="recommendCard"  hoverable={true}>
                    <img alt="example" src={sports[0].imgurl} className="img"/>
                        <p className="box">{sports[0].title}</p>
                        <p className="venue">{sports[0].venue}</p>
                        <p className="venue">{sports[0].time}</p>
                        <p className="pricestr">{sports[0].price_str}</p>
                </Card>
                <Card className="recommendCard"  hoverable={true}>
                    <img alt="example" src={sports[1].imgurl} className="img"/>
                    <p className="box">{sports[1].title}</p>
                    <p className="venue">{sports[1].venue}</p>
                    <p className="venue">{sports[1].time}</p>
                    <p className="pricestr">{sports[1].price_str}</p>
                </Card>
                <Card className="recommendCard"  hoverable={true}>
                    <img alt="example" src={sports[2].imgurl} className="img"/>
                    <p className="box">{sports[2].title}</p>
                    <p className="venue">{sports[2].venue}</p>
                    <p className="venue">{sports[2].time}</p>
                    <p className="pricestr">{sports[2].price_str}</p>
                </Card>
                <Card className="recommendCard"  hoverable={true}>
                    <img alt="example" src={sports[2].imgurl} className="img"/>
                    <p className="box">{sports[2].title}</p>
                    <p className="venue">{sports[2].venue}</p>
                    <p className="venue">{sports[2].time}</p>
                    <p className="pricestr">{sports[2].price_str}</p>
                </Card>
            </div>
        )
    }
}