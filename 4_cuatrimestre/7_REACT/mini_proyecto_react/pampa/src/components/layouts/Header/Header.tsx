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
  // const API_URL_MOCK = 'https://4f9af38d-1502-448d-8bc9-1d426f1b2ddb.mock.pstmn.io/user/1';
const API_URL_MOCK ="../public/mock/user/user.txt"
  useEffect(() => {
    fetch(API_URL_MOCK)
      .then(response => response.json())
      .then(data => {
        console.log(data) 
        setMain(data);
        })
      .catch(error => {
        //console.log(main);
        //console.log('Error fetching data Header:'+ error);
        console.log('Error fetching data Header');
      });
  },[]);// on render

  return (
    <>
        <nav>

          <div className="nav-wrapper">
            <a href="#" className="brand-logo center"><img src={API_URL_BRAND+"min.png"} alt="Pampa"></img> </a>
            <ul id="nav-mobile" className="left show-on-medium-and-down">
              <li><a href="#" className="" id="open-menu"> <span className=""><i className="material-icons">menu</i></span> </a></li>
              <li><a href="#" className=""><img src={API_URL_IMG+main.avatar.min} className=""></img></a></li>
            </ul>
          </div>

        </nav>
      <header id="header">


        <div className="row">
          <div className="col s2">
            <a href="#" className="" id="open-menu"> <span className=""><i className="fa fa-bars"></i></span> </a>
          </div>
          <div className="col s8">
            <a href="#" className="" id="open-menu">  <img src={API_URL_BRAND+"min.png"} alt="Pampa"></img> </a>
          </div>
          <div className="col s2">
            <a href="#" className=""><img src={API_URL_IMG+main.avatar.min} className=""></img></a>            
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;