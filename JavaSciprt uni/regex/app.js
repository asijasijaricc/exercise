// RegEx

// 1.

function rigips(rigi) {
  let reg = /([89][0-9]{9})/;
  if ((rigi = reg)) {
    return true;
  } else {
    return false;
  }
}

console.log(rigips(893478912221));

// 2.

function rigips2(rigi) {
  if (/([a-z][_.-][0-9][@][a-z]+[\.]+[a-z]{2,3})/.test(rigi)) {
    return "Greska";
  } else {
    return "Uspesno";
  }
}

console.log(rigips2("asija_sijaric123@gmail.com"));

// 3.

function rigipsi3(rigi) {
  let reg = /(\d\d\d[-.]\d\d\d[-.]\d\d\d\d)/;
  if ((reg = rigi)) {
    return true;
  } else {
    return false;
  }
}

console.log(rigipsi3("123.456.7890"));

// 4.

let tekst = "NP-067-BS";

function rigipsi4(tekst) {
  let reg = /([A-Z]{2}[-][0-9]{3}[-][A-Z]{2})/;
  let kraj = tekst.match(reg);
  if (kraj != null) {
    return "Registracija je ispravna";
  } else {
    return "Registracija nije ispravna";
  }
}

console.log(rigipsi4(tekst));

// 5.

let pass = "StrongP@330rd";

function isStrong(pass) {
  let reg = /([a-zA-Z][0-9]{1,2}[@!$#&*.\\\-_+]{8,})/;
  let kraj = pass.match(reg);
  if (kraj != null) {
    return "Ispravan";
  } else {
    return "Greska";
  }
}

console.log(isStrong(pass));
