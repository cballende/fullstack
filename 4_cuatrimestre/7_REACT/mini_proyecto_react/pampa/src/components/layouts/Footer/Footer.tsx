/* 
  Footer.tsx
 */
import { useEffect, useState } from "react";
import type { FooterProps } from "../../types/footerProps";
//import "./Header.css";

const Footer = () => {

  const API_URL_IMG = "src/assets/images/";
  const API_URL_IMG_PO = 'posts/';
  const API_URL_IMG_PA = 'partners/';

  const [posts, setPosts] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data.posts);
        setPartners(data.partners);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
      <footer className="container containerMain">
        <div className="row">
          <div className="bg-dark text-center p-5"> <a href="" title="" target="_blank" className=""></a></div>
        </div>
      </footer>  
    </>
  );
}

export default Footer;