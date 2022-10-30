/*jshint esversion: 6 */

/*
 * Intro
 */

let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    /*
     * Code to stop intro reloading on game refresh
     */
    // skipIntro will either be null, true or false
    let skipIntro = localStorage.getItem('intro');
    // if it's null, create the entry and set to false
    if (skipIntro == null) {
        skipIntro = false;
        localStorage.setItem('intro', 'false');
    }

    // if skipIntro is false, play the intro
    if (skipIntro == false) {
        console.log("skip intro false, playing intro...")
        setTimeout(() => {
            logoSpan.forEach((span) => {
                span.classList.add('active');
            }, 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                });
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = "-200vh";
        }, 2300);
        // after the intro has played, set it to true so it won't play again
        localStorage.setItem('intro', 'true');
        // if skipIntro is true, we set the display to none on the element
    } else {
        intro.style.display = 'none';
    }
});

/*
 * Modal info overlay
 */

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('modaloverlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null)
        return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null)
        return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

/*
 * Birdsong audio player
 */

const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');

let birdArray = [{
        birdname: 'GOLDCREST',
        birdsong: 'goldcrest'
    },
    {
        birdname: 'BLACKBIRD',
        birdsong: 'blackbird'
    },
    {
        birdname: 'CORNCRAKE',
        birdsong: 'corncrake'
    },
    {
        birdname: 'FIRECREST',
        birdsong: 'firecrest'
    },
    {
        birdname: 'BRAMBLING',
        birdsong: 'brambling'
    },
    {
        birdname: 'FIELDFARE',
        birdsong: 'fieldfare'
    },
    {
        birdname: 'GOLDFINCH',
        birdsong: 'goldfinch'
    },
    {
        birdname: 'BULLFINCH',
        birdsong: 'bullfinch'
    },
    {
        birdname: 'CHAFFINCH',
        birdsong: 'chaffinch'
    }
];

/*
 * Code to select a random bird from array
 */

function getRandomBird() {
    return birdArray[Math.floor(Math.random() * birdArray.length)];
}

const currentBird = getRandomBird();
let songIndex = currentBird.birdsong;

/*
 * Code to select the birdsong from the array
 */

loadSong(currentBird.birdsong);

/*
 * Code to update the song details
 */

function loadSong(song) {
    title.innerText = song;
    audio.src = `assets/audio/${song}.mp3`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = birdArray.length - 1;
    }
    loadSong(currentBird.birdsong);
    playSong();
}

function nextSong() {
    songIndex++;

    if (songIndex > birdArray.length - 1) {
        songIndex = 0;
    }
    loadSong(currentBird.birdsong);
    playSong();
}

function updateProgress(e) {
    const {
        duration,
        currentTime
    } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

//  EVENT LISTENERS

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});


/*
 * Code to change song events
 */

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);


/*
 * SongBirb components
 */

const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.key-container');
const messageDisplay = document.querySelector('.message-container');

let songBirb = currentBird.birdname;

const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '↵', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌦'];

/*
 * Keyboard event listener to get key presses
 */

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('↵').click();
    } else if (event.key === 'Backspace') {
        document.getElementById('⌦').click();
    } else {
        document.getElementById(`${event.key.toUpperCase()}`).click();
    }
});


/*
 * create guess rows, tiles, keyboard
 */

const guessRows = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
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
    });
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
    if (!isGameOver) {
        console.log('clicked', letter);
        if (letter === '⌦') {
            deleteLetter();
            return;
        }
        if (letter === '↵') {
            checkRow();
            return;
        }
        addLetter(letter);
        console.log('guessRows', guessRows);
    }
};

const addLetter = (letter) => {
    if (currentTile < 9 && currentRow < 6) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = letter;
        guessRows[currentRow][currentTile] = letter;
        tile.setAttribute('data', letter);
        currentTile++;
        console.log('guessRows', guessRows);
    }
};

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--;
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = '';
        guessRows[currentRow][currentTile] = '';
        tile.setAttribute('data', '');
    }
};

/*
 * Check if answer is correct
 */

const checkRow = () => {
    const guess = guessRows[currentRow].join('');

    if (currentTile > 8) {
        flipTile();
        if (songBirb == guess) {
            showMessage('Well done! Keep practicing');
            isGameOver = true;
            return;
        } else {
            if (currentRow >= 5) {
                isGameOver = true;
                showMessage(`Correct answer: ${songBirb}`);
                return;
            }
            if (currentRow < 5) {
                currentRow++;
                currentTile = 0;

            }
        }
    }
};

/*
 *  Refresh game after finishing
 */

const showMessage = (message) => {
    const messageElement = document.createElement('p');
    const refreshButton = document.createElement('button');
    messageElement.textContent = message;
    refreshButton.innerHTML = 'Want to try again?';
    messageDisplay.append(messageElement);
    messageElement.append(refreshButton);

    function reloadPage() {
        window.location.reload();
    }
    refreshButton.addEventListener('click', reloadPage);
};

/*
 * Add color to keys
 */

const addColorToKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter);
    key.classList.add(color);
};

/*
 * Tile flip and add color to tiles
 */

const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;
    let checkSongBirb = songBirb;
    const guess = [];

    // GREY OVERLAY

    rowTiles.forEach(tile => {
        guess.push({
            letter: tile.getAttribute('data'),
            color: 'grey-overlay'
        });
    });

    // GREEN OVERLAY

    guess.forEach((guess, index) => {
        if (guess.letter == songBirb[index]) {
            guess.color = 'green-overlay';
            checkSongBirb = checkSongBirb.replace(guess.letter, '');
        }
    });

    // YELLOW OVERLAY

    guess.forEach(guess => {
        if (checkSongBirb.includes(guess.letter)) {
            guess.color = 'yellow-overlay';
            checkSongBirb = checkSongBirb.replace(guess.letter, '');
        }
    });

    // FLIP

    rowTiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('flip');
            tile.classList.add(guess[index].color);
            addColorToKey(guess[index].letter, guess[index].color);
        }, 750 * index);
    });
};