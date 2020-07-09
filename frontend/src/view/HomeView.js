import React from 'react';
import {HeaderInfo} from "../component/Header";
import {FooterInfo} from "../component/Footer";
import { Carousel } from 'antd';
import "../css/home.css"

export class HomeView extends React.Component{
    onChange(a,b,c){
        console.log(a,b,c)
    }

    render(){
        return(
            <div>
                <HeaderInfo/>
                <div>
                    <Carousel afterChange={this.onChange.bind(this)}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </div>

                <FooterInfo/>
            </div>
        )
    }
}
