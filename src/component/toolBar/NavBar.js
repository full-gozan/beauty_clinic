 import React, { Component } from 'react';
 import './navBar.css'
 import MenuToggleButton from './MenuToggleButton'
 import {Link} from 'react-router-dom'

 const NavBar=prop=>(
<header className='toolbar'>
     <nav className='toolbar__navigation'>
          <MenuToggleButton  click={prop.slideClickHandler}/>
          <div className='toolbar__logo'> <a href='#home'>LOGO </a> </div>
          <div className='spacer'></div>
          <div className='toolbar__navigation-items'>
               <ul>
                    <li> <Link to ='Behandlinger'>Behandlinger </Link></li>
                    <li> <Link to ='Priser'>PRISER </Link></li>
                    <li> <Link to ='erbjudande'>ERBJUDANDEN </Link></li>
                    <li> <Link to ='produkter'>PRODUKTER </Link></li>
                    <li> <Link to ='omoss'>OM OSS </Link></li>

               </ul>
          </div> 
     </nav>
  
</header>
 

)

        
 export default NavBar;