const proEl = document.getElementById("profession");
const firstEl = proEl.firstElementChild;
const lastEl = proEl.lastElementChild;
const professions = ["Graphic Designer", "Motion Graphics", "3D Modeling"];
let professionsIdx = 0;
let firstWord = "";
let firstWordIndex = 0;
let secondWord = "";
let secondWordIndex = 0;

setNextWord();
showNextLetter();

setInterval(() => {
    showNextLetter();
}, 500);

function setNextWord() {
    const words = professions[professionsIdx].split(" ");
    firstWord = words[0];
    secondWord = words[1];
    firstWordIndex = 0;
    secondWordIndex = 0;
}

function showNextLetter() {
    if (firstWordIndex <= firstWord.length) {
        firstEl.innerText = firstWord.substr(0, firstWordIndex);
        firstWordIndex++;
    } else if (secondWordIndex <= secondWord.length) {
        lastEl.innerText = secondWord.substr(0, secondWordIndex);
        secondWordIndex++;
    } else {
        ++professionsIdx;
        professionsIdx =
            professionsIdx >= professions.length ? 0 : professionsIdx;
        setNextWord();
        firstEl.innerText = "";
        lastEl.innerText = "";
    }
}