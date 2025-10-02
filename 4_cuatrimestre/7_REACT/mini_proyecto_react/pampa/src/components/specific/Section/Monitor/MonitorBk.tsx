/* 
  StateList.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";


/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";

/* styles */
import type { StatusProps } from "../../types/statusProps";

const StatusList = () => {
  
  const API_URL_IMG = '';
  const API_URL_IMG = '';
  const [main, setMain]:[any[],any] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  const vSt:string[]=["init","result","results","notFound"];
  const [state,setState]=useState(vSt[0]);
          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("state: "+state);
        if (props.dataRecive instanceof Array){
          console.log("Array");
          if(props.dataRecive.length === 0) {
            /*not found something */ 
            setState(vSt[3]);
          }else{
            /*at least some one */
            setState(vSt[2]);
          }
        }else if (props.dataRecive.hasOwnProperty("id")){//object
            /*only one*/
           console.log("Object");
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props.dataRecive]);// on mount and change
   
    const displayMonitorType= (prop:StatusProp) => {
      
    }

    const Display=()=>{
     return displayMonitorType();
    }
  
    return (
      <>
        <Display/>
      </>
    );
}

export default StatusList;