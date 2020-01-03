import  React from 'react';
import './MenuToggleButtonOff.css'
const MenuToggleButtonOff =props=>(
    <div className= 'icon-off' onClick={props.click}>
         <div className="crossIcon" >
    <div className="cross" id='cross1'></div>
    <div className="cross"id='cross2'></div>
    </div>
    </div>
   
);
export default MenuToggleButtonOff;