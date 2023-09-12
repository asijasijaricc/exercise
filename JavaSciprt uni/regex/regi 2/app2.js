// Unutar prompt iskucati neki URL, pa koriscenjem regularnih izraza (regexa) u JS ispitati da li zadovoljava sledece uslove.
// Na pocetku se nalazi http, nako cega moze, a ne mora doci karakter, a nakon cega obavezno dolazi dvotacka i dve kose crte (://).
// Nakon toga sledi karakter www, nakon kojih ide tacka, nakon kojih opet moze doci proizvoljan broj karaktera pa opet tacka
// i na kraju najmanje 2, a najvise 4 karktera. (npr. https://www.google.com ili https://www.rts.rs)
// Ukoliko uneti sadrzaj zadovoljava ove kriterijume, potrebni je da se unutar p taga zelenim slovima ispise "Ispravna url adresa",
// a u suprotom crvenima slovima "Greska!!"

function rigips1(tekst) {
  let reg = /^https?:\/\/www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
  let kraj = tekst.match(reg);

  if (kraj != null) {
    return alert("Tacno");
  } else {
    return alert("Netacno");
  }
}

rigips1(rigips1("Url adresa"));
