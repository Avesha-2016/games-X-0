var gameBox = document.getElementById('game_box');
var playerIndex = 1;
var players = ['O', 'X'];
var resultValues = [];
var winCombin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function isWinning(value) {
    var combination, i, j;

    for (i = 0; i < winCombin.length; i++) {
        combination = winCombin[i];

        for (j = 0; j < combination.length; j++) {
            if (resultValues[combination[j]] != value) break;
        }

        if (j == 3) return true;
    }

    return false;
}

function reset() {
    var i, inputs = gameBox.getElementsByTagName('input');

    // сбрасываем поле в случае безвыигрышной раскладки
    for (i = 0; i < inputs.length; i++) {
        inputs[i].disabled = inputs[i].value = '';
    }

    playerIndex = 1;
    resultValues = [];
}

function resetIfWinnerFound() {
    var i, inputs = gameBox.getElementsByTagName('input');

    // значение ячейки "карты"       
    for (i = 0; i < inputs.length; i++) {
        resultValues[i] = inputs[i].value;
    }

    // выбираем победившего игрока
    for (i = 0; i < players.length; i++) {
        if (isWinning(players[i])) {
            alert('Победил: ' + players[i] + '!');
            reset();
            return;
        }
    }
}

function onClick(sender) {
    sender.disabled = "disabled";
    sender.value = players[playerIndex];

    playerIndex == 1 ? playerIndex-- : playerIndex++;

    resetIfWinnerFound();
}
