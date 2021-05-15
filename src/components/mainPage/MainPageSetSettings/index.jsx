import s from "../index.module.scss"
import Script from "./validator"
function Settings(props) {
    const { isErrors, setIsErrors } = props;
    return (
        <form className={s.FormSet}>
            <label htmlFor={"times"}>
            <span>Duration of the game</span>
                <input id={"times"} type={"number"} onBlur={(e)=>Script.Updater(setIsErrors,Script.Validator(e.target.value))}/>
                {isErrors && <span className={s.Error}>Must be greater than 120</span>}
            </label>
            <label htmlFor={"Gtype"}>
                <span>Game type</span>
            <select name={"gameStyle"} id={"Gtype"} defaultValue={"default"}>
                    <optgroup>
                        <option disabled={true} value="default">Number of cards in the deck</option>
                        <option value="52">52 cards</option>
                        <option value="36">36 cards</option>
                        <option value="32" >32 cards</option>
                    </optgroup>
                </select>
            </label>
        </form>
    )
}
export default Settings