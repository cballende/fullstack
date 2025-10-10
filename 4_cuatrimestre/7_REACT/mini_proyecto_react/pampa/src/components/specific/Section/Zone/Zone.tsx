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
      <div className="row p-3" id="zone-list">
        <CardList/>
      </div>
    </div>
    </>
  );
}
export default Zone;