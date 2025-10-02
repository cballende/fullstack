import { useState } from 'react';
//import './App.css';
import Nav             from "./components/layouts/Nav/Nav";
import Overlay             from "./components/common/Overlay/Overlay";
import Header          from "./components/layouts/Header/Header";
import Footer          from "./components/Footer/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Nav/>
      <Overlay/>
      <Section/>
      <Aside/>
      <Footer/>
      
     
      
    </>
  )
}

export default App
