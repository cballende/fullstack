/* 
  CardList.tsx
 */

/* Dependencies  */
import { useEffect, useState }    from "react";
import { Link ,useNavigate }  from "react-router";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */
import type {ServicesI} from "../../../../../types/cardProps";

/* Var init */
import { services_0 } from "../../../../../types/cardProps";


/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";

/* styles */

const CardList = () => {
  const API_URL_IMG = 'products/services/';
  
  // const API_PAMPA_URL ="https://63ae2027-cb2a-47aa-94b6-b816f6da13ef.mock.pstmn.io";
  const API_PAMPA_URL ="../public/mock/service/";
  // const ENTITY_URL="/service/";
  const ENTITY_URL="service.txt";

  const [main, setMain]:[ServicesI[],any] = useState([services_0]);
  
  //const [ projects, setProjects ] = useContext([]);

  useEffect(() => {
    fetch(API_PAMPA_URL+ENTITY_URL)
      .then(response => response.json())
      .then(data => {
        console.log("Services:",data);
        setMain(data);
      })
      .catch(error => {
        //console.log(main);
        //console.log('Error fetching data Header:'+ error);
        console.log('Error fetching data Service');
      });
  }, []);// on render

  const handleClickService=()=>{

  }

  return (
    <>
      {
        main.map( (item: ServicesI) => (
          <Link key={item.id} to={"/service/"+item.id+"/zone"} >
            <div /* key={item.id} */ className="col s6" id={"service-"+item.id} onClick={handleClickService}>
              <div className="card">
                <div className="card-image">
                  <picture><img src={"src/assets/images/"+API_URL_IMG+item.img} alt={"img-"+item.title}  className="img-service"></img></picture>
                </div>
              </div>

            </div>
          </Link>
        ))          
      }
    </>
  );
}

export default CardList;