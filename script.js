const teamScoreEl = document.getElementById('team-score');
const oversEl = document.getElementById('overs');
const player0El = document.getElementById('player-0');
const player1El = document.getElementById('player-1');
const score0El = document.getElementById('score-0');
const score1El = document.getElementById('score-1');
const statusMessageEl = document.getElementById('status-message');
const buttonsContainer = document.querySelector('.buttons-container');
const switchStrikerBtn = document.getElementById('switch-striker');
const resetBtn = document.getElementById('reset');

let teamScore, wickets, overs, balls, strikerIndex, isFreeHit;
let players;

function initializeState() {
    teamScore = 0;
    wickets = 0;
    overs = 0;
    balls = 0;
    strikerIndex = 0; 
    isFreeHit = false;
    players = [
        { name: "Rahul", score: 0 },
        { name: "Rohit", score: 0 }
    ];
    updateDisplay();
    enableButtons();
    statusMessageEl.textContent = 'Match Started!';
    statusMessageEl.className = 'status';
}
function updateDisplay() {
    teamScoreEl.textContent = `${teamScore}/${wickets}`;
    oversEl.textContent = `${overs}.${balls} Overs`;

    score0El.textContent = players[0].score;
    score1El.textContent = players[1].score;

    if (strikerIndex === 0) {
        player0El.classList.add('striker');
        player1El.classList.remove('striker');
        score0El.textContent += '*';
    } else {
        player1El.classList.add('striker');
        player0El.classList.remove('striker');
        score1El.textContent += '*';
    }

    if (isFreeHit) {
        statusMessageEl.textContent = 'FREE HIT';
        statusMessageEl.classList.add('free-hit');
    } else {
        statusMessageEl.textContent = '';
        statusMessageEl.classList.remove('free-hit');
    }

    if (wickets >= 10) {
        statusMessageEl.textContent = 'Innings Over!';
        disableButtons();
    }
}


function handleValidDelivery() {
    if (isFreeHit) {
        isFreeHit = false; 
        return;
    }
    balls++;
    if (balls >= 6) {
        balls = 0;
        overs++;
        switchStriker();
    }
}


function switchStriker() {
    strikerIndex = 1 - strikerIndex; 
}

function handleEvent(event, value) {
    if (wickets >= 10) return; 

    switch(event) {
        case 'run':
            const runs = Number(value);
            teamScore += runs;
            players[strikerIndex].score += runs;
            if (runs % 2 !== 0) {
                switchStriker();
            }
            handleValidDelivery();
            break;

        case 'wicket':
        case 'lbw':
            if (isFreeHit) {
                isFreeHit = false;
                break;
            }

 
            const outPlayerIndex = strikerIndex;
            players[outPlayerIndex].score = 0;

            wickets++;
            strikerIndex = 0; 
            handleValidDelivery();
            break;

        case 'wide':
            teamScore += 1;
            break;

        case 'noball':
            teamScore += 1;
            players[strikerIndex].score += 1; 
            isFreeHit = true; 
            break;

        case 'freehit':
            teamScore += 1;
            isFreeHit = true; 
            break;

        case 'bye':
        case 'legbye':
            teamScore += 1;
            handleValidDelivery();
            break;
    }
    updateDisplay();
}

function disableButtons() {
    buttonsContainer.querySelectorAll('.btn').forEach(btn => btn.disabled = true);
}
function enableButtons() {
    buttonsContainer.querySelectorAll('.btn').forEach(btn => btn.disabled = false);
}
buttonsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('btn')) {
        const eventType = target.dataset.event;
        const eventValue = target.dataset.value;
        handleEvent(eventType, eventValue);
    }
});
switchStrikerBtn.addEventListener('click', () => {
    if (wickets < 10) {
        switchStriker();
        updateDisplay();
    }
});
resetBtn.addEventListener('click', initializeState);
initializeState();