import { useState } from "react";
import s from "./index.module.scss"
import Settings from "./MainPageSetSettings";



function MainPageContainer() {
    const [isErrors,setIsErrors]=useState(false)
    return(
        <main className={s.Container}>
            <h1>Select game settings</h1>
            <Settings isErrors={isErrors} setIsErrors={setIsErrors}/>
        </main>
    )
}
export default MainPageContainer;