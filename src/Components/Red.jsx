import React from "react"
import { useParams } from "react-router-dom"

const Red = () => {
    const { word, tc, bc } = useParams();
    console.log(word, tc, bc)
        return(
            <h1 style={{"backgroundColor":bc, "color":tc}}>The word is: {word}</h1>
        );
    
    }
export default Red;