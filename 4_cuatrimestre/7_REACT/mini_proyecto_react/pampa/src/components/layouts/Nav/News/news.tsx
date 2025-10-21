/* 
  News.tsx
*/

/* Dependencies */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* types */
//import type {NewsProps} from "../types/newsProps";


/* Components */
/* styles */

const News = () => {
  
  return (
    <>
    <div className="col s12 blue darken-3">
      <div className="col s1 ">
        <a className=""><span className=""><i className="material-icons">list</i></span></a>
      </div>
      <div className="marquee col s10 "></div>
      <div className="control col s1">
        <a className=""><span className=""><i className="material-icons">play_arrow</i></span></a>
      </div>
    </div>
    </>
  );
}

export default News;
