const truthOrDare = document.getElementById("truthOrDare");
const players = document.getElementById("players");
const truthDareBox = document.getElementById("truthDareBox");
let getNumber;
let currentPlayer = 0;

let playerNumber = document.getElementById("playerNumber");

function getPlayers() {
    let q1 = prompt("How many players?");
    if (q1 == "") {
        getPlayers();
    } else {
        try {
            getNumber = parseInt(q1);
            if (isNaN(getNumber)) {
                alert("Write a number!")
                getPlayers();
            }
        } catch (err) {
            alert("Write a number!")
            getPlayers();
        }
    }

    setPlayers(getNumber);
}

let allPlayers = [];

function setPlayers(number) {
    for (var i = 0; i < number; i++) {
        allPlayers[i] = { points: 0 };
        players.innerHTML += `<p>Player ${i+1}: <span id="player${i+1}">${allPlayers[i].points}</span></p>`;
    }

}

getPlayers();




let truth = [
    "Have you peed in a pool?",
    "If you could have anything in the world, what would it be?",
    "What is one annoying habit of each person in the roomr",
    "What is the strangest dream you ever had?."
]

let dare = [
    "Eat a spoon full of mustard.",
    "Stand on your head for 10 seconds.",
    "Do a crab-walk across the room.",
    "Peel a banana using your feet."
]

const getTruth = () => {
    let randomNumber = Math.floor(Math.random() * truth.length);
    truthDareBox.style.display = "block";
    truthOrDare.innerHTML = truth[randomNumber];
    playerNumber.innerHTML = currentPlayer +1;
}

const getDare = () => {
    let randomNumber = Math.floor(Math.random() * dare.length);
    truthDareBox.style.display = "block";
    truthOrDare.innerHTML = dare[randomNumber];
    playerNumber.innerHTML = currentPlayer +1;


}

const didnt = () => {
    truthDareBox.style.display = "none";

    nextPLayer();
}

const did = () => {
    truthDareBox.style.display = "none";
    allPlayers[currentPlayer].points++;
    players.innerHTML = "";
    for (var i = 0; i < getNumber; i++) {
        players.innerHTML += `<p>Player ${i+1}: <span id="player${i+1}">${allPlayers[i].points}</span></p>`;
    }
    nextPLayer();
}

const nextPLayer = () => {
    if (currentPlayer < getNumber) {
        currentPlayer++;
        if (currentPlayer == getNumber) {
            currentPlayer = 0;
        }
    } else {
        currentPlayer = 0;
    }
}