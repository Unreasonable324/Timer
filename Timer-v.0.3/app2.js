var sec = document.querySelector('#secTimer')
var min = document.querySelector('#minTimer').value
var hrs = document.querySelector('#hrsTimer').value
var days = document.querySelector('#daysTimer').value
var years = document.querySelector('#yearsTimer').value
displayTimer = document.querySelector('#displayTimer')
var sec = 0
var min = 0
var hrs = 0
var days = 0
var years = 0
var stopper;
let t = null;

var startTimer = document.querySelector('#startTimer')

var createTime = function () {
    // clearTimeout(stopper)
    var intsec = parseInt(sec.value)
    var intmin = parseInt(min.value)
    var inthrs = parseInt(hrs.value)
    var intdays = parseInt(days.value)
    var intyears = parseInt(years.value)

 console.log(setTime(intsec));
}

function hh () {
 
        ++intsec
        if (intsec >= 60) {
            intsec = 0
            ++intmin
            if (intmin >= 60) {
                itnmin = 0
                inthrs
}}}

function display(){
    hh()
    displayTimer.textContent = 
    (inthrs > 9 ? inthrs : '0' + inthrs)
    + ':' +
    (intmin > 9 ? intmin : '0' + intmin)
    + ':' +
    (intsec > 9 ? intsec : '0' + intsec)
}

startTimer.addEventListener('click', () => {
    timer()
    
})
function timer() {
    // if (t == null)
     {
        t = setInterval(display, 10)
    }
}

function enforceMinMax(el) {
    if (el.value != "") {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
    }
}