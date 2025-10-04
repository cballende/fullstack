/* 
  FeetSilo.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

import type { FeedSilo } from "../../../../../types/cardProps";

/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";
import {ChartXY}    from "./States/States";
import {Filled}     from "./States/States";
import {Forecast}   from "./States/States";
import {Histogram}  from "./States/States";
import {Temp}       from "./States/States";

/* styles */

const FeetSilo = (props:{idService:string,idZone:string,idMonitor:string}) => {
  const LIST_STATES= ["filled","forecast","chartXY","histogram"];
  
  const API_URL_IMG = 'products/states/';
  const API_PAMPA_URL ="https://7b331a29-6f10-4a25-8efb-df6ff4a297a8.mock.pstmn.io//service/";
  const ENTITY_URL="/monitor/"; 
  const SHORT_STATES = ["filled","forecast","chartXY"];
  const [main, setMain]:[FeedSilo,any] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  const vSt:string[]=["init","result","results","notFound"];
  const [state,setState]=useState(vSt[0]);
          
  useEffect(() => {
    console.log("FeetSilo: "+props);
    fetch(API_PAMPA_URL+ props.idService +"/zone/"+props.idZone+ENTITY_URL+props.idMonitor)
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
            <Temp data={main.temp}/>
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