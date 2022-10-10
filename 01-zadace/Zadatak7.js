//Napiši funkciju koja za dani broj X provjeri nalazi li se unutar [0, 1000], te množi sve višekratnike broja 7 do X te ispisuje rezultat.
//Ispis : 23 -> 2058

function provjera(x) {
  var a = 1;
  if (x <= 1000 && x >= 0) {
    for (let i = 1; i <= x; i++) {
      if (i % 7 == 0) {
        a *= i;
      }
    }
    console.log(a);
  }
}
console.log(provjera(23));
