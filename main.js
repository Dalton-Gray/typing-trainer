letters = "qwertyuiopasdfghjklzxcvbnm";
symbolBank = letters.split("");
target = symbolBank[Math.floor(Math.random()*symbolBank.length)];

function setUp() {
    document.getElementById("target-symbol").textContent = target;
}

function incorrect() {
    currentVal = parseInt(document.getElementById("incorrect").textContent);
    document.getElementById("incorrect").textContent = currentVal +1;
}

function correct() {
    currentVal = parseInt(document.getElementById("correct").textContent);
    document.getElementById("correct").textContent = currentVal +1;
}


function checkAnswer(target, answer) {
    return target == answer;
}
function updateTargetHtml(target) {
    document.getElementById("target-symbol").textContent = target;
}
function clearInput() {
    document.getElementById("input").value = '';
}



function nextSymbol() {
    answer = document.getElementById("input").value
    console.log("answer & target before check: ", answer, target);
    console.log("answer before check: ", answer);
    if (checkAnswer(target, answer)) {
        correct();
        target = symbolBank[Math.floor(Math.random()*symbolBank.length)];
        updateTargetHtml(target);
        console.log("updated target: ", target);
    } else {
        incorrect();
    }
    clearInput();
    console.log(target);
}