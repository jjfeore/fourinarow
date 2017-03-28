'use strict';

var theBody = document.getElementsByTagName('body')[0];
var playerOne = document.getElementById('player-one');
var playerTwo = document.getElementById('player-two');
var pageBox = document.getElementById('theme-select');
var theButton = document.getElementById('theme-button');
var selectBox = document.getElementById('select-box');

var defaultTheme = ['#011efe', '#fdfe02', '#000000', '#FF0000'];
var darkTheme = ['#000000', '#666666', '#FFFFFF', '#333333'];
var lightTheme = ['#FFFFFF', '#8f8f8f', '#666666', '#d6d6d6'];
var dolphinTheme = ['#008D97', '#F5811F', '#000000', '#FF0000'];
var seahawkTheme = ['#002244', '#69BE28', '#A5ACAF', '#FF0000'];

theButton.addEventListener('click', changeTheme);

function changeTheme() {
  var selectedOption = document.getElementById('select-box').value;
  if (selectedOption === 'dark') {
    document.body.style.backgroundColor = darkTheme[0];
    document.getElementById('theme-select').style.backgroundColor = darkTheme[1];
    document.getElementById('player-one').style.backgroundColor = darkTheme[2];
    document.getElementById('player-two').style.backgroundColor = darkTheme[3];
    if (localStorage.customTheme) {
      localStorage.removeItem('customTheme');
    };
    localStorage.setItem('customTheme', JSON.stringify(darkTheme));
  } else if (selectedOption === 'light') {
    document.body.style.backgroundColor = lightTheme[0];
    document.getElementById('theme-select').style.backgroundColor = lightTheme[1];
    document.getElementById('player-one').style.backgroundColor = lightTheme[2];
    document.getElementById('player-two').style.backgroundColor = lightTheme[3];
    if (localStorage.customTheme) {
      localStorage.removeItem('customTheme');
    };
    localStorage.setItem('customTheme', JSON.stringify(lightkTheme));
  } else if (selectedOption === 'dolphin') {
    document.body.style.backgroundColor = dolphinTheme[0];
    document.getElementById('theme-select').style.backgroundColor = dolphinTheme[1];
    document.getElementById('player-one').style.backgroundColor = dolphinTheme[2];
    document.getElementById('player-two').style.backgroundColor = dolphinTheme[3];
    if (localStorage.customTheme) {
      localStorage.removeItem('customTheme');
    };
    localStorage.setItem('customTheme', JSON.stringify(dolphinTheme));
  } else if (selectedOption === 'seahawk') {
    document.body.style.backgroundColor = seahawkTheme[0];
    document.getElementById('theme-select').style.backgroundColor = seahawkTheme[1];
    document.getElementById('player-one').style.backgroundColor = seahawkTheme[2];
    document.getElementById('player-two').style.backgroundColor = seahawkTheme[3];
    if (localStorage.customTheme) {
      localStorage.removeItem('customTheme');
    };
    localStorage.setItem('customTheme', JSON.stringify(seahawkTheme));
  } else {
    document.body.style.backgroundColor = defaultTheme[0];
    document.getElementById('theme-select').style.backgroundColor = defaultTheme[1];
    document.getElementById('player-one').style.backgroundColor = defaultTheme[2];
    document.getElementById('player-two').style.backgroundColor = defaultTheme[3];
    if (localStorage.customTheme) {
      localStorage.removeItem('customTheme');
    };
    localStorage.setItem('customTheme', JSON.stringify(defaultTheme));
  };
}

theButton.addEventListener('click', changeTheme);
