import React from 'react'
import {Link} from 'react-router-dom'
import '../../style/Behandling.css'

const BehandlingItem =(props)=>{
return (
    <div className='behandling-container'>
        <div className='behandling'>
        <h4> {props.prise}</h4>
            <h2>{props.details}</h2>

           <Link to ='google.com'>boka </Link>

        </div>


    </div>
);
}
export default BehandlingItem;