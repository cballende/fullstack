/* 
  CardList.tsx
 */

/* Dependencies  */
//import ErrorBoundary from "./ErrorBoundary";
import { useEffect, useState } from "react";
import { Link, useParams }     from "react-router";

/* Types */
import type {ZonesI} from "../../../../../types/cardProps";

/* Var init */
import { zones_0 } from "../../../../../types/cardProps";

/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";

/* styles */

import "./zone.css"

const CardList = () => {
  
  const API_URL_IMG = 'products/zones/';
  // const API_PAMPA_URL ="https://2fea5880-3f1d-4baa-8b24-5d8876c8a803.mock.pstmn.io/service/";
   const API_PAMPA_URL ="../../public/mock/service/";

  const ENTITY_URL="/zone/zone.txt"; 
  const [main,setMain]:[ZonesI[],any] = useState([zones_0]);
  
  let { serviceId } = useParams();
  console.log(serviceId);
  //const [ projects, setProjects ] = useContext([]);
  useEffect(() => {
    fetch(API_PAMPA_URL+ serviceId +ENTITY_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMain(data);
      })
      .catch(error => {
        //console.log(main);
        //console.log('Error fetching data Header:'+ error);
        console.log('Error fetching data Zone');
      });
      
  }, []);// on render


  return (
    <>
      {
        main.map( (item: ZonesI) => (

          <div key={item.id+1000} className="card horizontal">
                <div className="card-image">
                  <img src={"/src/assets/images/"+API_URL_IMG+item.img} alt={"img-"+item.title} className="img-zone"></img>
                </div>
              <div className="card-stacked">
                <div className="card-content">
                  <span className="card-title"><b>{item.title.toUpperCase()}</b></span>
                  <p>{item.description}.</p>
                </div>
                <div className="card-action">
                  <a href={"https://www.google.com/maps/@"+item.gis+",200m/"}><i className="material-icons">location_on</i></a>
                  <Link key={item.id} to={"/service/"+serviceId+"/zone/"+item.id+"/monitor"} >
                    <i className="material-icons">touch_app</i>
                  </Link>
                </div>
              </div>
            </div>
        ))          
      }
    </>
  );

}
export default CardList;