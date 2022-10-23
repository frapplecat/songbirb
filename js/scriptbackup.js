// SPLASH INTRO
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span) => {
            span.classList.add('active');
        }, 400)
    });

    setTimeout(() => {
        logoSpan.forEach((span) => {

            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            })
        })
    }, 2000);

    // INTRO SPLASH ANIMATION
    setTimeout(() => {
        intro.style.top = "-200vh"
    }, 2300);
})

// MODAL OVERLAY

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('modaloverlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null)
        return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null)
        return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// AUDIO BUTTONS

const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const btn = document.getElementById('play', 'prev', 'next');


// BIRD SONGS

const songs = ['goldcrest', 'firecrest', 'brambling', 'fieldfare', 'blackbird', 'goldfinch', 'corncrake', 'bullfinch', 'chaffinch'];

// let birdArray = [
//     {birdname: 'GOLDCREST', birdsong: 'goldcrest'},
//     {birdname: 'BLACKBIRD', birdsong: 'blackbird'},
//     {birdname: 'CORNCRAKE', birdsong: 'corncrake'},

// ];

// KEEP TRACK OF SONGS
// let songIndex = [0];

function random_song(songs) {

    return songs[Math.floor(Math.random() * songs.length)];
}

let songIndex = random_song(songs);



// INITIALLY LOAD SONG INTO DOM

// loadSong(songs[songIndex]);
loadSong(random_song(songs));

// UPDATE SONG DETAILS
function loadSong(song) {
    title.innerText = song
    audio.src = `assets/audio/${song}.mp3`;
    // cover.src = `assets/images/audioquestionmarks.svg`
}



function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause')

    audio.pause()
}

function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }
    loadSong(random_song(songs))
    playSong()
}

function nextSong() {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
    loadSong(random_song(songs))
    playSong()
}

function updateProgress(e) {
    const {
        duration,
        currentTime
    } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

//  EVENT LISTENERS

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})


btn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play', 'prev', 'next');
    const birdsong = document.getElementById('title').textContent.toUpperCase;
    console.log(birdsong);
})

// CHANGE SONG EVENTS
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

// audio.addEventListener('ended', nextSong);

// SONGBIRB 

const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.key-container');
const messageDisplay = document.querySelector('.message-container');


// function songTitle() {
//     return document.getElementById('title').textContent.toUpperCase
// }

// const songBirb = document.getElementById('title').textContent.toUpperCase;

let birds = [
    'GOLDCREST',
    'FIRECREST',
    'BRAMBLING',
    'FIELDFARE',
    'BLACKBIRD',
    'GOLDFINCH',
    'CORNCRAKE',
    'BULLFINCH',
    'CHAFFINCH'
];

const songBirb = birds[Math.floor(Math.random() * birds.length)];


const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '↵', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌦'];

// WIRED KEYBOARD LINK TO VIRTUAL KEYBOARD

document.addEventListener('keydown', (event) => {
    const element = document.getElementById(`${event.key.toUpperCase()}`);
    element.click()
});


//  GUESS ROWS 

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
    if (letter === '⌦') {
        deleteLetter();
        return;
    }
    if (letter === '↵') {
        checkRow();
        return;
    }
    addLetter(letter);
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

// CHECK IF ANSWER IS CORRECT

const checkRow = () => {
    const guess = guessRows[currentRow].join('');

    if (currentTile > 8) {
        flipTile();
        if (songBirb == guess) {
            showMessage('Well done!');
            isGameOver = true;
            return;
        } else {
            if (currentRow >= 5) {
                isGameOver = false;
                showMessage('Unlucky, the answer was:');
                return;
            }
            if (currentRow < 5) {
                currentRow++;
                currentTile = 0;

            }
        }
    }
}

// RESET GAME
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

// const showMessage = (message) => {
//     const messageElement = document.createElement('p');
//     messageElement.textContent = message;
//     messageDisplay.append(messageElement);
//     setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
// }

// ADD COLOR TO KEYS

const addColorToKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter);
    key.classList.add(color);
}

// TILE FLIP AND TILE COLOR CHANGE

const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;
    let checkSongBirb = songBirb;
    const guess = [];

    // GREY OVERLAY

    rowTiles.forEach(tile => {
        guess.push({
            letter: tile.getAttribute('data'),
            color: 'grey-overlay'
        })
    })

    // GREEN OVERLAY

    guess.forEach((guess, index) => {
        if (guess.letter == songBirb[index]) {
            guess.color = 'green-overlay';
            checkSongBirb = checkSongBirb.replace(guess.letter, '');
        }
    })

    // YELLOW OVERLAY

    guess.forEach(guess => {
        if (checkSongBirb.includes(guess.letter)) {
            guess.color = 'yellow-overlay';
            checkSongBirb = checkSongBirb.replace(guess.letter, '');
        }
    })

    // FLIP

    rowTiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('flip');
            tile.classList.add(guess[index].color);
            addColorToKey(guess[index].letter, guess[index].color);
        }, 750 * index)
    })
}



// let h4 = document.getElementById('title');
// h4.addEventListener("play", songBirbAnswer);

// function songBirbAnswer() {
//   document.getElementById("title").textContent.toUpperCase;
// }