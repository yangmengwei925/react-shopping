import React, { Component } from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import MyRouter from '../router/MyRouter'
class Home extends Component {
    render() {
        const {count,price}=this.props
        console.log(this.props)
        return (
            <div className="home">
                 <header>购物车</header>
                 <nav>
                 {
                     this.props.children.map((item,index)=>{
                         return <NavLink to={item.path} key={index} activeClassName="active">{item.title}</NavLink>
                     })
                 }
                 </nav>
                 <main></main>
                 <footer>
                  <NavLink to="/sj">练习商家</NavLink>
                  <p>
                    <span>数量:{count}</span>
                    <span>总价:{price}</span>
                  </p>
                  <p>
                  <NavLink to="/login">结算</NavLink>
                  </p>
                 </footer>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    const {count,price}=state
    return {
     count,
    price
    }
}
const mapDispatchToProps=(dispatch)=>{
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
