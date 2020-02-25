import React, { Component } from 'react';
//根路由
import list from './RouterConfin'
import MyRouter from './MyRouter'
import {BrowserRouter as Router} from 'react-router-dom'
class RootRouter extends Component {
    render() {
        console.log(1111)
        return (
            <Router >
              <MyRouter routerList={list}></MyRouter>  
            </Router>
        );
    }
}

export default RootRouter;