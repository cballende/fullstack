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
    <div className="row">
      <div className="marquee col s10 ">
        <a className="d-lg-none hover pointer" id="close-nav" title="close menu"></a>
      </div>
      <div className="alarms col s2">
        <a className="alarm"><i className="fa fa-bell "></i></a>
      </div>
    </div>
    </>
  );
}

export default News;
