/* 
  Nav.tsx
 */

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* types */
// import type { NavProps } from "../../types/navProps";

// import type {NewsProps} from "../types/newsProps";
// import type {MenuProps} from "../types/menuProps";

/* Components */
import Menu from "./Menu/menu";
import News from "./News/news";

/* styles */

const Nav = () => {
  
  return (
    <>
      <nav className="" id="">
        <News/>
      </nav>
      <Menu/>
    </>
  );
}

export default Nav;