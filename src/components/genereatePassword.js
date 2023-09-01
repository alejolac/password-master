/* 
Generador de contraseñas con
longitud de 12 a 22 caracteres,
1 simbolo especial como minimo 
*/

export function generatePassword(length = 8, upperCase, special, numbers) {
  let lengthPass = length;
  const pass = [];
  let condition = true;
  for (var i = 0; i < lengthPass; i++) {
    const typeCh = randomNumber(1, 10);
    if ((typeCh == 1 || typeCh == 2 || typeCh == 3) && upperCase) {
      // 65 - 90 | A - Z
      pass.push(String.fromCharCode(randomNumber(65, 90)));
    } else if (typeCh == 4 || typeCh == 5 || typeCh == 6) {
      // 97 - 122 | a - z
      pass.push(String.fromCharCode(randomNumber(97, 122)));
    } else if (typeCh == 7 && special) {
      // 33 - 47 | Special Characters
      pass.push(String.fromCharCode(randomNumber(33, 47)));
    } else if ((typeCh == 8 || typeCh == 9 || typeCh == 10) && numbers) {
      pass.push(String.fromCharCode(randomNumber(48, 57)))
    } else {
      lengthPass++;
    }
    condition = typeCh == 7 ? false : true;
  }
  if (condition)
    pass[randomNumber(1, pass.lenght)] = String.fromCharCode(
      randomNumber(33, 47)
    );
  return pass.join("");
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generatePassword());
