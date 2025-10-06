/* 
  Statues.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */

import type { ChartXYI, FilledI, ForecastI, HistogramI ,TempI } from "../../../../../../types/cardProps";



/* Components */

//import Filled   from "./Statues/Statues";

/* styles */


export const Filled = (props:FilledI) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[Filled,any] = useState({});
  const [state,setState]:[string,any]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);
  useEffect(()=>{
      //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
      console.log("Filled: "+props);
      if (props.hasOwnProperty("Filled")){//object
          /*only one*/
          console.log("Object");
          setMain(Number(props));
          setState(vSt[1]);
      }else{
          setState(vSt[3]);
      }
    }
    ,[props]);// on mount and change
  
  return (
    <> 
      <span>{'Filled: '+main.value+'%' }</span>
    </>
  );
}
// export default Filled;


export const ChartXY = (props:ChartXYI) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[ChartXYI,any] = useState({});
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);
         
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("ChartXY: "+props);
        if (props.hasOwnProperty("ChartXY")){//object
            /*only one*/
          console.log("Object");
          setMain((props));
          setState(vSt[1]);
        }else{
          setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'ChartXY: '+main.d.title }
      </>
    );
}

// export default ChartXY;


export const Forecast = (props:ForecastI) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[ForecastI,any] = useState({});
  const [state,setState]=useState(vSt[0]);
  //const [ projects, setProjects ] = useContext([]);

    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Filled: "+props);
        if (props.hasOwnProperty("Filled")){//object
            /*only one*/
           console.log("Object");
           setMain(props);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Forecast: '+main.d.title }
      </>
    );
}

// export default Forecast;


export const Histogram = (props:HistogramI) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[HistogramI,any] = useState({});
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Filled: "+props);
        if (props.hasOwnProperty("Filled")){//object
            /*only one*/
           console.log("Object");
           setMain((props));
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Histogram: '+main.d.title }
      </>
    );
}

// export default Histogram;


export const Temp = (props:TempI) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[TempI,any] = useState({});
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Filled: "+props);
        if (props.hasOwnProperty("Filled")){//object
            /*only one*/
           console.log("Object");
           setMain((props));
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Temp: '+main.s.title }
      </>
    );
}

// export default Temp;
