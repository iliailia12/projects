let health1 = 1000000;
let health2 = 10000000000000;

const healthDisplay1 = document.getElementById('health1');
const healthDisplay2 = document.getElementById('health2');

const attack1Button = document.getElementById('attack1');
const attack2Button = document.getElementById('attack2');
const resetButton = document.getElementById('reset');

const attackDamage = 40000;

const updateHealth = () => {
    healthDisplay1.textContent = health1;
    healthDisplay2.textContent = health2;

    if (health1 <= 0) {
        alert('მოთამაშე 2 მოიგო!');
        resetGame();
    } else if (health2 <= 0) {
        alert('მოთამაშე 1 მოიგო!');
        resetGame();
    }
};

const player1Attack = () => {
    health2 -= attackDamage;
    updateHealth();
};

const player2Attack = () => {
    health1 -= attackDamage;
    updateHealth();
};

const resetGame = () => {
    health1 = 100000000000;
    health2 = 1000000000;
    updateHealth();
};

attack1Button.addEventListener('click', player1Attack);
attack2Button.addEventListener('click', player2Attack);
resetButton.addEventListener('click', resetGame);

updateHealth();
let health11 = 1000000000000000;
let health21 = 1000000000000000;

const healthDisplay11= document.getElementById('health1');
const healthDisplay211= document.getElementById('health2');

const attack1Button1 = document.getElementById('attack1');
const attack2Button1 = document.getElementById('attack2');
const resetButton1 = document.getElementById('reset');

const attackDamage1 = 2;

const updateHealth1 = () => {
    healthDisplay1.textContent = health1;
    healthDisplay2.textContent = health2;

    if (health1 <= 0) {
        alert('მოთამაშე 2 მოიგო!');
        resetGame();
    } else if (health2 <= 0) {
        alert('მოთამაშე 1 მოიგო!');
        resetGame();
    }
};

const player1Attack1 = () => {
    health2 -= attackDamage;
    updateHealth();
};

const player2Attack1 = () => {
    health1 -= attackDamage;
    updateHealth();
};

const resetGame1 = () => {
    health1 = 1000000000000000000000000000000000000000;
    health2 = 100000000000000000000000000;
    updateHealth();
};

attack1Button.addEventListener('click', player1Attack);
attack2Button.addEventListener('click', player2Attack);
resetButton.addEventListener('click', resetGame);


updateHealth();
let health11111 = 100000;
let health21111 = 10000000;

const healthDisplay111111111111111 = document.getElementById('health1');
const healthDisplay2111111111 = document.getElementById('health2');

const attack1Button1111111 = document.getElementById('attack1');
const attack2Button1111111 = document.getElementById('attack2');
const resetButton111111 = document.getElementById('reset');

const attackDamage11111111 = 10;

const updateHealth11111 = () => {
    healthDisplay1.textContent = health1;
    healthDisplay2.textContent = health2;

    if (health1 <= 0) {
        alert('მოთამაშე 2 მოიგო!');
        resetGame();
    } else if (health2 <= 0) {
        alert('მოთამაშე 1 მოიგო!');
        resetGame();
    }
};

const player1Attack111 = () => {
    health2 -= attackDamage;
    updateHealth();
};

const player2Attack111 = () => {
    health1 -= attackDamage;
    updateHealth();
};

const resetGame111 = () => {
    health1 = 100;
    health2 = 100;
    updateHealth();
};

attack1Button.addEventListener('click', player1Attack);
attack2Button.addEventListener('click', player2Attack);
resetButton.addEventListener('click', resetGame);

updateHealth();
let health111 = 10000000;
let health211= 100000;

const healthDisplay1111111111111111 = document.getElementById('health1');
const healthDisplay21 = document.getElementById('health2');

const attack1Button11 = document.getElementById('attack1');
const attack2Button11 = document.getElementById('attack2');
const resetButton11 = document.getElementById('reset');
const heal1Button = document.getElementById('heal1');
const heal2Button = document.getElementById('heal2');

const attackDamage11 = () => Math.floor(Math.random() * 11) + 5; 

const updateHealth11 = () => {
    healthDisplay1.textContent = health1;
    healthDisplay2.textContent = health2;

    if (health1 <= 0) {
        alert('მოთამაშე 2 მოიგო!');
        resetGame();
    } else if (health2 <= 0) {
        alert('მოთამაშე 1 მოიგო!');
        resetGame();
    }
};

const player1Attack11 = () => {
    health2 -= attackDamage();
    updateHealth();
};

const player2Attack11 = () => {
    health1 -= attackDamage();
    updateHealth();
};

const player1Heal = () => {
    health1 = Math.min(100000, health1 + 15); 
    updateHealth();
};

const player2Heal1 = () => {
    health2 = Math.min(100, health2 + 15); 
    updateHealth();
};

const resetGame11 = () => {
    health1 = 1000000;
    health2 = 100000;
    updateHealth();
};

attack1Button.addEventListener('click', player1Attack);
attack2Button.addEventListener('click', player2Attack);
resetButton.addEventListener('click', resetGame);
heal1Button.addEventListener('click', player1Heal);
heal2Button.addEventListener('click', player2Heal);

updateHealth();
