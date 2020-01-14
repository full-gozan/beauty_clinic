import React from'react'
import BehandlingItem from './BehandlingItem'
const Behandlinger =props=>(
 
    <div>
        <div style={{marginTop: '60px'}}>
            <h1>Hello this is my behandlingar page</h1>
            <div style={{ display:'flex'}}>
                 <BehandlingItem prise='240 KR' details='fave behandlinger ' />
            <BehandlingItem prise='440 KR' details='nose behandlinger' />
            <BehandlingItem prise='290 KR' details='cheak behandlinger' />
            <BehandlingItem prise='280 KR' details='babyglow ' />
            <BehandlingItem prise='410 KR' details='microlidning' />
            </div>
           

            

        </div>
    </div>
);
export default Behandlinger;