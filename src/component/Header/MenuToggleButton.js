import React from 'react'
import './MenuToggleButton.css'
const MenuToggleButton=props=>(
    <div className="wrap" onClick={props.click}>
<div className="bar" id='bar1'></div>
<div className="bar"id='bar2'></div>
<div className="bar"id='bar3'></div>
</div>

);
export default MenuToggleButton;