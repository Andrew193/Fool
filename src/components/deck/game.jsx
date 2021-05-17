
import { useEffect, useState } from "react";
import makeDeck from "./deck"
function Game(props) {
    const [deck,setDeck]=useState([])
    useEffect(()=>{
        setDeck(makeDeck(props.size))
    },[])
    return(
        <div>

        </div>
    )
}
export default Game;