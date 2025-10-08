/* 
  menu.tsx
*/

/* Dependencies  */
// import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* types */
import type {MenuProps} from "../../../../types/menuProps";

/* Components */

/* styles */

const Menu = (props:{data:MenuProps[]}) => {
  
  return (
    <>
    <div className="container">
      <div className="breadcrumbs">
        <ul className="breadcrumbs-List " id="breadcrumbs-list">
         {
           props.data.map((value:MenuProps) =>(
             <li key={value.id} className="nodeco breadcrumb">
               <span className=""><a className="nodeco" href={"https://"+value.link} target="_blank">{value.name}</a></span><br></br>
               <p>{value.breadcrumbs.description}</p>
             </li>
           ))
         }
        </ul>
      </div>
      <div className="alarms">
        <a className="alarm"><i className="fa fa-bell "></i></a>
      </div>
    </div>
    </>
  );
}

export default Menu;
