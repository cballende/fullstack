/* 
  CardList.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* Tipes */
import type {ZoneI,UnitI} from "../../../../../types/cardProps";

/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";

/* styles */


const CardList = () => {
  const API_URL_IMG = 'products/monitors/';
  const API_PAMPA_URL ="https://7b331a29-6f10-4a25-8efb-df6ff4a297a8.mock.pstmn.io//service/";
  const ENTITY_URL="/monitor/";
  const [main, setMain]:[ZoneI,any] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  useEffect(() => {
    fetch(API_PAMPA_URL+props.idService+"/zone/"+props.idZone+ENTITY_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMain(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
      {
        main.units.map( (item: UnitI) => (
         <div id={"zone-"+item.id} className="card">
              <p><b>{item.title}</b></p>
              <div className="container bg-clear">
                <p>{item.description}</p>
              </div>
              <img src={"src/assets/images/"+API_URL_IMG+item.img} alt={item.title} className="img-monitor"></img>
         </div>
        ))          
      }
    </>
  );
}

export default CardList;