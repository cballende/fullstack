/* 
  Weather.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */
import type { WeatherI, StateI } from "../../../../../types/cardProps";

/* Var init */
import { weather_0 } from "../../../../../types/cardProps";


/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";
import {Temp}     from "./States/States";
import {Moisture} from "./States/States";
import {Rain}     from "./States/States";
import {Wind}     from "./States/States";


/* styles */

const Weather = (props:{data:StateI}) => {
  const LIST_STATES= ["temp","wind","moiture","rain"];
  
  const SHORT_STATES = ["temp","wind","moiture","rain"];
  const [main, setMain]:[WeatherI,any] = useState( weather_0);
  
  //const [ projects, setProjects ] = useContext([]);

  const vSt:string[]=["init","result","results","notFound"];
  const [state,setState]=useState(vSt[0]);
  
    
  useEffect(() => {
    console.log("Pivot: "+props.data.title);
    setMain(props.data);
  }, [props]);

  const displayStatuesType= (status:string) => {

    switch (status) {
        case "temp":
           return (
            <>
            <Temp data={main.temp}/>
            </>
           );
          break;
        case "wind":
           return (
            <>
            <Wind data={main.wind}/>
            </>
           );
        case "moisture":
           return (
            <>
            <Moisture data={main.moisture}/>
            </>
           );
          break;
        case "rain":
           return (
            <>
            <Rain data={main.rain}/>
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
        <div className="row p-3" id="weather-state-list">
          { SHORT_STATES.map( (item:string)=>(
                      displayStatuesType(item)
                    ))}
        </div>
      </>
    );
}

export default Weather;