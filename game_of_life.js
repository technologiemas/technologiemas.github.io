"use strict"

function fillBoard(COLS, ROWS) {
    return Array(ROWS).fill(0, undefined, undefined).map(() => Array(COLS).fill(0).map(() => Math.round(Math.random() - 0.3)))
}

function drawCells(ctx, win, CELL_HEIGHT, CELL_WIDTH) {
    const BLACK = 'seagreen';
    const WHITE = '#ffffff';

    ctx.fillStyle = BLACK;
    ctx.fillRect(0, 0, CELL_HEIGHT, CELL_WIDTH);
    ctx.fillStyle = WHITE;
    ctx.fillRect(50, 50, CELL_HEIGHT, CELL_WIDTH);

    for (const [x, row] of win.entries()) {
        for (const [y, col] of row.entries()) {
            if (col) {
                ctx.fillStyle = BLACK;
            } else {
                ctx.fillStyle = WHITE;
            }

            ctx.fillRect(y * CELL_WIDTH, x * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
        }
    }
}

function checkBounds(win, row, col, xShift, yShift) {
    if ((col + xShift) < 0) {
        return false
    } else if ((col + xShift) >= win[0].length) {
        return false
    } else if ((row + yShift) < 0) {
        return false
    } else if ((row + yShift) >= win.length) {
        return false
    }

    return true
}


function updateWin(win) {
    var boardNew = _.cloneDeep(win);
    const neighbours = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    for (let row in win) {
        row = parseInt(row);
        for (let col in win[row]) {
            col = parseInt(col);
            let count = 0;
            for (let [xShift, yShift] of neighbours) {
                if (!checkBounds(win, row, col, xShift, yShift)) {
                    continue
                }

                count += win[row + yShift][col + xShift];
            }

            if (count === 3 && win[row][col] === 0) {
                boardNew[row][col] = 1;
            }

            if ((count < 2 || count > 3) && win[row][col] === 1) {
                boardNew[row][col] = 0;
            }

        }

    }


    return boardNew
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let globalState = {
    running: false,
    reset: false,
};


let settings = {
    width: 0,
    height: 0,
    cols: 40,
    rows: 40,
    speed: 300 - 70, // in ms, so higher is slower
    win: {}
};

function setSizing(canvas) {
    const bodyElement = document.getElementById("body_id");

    let styleCanvas = canvas.currentStyle || window.getComputedStyle(canvas);
    let margin = parseInt(styleCanvas.marginLeft) * 2;
    let styleBody = canvas.currentStyle || window.getComputedStyle(bodyElement);
    let padding = parseInt(styleBody.paddingLeft) * 2;

    settings.width = document.body.clientWidth - margin - padding;
    settings.height = document.body.clientWidth - margin - padding;

    canvas.width =  settings.width;
    canvas.height =  settings.height;
}

function resizeCanvas() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    setSizing(canvas)

    const cellHeight = settings.height / settings.rows;
    const cellWidth = settings.width / settings.cols;
    drawCells(ctx, settings.win, cellHeight, cellWidth);
}

async function main() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    setSizing(canvas);

    canvas.width = settings.width;
    canvas.height = settings.height;

    let previousSize = {
        cols: settings.cols,
        rows: settings.rows,
    };

    let win = fillBoard(settings.cols, settings.rows)

    const cellHeight = settings.height / settings.rows
    const cellWidth = settings.width / settings.cols
    drawCells(ctx, win, cellHeight, cellWidth);

    // noinspection InfiniteLoopJS
    while (true) {
         settings.win = win
        if (globalState.running) {

            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
            canvas.width = settings.width;
            canvas.height = settings.height;


            if (previousSize.cols !== settings.cols || globalState.reset) {
                // UPDATE board with new size
                win = fillBoard(settings.cols, settings.rows);
                previousSize = {
                    cols: settings.cols,
                    rows: settings.rows,
                };
                globalState.reset = false;
            }

            const cellHeight = settings.height / settings.rows
            const cellWidth = settings.width / settings.cols

            ctx.clearRect(0, 0, settings.width, settings.height);
            drawCells(ctx, win, cellHeight, cellWidth);
            win = updateWin(win);
        }
        await sleep(settings.speed);
    }
}

main();