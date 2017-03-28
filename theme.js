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

theButton.addEventListener('click', changeTheme);

function changeTheme() {
  // change the theme
}
