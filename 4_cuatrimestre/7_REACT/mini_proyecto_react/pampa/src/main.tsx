import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";

//import './index.css'
//import './assets/css/style.css'
import App from './App.tsx'

import Zone      from "./components/specific/Section/Zone/Zone";
import Monitor   from "./components/specific/Section/Monitor/Monitor";
import State from "./components/specific/Section/State/State";
import Service from "./components/specific/Section/Service/Service";
import Section   from "./components/specific/Section/Section";

createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
<StrictMode>
    <App />
  </StrictMode>,

    <Routes>
      <Route path="/" element={<App/>}>
        {/* <Route path="/service" element={<App/>} />
        <Route path="/service/" element={<App/>} />
        <Route path="/service/:serviceId" element={<App/>} /> */}
        <Route  element={<Section/>} >
            <Route index element={<Service/>} />
            <Route path="service/:serviceId/zone"                                  element={<Zone/>}/>
            <Route path="service/:serviceId/zone/:zoneId/monitor"                  element={<Monitor/>}/>
            <Route path="service/:serviceId/zone/:zoneId/monitor/:monitorId/state" element={<State/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>



)
