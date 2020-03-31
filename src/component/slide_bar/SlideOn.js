import  React from 'react';
import './SlideOn.css'
import Exit_button from "../component/Exit-button"
import {Link} from 'react-router-dom'
const SlideOn =prop=>(
<div className='slidebar' > 
<div>
       <Exit_button  click={prop.slideHideHandlar}/>
</div>
<ul onClick= {prop.slideHideHandlar}>

                     <li > <Link to ='About_us' className="slide-link">About Us </Link></li>
                    <li> <Link to ='Treatments' className="slide-link">Treatments </Link></li>
                    <li> <Link to ='Prices' className="slide-link">Prices </Link></li>
                    <li> <Link to ='Offers' className="slide-link">Offers </Link></li>
               </ul>
       </div>
);
export default SlideOn; 