/* 
  News.tsx
*/

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* types */
//import type {NewsProps} from "../types/newsProps";


/* Components */
/* styles */

const News = () => {
  
  return (
    <>
    <div className="container">
      <div className="marquee">
        <a className="d-lg-none hover pointer" id="close-nav" title="close menu"></a>
      </div>
      <div className="alarms">
        <a className="alarm"><i className="fa fa-bell "></i></a>
      </div>
    </div>
    </>
  );
}

export default News;
