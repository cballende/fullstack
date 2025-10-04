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
    <>
      <div className="row p-3" id="zone-list">
        <CardList/>
      </div>
    </>
  );
}
export default Zone;