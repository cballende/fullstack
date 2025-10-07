/* 
  FeetSilo.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

import type { FeedSiloI, StateI } from "../../../../../types/cardProps";

/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";
import {ChartXY}    from "./States/States";
import {Filled}     from "./States/States";
import {Forecast}   from "./States/States";
import {Histogram}  from "./States/States";
import {Temp}       from "./States/States";

/* styles */

const FeetSilo = (props:StateI) => {
  const LIST_STATES= ["filled","forecast","chartXY","histogram"];
  
  const SHORT_STATES = ["filled","forecast","chartXY"];
  const [main, setMain]:[FeedSiloI,any] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  const vSt:string[]=["init","result","results","notFound"];
  const [state,setState]=useState(vSt[0]);
  
    
  useEffect(() => {
    console.log("FeetSilo: "+props.title);
    let data:FeedSiloI= props.data;
    setMain(data);
  }, [props]);

  const displayStatuesType= (status:string) => {

    switch (status) {
        case "filled":
           return (
            <>
            <Filled data={main.filled}/>
            </>
           );
          break;
        case "histogram":
           return (
            <>
            <Histogram data={main.histogram}/>
            </>
           );
        case "forecast":
           return (
            <>
            <Forecast data={main.forecast}/>
            </>
           );
          break;
         case "chart":
           return (
            <>
            <ChartXY data={main.chartXY}/>
            </>
           );
          break;
         case "temp":
           return (
            <>
            <Temp data={main.data.temp}/>
            </>
           );
          break;  
        default:
          <></>
          break;
      }
    }

    const Display=()=>{
      return  SHORT_STATES.map((item:string)=>(
                  displayStatuesType(item)
                ));
    }
  
    return (
      <>
      { SHORT_STATES.map( (item:string)=>(
                  displayStatuesType(item)
                ))}
      </>
    );
}

export default FeetSilo;