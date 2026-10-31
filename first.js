const div = document.querySelector('div');
// about setInterval() fn 

/*
Syntax :
setInterval(()=>{
    // Code
}, timeInMillisecond);

// the function inside setInterval repeate(run) itself with in time, what you have entered in place of 'timeInMillisecond' 
*/

// 1st way 
/*
setInterval(()=>{
    let time = new Date();
    div.textContent = time.toLocaleTimeString();
},1000);        // 1 sec = 1000ms
*/

// 2nd way (best)

function showTime() {
    let time = new Date();
    div.textContent = time.toLocaleTimeString();
}
showTime();
setInterval(showTime,1000);     // setInterval(referenceOfFunction, time in ms);