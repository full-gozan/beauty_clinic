import  React from 'react';
import './SlideOn.css'
import MenuToggleButtonOff from'./MenuToggleButtonOff'
import {Link} from 'react-router-dom'

const SlideOn =prop=>(
<div className='slidebar' > 
<div>
       <MenuToggleButtonOff  click={prop.slideHideHandlar}/>
</div>
<ul>
                    <li> <Link to ='Behandlinger'>Behandlinger </Link></li>
                    <li> <Link to ='Priser'>PRISER </Link></li>
                    <li> <Link to ='erbjudande'>ERBJUDANDEN </Link></li>
                    <li> <Link to ='produkter'>PRODUKTER </Link></li>
                    <li> <Link to ='omoss'>OM OSS </Link></li>

               </ul>
       </div>
      
       

);
export default SlideOn;