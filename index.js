const black = document.querySelector('#black')
const white = document.querySelector('#white')
const green = document.querySelector('#green')
const buttons = document.querySelector('#buttons')
const body = document.querySelector('body')

black.onclick = () => {
    if(buttons.style.background === 'indigo') {
        alert('Бро, уже и так чёрная тема')
    } else {
        buttons.style.background = 'indigo'
        buttons.style.borderColor = 'white'
        body.style.background = 'black'
        body.style.color = 'white'
        body.style.fontFamily = 'Yanone Kaffeesatz', sans-serif
    }
}
white.onclick = () => {
    if(buttons.style.background === 'lightgray') {
        alert('Бро, уже и так белая тема')
    } else {
        buttons.style.background = 'lightgray'
        buttons.style.borderColor = 'rosybrown'
        body.style.background = 'white'
        body.style.color = 'black'
        body.style.fontFamily = 'Lobster', cursive
    }
}

green.onclick = () => {
    if(buttons.style.background === 'greenyellow') {
        alert('Бро, уже и так зелёная тема')
    } else {
        buttons.style.background = 'greenyellow'
        buttons.style.borderColor = 'gold'
        body.style.background = 'green'
        body.style.color = 'black'
        body.style.fontFamily = 'Roboto Slab', serif
    }
}