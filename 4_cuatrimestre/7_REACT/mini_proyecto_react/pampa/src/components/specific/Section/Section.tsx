/* 
  Section.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* types */
//import type {NewsProps} from "../types/newsProps";

/* Components */
/* styles */

const Section = () => {
  
  return (
    <>
       <div className="main" id="main">
          <Zone/>
          <Monitor/>
          <State/>
      </div>
    </>
  );
}

export default Section;