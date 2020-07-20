import React from 'react';
import {Admin} from "../component/Admin";
import {HeaderInfo} from "../component/Header";


export class AdminView extends React.Component{
    render() {
        return (
            <div>
                <HeaderInfo/>
                <div style={{paddingTop:40}}>
                    <Admin/>
                </div>
            </div>
        );
    }
}