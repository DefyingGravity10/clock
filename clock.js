function getTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let time = document.querySelector(".clock");

    if (hours < 10) {
        hours = "0" + hours;
    }
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let currentTime = hours + ":" + minutes + ":" + seconds;
    time.textContent = currentTime;
}

getTime();
setInterval(getTime, 1000);