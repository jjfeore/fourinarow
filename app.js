'use strict';

var theBoard = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
var boardCol = document.getElementsByClassName('board-col');

// Use any custom theme, if available

// Reload an existing game in localStorage

// Reset the game

// Listen for a click on the nav-button, and display the nav-box

// Basic game functionality
var activePlayer = 1;

function placePiece() {
  // find the first open space in the column
  var colPos = this.getAttribute('boardpos');
  for (var i = 0; i < theBoard[colPos].length; i++) {
    if (theBoard[colPos][i] === 0) {
      // place the piece here
        // figure out which div corresponds to this
        // change that div's color to the appropriate color for the activePlayer
      theBoard[colPos][i] = activePlayer;
      // test if any player has won
      checkForWinner(colPos, i);
      break;
    }
  }

  // change activePlayer and save into localStorage
}

boardCol.addEventListener('click', placePiece);
