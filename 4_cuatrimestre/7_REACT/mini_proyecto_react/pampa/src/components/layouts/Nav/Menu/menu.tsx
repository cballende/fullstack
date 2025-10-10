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
    <div className="col s12 blue darken-1">

      <div className="breadcrumbs col s9">
        <div className="col s12 valign-wrapper">
          <a href="#!" className="breadcrumb">First</a>
          <a href="#!" className="breadcrumb">Second</a>
          <a href="#!" className="breadcrumb">Third</a>
        </div>
        <ul className="breadcrumbs-List hide " id="breadcrumbs-list">
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
      <div className="alarms col s1 offset-s2">
        <a className=""><span className=""><i className="material-icons">notifications_off</i></span></a>
      </div>

    </div>
    </>
  );
}

export default Menu;
