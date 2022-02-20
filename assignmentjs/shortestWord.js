var Name=['karim','selim','anika','rubaisa','tonni','rony'];
function shortestWord(string) {
    var stringArray = string.split(" ");  
     var shortestWord;
     var shortestLength = stringArray[0].length; 
     for(var i = 0; i < stringArray.length; i++){
      if(stringArray[i].length < shortestLength){
     shortestLength = stringArray[i].length;   
     shortestWord = stringArray[i];            
    }
  }
    return shortestWord;
   }
   var newShortword=shortestWord(Name);
   console.log(newShortword);