'use strict';

var theBody = document.getElementsByTagName('body')[0];
var playerOne = document.getElementById('player-one');
var playerTwo = document.getElementById('player-two');
var pageBox = document.getElementById('theme-select');
var theButton = document.getElementById('theme-button');
var selectBox = document.getElementById('select-box');

var classicTheme = ['#011efe', '#fdfe02', '#000000', '#FF0000'];
var darkTheme = ['#000000', '#666666', '#FFFFFF', '#333333'];
var lightTheme = ['#FFFFFF', '#8f8f8f', '#000000', '#666666'];
var dolphinTheme = ['#008D97', '#F5811F', '#FFFFFF', '#183048'];
var seahawkTheme = ['#002244', '#69BE28', '#A5ACAF', '#FFFFFF'];

theButton.addEventListener('click', changeTheme);

function changeTheme() {
  var selectedOption = document.getElementById('select-box').value;
  if (selectedOption === 'dark') {
    localStorage.customTheme = JSON.stringify(darkTheme);
    setTheme();
  } else if (selectedOption === 'light') {
    localStorage.customTheme = JSON.stringify(lightTheme);
    setTheme();
  } else if (selectedOption === 'dolphin') {
    localStorage.customTheme = JSON.stringify(dolphinTheme);
    setTheme();
  } else if (selectedOption === 'seahawk') {
    localStorage.customTheme = JSON.stringify(seahawkTheme);
    setTheme();
  } else {
    localStorage.customTheme = JSON.stringify(classicTheme);
    setTheme();
  }
}

theButton.addEventListener('click', changeTheme);
