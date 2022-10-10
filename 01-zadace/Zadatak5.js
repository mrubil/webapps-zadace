//Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve djeljive s 3
//Ispis : [1,2,3,4,5,6,7,8,9,10] -> “Brojevi djeljivi s 3: 3,6,9”

const polje = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ispis(arr) {
  const djeljivi = arr.filter((number) => {
    return number % 3 == 0;
  });
  console.log("Brojevi djeljivi s 3: " + djeljivi);
}
console.log(ispis(polje));
