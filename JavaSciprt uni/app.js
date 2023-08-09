// RegEx

function rigips(rigi) {
  let reg = /([89][0-9]{9})/;
  if (rigi === reg) {
    return true;
  } else {
    return false;
  }
}

console.log(rigips(893478912221));

function rigips2(rigi) {
  let reg = /([a-z][0-9][@][a-z]+[\.]+[a-z]{2,3})/;
  if (rigi === reg) {
    return true;
  } else {
    return false;
  }
}

console.log(rigips2("asijasijaric123@gmail.com"));
