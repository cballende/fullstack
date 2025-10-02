/* 
  Header.tsx
 */
import { useEffect, useState } from "react";
import type { HeaderProps } from "../../../types/headerProps";
//import "./Header.css";

const Header = () => {
  const [subjets, setSubjets]:[HeaderProps,any] = useState({	id: 0,
                                                              user: '',
                                                              icon: '',
                                                              title: '',
                                                              avatar: {min:'',large:''}});
  const API_URL_IMG = 'src/assets/images/avatars/';
  const API_URL_MOCK = '';

  useEffect(() => {
    fetch(API_URL_MOCK+user)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setSubjets(data.subjets);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
      <header id="header">
        <div className="">
          <a href="#" className="" id="open-menu"> <span className=""><i className="fa fa-bars"></i></span> </a>
          <a href="#" className="" id="open-menu">  <img src="src/assets/images/brand/min.png" alt="VIGIAGRO"></img> </a>
          <a href="#" className=""><img src={API_URL_IMG+subjets.avatar.min} className=""></img></a>
        </div>
      </header>
    </>
  );
}

export default Header;