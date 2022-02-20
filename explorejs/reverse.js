function reverseString(str) {
    var reverse="";
    for (var i = 0; i < str.length; i++) {
        var char=str[i];
        reverse=char+reverse;
        
    }
    return reverse;
}
var statement="hello everybody,how are you?"
var forReverse=reverseString(statement);
console.log(forReverse);
var anotherStatement=(reverseString("my name is flora and i'm very loving person"));
console.log(anotherStatement);