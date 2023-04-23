letters = "qwertyuiopasdfghjklzxcvbnm";
symbolBank = letters.split("");
target = symbolBank[Math.floor(Math.random()*symbolBank.length)];


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
    // window.alert("test");
    answer = document.getElementById("input").value
    console.log(answer);
    if (checkAnswer(target, answer)) {
        correct();
    } else {
        incorrect();
    }
    target = symbolBank[Math.floor(Math.random()*symbolBank.length)];
    updateTargetHtml(target)
    clearInput()
    console.log(target);
}