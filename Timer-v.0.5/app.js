const start = document.getElementById('start')
const pause = document.getElementById('pause')
const reset = document.getElementById('reset')
const sec = document.getElementById('sec')
const min = document.getElementById('min')
const hrs = document.getElementById('hrs')
const timeSec = document.getElementById('timeSec')
const timeMin = document.getElementById('timeMin')
const timeHrs = document.getElementById('timeHrs')

let interval
timeSec.innerHTML = 0
timeMin.innerHTML =0
timeHrs.innerHTML = 0

// if (timeSec.innerHTML <= 9) {
//     timeSec.innerHTML = '0' + timeSec.innerHTML
//     if (timeMin.innerHTML <= 9) {
//         timeMin.innerHTML = '0' + timeMin.innerHTML
//         if (timeHrs.innerHTML <= 9) {
//             timeHrs.innerHTML = '0' + timeHrs.innerHTML
//         }
//     }
// }
sec.value = 0
min.value = 0
hrs.value = 0
// var st
// sec.addEventListener('sec', function () {
//     st = sec.value + " "
//     if (st.length == 1) {
//         sec.value = '0' + sec.value
//     } else {
//         sec.value = '' + sec.value
//     }
// })
// sec.value < 9 ? sec.value : '0' + sec.value
function substractTime() {

 if (timeSec.innerHTML >= -1) {
        timeSec.innerHTML--
        // if (0 >= timeSec.innerHTML <= 9){
        //     timeSec.innerHTML ='0'+timeSec.innerHTML}
        if (timeSec.innerHTML <= -1) {
            if (timeMin.innerHTML >= -1) {
                timeSec.innerHTML = 59
                timeMin.innerHTML--
                // if (timeMin.innerHTML <= 9){
                //     timeMin.innerHTML ='0'+timeMin.innerHTML
                if (timeMin.innerHTML <= -1) {
                    if (timeHrs.innerHTML > -1) {
                        timeMin.innerHTML = 59
                        timeHrs.innerHTML--
                        // if (timeHrs.innerHTML <= 9){
                        //     timeHrs.innerHTML ='0'+timeHrs.innerHTML
                        if (timeHrs.innerHTML <= -1) {
                            timeHrs.innerHTML = 0

                            
                        }

                    }}

                }
            }
        }
    }

// }}}


// }

start.addEventListener('click', () => {
    timeSec.innerHTML = sec.value
    timeMin.innerHTML = min.value
    timeHrs.innerHTML = hrs.value
    
    clearInterval(interval)
    interval = setInterval(substractTime, 1000)
})

