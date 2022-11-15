const btn = document.getElementById("startButton");

let toggleStart = function handleClick() {
    if (globalState.running) {
        // console.log("stopping game");
        btn.textContent = 'Start game';
        globalState.running = false
    } else if (!globalState.running) {
        // console.log("starting game")
        btn.textContent = 'Stop game';
        globalState.running = true;
    }
};

btn.addEventListener('click', toggleStart);

function reset() {
    globalState.reset = true
    if (!globalState.running) {
        toggleStart();}
    else if (globalState.running) {
        toggleStart();
        toggleStart();}
}

const sizeSlider = document.getElementById("sizeRange");

sizeSlider.onchange = async function () {
    settings.cols = Number(this.value);
    settings.rows = Number(this.value);
    toggleStart();
    toggleStart();
}

const speedSlider = document.getElementById("speedRange");
speedSlider.oninput = function () {
    settings.speed = Number(this.max - this.value);
}