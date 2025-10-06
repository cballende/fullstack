/* 
  CardList.tsx
 */

/* Dependencies  */
import { useEffect, useState }    from "react";
import { Link ,useNavigate }  from "react-router";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */
import type {ServicesI} from "../../../../../types/cardProps";

/* Components */
//import CardActualyList from "./components/CardActualyList/CardActualyList";

/* styles */

const CardList = () => {
  const API_URL_IMG = 'products/services/';
  const API_PAMPA_URL ="https://7b331a29-6f10-4a25-8efb-df6ff4a297a8.mock.pstmn.io";
  const ENTITY_URL="/service/";
  const [main, setMain]:[ServicesI[],any] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  useEffect(() => {
    fetch(API_PAMPA_URL+ENTITY_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMain(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  const handleClickService=()=>{

  }

  return (
    <>
      {
        main.map( (item: ServicesI) => (
          <Link to={"/service/:"+item.id+"/zone"} >
            <div key={item.id} className="card col-xl-4 col-md-6 col-12 mb-4" id={"service-"+item.id} onClick={handleClickService}>
              <img src={"src/assets/images/"+API_URL_IMG+item.img} alt={item.title}  className="img-service"></img>
            </div>
          </Link>
        ))          
      }
    </>
  );
}

export default CardList;