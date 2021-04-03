function testObjects() {
    var personne = {
        firstName: 'Ahmed',
        lastName: 'test',
        age: 20,
        birthDate: '12-10-2001',
        address: {
            city: 'ALger',
            country: 'Algérie'
        },
        isHappy: true,
    }
    var h1 = document.getElementById('btn')
    h1.innerHTML = 'firstName : ' + personne.firstName + ' lastname :' + personne.lastName
    console.log(personne)
}


function ifelse() {
    var a = '11'
    switch (a) {
        case  '2' :
            alert(2)
            break;
        case '6':
            alert(6)
            break;
        case '10':
            alert(10)
            break;
        default:
            alert(30)


    }
}

function whileBoucle() {
    var tab = [10, 20, 31, 40, 50]
    var all = document
        .getElementById('all')
    var i = 0;
    while (i < 5) {
        var h2 = document.createElement('h2');
        h2.innerHTML = 'titre ' + tab[i]
        all.appendChild(h2)
        i++;
    }

}


function forboucle() {
    var tab = [10, 20, 31, 40, 50]
    var all = document
        .getElementById('all')

    for (var i = 0; i < tab.length - 1; i = i + 1) {
        var h2 = document.createElement('h2');
        h2.innerHTML = 'titre ' + tab[i + 1]
        all.appendChild(h2)
    }

}


function test() {
    var button = document
        .getElementById('btn')
    var a = 3;
    var b = 5;
    var c = 10
    var cdt = a > b && a < c || a <= 3
    if (cdt) {
        button.style.color = 'red'
        button.innerHTML = 'True'
    } else {
        button.style.color = 'blue'
        button.innerHTML = 'False'
    }

}
