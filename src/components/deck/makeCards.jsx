import s from "./index.module.scss"
import Script from "./deck"
function MakeDeck(props) {
    return (<>
        {props.deck.map((value, index) => {
            return (<div key={index+"d"} className={s.card_cantainer} data-value={Script.getMult(value.v,value.m)}
            onClick={(e)=>{Script.makeR(e,s,props.setFlag,props.setSelected)}}>
            <div className={s.card}>
              <div className={s.front_side}><span>Maybe this one?</span></div>
              <div className={s.back_side}><span>{Script.getMult(value.v,value.m)}</span></div>
            </div>
          </div>)
        })}
    </>)
}
export default MakeDeck;