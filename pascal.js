let strict = "the-stealth-warrior";

function toCamelCase(str){
  let wordsArray = [];

  for(let i = 0; i < str.length; i++){
    if(str[i] === "-"){
      wordsArray = str.split("-");
      let newArray = convertFirstLetterToUpperCase(wordsArray);
      
      return newArray.join("-");
    } 
    else if(str[i] === "_"){
      wordsArray = str.split("_");
      let newArray = convertFirstLetterToUpperCase(wordsArray);

      return newArray.join("_");
    }
  }
}

function convertFirstLetterToUpperCase(array){
  let newArray = [];

  for(let i = 0; i < array.length; i++){
    let word = array[i][0].toUpperCase() + array[i].slice(1);
    newArray.push(word); 
  }

  return newArray;
}

console.log(toCamelCase(strict));