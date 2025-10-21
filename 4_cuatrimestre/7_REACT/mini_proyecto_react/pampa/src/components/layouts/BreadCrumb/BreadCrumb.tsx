/* 
  BreadCrumb.tsx
*/

/* Dependencies  */
import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */
//import type {NewsProps} from "../types/newsProps";

/* Hooks */
  import { useBreadCrumb,useBreadCrumbDispatch} from '../../../contexts/breadCrumb-context';

/* Components */

/* styles */

const BreadCrumbs = () => {

  const [main, setMain] = useState([]);
  const breadCrumb = useBreadCrumb(); 
  const dispatch = useBreadCrumbDispatch();

  useEffect(()=>{
    //const breadCrumb = "";
    //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
    console.log("BreadCrums: "+ JSON.stringify(breadCrumb));
    // if (props.data.hasOwnProperty("d")){//object
    //     /*only one*/
    //     //  console.log("Object");
    //     setMain(props.data);
    //     setState(data_0);
    // }
    if( breadCrumb && breadCrumb.hasOwnProperty("breadCrumbs") )
      setMain(breadCrumb.breadCrumbs);
  }
  );// on mount and change

  const handleClickBreadCrumb=()=>{
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  const Display=()=>{

    function chainPath(total, value, index, array) {
      return total + value;
    } 
    let path:string="";
    return  main.map((item,index,array)=>(
                <a key={"breadcrumb-"+item.index}
                   href={
                    (index==0)?
                      ((path=item.path)?item.path:"")
                      :
                      ((path=path+"/"+array[index-1].id+item.path)?path:"")
                   }
                   className="breadcrumb"
                   onClick={handleClickBreadCrumb}
                   >{item.text}</a>
            ));
  }


  return (
    <>
      <Display/>
    </>
  );
}

export default BreadCrumbs;