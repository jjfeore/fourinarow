'use strict';

var theBody = document.getElementsByTagName('body')[0];
var playerOne = document.getElementById('player-one');
var playerTwo = document.getElementById('player-two');
var pageBox = document.getElementById('theme-select');
var theButton = document.getElementById('theme-button');

theButton.addEventListener('click', changeTheme);
