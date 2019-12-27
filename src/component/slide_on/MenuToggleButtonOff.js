import  React from 'react';
import './MenuToggleButtonOff.css'
const MenuToggleButtonOff =props=>(
    <div className="crossIcon" onClick={props.click}>
    <div className="cross" id='cross1'></div>
    <div className="cross"id='cross2'></div>
    </div>
);
export default MenuToggleButtonOff;