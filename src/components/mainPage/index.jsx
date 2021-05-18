import { useState } from "react";
import s from "./index.module.scss"
import Settings from "./MainPageSetSettings";



function MainPageContainer(props) {
    const {DarkMode,setDarkMode}=props
    const [isErrors,setIsErrors]=useState(false)
    return(
        <main className={DarkMode?s.Container+" DarkMode":s.Container}>
            <h1>Select game settings</h1>
            <Settings isErrors={isErrors} setIsErrors={setIsErrors} setDarkMode={setDarkMode}/>
        </main>
    )
}
export default MainPageContainer;