import  React from 'react';
import './SlideOn.css'
import MenuToggleButtonOff from'./MenuToggleButtonOff'
import {Link} from 'react-router-dom'
const SlideOn =prop=>(
<div className='slidebar' > 
<div>
       <MenuToggleButtonOff  click={prop.slideHideHandlar}/>
</div>
<ul onClick= {prop.slideHideHandlar}>

                     <li > <Link to ='About_us' className="slide-link">About Us </Link></li>
                    <li> <Link to ='Treatments' className="slide-link">Treatments </Link></li>
                    <li> <Link to ='Priser' className="slide-link">Prices </Link></li>
                    <li> <Link to ='erbjudande' className="slide-link">Offers </Link></li>
               </ul>
       </div>
);
export default SlideOn;