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

const CardList = () => {
  
  const API_URL_IMG = 'products/zones/';
  const API_PAMPA_URL ="https://7b331a29-6f10-4a25-8efb-df6ff4a297a8.mock.pstmn.io//service/";
  const ENTITY_URL="/zone/"; 
  const [main,setMain]:[ZonesI[],any] = useState([zones_0]);
  
  let { serviceId } = useParams();
  
  //const [ projects, setProjects ] = useContext([]);
  useEffect(() => {
    fetch(API_PAMPA_URL+ serviceId +ENTITY_URL)
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
        main.map( (item: ZonesI) => (
          <Link to={"/service/:"+serviceId+"/zone/:"+item.id+"/monitor"} >
            <div id={"zone-"+item.id} className="card">
              <p><b>{item.title}</b></p>
              <div className="container bg-clear">
                <p>{item.description}</p>
              </div>
              <img src={"src/assets/images/"+API_URL_IMG+item.img} alt={item.title} className="img-zone"></img>
            </div>
          </Link>  
        ))          
      }
    </>
  );

}

export default CardList;