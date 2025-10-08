/* 
  Header.tsx
 */
import { useEffect, useState } from "react";
import type { HeaderProps } from "../../../types/headerProps";
//import "./Header.css";

const Header = () => {
  const [main, setMain]:[HeaderProps,any] = useState({	id: 0,
                                                              user: '',
                                                              icon: '',
                                                              title: '',
                                                              avatar: {min:'',large:''}});
  const API_URL_IMG = 'src/assets/images/avatars/';
  const API_URL_BRAND = 'src/assets/images/brand/';
  const API_URL_MOCK = 'https://4f9af38d-1502-448d-8bc9-1d426f1b2ddb.mock.pstmn.io/user/1';

  useEffect(() => {
    fetch(API_URL_MOCK)
      .then(response => response.json())
      .then(data => {
        //console.log(data) 
        setMain(data);
        })
      .catch(error => {
        //console.log(main);
        //console.log('Error fetching data Header:'+ error);
        console.log('Error fetching data Header');
      });
  }, []);// on render

  return (
    <>
      <header id="header">
        <div className="">
          <a href="#" className="" id="open-menu"> <span className=""><i className="fa fa-bars"></i></span> </a>
          <a href="#" className="" id="open-menu">  <img src={API_URL_BRAND+"min.png"} alt="Pampa"></img> </a>
          <a href="#" className=""><img src={API_URL_IMG+main.avatar.min} className=""></img></a>
        </div>
      </header>
    </>
  );
}

export default Header;