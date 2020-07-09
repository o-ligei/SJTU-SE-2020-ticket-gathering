import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import {LoginView} from "./view/LoginView";
import {HomeView} from "./view/HomeView";
import {RegisterView} from "./view/RegisterView";
import {SortPageView} from "./view/SortPageView";
import {OrderView} from "./view/OrderView";
import {ProfileView} from "./view/ProfileView";

class BasicRoute extends React.Component{


    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/order" component={OrderView}/>
                    <Route path="/profile" component={ProfileView}/>
                    <Route path="/sortPage" component={SortPageView}/>
                    <Route path="/register" component={RegisterView}/>
                    <Route path="/login" component={LoginView}/>
                    <Route path="/" component={HomeView}/>
                </Switch>

            </Router>
        )
    }


}

export default BasicRoute;