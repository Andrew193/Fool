import { useEffect, useState } from "react";
import makeDeck from "./deck"


function Deck(props) {
    let [counter, setCounter] = useState(+props.state[1])
    const deck = makeDeck(+props.state[0]/4,+props.state[0])
    // useEffect(() => {
    //     if (counter > 0) {
    //         const id = setInterval(() => {
    //             setCounter((r) => r - 1)
    //             clearInterval(id)
    //         }, 1000)
    //     }
    // })
    return (
        <main>
            <h1>You have {(counter / 60).toFixed(1)} minutes to play</h1>
        </main>
    )
}
export default Deck;