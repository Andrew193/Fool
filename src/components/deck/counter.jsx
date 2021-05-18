import { useEffect, useState } from "react";

function Counter(props) {
    let [counter, setCounter] = useState(props.counter||120)
    useEffect(() => {
        if (counter > 0) {
            const id = setInterval(() => {
                setCounter((r) => r - 1)
                clearInterval(id)
            }, 1000)
        }
    })
    return(
        <h1>You have {(counter / 60).toFixed(1)} minutes to win</h1>
    )
}

export default Counter;