/*Kreirajte web servis za dodavanje autora. Sastoji se 3 rute. (dodajAutora,
    vratiAutore, izbrisiDjeloAutora) Kod dodavanja autora, očekuje se da se
    preda naziv i lista djela. Ukoliko se ne predaju isključivo ta dva ključa
    (naziv, djela) odgovara sa sljedecim JSON response -> {"Error":"Krivi
    kljucevi"}. Nakon toga provjerava je li duzina imena svakog djela manja
    od 20 znakova i u slučaju da nije vraća JSON response sa imenom djela koji
    je pre dugacak -> {"Error":"Djelo Process Mining in Practice ima
    vise od 20 znakova"} Ako je sve uredu dodaje datum i id, te sprema
    autora. Vrati autore vraca sve autore i djela. Ruta za brisanje djela brise
    iz liste djela autora jedno djelo.*/
