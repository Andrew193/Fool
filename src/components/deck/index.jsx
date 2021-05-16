import { useEffect } from "react";



function Deck(props) {
    let {times,Gmode}=props;
    console.log(times,Gmode,"fds");
    const deck=new Array(Gmode)
    // useEffect(()=>{
    //    times>0? (times-=1):alert("That is all")
    // },[times])
    return(
        <main>
            <h1>{times}</h1>
        </main>
    )
}
export default Deck;