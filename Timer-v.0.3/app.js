const
    displayTimer = document.querySelector('#displayTimer')
    startTimer = document.querySelector('#startTimer')
    pauseTimer = document.querySelector('#pauseTimer')
let stooper

function createTime() {
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

    let intsec = parseInt(sec)
    let intmin = parseInt(min)
    let inthrs = parseInt(hrs)
    let intdays = parseInt(days)
    let intyears = parseInt(years)
    setTimeout(kek, 10)


   var ggggg = ++intsec
    
   var ttttt = setInterval(ggggg, 10)


    console.log(sec, min, hrs, days, years,)
    console.log(intsec, intmin, inthrs, intdays, intyears);

  
var ss = 
    displayTimer.textContent =
        (intyears > 9 ? intyears : '0' + intyears)
        + ':' +
        (intdays > 9 ? intdays : '0' + intdays)
        + ':' +
        (inthrs > 9 ? inthrs : '0' + inthrs)
        + ':' +
        (intmin > 9 ? intmin : '0' + intmin)
        + ':' +
        (intsec > 9 ? intsec : '0' + intsec)
    // console.log(displayTimer, ss)

}

// sec.addEventListener('keyup', () => {
//     createTime()
// })
// sec.addEventListener('click', () => {
//     createTime()
// })


startTimer.addEventListener('click', () => {
    createTime()
    ttttt
    
})

pauseTimer.addEventListener('click', () => {
    icreaseTime()
})

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