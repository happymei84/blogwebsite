import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PostContainer from "../component/PostContainer";



const Searchingpage = () => {
    const location = useLocation([]);
    const { returnData } = location.state;
  let [inputdata, setdata] = useState([]); //記值的地方
  
  useEffect(()=>{

  },)
    console.log(location.state)
    

  return (
    <div>
        
         <PostContainer inputData={location.state} />
       
      
    </div>
  )
}

export default Searchingpage
