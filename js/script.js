"use strict";



var button = document.getElementById("myButton");
button.addEventListener("click", startLearning);


const words = [
    {word: "mussen", translation: "должен"},
    {word: "wollen", translation: "хотеть"},
    {word: "mogen", translation: "нравится"},
    {word: "sollen", translation: "должен"},
    {word: "konnen", translation: "могу"},
    {word: "durfen", translation: "могу"},
    {word: "benutzen", translation: "использовать"},
    {word: "gesunde", translation: "полезный"},
    {word: "brauchen", translation: "нуждаться"},
    {word: "wichtig", translation: "важно"},
];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function startLearning() {
    for (let i = 0; i < 50; i++) {
      const word = getRandomWord();
      const guess = prompt("Translate the word: " + word.word);
  
      if (guess.toLowerCase() === word.translation.toLowerCase()) {
        alert("Correct! Good job!");
      } else {
        alert("Incorrect. The correct translation is: " + word.translation);
      }
    }
  }
  
  function startLearning() {
    let correctCount = 0;
    let incorrectCount = 0;

    for (let i = 0; i < 10; i++) {
        const word = getRandomWord();
        const guess = prompt("Translate the word: " + word.word);

        if (guess !== null && guess.toLowerCase() === word.translation.toLowerCase()) {
            alert("Правильно!");
            correctCount++;
        } else {
            alert("Неправильно! Правильный перевод:" + word.translation);
            incorrectCount++;
        }
    }

    alert("Урок закончен!\n\nПравильных ответов: " + correctCount + "\nНеправильных: " + incorrectCount);
}
  
  /* startLearning(); */