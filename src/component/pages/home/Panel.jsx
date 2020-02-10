import React, { Component } from "react";

import '../../style/Home.css'
import Carousel from 'react-bootstrap/Carousel'
import panel_slide1 from "../../images/panel-slide1.jpg";
import panel_slide2 from "../../images/panel-slide2.jpg";
import panel_slide3 from "../../images/panel-slide3.jpg"; 

class Panel extends Component {
  render() {
    return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={panel_slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={panel_slide2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={panel_slide3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
  }
}
export default Panel;
