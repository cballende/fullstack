/* 
  Service.tsx
 */

/* Dependencies  */
//import ErrorBoundary from "./ErrorBoundary";

/* Components */
import CardList from "./CardList/CardList";

/* styles */
//import type {CartProps} from "../types/cardProps";

/* Hooks */

const Service = () => {
  return (
    <>
    <div className="main" id="main">
      <div className="row" id="service-list">
        <CardList/>
      </div>
    </div>
    </>
  );
}
export default Service;