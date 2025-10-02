/* 
  Layouts.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";


/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";
import FeetSilo from "./FeetSilo";
import Pivot from "./Pivot";
import Weather from "./Weather";

/* styles */
import type { StatusProps } from "../../types/statusProps";

const Layouts = (props) => {
  
  const [main,setMain]:[CardZone[],any] = useState([]);
    
  //const [ projects, setProjects ] = useContext([]);
  
    const displayLayoutType= (prop:StatusProp) => {

      switch (prop.monitor.type.title) {
        case "feetSilo":
           return (
            <>
            <FeetSilo/>
            </>
           );
          break;
        case "pivot":
           return (
            <>
            <Pivot/>
            </>
           );
        case "weather":
           return (
            <>
            <Weather/>
            </>
           );
          break;  
        default:
           return(<></>);
          break;
      }
    }

    const Display=()=>{
     return displayLayoutType(props);
    }
  
    return (
      <>
        <Display/>
      </>
    );
}

export default Layouts;