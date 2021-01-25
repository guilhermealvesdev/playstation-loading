const symbols = [
    {symbol: "square", character:"&#x25A1;"},
    {symbol: "circle", character:"&#x25CB;"},
    {symbol: "triangle", character:"&#x25B3;"},
    {symbol: "x", character: "&times;"}
];

const symbolsElements = document.querySelectorAll('.symbol');

[...symbolsElements].forEach(item => {
    item.addEventListener('animationiteration', () => {
        if (item.classList.contains("in")) {
            item.classList.remove("in");
        } else {
            const random = getRandomInt(0, symbols.length - 1);

            item.classList.add("in");
            item.classList.remove("square", "circle", "triangle", "x");
            item.classList.add(symbols[random].symbol);
            item.innerHTML = symbols[random].character;
        }
    });
})

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}