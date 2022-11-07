/*Kreirajte web servis za upravljanje obavjestima. Sastoji se od 4 rute.
(dodajObavjest, vratiObavjesti, vratiObavjest, izmjeniObavjest) Na rutu
za dodavanje obavjesti šalje se samo naziv i sadržaj obavjesti.
{"naziv":"Rok za predaju zadace","sadrzaj":"Rok za predaju
zadace je 8.11."}
Unutar funkcije novo dobivenoj obavjesti pridodaje se id i datum kad je
kreirana. Sprema se u memoriju. Kad se vraćaju sve obavjesti, vrati se
samo naziv i datum. Kad se vraća jedna obavjest, vrati se naziv, sadržaj i
timestamp.
{"naziv":"Rok za predaju zadace","sadrzaj":"Rok za predaju
zadace je 8.11.", "datum":"Fri Oct 28 2022 08:50:27 GMT+0200
(Central European Summer Time)"}
Kod izmjene obavjesti, moguće je samo izmjeniti sadržaj*/
