function clicker() {
  var evenNums = [];
  var oddNums = [];
  var newWord = [];

  var word = document.getElementById("textEnter").value;

  word = word.replaceAll(",", "");

  var testWord = Array.from(word);

  var firstChar = word.slice(0, 1);

  testWord.shift();

  if (testWord.length % 2 === 1) {
    testWord.push(" ");
  }

  for (var i = 0; i < testWord.length; i++) {
    if (i % 2 === 1) {
      evenNums.push(testWord[i]);
    }
  }
  for (var i = 0; i < testWord.length; i++) {
    if (i % 2 === 0) {
      oddNums.push(testWord[i]);
    }
  }
  for (var i = 0; i < oddNums.length || i < evenNums.length; i++) {
    newWord.push(evenNums[i] + oddNums[i]);
  }
  newWord = newWord.toString();
  newWord = newWord.replaceAll(",", "");

  document.getElementById("textEnter").value = firstChar + newWord;
}

function copyButton() {
  var copyText = document.getElementById("textEnter");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  alert("Copied your message.");

  document.getElementById("textEnter").value = "";
}
