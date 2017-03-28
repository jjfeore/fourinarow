'use strict';

var theBody = document.getElementsByTagName('body')[0];
var playerOne = document.getElementById('player-one');
var playerTwo = document.getElementById('player-two');
var pageBox = document.getElementById('theme-select');
var theButton = document.getElementById('theme-button');
var selectBox = document.getElementById('select-box');

var defaultTheme = ['#fdfe02', '#011efe', '#000000', '#FF0000'];
var darkTheme = ['#000000', '#666666', '#FFFFFF', '#333333'];
var lightTheme = ['#FFFFFF', '#8f8f8f', '#666666', '#d6d6d6'];

theButton.addEventListener('click', changeTheme);

function changeTheme() {
  var selectedOption = document.getElementById('select-box').value;
  if (selectedOption === 'dark') {
    document.body.style.backgroundColor = darkTheme[0];
    document.getElementById('theme-select').style.backgroundColor = darkTheme[1];
    document.getElementById('player-one').style.backgroundColor = darkTheme[2];
    document.getElementById('player-two').style.backgroundColor = darkTheme[3];
  }  else if (selectedOption === 'light') {
    document.body.style.backgroundColor = lightTheme[0];
    document.getElementById('theme-select').style.backgroundColor = lightTheme[1];
    document.getElementById('player-one').style.backgroundColor = lightTheme[2];
    document.getElementById('player-two').style.backgroundColor = lightTheme[3];
  }
}

theButton.addEventListener('click', changeTheme);
