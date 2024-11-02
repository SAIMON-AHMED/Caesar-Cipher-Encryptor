// Time -> O(n) | Space -> O(n)
function caesarCipherEncryptor(string, key) {
  let arr = [];
  key = key % 26;
  
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    let newCode = code + key;
    if (newCode <= 122) {
      arr.push(String.fromCharCode(newCode));
    } else {
      arr.push(String.fromCharCode(96 + (newCode - 122)));
    }
  }
  return arr.join('');
}

