let args = process.argv[2];

const obfuscate = function(password) {
  let obfuscated = '';
  for (let i = 0; i < password.length; i++) {
    switch (password[i]) {
    case 'a':
      obfuscated += '4';
      break;
    case 'e':
      obfuscated += '3';
      break;
    case 'o':
      obfuscated += '0';
      break;
    case 'l':
      obfuscated += '1';
      break;
    default:
      obfuscated += password[i];
    }
  }
  //console.log(obfuscated);
  return obfuscated;
};

console.log(obfuscate(args));

//Instruction said the function should not directly read from process.argv. Wasn't sure what was supposed to be done..
//The obfuscate function should not read directly from process.argv. Another piece of code outside that function can perform that task. It's important to understand why this is considered better practice. If you're unclear about the reasoning, ask your other peers or a mentor!