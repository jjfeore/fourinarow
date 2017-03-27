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

function checkForWinner(x,y) {
  // testing for a winner straight up and down
  if (theBoard[x][y + 1] === activePlayer && theBoard[x][y + 2] === activePlayer && theBoard[x][y + 3] === activePlayer) { playerWon(); }
  if (theBoard[x][y + 1] === activePlayer && theBoard[x][y + 2] === activePlayer && theBoard[x][y - 1] === activePlayer) { playerWon(); }
  if (theBoard[x][y + 1] === activePlayer && theBoard[x][y - 1] === activePlayer && theBoard[x][y - 2] === activePlayer) { playerWon(); }
  if (theBoard[x][y - 1] === activePlayer && theBoard[x][y - 2] === activePlayer && theBoard[x][y - 3] === activePlayer) { playerWon(); }
  // testing for a winner sideways
  if (theBoard[x + 1][y] === activePlayer && theBoard[x + 2][y] === activePlayer && theBoard[x + 3][y] === activePlayer) { playerWon(); }
  if (theBoard[x + 1][y] === activePlayer && theBoard[x + 2][y] === activePlayer && theBoard[x - 1][y] === activePlayer) { playerWon(); }
  if (theBoard[x + 1][y] === activePlayer && theBoard[x - 1][y] === activePlayer && theBoard[x - 2][y] === activePlayer) { playerWon(); }
  if (theBoard[x - 1][y] === activePlayer && theBoard[x - 2][y] === activePlayer && theBoard[x - 3][y] === activePlayer) { playerWon(); }
  // testing for a winner diagonal to the upper-right/bottom-left
  if (theBoard[x + 1][y + 1] === activePlayer && theBoard[x + 2][y + 2] === activePlayer && theBoard[x + 3][y + 3] === activePlayer) { playerWon(); }
  if (theBoard[x + 1][y + 1] === activePlayer && theBoard[x + 2][y + 2] === activePlayer && theBoard[x - 1][y - 1] === activePlayer) { playerWon(); }
  if (theBoard[x + 1][y + 1] === activePlayer && theBoard[x - 1][y - 1] === activePlayer && theBoard[x - 2][y - 2] === activePlayer) { playerWon(); }
  if (theBoard[x - 1][y - 1] === activePlayer && theBoard[x - 2][y - 2] === activePlayer && theBoard[x - 3][y - 3] === activePlayer) { playerWon(); }
  // testing for a winner diagonal to the upper-left/buttom-right
  if (theBoard[x - 1][y + 1] === activePlayer && theBoard[x - 2][y + 2] === activePlayer && theBoard[x - 3][y + 3] === activePlayer) { playerWon(); }
  if (theBoard[x - 1][y + 1] === activePlayer && theBoard[x - 2][y + 2] === activePlayer && theBoard[x + 1][y - 1] === activePlayer) { playerWon(); }
  if (theBoard[x - 1][y + 1] === activePlayer && theBoard[x + 1][y - 1] === activePlayer && theBoard[x + 2][y - 2] === activePlayer) { playerWon(); }
  if (theBoard[x + 1][y - 1] === activePlayer && theBoard[x + 2][y - 2] === activePlayer && theBoard[x + 3][y - 3] === activePlayer) { playerWon(); }
}

boardCol.addEventListener('click', placePiece);
