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

  const displayStatuesType=(value:string)=> {
    console.log(value);
    switch (value) {
        case "filled":
           return (
            <>
              <Filled label={{title:"Nivel"}} data={main.filled}/>
            </>
           );
          break;
        case "histogram":
           return (
            <>
              <Histogram label={{title:"Consumo"}} data={main.histogram}/>
            </>
           );
        case "forecast":
           return (
            <>
             <Forecast label={{title:"Nivel"}} data={main.forecast}/>
            </>
           );
          break;
         case "chartXY":
           return (
            <>
             <ChartXY label={{title:"Nivel"}} data={main.chartXY}/>
            </>
           );
          break;
         case "temp":
           return (
            <>
              <Temp label={{title:"Interna"}} data={main.temp}/>
            </>
           );
          break;  
        default:
          return <></>
          break;
      }
    }

    const Display=()=>{
      return  SHORT_STATES.map((item:string,index:number)=>(
                <div key={index}>
                  {displayStatuesType(item)}
                </div>
              ));
    }
  
    return (
      <>
        <div className="feetSilo-state-list" id="">
          {/* { SHORT_STATES.map( displayStatuesType ) } */}
          <Display/>
        </div>  
      </>
    );
}

export default FeetSilo;