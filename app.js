
const 
start = document.getElementById('start'),
pause = document.getElementById('pause'),
reset = document.getElementById('reset'),
OK = document.getElementById('OK'),
lblTime = document.getElementById('lblTime')

const
txtSec = document.getElementById('sec'),
txtMin = document.getElementById('min'),
txtHrs = document.getElementById('hrs')
txtDay = document.getElementById('day')
txtYrs = document.getElementById('yrs')

let sec, min, hrs, day, yrs
let interval = null

window.onload  = () => {
	
	init()
	txtYrs.value = txtDay.value = txtHrs.value = txtMin.value = txtSec.value
	
	// txtMin.value = 10

	start.addEventListener('click', () => {
		clearInterval(interval)
		// if (interval == null) {
			// SetTm()
			interval = setInterval (substractTime, 1000) // 1sec = 1000
		// }
		// SetTxtDisabled(true);
		// pause.disabled = false;
		// start.textContent = "OK"
        start.disabled = true
        pause.disabled = false;
	})

	OK.addEventListener('click', () => {
		SetTm()
        DisplayTime()
        start.disabled = false;
        reset.disabled = false
		// clearInterval(interval)
		// 	interval = setInterval (substractTime, 1000) // 1sec = 1000
			
		// SetTxtDisabled(true);
		// pause.disabled = false;
		
	})

	pause.addEventListener('click', () => {
		if (interval != null) {
			clearInterval(interval)
			interval = null
            start.disabled = false
            pause.disabled = true;
		}
	})

	reset.addEventListener('click', () => { 
		if (interval != null) {
			clearInterval(interval)
			interval = null
		}
		SetTxtDisabled(false)
		init()  
		pause.disabled = true;	
		start.disabled = true;	
		// start.textContent = "start"
	})
 
	txtYrs.addEventListener("change", SetTm);
	txtDay.addEventListener("change", SetTm);
	txtHrs.addEventListener("change", SetTm);
	txtMin.addEventListener("change", SetTm);
	txtSec.addEventListener("change", SetTm);
}

function init() {  
	yrs = day = hrs = min = sec = 0
	DisplayTime()	
}

DisplayTime = () => {
	lblTime.innerText = 
		`${yrs<10?'0'+yrs:yrs}:${day<10?'0'+day:day}:${hrs<10?'0'+hrs:hrs}:${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`
}

SetTm = () => {
	yrs = Number(txtYrs.value)
	day = Number(txtDay.value)
	hrs = Number(txtHrs.value)
	min = Number(txtMin.value)  
	sec = Number(txtSec.value)
}

SetTxtDisabled = (b) => {
	let elems = [txtYrs, txtDay, txtHrs, txtMin, txtSec]
	elems.forEach(function(e) {	
		e.disabled = b;			
	});
}

function substractTime() {
	
	if (sec==0 && min==0 && hrs==0 && day==0 && yrs==0) {
		// pause.disabled = true;
		// start.disabled = true;	
		return false		
	}
	
	if (sec > -1) {
		sec--
		if (sec <= -1) {
			if (min >= -1) {
				sec = 59
				min--
				if (min <= -1) {
					if (hrs > -1) {
						min = 59
						hrs--
						if (hrs <= -1) {
							if (day > -1){
								hrs = 23
								day --
								if (day<= -1){
									if (yrs > -1){
										day = 364
										yrs--
										if (yrs <= -1){
											yrs = 0
										}
									}
								}
							}
						}
					}
				}
			}
		}
	} 

	DisplayTime()
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