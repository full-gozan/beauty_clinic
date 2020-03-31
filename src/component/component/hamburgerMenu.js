import React from 'react'
import '../Header/navBar.css'
const HamburgerMenu=props=>(
    <div className="wrap" onClick={props.click}>
<div className="bar" id='bar1'></div>
<div className="bar"id='bar2'></div>
<div className="bar"id='bar3'></div>

</div>

);
export default HamburgerMenu;