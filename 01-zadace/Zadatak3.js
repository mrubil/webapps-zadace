//Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000]
//Ispis : 53 -> "53 nije unutar [100,150000]"

function provjeri(x) {
  if (x >= 100 && x <= 150000) {
    console.log(x + " je unutar [100,150000]");
  } else console.log(x + " nije unutar [100,150000]");
}
console.log(provjeri(53));
