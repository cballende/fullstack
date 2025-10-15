/* 
  Monitor.tsx
 */

/* Dependencies  */
//import ErrorBoundary from "./ErrorBoundary";

/* Components */
import CardList from "./CardList/CardList";

/* styles */
//import type {CartProps} from "../types/cardProps";

const Monitor = () => {
 return (
    <><div className="main" id="main">
      <div className="row" id="monitor-list">
        <CardList/>
      </div>
     </div>
    </>
  );
}
export default Monitor;