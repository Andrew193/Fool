const deck = []

function makeDeck(size) {
    for (let i = 0; i < size; i++) {
        deck.push({ v: 6 + i, m: "p" })
        deck.push({ v: 6 + i, m: "x" })
        deck.push({ v: 6 + i, m: "b" })
        deck.push({ v: 6 + i, m: "c" })
    }
    return deck.sort(() => 0.5 - Math.random())
}
function makeR(e, s, setFlag, setSelected) {
    const event = e.currentTarget;
    event.children[0].children[0].classList.add(s.r180);
    event.children[0].children[1].classList.add(s.r360);
    setFlag((prev) => prev + 1)
    setSelected((prev) => [...prev, event])
}
function checkVictory(selected, setScore, setCardsCount, s) {
    debugger
    if (Math.round(selected[0].dataset.value) === Math.round(selected[1].dataset.value)) {
        setScore(Math.round(selected[0].dataset.value));
        setCardsCount((prev) => prev - 2);
        selected[0].classList.add(s.correct)
        selected[1].classList.add(s.correct)
    } else {
        const item1 = selected[0].children[0];
        const item2 = selected[1].children[0]
        makeWrong(item1.children[1], s)
        makeWrong(item2.children[1], s)
        setTimeout(() => {
            item1.children[0].classList.remove(s.r180);
            item1.children[1].classList.remove(s.r360);
            item2.children[0].classList.remove(s.r180);
            item2.children[1].classList.remove(s.r360);
            makeWrong(item1.children[1], s)
            makeWrong(item2.children[1], s)
        }, 1000)
    }
}
function makeWrong(item, s) {
    item.classList.toggle(s.wrong)
}
function getMult(value, predictor) {
    switch (predictor) {
        case "p":
            return Math.round(value * 1.05);
        case "x":
            return Math.round(value * 1.15);
        case "b":
            return Math.round(value * 1.20);
        case "c":
            return Math.round(value * 1.50);

        default:
            return value;
    }
}
export default{ makeDeck: makeDeck, makeR: makeR, checkVictory: checkVictory, getMult: getMult }
