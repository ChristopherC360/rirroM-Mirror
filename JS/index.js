function clicker() {  
    var evenNums = [];
    var oddNums = [];
    var newWord = [];
    
    var word = document.getElementById("textEnter").value;
    
    word = word.replaceAll(",", "");

    var testWord = (Array.from(word));
    
    var firstChar = word.slice(0, 1);
    
    testWord.shift();
    
    if (testWord.length % 2 === 1) {
        testWord.push(" ");
    }
    
    for (let i = 0; i < testWord.length; i++) {
        if(i % 2 === 1) {
        evenNums.push(testWord[i]);
        }
    }
    for (let i = 0; i < testWord.length; i++) {
        if(i % 2 === 0) {
        oddNums.push(testWord[i]);
        }
    }
    for (let i = 0; i < oddNums.length || i < evenNums.length; i++) {
        newWord.push(evenNums[i] + oddNums[i]);
    }
    newWord = newWord.toString();
    newWord = newWord.replaceAll(",", "");
    
    alert(firstChar + newWord);
}