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
