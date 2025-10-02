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
  
  const API_URL_IMG = 'products/monitors/';
  const [main, setMain]:[StateProps[],any] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  useEffect(() => {
    fetch('/data/data.json') 
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMain(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

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
          break;
      }
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