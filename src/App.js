import React, { Component } from "react";
import NavBar from "./component/Header/NavBar";
import SlideOn from "./component/slide_bar/SlideOn";
import Footer from "./component/footer/Footer";
import Home from "./component/pages/home/Home";
import Error from "./component/pages/404/404";
import Treatments from "./component/pages/Treatments/Treatments";
import Erbjudande from "./component/pages/erbjudande/Erbjudande";
import Produkter from "./component/pages/produkter/Produkter";
import About_us from "./component/pages/About_us/About_us";
import Priser from "./component/pages/priser/Priser";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    isSlideOpen: false
  };
  slideClickHandler = () => {
    this.setState(prevState => {
      return { isSlideOpen: !prevState.isSlideOpen };
    });
  };

  slideHideHandlar = () => {
    this.setState({ isSlideOpen: false });
  };

  render() {
    let slide_on;
    if (this.state.isSlideOpen) {
      slide_on = <SlideOn slideHideHandlar={this.slideHideHandlar} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Router>
         <NavBar slideClickHandler={this.slideClickHandler} />
          <div style={{ textAlign: "center"}}>
            <Route path="/error" component={Error} />
            <Route path="/Treatments" component={Treatments} />
            <Route path="/Erbjudande" component={Erbjudande} />
            <Route path="/Produkter" component={Produkter} />
            <Route path="/About_us" component={About_us} />
            <Route path="/Priser" component={Priser} />
            <Route path="/" component={Home} exact />
          </div> 

          {slide_on}
        </Router>
        <Router>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
