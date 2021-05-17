const deck=[]

function makeDeck(size,real) {
    for (let  i=0; i<size;i++) {
        console.log(i);
        deck.push({v:6+i,m:"p"})
        deck.push({v:6+i,m:"x"})
        deck.push({v:6+i,m:"b"})
        deck.push({v:6+i,m:"c"})
    }
    return deck.slice(0,real)
}
module.exports=makeDeck