//Napiši funkciju kojoj se predaje string, te ona ispisuje bez razmaka svaku rijec velikim slovom (cammelCase)
//Ispis : “web apps vjezbe” -> “webAppsVjezbe”

let tekst = "web apps vjezbe";

promijeni = function promijeni(str) {
  return str.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });
};
console.log(promijeni(tekst));
