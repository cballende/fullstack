/* 
  State.tsx
 */

/* Dependencies  */
//import ErrorBoundary from "./ErrorBoundary";

/* Components */
import Layouts from "./Layouts/Layout";

/* styles */
//import type {CartProps} from "../types/cardProps";

const State = () => {
  return (
    <>
      <div className="main" id="main">
        <div className="row" id="state-list">
          <Layouts/>
        </div>
      </div>
    </>
  );
}
export default State;

