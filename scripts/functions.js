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

function titleString(cadena) {
  let wordsArray = String(cadena).split(" ");
  wordsArray = wordsArray.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return wordsArray.join(" ");
}

function backwardsLetters(cadena) {
  return String(cadena).split("").reverse().join("");
}

function backwardsWords(cadena) {
  return String(cadena).split(" ").reverse().join(" ");
}

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
