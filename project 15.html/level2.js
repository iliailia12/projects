let health1 = 1000;
let health2 = 1000;

const healthDisplay1 = document.getElementById('health1');
const healthDisplay2 = document.getElementById('health2');

const attack1Button = document.getElementById('attack1');
const attack2Button = document.getElementById('attack2');
const resetButton = document.getElementById('reset');
const heal1Button = document.getElementById('heal1');
const heal2Button = document.getElementById('heal2');

const attackDamage = () => Math.floor(Math.random() * 11) + 5; 

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
    health2 -= attackDamage();
    updateHealth();
};

const player2Attack = () => {
    health1 -= attackDamage();
    updateHealth();
};

const player1Heal = () => {
    health1 = Math.min(1000, health1 + 15); 
    updateHealth();
};

const player2Heal = () => {
    health2 = Math.min(1000, health2 + 15); 
    updateHealth();
};

const resetGame = () => {
    health1 = 1000;
    health2 = 1000;
    updateHealth();
};

attack1Button.addEventListener('click', player1Attack);
attack2Button.addEventListener('click', player2Attack);
resetButton.addEventListener('click', resetGame);
heal1Button.addEventListener('click', player1Heal);
heal2Button.addEventListener('click', player2Heal);


updateHealth();
