let opacity = [0.3, 0.4, 0.4, 0.4, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2];
let newopacity = [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 1, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.5, 0.4, 0.4, 0.4, 0.3];
let element = document.querySelectorAll(".col-1");
let range = document.querySelector("#customRange");
let txtSpeed = document.querySelector("#speed");
let txtTime = document.querySelector("#time");
let firstDiv = document.querySelector("#firstDiv");
let lastDiv = document.querySelector("#lastDiv");
let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");
let audio = document.querySelector("#audio");
let value = 45;
let interval;
let intervalReverse;

//setColor();

range.addEventListener("input", function () {
    value = 300 - parseInt(range.value);
    clearInterval(interval);
    setColor();
    txtSpeed.innerText = ((100 - (value * 0.5) / 1.5)).toFixed(0) + "%";
    txtTime.innerText = (300 - parseInt(range.value)) * 10;
});

function setColor() {
    interval = setInterval(function () {
        for (let i = 0; i < 11; i++) {
            element[i].style.backgroundColor = "firebrick";
            element[i].style.opacity = opacity[i + 6];
        }

        let lastColor = opacity.pop();
        opacity.unshift(lastColor);

        if (lastDiv.style.opacity == `0.3`) {
            clearInterval(intervalReverse);
            clearInterval(interval);
            setColorReverse();
        }
    }, value);
}

function setColorReverse() {
    interval = setInterval(function () {
        for (let i = 0; i < 11; i++) {
            element[i].style.backgroundColor = "firebrick";
            element[i].style.opacity = newopacity[i];
        }

        let firstColor = newopacity.shift();
        newopacity.push(firstColor);

        if (firstDiv.style.opacity == `0.3`) {
            clearInterval(interval);
            clearInterval(intervalReverse)
            setColor();
        }
    }, value);
}

btnStart.addEventListener("click", function () {
    clearInterval(interval);
    setColor();
    audio.play();
})

btnStop.addEventListener("click", function () {
    clearInterval(interval);
    audio.pause();
})