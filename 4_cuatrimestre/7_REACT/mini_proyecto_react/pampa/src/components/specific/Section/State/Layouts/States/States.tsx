/* 
  Statues.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */
import type { ChartXYI, FilledI, FlowI, ForecastI, HistogramI ,MoistureI,PolarI,RainI,SerieI,TempI, WindI } from "../../../../../../types/cardProps";

/* Var init */
import { filled_0, forecast_0,chartXY_0,histogram_0,temp_0,
         flow_0, polar_0,serie_0,
         wind_0,moisture_0,rain_0 
        } from "../../../../../../types/cardProps";


/* Components */

//import Filled   from "./Statues/Statues";

/* styles */


/* filled */

export const Filled = (props:{data:FilledI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[FilledI,any] = useState(filled_0);
  const [state,setState]:[string,any]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);
  useEffect(()=>{
      //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
      if (props.data.hasOwnProperty("value")){//object
        /*only one*/
        //console.log("Object");
          console.log("Filled: "+props.data.value);
          setMain(props.data);
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


export const ChartXY = (props:{data:ChartXYI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[ChartXYI,any] = useState(chartXY_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);
         
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("ChartXY: "+props.data.d.title);
        if (props.data.hasOwnProperty("d")){//object
            /*only one*/
          setMain(props.data);
          setState(vSt[1]);
        }else{
          setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       <span>{'ChartXY: '+main.d.title }</span>
      </>
    );
}

// export default ChartXY;


export const Forecast = (props:{data:ForecastI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[ForecastI,any] = useState(forecast_0);
  const [state,setState]=useState(vSt[0]);
  //const [ projects, setProjects ] = useContext([]);

    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Forecast: "+props.data.d.title);
        if (props.data.hasOwnProperty("d")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       <span>{'Forecast: '+main.d.title }</span>
      </>
    );
}

// export default Forecast;


export const Histogram = (props:{data:HistogramI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[HistogramI,any] = useState(histogram_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Histogram: "+props);
        if (props.data.hasOwnProperty("d")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
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


export const Temp = (props:{data:TempI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[TempI,any] = useState(temp_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Temp: "+props);
        if (props.data.hasOwnProperty("s")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
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

/* pivot */

export const Flow = (props:{data:FlowI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[FlowI,any] = useState(flow_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Flow: "+props);
        if (props.data.hasOwnProperty("value")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Flujo: '+main.value }
      </>
    );
}

// export default Temp;
export const Polar = (props:{data:PolarI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[PolarI,any] = useState(polar_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Polar: "+props);
        if (props.data.hasOwnProperty("title")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Polar: '+main.title }
      </>
    );
}

// export default Temp;
export const Serie = (props:{data:SerieI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[SerieI,any] = useState(serie_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Serie: "+props);
        if (props.data.hasOwnProperty("title")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Temp: '+main.title }
      </>
    );
}


/* Weather */

// export default Temp;
export const Moisture = (props:{data:MoistureI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[MoistureI,any] = useState(moisture_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Temp: "+props);
        if (props.data.hasOwnProperty("d")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Humedad: '+main.d.title }
      </>
    );
}

export const Rain = (props:{data:RainI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[RainI,any] = useState(rain_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Temp: "+props);
        if (props.data.hasOwnProperty("d")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Lluvia: '+main.d.title }
      </>
    );
}

export const Wind = (props:{data:WindI}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[WindI,any] = useState(wind_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Temp: "+props);
        if (props.data.hasOwnProperty("value")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Temp: '+main.value }
      </>
    );
}

// export default Temp;