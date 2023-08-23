// 3. Kreirati funkciju koja radi sledece:
// Koristeci prompt uneti 5 imena radnika, potom od njih napraviti niz i izvrsiti sledece:
// Najpre od postojecih imena kreirati email adrese, tako sto cete na ime dodati "@gmail.com", i
// te nove adrese smestiti u novi niz, a potom napraviti da se na svaki klik na dugme "Prikazi"
// prikazuje alert-a u kome je ispisana neka od adresa u nizu. Bitno: na svaki klik treba da izlazi
// drugacija adresa, to uraditi koristeci random generisanje.
// Funkcija se poziva odmah pri pokretanju programa.

function radnik() {
  let workers = ["asija", "asija", "asija", "asija", "asija"];
  // for (let i = 0; i < 5; i++) {
  //   let radnik = prompt("Unesite imena radnika");
  //   workers.push(radnik);
  // }
  let mail = workers.map((el) => `${radnik}gmail.com`);
  // const btn = document.getElementById("btn");

  // btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * mail.length);
  // const daj = random[mail];
  // alert(daj);
  //   });
  document.write("<ul>");
  document.write("<li>" + random[index]);
  document.write("</ul>");
}

radnik();
