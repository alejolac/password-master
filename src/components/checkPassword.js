/*
Realizar un programa que
evalue una contraseña y diga
su nivel de proteccion
*/

/*

Valores seguridad

length
------------------
length > 4 = 1
length > 8 = 2
length > 12 = 3
length > 14 = 4

Mayusula 
------------------
Una mayusucula o mas = 2

Numeros
------------------
Un numero = 1
Dos numeros = 2
Tres numeros o mas = 4

Caracters Especiales
--------------------
Un caracter especial o mas = 4


pass < 4 - Muy debil
4 < pass < 6 - Debil
6 < pass <    

*/

export function checkPassword(pass) {
  let passPower = 0;
  let passLength = checkLength(pass.length);
  let passMayus = 0;
  let passNumber = (pass.match(/\d/g) || []).length;
  let passSpecial = (pass.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;

  for (let i = 0; i < pass.length; i++) {
    let val = pass[i];
    if (val === val.toUpperCase() && isNaN(val)) {
      passMayus = 2;
    }
  }

  passNumber = passNumber >= 3 ? 4 : passNumber;
  passSpecial = passSpecial >= 1 ? 4 : 0;

  passPower = passLength + passSpecial + passNumber + passMayus;
  return passPower;
}

function checkLength(length) {
  if (length >= 14) return 4;
  if (length >= 12) return 3;
  if (length >= 8) return 2;
  if (length > 4) return 1;
  return 0;
}

let value = checkPassword("Buena231s");
console.log(value);
