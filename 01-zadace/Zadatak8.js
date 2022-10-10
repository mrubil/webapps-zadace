//Napiši funkciju koja vraća predano polje obrnutim redosljedom
//Ispis : [3,4,5,6] -> [6,5,4,3]

const polje = [3, 4, 5, 6];
function obrnuto(polje1) {
  const polje2 = polje1.reverse();
  console.log(polje2);
}
console.log(obrnuto(polje));
