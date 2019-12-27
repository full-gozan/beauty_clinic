import React, { Component } from 'react';
import NavBar from'./toolBar/NavBar';
import SlideOn from './slide_on/SlideOn'
import Home from './pages/home'
import Error from './pages/404'
import Behandlinger from './pages/behandlinger'
import Erbjudande from './pages/erbjudande'
import Produkter from './pages/produkter'
import OmOss from './pages/omoss'
import Priser from './pages/priser'
import {BrowserRouter as Router,Route, Switch, Link,Redirect} from 'react-router-dom'

class Header extends Component {
  state={
    isSlideOpen:false
  }
    slideClickHandler=()=>{
     this.setState((prevState)=>{
      return{isSlideOpen:!prevState.isSlideOpen};
     } );};
    
     
   slideHideHandlar=()=>{
this.setState({isSlideOpen:false})
   };
   

  render(){
let slide_on;
let slide_off;
if (this.state.isSlideOpen){
  slide_on=<SlideOn slideHideHandlar={this.slideHideHandlar}/>

}
    return (
   <div style={{height:'100%'}}>
     <Router>
     <NavBar slideClickHandler={this.slideClickHandler}/>

     <Route path ='/' component={Home}/>
    <Route path ='/error' component={Error}/>
    <Route path ='/Behandlinger' component={Behandlinger}/>
    <Route path ='/Erbjudande' component={Erbjudande}/>
    <Route path ='/Produkter' component={Produkter}/>
    <Route path ='/omoss' component={OmOss}/>
    <Route path ='/Priser' component={Priser}/>

</Router>
{ slide_on} 
   </div>

    );

  }
}

export default Header;
