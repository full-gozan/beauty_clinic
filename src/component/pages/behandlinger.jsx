import React from'react'
import './style/Home.css'
import {Link} from 'react-router-dom'
const Behandlinger =props=>(
    <div>
        <div style={{marginTop: '60px'}}>
            <h1>Hello this is my behandlingar page</h1>
            <ul>
                 <li> <Link to ='Priser'>PRISER </Link></li>

            </ul>

        </div>
    </div>
);
export default Behandlinger;