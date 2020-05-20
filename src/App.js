import React, { Component } from "react";
import NavBar from "./component/Header/NavBar";
import SlideOn from "./component/slide_bar/SlideOn";
import Footer from "./component/footer/Footer";
import Home from "./component/pages/home/Home";
import Error from "./component/pages/404/404";
import Treatments from "./component/pages/Treatments/Treatments";
import Offers from "./component/pages/Offers/Offers";
import About_us from "./component/pages/About_us/About_us";
import Prices from "./component/pages/Prices/Prices";
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
          <div style={{ textAlign: "center" }}>
            <Route path="/error" component={Error} />
            <Route path="/Treatments" component={Treatments} />
            <Route path="/Offers" component={Offers} />
            <Route path="/About_us" component={About_us} />
            <Route path="/Prices" component={Prices} />
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
