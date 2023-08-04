const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Kalkulator Sederhana");
console.log("Operator yang didukung: + (penjumlahan), - (pengurangan), * (perkalian), / (pembagian)");

rl.question("Masukkan ekspresi matematika (contoh: 8 * 8): ", (ekspresi) => {
  // Memecah ekspresi menjadi token (angka dan operator)
  const tokens = ekspresi.match(/\d+(\.\d+)?|[+\-*/]/g);

  if (!tokens || tokens.length === 0) {
    console.log("Ekspresi matematika tidak valid!");
    rl.close();
    return;
  }

  const stack = [];
  let result = parseFloat(tokens[0]);

  // Iterasi token dan lakukan operasi sesuai dengan operator yang ditemukan
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseFloat(tokens[i + 1]);

    if (operator === '+') {
      result += operand;
    } else if (operator === '-') {
      result -= operand;
    } else if (operator === '*') {
      result *= operand;
    } else if (operator === '/') {
      result /= operand;
    } else {
      console.log("Operator tidak valid!");
      rl.close();
      return;
    }
  }

  console.log(`Hasil: ${ekspresi} = ${result}`);
  rl.close();
});
