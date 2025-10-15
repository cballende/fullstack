//import './App.css';
import Nav       from "./components/layouts/Nav/Nav";
import Overlay   from "./components/common/Overlay/Overlay";
import Aside     from "./components/specific/Aside/Aside";
import Header    from "./components/layouts/Header/Header";
import Footer    from "./components/layouts/Footer/Footer";
import Section   from "./components/specific/Section/Section";

// import Service   from "./components/specific/Section/Service/Service";
/* import Zone      from "./components/specific/Section/Zone/Zone";
import Monitor   from "./components/specific/Section/Monitor/Monitor";
import State from "./components/specific/Section/State/State";
import Service from "./components/specific/Section/Service/Service";
*/


function App() {

  return (
    <>  
        <Header/>
        {/* <Nav/> */}

        {/* <Outlet/> */}
        <Section/>


        <Footer/>
        <Overlay/>
        <Aside/>
   </>
  )
}

/* 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

 function App() {
  return <Doughnut data={data} />;
} */

export default App
