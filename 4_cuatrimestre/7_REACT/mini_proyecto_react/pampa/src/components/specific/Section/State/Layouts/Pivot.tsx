/* 
  pivot.tsx
 */


/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */
import type { PivotI, StateI } from "../../../../../types/cardProps";

/* Var init */
import { pivot_0 } from "../../../../../types/cardProps";


/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";
import {Polar}    from "./States/States";
import {Flow}     from "./States/States";
import {Serie}   from "./States/States";

/* styles */

const Pivot = (props:{data:StateI}) => {
  const LIST_STATES= ["flow","polar","serie"];
  
  const SHORT_STATES = ["polar","flow","serie"];
  const [main, setMain]:[PivotI,any] = useState( pivot_0);
  
  //const [ projects, setProjects ] = useContext([]);

  const vSt:string[]=["init","result","results","notFound"];
  const [state,setState]=useState(vSt[0]);
  
    
  useEffect(() => {
    console.log("Pivot: "+props.data.title);
    setMain(props.data);
  }, [props]);

  const displayStatuesType= (status:string) => {

    switch (status) {
        case "polar":
           return (
            <>
            <Polar data={main.polar}/>
            </>
           );
          break;
        case "flow":
           return (
            <>
            <Flow data={main.flow}/>
            </>
           );
        case "serie":
           return (
            <>
            <Serie data={main.serie}/>
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
        <div className="row p-3" id="pivot-state-list">
          { SHORT_STATES.map( (item:string)=>(
                    displayStatuesType(item)
                  ))}
        </div>
      </>
    );
}

export default Pivot;