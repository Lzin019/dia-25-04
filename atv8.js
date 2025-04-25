let idades = [16, 21, 18, 14, 19, 23, 17];
let MaisDe18 = [];

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        MaisDe18.push(idades[i]);
    }
}
console.log("As idades que são maiores ou iguais a 18:", MaisDe18); 