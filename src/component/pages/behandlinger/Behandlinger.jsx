import React from'react'
import BehandlingItem from './BehandlingItem'
import beauty  from '../../images/beauty.jpg'
import treatment1 from '../../images/treatment1.jpg'
import treatment2 from '../../images/treatment2.jpeg'
import treatment3 from '../../images/treatment3.png'
import treatment4 from '../../images/treatment4.jpeg'
import treatment5 from '../../images/treatment5.jpg'
import treatment6 from '../../images/treatment6.jpg'
import treatment7 from '../../images/treatment7.jpg'
import treatment8 from '../../images/treatment8.jpeg'
import treatment10 from '../../images/treatment10.jpg'
import treatment11 from '../../images/treatment11.jpg'
import treatment12 from '../../images/treatment12.jpg'


const Behandlinger =props=>(
 
    <div>
        <div style={{marginTop: '80px'}}>
<img src={beauty} style={{width:'100%' , height:'300px'}}/>  
<h3>welcome to behandlinger department </h3>   

       <div className="behandling-container">
                <BehandlingItem src={treatment1}/>
                 <BehandlingItem src={treatment2}/>
                 <BehandlingItem src={treatment3}/>
                 <BehandlingItem src={treatment4}/>
                 <BehandlingItem src={treatment5}/>
                 <BehandlingItem src={treatment6}/>
                 <BehandlingItem src={treatment7}/>
                 <BehandlingItem src={treatment8}/>
                 <BehandlingItem src={treatment10}/>
                 <BehandlingItem src={treatment11}/>
                 <BehandlingItem src={treatment12}/>

            </div>
           

            

        </div>
    </div>
);
export default Behandlinger;