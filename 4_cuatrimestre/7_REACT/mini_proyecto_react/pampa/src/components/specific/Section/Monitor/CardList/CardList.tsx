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


/* HOOKS */
import { useBreadCrumb,useBreadCrumbDispatch } from '../../../../../contexts/breadCrumb-context';


/* styles */
import "./monitor.css"


const CardList = () => {
  const API_URL_IMG = 'products/monitors/';
  //const API_PAMPA_URL ="https://1640c2bd-b2ff-44b1-8846-e4206eccd5d6.mock.pstmn.io/service/";
  const API_PAMPA_URL ="/public/mock/service/";

  
  const ENTITY_URL="/monitor/monitor.txt";
  const [main, setMain]:[ZoneI,any] = useState(zone_0);
  const dispatch = useBreadCrumbDispatch();
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

  const handleClickService=()=>{
    dispatch(
      {
        type: 'added',
        id: 1,
        index: 4,
        text: 'Estados',
        path: '/state',
        done: true
      }
    );
  }

  return (
    <>
      {
        main.units.map( (item: UnitI) => (
          
          <div key={item.id+100} className="card horizontal">
              <div className="card-image">
                <img src={"/src/assets/images/"+API_URL_IMG+item.img} alt={"img-"+item.title} className="img-monitor"></img>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <span className="card-title"><b>{item.title.toUpperCase()}</b></span>
                  <p>{item.description}.</p>
                </div>
                <div className="card-action">
                  {/* <a href={"https://www.google.com/maps/@"+item.gis+",200m/"}><i className="material-icons">loction_on</i></a> */}
                  <Link key={item.id+10} to={"https://www.google.com/maps/@"+item.gis+",200m/"} >
                    <i className="material-icons">location_on</i>
                  </Link>
                  <Link key={item.id} to={"/service/"+serviceId+"/zone/"+zoneId+"/monitor/"+item.id+"/state"} onClick={handleClickService} >
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