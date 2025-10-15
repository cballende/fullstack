/* 
  Zone.tsx
 */

/* Dependencies  */
//import ErrorBoundary from "./ErrorBoundary";

/* Components */
import CardList from "./CardList/CardList";

/* styles */
//import type { CardZone } from "../../types/zonesProps";

const Zone = () => {
  return (
    <><div className="main" id="main">
      <div className="row " id="zone-list">
        <CardList/>
      </div>
    </div>
    </>
  );
}
export default Zone;