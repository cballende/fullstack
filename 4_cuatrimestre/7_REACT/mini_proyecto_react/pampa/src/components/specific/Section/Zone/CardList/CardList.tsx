/* 
  CardList.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";


/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";

/* styles */
import type { CardProps } from "../../types/cardProps";

const CardList = () => {
  
  const API_URL_IMG = 'products/zones/';
  const API_PAMPA_URL ="https://7b331a29-6f10-4a25-8efb-df6ff4a297a8.mock.pstmn.io//service/";
  const ENTITY_URL="/zone/"; 
  const [main,setMain]:[CardZone[],any] = useState([]);
  
  
  //const [ projects, setProjects ] = useContext([]);
  useEffect(() => {
    fetch(API_PAMPA_URL+ props.id +ENTITY_URL)
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
        main.map( (item: CardZone) => (
         <div id={"zone-"+item.id} className="card">
              <p><b>{item.title}</b></p>
              <div className="container bg-clear">
                <p>{item.description}</p>
              </div>
              <img src={"src/assets/images/"+API_URL_IMG+item.img} alt={item.title} className="img-zone"></img>
         </div>
        ))          
      }
    </>
  );

}

export default CardList;