// 39. Implement the Caesar cypher

function caesarCipher(str, shift) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      char = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } 
    
    else if (charCode >= 97 && charCode <= 122) {
      char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    
    result += char;
  }
  
  return result;
}

console.log(caesarCipher("Hello", 3));
