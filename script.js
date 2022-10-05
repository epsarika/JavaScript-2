const add = () =>
{
    const numberInput1 = document.getElementById("number1")
    const numberInput2 = document.getElementById("number2")    
    const myParagraph = document.getElementById("display")
    const number1 = Number(numberInput1.value)
    const number2 = Number(numberInput2.value)

    myParagraph.innerHTML = number1+number2
}

const sub = () =>
{
    const numberInput1 = document.getElementById("number1")
    const numberInput2 = document.getElementById("number2")    
    const myParagraph = document.getElementById("display")
    const number1 = Number(numberInput1.value)
    const number2 = Number(numberInput2.value)

    myParagraph.innerHTML = number1-number2
}

const multi = () =>
{
    const numberInput1 = document.getElementById("number1")
    const numberInput2 = document.getElementById("number2")    
    const myParagraph = document.getElementById("display")
    const number1 = Number(numberInput1.value)
    const number2 = Number(numberInput2.value)

    myParagraph.innerHTML = number1*number2
}

const div = () =>
{
    const numberInput1 = document.getElementById("number1")
    const numberInput2 = document.getElementById("number2")    
    const myParagraph = document.getElementById("display")
    const number1 = Number(numberInput1.value)
    const number2 = Number(numberInput2.value)

    myParagraph.innerHTML = number1/number2
}
