'use strict';

var theBoard = [[], [], [], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [-1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1], [], [], []];
var boardCol = document.getElementsByClassName('board-col');
var gameText = document.getElementById('game-text');
var navButton = document.getElementById('nav-button');
var navBox = document.getElementById('nav-box');
var resetBtn = document.getElementById('refresh-button');
var resetBox = document.getElementById('reset-box');
var resetYes = document.getElementById('reset-yes');
var resetNo = document.getElementById('reset-no');
var linkSpan = document.getElementsByClassName('link-span');
var activePlayer = 1;
var gameTheme = ['#011EFE', '#FDFE02', '#000000', '#FF0000'];
var playerOneColor = gameTheme[2];
var playerTwoColor = gameTheme[3];

function setTheme() {
  if (localStorage.customTheme) {
    gameTheme = JSON.parse(localStorage.customTheme);
  }
  document.body.style.backgroundColor = gameTheme[0];
  navButton.style.color = gameTheme[0];
  navButton.style.backgroundColor = gameTheme[1];
  for (var i = 0; i < linkSpan.length; i++) {
    linkSpan[i].style.color = gameTheme[0];
    linkSpan[i].style.backgroundColor = gameTheme[1];
  }
  if (document.getElementById('board')) {
    gameText.style.color = gameTheme[1];
    document.getElementById('board').style.backgroundColor = gameTheme[1];
    resetBtn.style.backgroundColor = gameTheme[1];
    resetBtn.style.color = gameTheme[0];
    document.getElementById('confirm-span').style.color = gameTheme[0];
    document.getElementById('confirm-span').style.backgroundColor = gameTheme[1];
    var boardHoles = document.getElementsByClassName('board-hole');
    var boardPieces = document.getElementsByClassName('board-piece');
    for (var i = 0; i < boardHoles.length; i++) {
      boardHoles[i].style.backgroundColor = gameTheme[1];
      boardPieces[i].style.backgroundColor = gameTheme[0];
    }
  }
  if (document.getElementById('player-one')) {
    document.getElementById('player-one').style.backgroundColor = gameTheme[2];
    document.getElementById('player-two').style.backgroundColor = gameTheme[3];
    document.getElementById('theme-select').style.backgroundColor = gameTheme[1];
    document.getElementById('theme-select').style.color = gameTheme[0];
    document.getElementById('theme-button').style.backgroundColor = gameTheme[0];
    document.getElementById('theme-button').style.color = gameTheme[1];
  }
}
setTheme();

// Reload an existing game in localStorage
if (localStorage.saveBoard) {
  // load the saved board state
  // load the saved player (localStorage.savePlayer)
}

// Reset the game
if (resetBtn) {
  resetBox.style.display = 'none';
  resetBtn.addEventListener('click', displayReset);
  resetBox.addEventListener('mouseleave', hideReset);
  resetYes.addEventListener('click', resetData);
  resetNo.addEventListener('click', hideReset);
}

function displayReset() {
  if (resetBox.style.display === 'none') {
    navBox.style.display = 'none';
    resetBox.setAttribute('style', 'display: block');
  }
  else {
    resetBox.style.display = 'none';
  }
}

function hideReset() {
  resetBox.setAttribute('style', 'display: none');
}

function resetData() {
  localStorage.clear();
  window.location.reload();
}

// Listen for a click on the nav-button, and display the nav-box
navBox.style.display = 'none';
navButton.addEventListener('click', displayBox);
navBox.addEventListener('mouseleave', hideBox);

function displayBox() {
  if (navBox.style.display === 'none') {
    if (resetBox) { resetBox.style.display = 'none'; }
    navBox.setAttribute('style', 'display: block');
  }
  else {
    navBox.style.display = 'none';
  }
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
