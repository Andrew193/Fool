import Counter from "./counter";
import Game from "./game";
import s from "../mainPage/index.module.scss"
import styles from "./index.module.scss"
import { useEffect, useState } from "react";
import Script from "./deck"
function Deck(props) {
    const [flag, setFlag] = useState(0)
    const [selected, setSelected] = useState([])
    const [score, setScore] = useState(0)
    const [cardsCount, setCardsCount] = useState(+props.state[0] || 1)
    const [isWin, setIsWin] = useState(false)
    useEffect(() => {
        if (flag === 2 && cardsCount > 0 && flag !== 0) {
            Script.checkVictory(selected, setScore, setCardsCount, styles)
            setSelected([])
            setFlag(0)
        }
        if(cardsCount===0)
        setIsWin(true)
    }, [flag, cardsCount, selected])
    return (
        <main className={props.DarkMode ? s.Container + " DarkMode" : s.Container}>
            <>
                {isWin && <aside className={styles.tip}>
                    <h3>Game is over. Total score: {score}</h3>
                </aside>}
            </>
            <h2  style={{textAlign:"end"}}>Total score: {score}</h2>
            <Counter counter={+props.state[1]} />
            <Game size={props.state[0] / 4} setFlag={setFlag} setSelected={setSelected} />
        </main>
    )
}
export default Deck;