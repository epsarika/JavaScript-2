let number = 0
const numberdisplay = document.querySelector('#display')

const increasebutton = document.querySelector('#increase')
const decreasebutton = document.querySelector('#decrease')
const clearbutton = document.querySelector('#clear')

increasebutton.addEventListener("click", increment)
decreasebutton.addEventListener("click", decrement)
clearbutton.addEventListener("click", clearnumber)

function increment(){
    numberdisplay.innerHTML = ++number
}

function decrement(){
    numberdisplay.innerHTML = --number
}

function clearnumber(){
    number = 0
    numberdisplay.innerHTML = 0
}