/* 
  Service.tsx
 */

/* Dependencies  */
//import ErrorBoundary from "./ErrorBoundary";

/* Components */
import CardList from "./CardList/CardList";

/* styles */
//import type {CartProps} from "../types/cardProps";

const Service = () => {
  return (
    <>
      <div className="row" id="service-list">
        <CardList/>
      </div>
    </>
  );
}
export default Service;