/* 
  FeetSilo.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */
import type { FeedSiloI, FilledI, StateI } from "../../../../../types/cardProps";

/* Var init */
import { feedSilo_0 } from "../../../../../types/cardProps";


/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";
import {ChartXY}    from "./States/States";
import {Filled}     from "./States/States";
import {Forecast}   from "./States/States";
import {Histogram}  from "./States/States";
import {Temp}       from "./States/States";

/* styles */

const FeetSilo = (props:{data:FeedSiloI}) => {
  const LIST_STATES= ["filled","forecast","chartXY","histogram"];
  
  const SHORT_STATES = ["filled","forecast","chartXY"];
  const [main, setMain]:[FeedSiloI,any] = useState(feedSilo_0);
  
  //const [ projects, setProjects ] = useContext([]);

  const vSt:string[]=["init","result","results","notFound"];
  const [state,setState]=useState(vSt[0]);
  
    
  useEffect(() => {
    console.log("FeetSilo: "+props.data.filled.value);
    setMain(props.data);
  }, [props]);

  function displayStatuesType(value:string, index:number) {
    console.log(index);
    switch (value) {
        case "filled":
           return (
            <><div key={index}>
                <Filled data={main.filled}/>

            </div>
            </>
           );
          break;
        case "histogram":
           return (
            <><div key={index}>
                <Histogram data={main.histogram}/>

            </div>
            </>
           );
        case "forecast":
           return (
            <><div key={index}>
                <Forecast data={main.forecast}/>
            </div>
            </>
           );
          break;
         case "chartXY":
           return (
            <><div key={index}>
                <ChartXY data={main.chartXY}/>

            </div>
            </>
           );
          break;
         case "temp":
           return (
            <><div key={index}>
                <Temp data={main.temp}/>

            </div>
            </>
           );
          break;  
        default:
          return<></>
          break;
      }
    }

    const Display=()=>{
      return  SHORT_STATES.map((item:string)=>(
                  displayStatuesType
                ));
    }
  
    return (
      <>
        <div className="row p-3" id="feetSilo-state-list">
          { SHORT_STATES.map( displayStatuesType ) }
        </div>  
      </>
    );
}

export default FeetSilo;