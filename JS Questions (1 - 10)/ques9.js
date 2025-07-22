function palinString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    if (str[i] === reversed) {
      console.log("The word is a palindrome");
    } else {
      console.log("The word is not a palindrome");
    }
  }
}

palinString('madam')

