/* 
  Layouts.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
import { useParams }     from "react-router";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */

import type {MonitorI, StateI} from "../../../../../types/cardProps";

/* Var init */
import { monitor_0 } from "../../../../../types/cardProps";

/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";
import FeetSilo from "./FeetSilo";
import Pivot from "./Pivot";
import Weather from "./Weather";

/* styles */

const Layouts = () => {
  const API_URL_IMG = 'products/states/';
  const API_PAMPA_URL ="https://7b331a29-6f10-4a25-8efb-df6ff4a297a8.mock.pstmn.io//service/";
  const ENTITY_URL="/monitor/"; 

  const [main,setMain]:[MonitorI,any] = useState(monitor_0);
  let   { serviceId,zoneId,monitorId } = useParams();
  
            
  useEffect(() => {
    console.log("Monitor: "+monitorId);
    fetch(API_PAMPA_URL+ serviceId +"/zone/"+zoneId+ENTITY_URL+monitorId)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMain(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      // if (props.dataRecive instanceof Array){
      //   console.log("Array");
      //   if(props.dataRecive.length === 0) {
      //     /*not found something */ 
      //     setState(vSt[3]);
      //   }else{
      //     /*at least some one */
      //     setState(vSt[2]);
      //   }
      // }else if (props.dataRecive.hasOwnProperty("id")){//object
      //     /*only one*/
      //    console.log("Object");
      //    setState(vSt[1]);
      // }else{
      //    setState(vSt[3]);
      // }
  }, []);
    
  
    const displayLayoutType= () => {

      switch (main.type.title) {
        case "feetSilo":
           return (
            <>
            <FeetSilo data={main.states}/>
            </>
           );
          break;
        case "pivot":
           return (
            <>
            <Pivot data={main.states}/>
            </>
           );
        case "weather":
           return (
            <>
            <Weather data={main.states}/>
            </>
           );
          break;  
        default:
           return(<></>);
          break;
      }
    }

    const Display=()=>{
     return displayLayoutType();
    }
  
    return (
      <>
        <Display/>
      </>
    );
}

export default Layouts;