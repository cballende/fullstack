import { useEffect, useState } from "react";
import type { CardProps } from "../../interfaces/cardProps";

function CardList() {
  const [projects, setProjects] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProjects(data.proyects);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
      
      <div className="row p-3" id="past-list">
        {
          projects.map( (project: CardProps) => (
            <div id={project.id} className="card col-xl-4 col-md-6 col-12 mb-4">
              <img src="assets/images/products/proyects/${project.path+project.img}" alt="Proyect"  className="images"></img>
              <div className="container bg-clear  pb-1">
                <p><b>{project.title}</b></p>
                <p>{project.description}</p>
              </div>
            </div>
          ))          
        }
      </div>
      

    </>
  );
}

export default CardList;