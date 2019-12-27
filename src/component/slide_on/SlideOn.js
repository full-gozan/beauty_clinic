import  React from 'react';
import './SlideOn.css'
import MenuToggleButtonOff from'./MenuToggleButtonOff'
const SlideOn =prop=>(
<div className='slidebar' > 
<div>
       <MenuToggleButtonOff  click={prop.slideHideHandlar}/>
</div>
<ul>
       <li> <a href='#'>BEHANDLINGAR</a></li>
       <li><a href='#'>PRISER</a></li>
       <li><a href='#'>ERBJUDANDEN</a></li>
       <li><a href='#'>PRODUKTER</a> </li>
       <li><a href='#'>OM OSS</a></li>
       </ul></div>
      
       

);
export default SlideOn;