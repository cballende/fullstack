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
      <div className="row p-3" id="monitor-list">
        <CardList/>
      </div>
    </>
  );
}
export default Service;