import { useEffect, useState } from "react";

function Counter(props) {
    let [counter, setCounter] = useState(props.counter)
    useEffect(() => {
        if (counter > 0) {
            const id = setInterval(() => {
                setCounter((r) => r - 1)
                clearInterval(id)
            }, 1000)
        } else alert("Stop")
    })
    return(
        <h1>You have {(counter / 60).toFixed(1)} minutes to play</h1>
    )
}

export default Counter;