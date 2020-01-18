import React from "react";
import { Link } from "react-router-dom";
import "../../style/Priser.css";
import MoreInfo from './MoreInfo'

class PriserItem extends React.Component{
constructor(props)
{
super(props)
this.state={
table: [

]
}

}

render(){


        
  return (this.state.table.map((item, index) => {
    return (
            <div>
 <tr id={index}>
        <td> {item.type} </td>
        <td> {item.price}</td>

            </tr>
      <tr> <MoreInfo/>  </tr>

            </div>
 

     
     
    );
  }));
  
}};
export default PriserItem;