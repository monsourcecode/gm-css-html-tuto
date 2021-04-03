function sum() {
    var number1 = document.getElementById('input1').value
    var number2 = document.getElementById('input2').value
    var res = Number(number1) + Number(number2)
    document.getElementById('res').innerHTML = res
}

function sub() {
    var number1 = document.getElementById('input1').value
    var number2 = document.getElementById('input2').value
    var res = Number(number1) - Number(number2)
    document.getElementById('res').innerHTML = res
}

function mul() {
    var number1 = document.getElementById('input1').value
    var number2 = document.getElementById('input2').value
    var res = Number(number1) * Number(number2)
    document.getElementById('res').innerHTML = res
}

function div() {
    var number1 = document.getElementById('input1').value
    var number2 = document.getElementById('input2').value
    var test = Number(number2) === 0;
    if (test === true) {
        alert('Division par 0')
    }
    var res = Number(number1) / Number(number2)
    document.getElementById('res').innerHTML = res
}

function logical() {
    true && true //true
}
