'use strict';

var theBody = document.getElementsByTagName('body')[0];
var playerOne = document.getElementById('player-one');
var playerTwo = document.getElementById('player-two');
var pageBox = document.getElementById('theme-select');
var themeBox = document.getElementById('custom-theme');
var theButton = document.getElementsByTagName('button')[0];
var custButton = document.getElementsByTagName('button')[1];
var selectBox = document.getElementById('select-box');
var pageColor = document.getElementById('page-color');
var boardColor = document.getElementById('board-color');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');

var themeArray = [['#011efe', '#fdfe02', '#000000', '#FF0000', 'Player 1', 'Player 2', 'Classic'], ['#000000', '#666666', '#FFFFFF', '#222222', 'Player 1', 'Player 2', 'Dark'], ['#FFFFFF', '#8f8f8f', '#000000', '#666666', 'Player 1', 'Player 2', 'Light'], ['#008D97', '#F5811F', '#FFFFFF', '#183048', 'Player 1', 'Player 2', 'Miami Dolphins'], ['#002244', '#69BE28', '#A5ACAF', '#FFFFFF', 'Player 1', 'Player 2', 'Seattle Seahawks']];

if (localStorage.storeThemes) {
  themeArray = JSON.parse(localStorage.storeThemes);
}

themeBox.style.display = 'none';
theButton.addEventListener('click', changeTheme);
custButton.addEventListener('click', createTheme);
pageColor.addEventListener('input', changeColor);
boardColor.addEventListener('input', changeColor);
p1.addEventListener('input', changeColor);
p2.addEventListener('input', changeColor);

var theSelect = document.getElementsByTagName('select')[0];
function renderSelect() {
  for (var i = 0; i < themeArray.length; i++) {
    var newOption = document.createElement('option');
    newOption.value = i;
    newOption.innerText = themeArray[i][6];
    theSelect.appendChild(newOption);
  }
  newOption = document.createElement('option');
  newOption.value = 999;
  newOption.innerText = 'Create a Theme';
  newOption.id = 'create-option';
  theSelect.appendChild(newOption);
}
renderSelect();

function changeTheme() {
  var selectedOption = document.getElementById('select-box').value;
  if (selectedOption < document.getElementsByTagName('option').length - 1) {
    localStorage.customTheme = JSON.stringify(themeArray[selectedOption]);
    setTheme();
  }
  else {
    pageBox.style.display = 'none';
    themeBox.style.display = 'block';
  }
}

function createTheme() {
  var inputFields = document.getElementsByTagName('input');
  var newTheme = [];
  newTheme.push(inputFields[3].value);
  newTheme.push(inputFields[4].value);
  newTheme.push(inputFields[5].value);
  newTheme.push(inputFields[6].value);
  newTheme.push(inputFields[1].value);
  newTheme.push(inputFields[2].value);
  newTheme.push(inputFields[0].value);
  themeArray.unshift(newTheme);
  localStorage.customTheme = JSON.stringify(themeArray[0]);
  setTheme();
  for (var i = 0; i < themeArray.length + 1; i++) {
    theSelect.removeChild(theSelect.childNodes[0]);
  }
  renderSelect();
  localStorage.storeThemes = JSON.stringify(themeArray);
  pageBox.style.display = 'block';
  themeBox.style.display = 'none';
}

function changeColor() {
  this.style.backgroundColor = this.children[0].value;
}
