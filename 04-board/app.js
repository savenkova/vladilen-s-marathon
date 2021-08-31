const board = document.querySelector('#board')
const colors = ['#AEDFF2', '#59C1D9', '#658C2A', '#BFAE56', '#BFA893', '#8C7A79']
const SQUARES_NUMBER = 255

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}`
}

function removeColor(element) {
    element.style.background = '#fdfcf8'
    element.style.boxShadow = `0 0 2px #A9A9A8;`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}