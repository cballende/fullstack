/* 
  Statues.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* Components */

//import Filled   from "./Statues/Statues";

/* styles */
import type { StatusProps } from "../../types/statusProps";


export const Filled = (props) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[number,any] = useState(0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);
  useEffect(()=>{
      //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
      console.log("Filled: "+props);
      if (props.hasOwnProperty("Filled")){//object
          /*only one*/
          console.log("Object");
          setMain(Number(props.filled));
          setState(vSt[1]);
      }else{
          setState(vSt[3]);
      }
    }
    ,[props]);// on mount and change
  
  return (
    <> 
      {'Filled: '+main.porcent+'%' }
    </>
  );
}
// export default Filled;


export const ChartXY = (props) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[number,any] = useState(0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);
         
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("ChartXY: "+props);
        if (props.hasOwnProperty("ChartXY")){//object
            /*only one*/
           console.log("Object");
           setMain((props.chartXY));
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'ChartXY: '+main }
      </>
    );
}

// export default ChartXY;


export const Forecast = (props) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[number,any] = useState(0);
  const [state,setState]=useState(vSt[0]);
  //const [ projects, setProjects ] = useContext([]);

    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Filled: "+props);
        if (props.hasOwnProperty("Filled")){//object
            /*only one*/
           console.log("Object");
           setMain((props.forecast));
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Forecast: '+main }
      </>
    );
}

// export default Forecast;


export const Histogram = (props) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[number,any] = useState(0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Filled: "+props);
        if (props.hasOwnProperty("Filled")){//object
            /*only one*/
           console.log("Object");
           setMain((props.histogram));
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Filled: '+main }
      </>
    );
}

// export default Histogram;


export const Temp = (props) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[number,any] = useState(0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Filled: "+props);
        if (props.hasOwnProperty("Filled")){//object
            /*only one*/
           console.log("Object");
           setMain((props.temp));
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Temp: '+main }
      </>
    );
}

// export default Temp;
