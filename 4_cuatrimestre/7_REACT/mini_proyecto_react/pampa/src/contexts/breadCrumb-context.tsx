/* 
  breadCrumb-context.tsx
*/
import { createContext, useContext, useReducer } from 'react';

import {initialBreadCrumb,breadCrumbReducer} from '../hooks/breadCrumbReducer'

const BreadCrumbContext = createContext(null);
const BreadCrumbDispatchContext = createContext(null);

export default function BreadCrumbProvider({ children }) {

  const [breadCrumb, dispatch]:[any,any] = useReducer(
    breadCrumbReducer,
    initialBreadCrumb
  );

  return (
    
      <BreadCrumbContext value={breadCrumb}>
        <BreadCrumbDispatchContext value={dispatch}>
          {children}
        </BreadCrumbDispatchContext>
      </BreadCrumbContext>
    
  );

}

/**
 *   Custom Hooks
 * */

export function useBreadCrumb() {
  return useContext(BreadCrumbContext);
}

export function useBreadCrumbDispatch() {
  return useContext(BreadCrumbDispatchContext);
}
