'use strict';

var theBoard = [[], [], [], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [], [], []];
var boardCol = document.getElementsByClassName('board-col');
var gameText = document.getElementById('game-text');
var navButton = document.getElementById('nav-button');
var navBox = document.getElementById('nav-box');
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
  // load the saved player (localStorage.savePlayer)
}

// Reset the game

// Listen for a click on the nav-button, and display the nav-box
navButton.addEventListener('click', displayBox);
navBox.addEventListener('mouseleave', hideBox);

function displayBox() {
  navBox.setAttribute('style', 'display: block');
}

function hideBox() {
  navBox.setAttribute('style', 'display: none');
}

// Basic game functionality
if (boardCol.length > 0) {
  boardCol[0].addEventListener('click', placePiece);
  boardCol[1].addEventListener('click', placePiece);
  boardCol[2].addEventListener('click', placePiece);
  boardCol[3].addEventListener('click', placePiece);
  boardCol[4].addEventListener('click', placePiece);
  boardCol[5].addEventListener('click', placePiece);
  boardCol[6].addEventListener('click', placePiece);
}

function placePiece() {
  var colPos = parseInt(this.getAttribute('boardpos')) + 2;
  for (var i = 3; i < theBoard[colPos].length - 3; i++) {
    if (theBoard[colPos][i] === 0) {
      if (activePlayer === 1) {
        this.children[8 - i].children[0].style.backgroundColor = playerOneColor;
      }
      else {
        this.children[8 - i].children[0].style.backgroundColor = playerTwoColor;
      }
      theBoard[colPos][i] = activePlayer;
      if (checkForWinner(colPos, i)) {
        for (var a = 0; a < boardCol.length; a++) {
          boardCol[a].removeEventListener('click', placePiece);
        }
        gameText.innerText = 'Player ' + activePlayer + ' wins!';
        localStorage.savePlayer = 1;
      }
      else {
        if (activePlayer === 1) { activePlayer = 2; }
        else { activePlayer = 1; }
        gameText.innerText = 'Player ' + activePlayer + ', it\'s your turn';
        localStorage.savePlayer = activePlayer;
      }
      localStorage.saveBoard = JSON.stringify(theBoard);
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
