window.onload = function () {
    console.log("script");
    var timer = document.getElementsByClassName("fifth-screen__timer")[0];
    console.log(timer);
    var string = timer.firstChild.toString();
    console.log(timer.firstChild);
    console.log(string);
    console.log(parseInt(string));
    var min = 29;
    var sec = 0;
    timer.innerHTML = min + ":" + sec;
    function mins() {
        min--;
        timer.innerHTML = min + ":" + sec;
    }
    function secs() {
        if (!(sec == 0)) {
            sec--;
            timer.innerHTML = min + ":" + sec;
        }
        else {
            sec = 59;
            timer.innerHTML = min + ":" + sec;
        }
    }
    var intervalMin = window.setInterval(mins, 60000);
    var intervalSec = window.setInterval(secs, 1000);
};
