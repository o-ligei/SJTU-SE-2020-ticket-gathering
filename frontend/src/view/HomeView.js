import React from 'react';
import {HeaderInfo} from "../component/Header";
import {FooterInfo} from "../component/Footer";
import { Carousel,Divider,BackTop } from 'antd';
import "../css/home.css"
import {HomeCategoryPage} from "../component/HomeCategoryPage";
import {Navigate} from "../component/Navigate";

export class HomeView extends React.Component{
    onChange(a,b,c){
        // console.log(a,b,c)
    }

    render(){
        return(
            <div>
                <HeaderInfo/>
                <Divider plain className="divider"> </Divider>
                <div id="carousel">
                    <Carousel autoplay afterChange={this.onChange.bind(this)}>
                        <div id="carouselDiv">
                            <img src={require('../resources/carousel.png')} alt="carousel1" id="carouselImg"/>
                        </div>
                        <div>
                            <img src={require('../resources/carousel2.jpg')} alt="carousel2" id="carouselImg"/>
                        </div>
                    </Carousel>
                </div>
                <Navigate/>
                <div id="homeCategoryPageDiv">
                    <HomeCategoryPage/>
                </div>
                {/*<div style={{paddingTop:1500}}>*/}
                    <FooterInfo/>
                    <BackTop/>
                {/*</div>*/}
            </div>
        )
    }
}
