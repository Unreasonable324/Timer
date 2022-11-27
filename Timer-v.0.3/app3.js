const time = document.querySelector('#time')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const reset = document.querySelector('#reset')
const circle = document.querySelector('#circle')
let sec = document.querySelector('#secTimer').value
let min = document.querySelector('#minTimer').value
let hrs = document.querySelector('#hrsTimer').value
let days = document.querySelector('#daysTimer').value
let years = document.querySelector('#yearsTimer').value
if (sec == '') {
    sec = 0
} if (min == '') {
    min = 0
} if (hrs == '') {
    hrs = 0
} if (days == '') {
    days = 0
} if (years == '') {
    years = 0
}

 sec = 4
 min = 0
 hrs = 0
days = 0
 years = 0
var stopper;

let intsec = parseInt(sec)
let intmin = parseInt(min)
let inthrs = parseInt(hrs)
let intdays = parseInt(days)
let intyears = parseInt(years)
let t = null;

function increaseTime() {
    ++mlsec
    if (mlsec >= 100) {
        mlsec = 0
        ++sec
        if (sec >= 60) {
            sec = 0
            ++min
            if (min >= 60) {
                min = 0
                ++hrs
                if (hrs >= 24) {
                    hrs = 0
                    ++day
                    if (day >= 365) {
                        day = 0
                        ++year
                    }
                }
            }
        }
    }
}

function display() {
    increaseTime()
    time.textContent =
        (year > 9 ? year : '0' + year)
        + ':' +
        (day > 9 ? day : '0' + day)
        + ':' +
        (hrs > 9 ? hrs : '0' + hrs)
        + ':' +
        (min > 9 ? min : '0' + min)
        + ':' +
        (sec > 9 ? sec : '0' + sec)
        + '.' +
        (mlsec > 9 ? mlsec : '0' + mlsec);
}

function timer() {
    if (t == null) {
        t = setInterval(display, 10)
    }
}

function createScore() {
    const score = document.createElement('li')
    score.classList.add('score')
    score.id = ('aaa')
    ol.prepend(score)
    score.textContent =
        (year > 9 ? year : '0' + year)
        + ':' +
        (day > 9 ? day : '0' + day)
        + ':' +
        (hrs > 9 ? hrs : '0' + hrs)
        + ':' +
        (min > 9 ? min : '0' + min)
        + ':' +
        (sec > 9 ? sec : '0' + sec)
        + '.' +
        (mlsec > 9 ? mlsec : '0' + mlsec);
}

let ol = document.querySelector('#ol')
// let li = document.querySelector('#aaa')
function deleteLI() {
// все три метода работают
// 1    ol.innerHTML = ''

/*2*/    while (ol.firstChild) {
        ol.removeChild(ol.lastChild)
    }

    // 3    ol.querySelectorAll('*').forEach((n) => n.remove())
}

window.onload = () => {

    start.addEventListener('click', () => {
        timer()
        start.style.display = 'none'
        pause.style.display = 'block'
    })

    pause.addEventListener('click', () => {
        if (t != null) {
            clearInterval(t)
            t = null
            createScore()
        }
        pause.style.display = 'none'
        start.style.display = 'block'
    })

    circle.addEventListener('click', () => {
        if (t != null) {
            createScore()
        }
    })

    reset.addEventListener('click', () => {
        if (t != null) {
            clearInterval(t)
            t = null
        }
        time.textContent = `00:00:00:00:00.00`
        mlsec = 0
        sec = 0
        min = 0
        hrs = 0
        day = 0
        year = 0
        deleteLI()
        pause.style.display = 'none'
        start.style.display = 'block'
        console.log(reset);
    })
}
