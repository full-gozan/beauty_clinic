import React, { Component } from 'react';
import NavBar from'./component/toolBar/NavBar';
import SlideOn from './component/slide_on/SlideOn'
import Home from './component/pages/home'
import Error from './component/pages/404'
import Behandlinger from './component/pages/behandlinger'
import Erbjudande from './component/pages/erbjudande'
import Produkter from './component/pages/produkter'
import OmOss from './component/pages/omoss'
import Priser from './component/pages/priser'
import {BrowserRouter as Router,Route, Switch, Link,Redirect} from 'react-router-dom'

class App extends Component {
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


{ slide_on}
 </Router>
   </div>

    );

  }
}

export default App;
