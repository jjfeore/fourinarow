'use strict';

var theBoard = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
var boardCol = document.getElementsByClassName('board-col');
var gameText = document.getElementById('game-text');
var activePlayer = 1;
var playerOneColor = '#000000';
var playerTwoColor = '#FF0000';

// Use any custom theme, if available
if (localStorage.customTheme) {
  // then use the custom theme
}

// Reload an existing game in localStorage
if (localStorage.saveBoard) {
  // load the saved board state
}

// Reset the game

// Listen for a click on the nav-button, and display the nav-box

// Basic game functionality
boardCol.addEventListener('click', placePiece);

function placePiece() {
  var colPos = this.getAttribute('boardpos') - 1;
  for (var i = 0; i < theBoard[colPos].length; i++) {
    if (theBoard[colPos][i] === 0) {
      if (activePlayer === 1) {
        this.childNodes[5 - i].firstChild.style.backgroundColor = playerOneColor;
      }
      else {
        this.childNodes[5 - i].firstChild.style.backgroundColor = playerTwoColor;
      }
      theBoard[colPos][i] = activePlayer;
      if (checkForWinner(colPos, i)) {
        boardCol.removeEventListener('click', placePiece);
        gameText.innerText = 'Player ' + activePlayer + ' wins!';
      }
      else {
        if (activePlayer === 1) { activePlayer = 2; }
        if (activePlayer === 2) { activePlayer = 1; }
        gameText.innerText = 'Player ' + activePlayer + ', it\'s your turn';
      }
      localStorage.saveBoard(JSON.stringify(theBoard));
      break;
    }
  }
}

function checkForWinner(x,y) {
  // testing for a winner straight up and down
  if (theBoard[x][y + 1] === activePlayer && theBoard[x][y + 2] === activePlayer && theBoard[x][y + 3] === activePlayer) { return true; }
  if (theBoard[x][y + 1] === activePlayer && theBoard[x][y + 2] === activePlayer && theBoard[x][y - 1] === activePlayer) { return true; }
  if (theBoard[x][y + 1] === activePlayer && theBoard[x][y - 1] === activePlayer && theBoard[x][y - 2] === activePlayer) { return true; }
  if (theBoard[x][y - 1] === activePlayer && theBoard[x][y - 2] === activePlayer && theBoard[x][y - 3] === activePlayer) { return true; }
  // testing for a winner sideways
  if (theBoard[x + 1][y] === activePlayer && theBoard[x + 2][y] === activePlayer && theBoard[x + 3][y] === activePlayer) { return true; }
  if (theBoard[x + 1][y] === activePlayer && theBoard[x + 2][y] === activePlayer && theBoard[x - 1][y] === activePlayer) { return true; }
  if (theBoard[x + 1][y] === activePlayer && theBoard[x - 1][y] === activePlayer && theBoard[x - 2][y] === activePlayer) { return true; }
  if (theBoard[x - 1][y] === activePlayer && theBoard[x - 2][y] === activePlayer && theBoard[x - 3][y] === activePlayer) { return true; }
  // testing for a winner diagonal to the upper-right/bottom-left
  if (theBoard[x + 1][y + 1] === activePlayer && theBoard[x + 2][y + 2] === activePlayer && theBoard[x + 3][y + 3] === activePlayer) { return true; }
  if (theBoard[x + 1][y + 1] === activePlayer && theBoard[x + 2][y + 2] === activePlayer && theBoard[x - 1][y - 1] === activePlayer) { return true; }
  if (theBoard[x + 1][y + 1] === activePlayer && theBoard[x - 1][y - 1] === activePlayer && theBoard[x - 2][y - 2] === activePlayer) { return true; }
  if (theBoard[x - 1][y - 1] === activePlayer && theBoard[x - 2][y - 2] === activePlayer && theBoard[x - 3][y - 3] === activePlayer) { return true; }
  // testing for a winner diagonal to the upper-left/buttom-right
  if (theBoard[x - 1][y + 1] === activePlayer && theBoard[x - 2][y + 2] === activePlayer && theBoard[x - 3][y + 3] === activePlayer) { return true; }
  if (theBoard[x - 1][y + 1] === activePlayer && theBoard[x - 2][y + 2] === activePlayer && theBoard[x + 1][y - 1] === activePlayer) { return true; }
  if (theBoard[x - 1][y + 1] === activePlayer && theBoard[x + 1][y - 1] === activePlayer && theBoard[x + 2][y - 2] === activePlayer) { return true; }
  if (theBoard[x + 1][y - 1] === activePlayer && theBoard[x + 2][y - 2] === activePlayer && theBoard[x + 3][y - 3] === activePlayer) { return true; }
  return false;
}
