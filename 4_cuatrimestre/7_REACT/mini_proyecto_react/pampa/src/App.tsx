/* 
  app.tsx
 */
//import './App.css';

/* Dependencies  */
// import { useContext, useReducer, useState } from "react";

/* Components */
// import Nav       from "./components/layouts/Nav/Nav";
import Overlay   from "./components/common/Overlay/Overlay";
import Aside     from "./components/specific/Aside/Aside";
import Header    from "./components/layouts/Header/Header";
import Footer    from "./components/layouts/Footer/Footer";
import Section   from "./components/specific/Section/Section";

/* Hooks */
import BreadCrumbProvider  from './contexts/breadCrumb-context';

/* import Service   from "./components/specific/Section/Service/Service";
   import Zone      from "./components/specific/Section/Zone/Zone";
   import Monitor   from "./components/specific/Section/Monitor/Monitor";
   import State from "./components/specific/Section/State/State";
   import Service from "./components/specific/Section/Service/Service"; */

function App() {

  return (
    <>
      <BreadCrumbProvider>
        <Header/>
        {/* <Nav/> */}

        {/* <Outlet/> */}
        <Section/>
      </BreadCrumbProvider>


        <Footer/>
        <Overlay/>
        <Aside/>
   </>
  )
}

export default App
