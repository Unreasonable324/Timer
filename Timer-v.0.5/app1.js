const start = document.getElementById('start')
const pause = document.getElementById('pause')
const reset = document.getElementById('reset')
const sec = document.getElementById('sec')
const min = document.getElementById('min')
const hrs = document.getElementById('hrs')
const timeSec = document.getElementById('timeSec')
const timeMin = document.getElementById('timeMin')
const timeHrs= document.getElementById('timeHrs')

var intsec = parseInt(sec.value)
var intmin = parseInt(min.value)
var inthrs = parseInt(hrs.value)

let interval
timeSec.textContent = 0
timeMin.textContent = 0
timeHrs.textContent = 0
intsec = 0
intmin= 0
inthrs = 0


function substractTime() {
    if (sec.value> 0){
        sec.value--
    if (sec.value <= 0) {
        if (intmin >0){
            sec.value= 59
            intmin--
        if (intmin<= 0 ) {
            if (inthrs>0){
                intmin = 59
                inthrs--
            if(inthrs <= 0){
                inthrs = 0
            }

        }

    }}}}

}


// }

start.addEventListener('click', () => {
    timeSec.textContent =
    (inthrs > 9 ? inthrs : '0' + inthrs)
    + ':' +
    (intmin > 9 ? intmin : '0' + intmin)
    + ':' +
    (sec.value> 9 ? sec.value : '0' + sec.value)
    clearInterval(interval)
    interval = setInterval(substractTime, 100)
    console.log(intsec, intmin, inthrs, intdays, intyears);
})