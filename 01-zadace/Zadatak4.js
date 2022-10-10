//apiši funkciju koja pretvara broj X u sate i minute
//Ispis : 120 -> “Ovo je 2 sata i 0 minuta”

function pretvori(x) {
  var sat = Math.floor(x / 60);
  var minuta = x % 60;
  console.log("Ovo je " + sat + " sata i " + minuta + " minuta");
}
console.log(pretvori(120));
