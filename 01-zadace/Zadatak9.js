//Napiši funkciju koja prima dva objekta, te u slučaju da imaju iste kljućeve vraća true
//Ispis : {a:1,b:2,c:3}, {a:321,b:3,c:1} -> true

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 321, b: 3, c: 1 };

function kljucevi(o1, o2) {
  ar1 = Object.keys(o1);
  ar2 = Object.keys(o2);
  console.log(JSON.stringify(ar1) == JSON.stringify(ar2));
}
console.log(kljucevi(obj1, obj2));
