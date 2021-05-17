import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "../index.module.scss"
import Script from "./validator"
function Settings(props) {
    const { isErrors, setIsErrors, setDarkMode } = props;
    let [state,setState]=useState([])
    return (
        <>
            <form className={s.FormSet} onSubmit={(e) => {
                e.preventDefault();
                setState([e.target.elements.Gtype.value,e.target.elements.times.value])
            }}>
                <label htmlFor={"times"}>
                    <span>Duration of the game</span>
                    <input id={"times"} type={"number"} onBlur={(e) => Script.Updater(setIsErrors, Script.Validator(e.target.value))} />
                    {isErrors && <span className={s.Error}>Must be greater than 120</span>}
                </label>
                <label htmlFor={"Gtype"}>
                    <span>Game type</span>
                    <select name={"gameStyle"} id={"Gtype"} defaultValue={"36"}>
                        <optgroup>
                            <option disabled={true}>Number of cards in the deck</option>
                            <option value="52">52 cards</option>
                            <option value="36">36 cards</option>
                            <option value="32" >32 cards</option>
                        </optgroup>
                    </select>
                </label>
                <label htmlFor={"gameMode"} className={s.gameMode}>
                    <input type={"radio"} value={"true"} name={"mode"} onClick={() => { setDarkMode(true) }} /><span>Dark Mode</span>
                </label>
                <label htmlFor={"gameMode"} className={s.gameMode}>
                    <input type={"radio"} value={"false"} name={"mode"} onClick={() => { setDarkMode(false) }} /><span>Light Mode</span>
                </label>
                <button type="submit">Play</button>
            </form>
            <NavLink to={{ pathname: "/game",state:state}} >Start game</NavLink>
        </>
    )
}
export default Settings