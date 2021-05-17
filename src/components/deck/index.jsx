import Counter from "./counter";
import Game from "./game";


function Deck(props) {
    return (
        <main>
            <Counter counter={+props.state[1]}/>
            <Game size={props.state[0]/4} />
        </main>
    )
}
export default Deck;