const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.key-container');
const messageDisplay = document.querySelector('.message-container');


// const songBirb = 'ROBIN';

let birds = [
    'ROBIN',
    'SNIPE',
    'WRENS',
  ];
  
  
const songBirb = birds[Math.floor(Math.random() * birds.length)];

const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '«'];

const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex);
    guessRow.forEach((guess, guessIndex) => {
        const tileElement = document.createElement('div');
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex);
        tileElement.classList.add('tile');
        rowElement.append(tileElement);
    })
    tileDisplay.append(rowElement);
});

keys.forEach(key => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = key;
    buttonElement.setAttribute('id', key);
    buttonElement.addEventListener('click', () => handleClick(key));
    keyboard.append(buttonElement);
});

const handleClick = (letter) => {
    console.log('clicked', letter);
    if (letter === '«') {
        deleteLetter();
        return;
    }
    if (letter === 'ENT') {
        checkRow();
        return;
    }
    addLetter(letter);
};

const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = letter;
        guessRows[currentRow][currentTile] = letter;
        tile.setAttribute('data', letter);
        currentTile++;
        console.log('guessRows', guessRows);
    }
}

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = "";
        guessRows[currentRow][currentTile] = '';
        tile.setAttribute('data', '');
    }
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('');
    if (currentTile > 4) {
        console.log('guess is ' + guess, 'songBirb is ' + songBirb);
        flipTile();
        if (songBirb == guess) {
            showMessage ('Magnificent!');
            isGameOver = true;
            return;
        } else {
            if (currentRow >= 5) {
                isGameOver = false;
                showMessage('Game Over');
                return;
            }
            if (currentRow < 5) {
                currentRow++;
                currentTile = 0;

            }
        }
    }
}

const showMessage = (message) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageDisplay.append(messageElement);
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
}

const addColorToKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter);
    key.classList.add(color);
}


const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;
    let checkSongBirb = songBirb;
    const guess = [];
   
    rowTiles.forEach(tile => {
        guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
    })

guess.forEach((guess, index) => {
    if (guess.letter == songBirb[index]) {
        guess.color = 'green-overlay';
        checkSongBirb = checkSongBirb.replace(guess.letter, '');
    }
})


guess.forEach(guess => {
    if (checkSongBirb.includes(guess.letter)) {
        guess.color = 'yellow-overlay';
        checkSongBirb = checkSongBirb.replace(guess.letter, '');
    }
})


    rowTiles.forEach((tile, index) => {
       const dataLetter = tile.getAttribute('data');
        setTimeout(() => {
            tile.classList.add(guess[index].color);
            addColorToKey(guess[index].letter, guess[index].color);
        }, 500 * index)    
    })
}
