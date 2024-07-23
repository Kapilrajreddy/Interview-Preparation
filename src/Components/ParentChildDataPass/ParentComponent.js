import { useState } from "react"
import ChildComponent from "./ChildComponent"

const ParentComponent=()=>{

    const [dataFromChild,setDataFromChild] = useState("ram")

    const handleData=(data)=>{
        setDataFromChild(data)
    }

    return (
      <div>
        <h1>Parent Component</h1>
        <p>{dataFromChild}</p>
        <ChildComponent handleData={handleData} />
      </div>
    );
}

export default ParentComponent