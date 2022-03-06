function getTimeNDate() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();

    let time = document.querySelector(".time");
    let date = document.querySelector(".date");

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

    let currentDate = month + "/" + day + "/" + year;
    date.textContent = currentDate;
}

getTimeNDate();
setInterval(getTimeNDate, 1000);