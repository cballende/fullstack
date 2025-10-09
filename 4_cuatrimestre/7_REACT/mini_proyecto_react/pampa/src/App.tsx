
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
import Service from "./components/specific/Section/Service/Service"; */

function App() {

  return (
    <>
        <Header/>
        <Nav/>
        {/* <Outlet/> */}
        <Section/>
        <Footer/>
        <Overlay/>
        <Aside/>
   </>
  )
}

export default App
