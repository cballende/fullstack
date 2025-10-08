/* 
  CardList.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
import { Link, useParams }     from "react-router";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */
import type {ZoneI,UnitI, MonitorI} from "../../../../../types/cardProps";

/* Var init */
import { zone_0 } from "../../../../../types/cardProps";


/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";

/* styles */

const CardList = () => {
  const API_URL_IMG = 'products/monitors/';
  const API_PAMPA_URL ="https://1640c2bd-b2ff-44b1-8846-e4206eccd5d6.mock.pstmn.io//service/";
  const ENTITY_URL="/monitor/";
  const [main, setMain]:[ZoneI,any] = useState(zone_0);
  
  let { serviceId,zoneId } = useParams();
  //const [ projects, setProjects ] = useContext([]);

  useEffect(() => {
    fetch(API_PAMPA_URL+serviceId+"/zone/"+zoneId+ENTITY_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMain(data);
      })
      .catch(error => {
        //console.log(main);
        //console.log('Error fetching data Header:'+ error);
        console.log('Error fetching data Monitor');
      });
  }, []);// on render


  return (
    <>
      {
        main.units.map( (item: UnitI) => (
        <Link key={item.id} to={"/service/"+serviceId+"/zone/"+zoneId+"/monitor/"+item.id+"/state"} >
          <div id={"zone-"+item.id} className="card">
            <p><b>{item.title}</b></p>
            <div className="container bg-clear">
              <p>{item.description}</p>
            </div>
            <img src={"src/assets/images/"+API_URL_IMG+item.img} alt={"img-"+item.title} className="img-monitor"></img>
          </div>
         </Link>
        ))          
      }
    </>
  );
}

export default CardList;