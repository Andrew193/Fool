import s from "./index.module.scss"
import { useEffect, useState } from "react";
import Script from "./deck"
import MakeDeck from "./makeCards";
function Game(props) {
    const [deck,setDeck]=useState([])
    useEffect(()=>{
        setDeck(Script.makeDeck(props.size||9))
    },[props.size])
    console.log(deck);
    return(
        <div className={s.GamePlace}>
            <MakeDeck deck={deck} setFlag={props.setFlag} setSelected={props.setSelected}/>
        </div>
    )
}
export default Game;