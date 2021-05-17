const deck=[]

function makeDeck(size) {
    for (let  i=0; i<size;i++) {
        deck.push({v:6+i,m:"p"})
        deck.push({v:6+i,m:"x"})
        deck.push({v:6+i,m:"b"})
        deck.push({v:6+i,m:"c"})
    }
    return deck
}
module.exports=makeDeck