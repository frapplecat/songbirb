const tileDisplay = document.querySelector('.tilecontainer');
const keyboard = document.querySelector('.key-container');

const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '±', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<<']

const handleClick = () => {
    console.log('clicked');
}

keys.forEach(key =>{
  const buttonElement = document.createElement('button')
  buttonElement.textContent = key;
  buttonElement.setAttribute('id', key);
  buttonElement.addEventListener('click', handleClick);
  keyboard.append(buttonElement);
})