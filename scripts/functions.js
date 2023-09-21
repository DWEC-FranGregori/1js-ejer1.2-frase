"use strict";

function letters(cadena) {
  return String(cadena).length;
}

function words(cadena) {
  return String(cadena).split(" ").length;
}

function upperString(cadena) {
  return String(cadena).toUpperCase();
}

function titleString(cadena) {}

function backwardsLetters(cadena) {}

function backwardsWords(cadena) {}

function palindrome(cadena) {}

module.exports = {
  letters,
  words,
  upperString,
  titleString,
  backwardsLetters,
  backwardsWords,
  palindrome,
};
