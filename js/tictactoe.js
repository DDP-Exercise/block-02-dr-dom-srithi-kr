"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Srithi - 2026-03-31
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!

// Check Horizontal
// Check Vertical
// Check Main Diagonal
// Check Anti Diagonal

function checkWinner(battlefield) {
    const size = battlefield.length;

    function isWinningLine(line, player) {
        return line.length === size && line.every(cell => cell === player);
    }

// check if a row/colum has won

    for (let row = 0; row < size; row++) {
        if (isWinningLine(battlefield[row], X)) {
            return {winner: X, type: "horizontal", index: row};
        }
        if (isWinningLine(battlefield[row], O)) {
            return {winner: O, type: "horizontal", index: row};
        }
    }

    for (let col = 0; col < size; col++) {
        const verticalLine = [];
        for (let row = 0; row < size; row++) {
            verticalLine.push(board[row][col]);
        }
        if (isWinningLine(verticalLine, X)) {
            return {winner: X, type: "vertical", index: col};
        }
        if (isWinningLine(verticalLine, O)) {
            return {winner: O, type: "vertical", index: col};
        }
        
        return null;
    }

    //...
}
