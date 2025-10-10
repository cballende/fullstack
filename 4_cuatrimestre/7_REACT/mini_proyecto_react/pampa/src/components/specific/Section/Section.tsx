/* 
  Section.tsx
 */

/* Dependencies  */
// import { useEffect, useState } from "react";
import { Outlet } from "react-router";

//import ErrorBoundary from "./ErrorBoundary";

/* types */
//import type {NewsProps} from "../types/newsProps";

/* Components */
//import Service from "./Service/Service";
/* import Zone from "./Zone/Zone";
import Monitor from "./Monitor/Monitor";
import State from "./State/State"; */

/* styles */

const Section = () => {
  
  return (
    <>
        <Outlet/>
      {/* 
        <Service/>
        <Zone/>
        <Monitor/>
        <State/> 
      */}
    </>
  );
}

export default Section;