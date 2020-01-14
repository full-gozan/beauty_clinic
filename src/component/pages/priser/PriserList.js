import React from 'react'
import {Link} from 'react-router-dom'
import '../../style/Priser.css'
 
const PriserList =(props)=>{
    
return (
    
        props.table.map((item, index)=>{
            
            return  (
                <div>
                    
                     <tr id={index}>
        <td> {item.duration}</td>
        <td> {item.type}</td>
        <td> {item.price}</td>

               </tr>
                </div>
                
              
              
                
                )

        })
        


);
    
}
export default PriserList;