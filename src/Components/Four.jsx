import React from "react"
import { useParams } from "react-router-dom"

const Four = () => {
    const { id } = useParams();
    if (isNaN(id)) {
        return(
            <h1>The word is: {id}</h1>
        );
    }else{
        return(
            <h1>The number is: {id}</h1>
        );
    }
    
}
export default Four;