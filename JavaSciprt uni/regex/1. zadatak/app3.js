// [9.5| Kreirati input pole tipa text.
//  Napisati regularni izraz koji de proveriti da li je zadati string jaka lozinka. Lozinka treba da sadri najmanje a karaktera,
// od kojih barem jedno veliko slovo (bilo gde u reci), jedno malo slovo (bilo ede u recil, najmanje 2, a najvise 3 cifre i jedan specialni karakter
// (koji moze, a ne mora doci).
//     Testni string: "StroneP@33Ord"
//     Ukoliko uneti sadriaj zadovoljava ove kriterijume, potrebno je da se ispod input polja unutar p taga zelenim slovima ispisuje
// „Ispravno unet email", u suprotnom je potrebno da crvenim slovima na istom mesto ispite „Gretka u unosu.

function rigi(tekst) {
  let reg = /[a-zA-z]?[0-9]{2,3}[@!$#&*.\\\-_+]{8,}/;

  let poruka = document.getElementById("zap");
  let inp = document.getElementById("inti");
  inp.addEventListener("input", () => {
    const password = inp.value;
    if (reg.match(password)) {
      poruka.textContent = "Ispravna poruka";
      poruka.style.color = "green";
    } else {
      poruka.textContent = "Nespravna poruka";
      poruka.style.color = "red";
    }
  });
}

rigi();
