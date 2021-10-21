

const shiftedDiff = (first, second) => {
  let noOfRotation = 0;
  if (first !== "" || second !== "") {
    noOfRotation = -1;
  } else if (first.Length !== second.Length) {
    noOfRotation = -1;
  } else if (first == second) {
    noOfRotation = 0;
  } else {
    let rotatedString = "";
    for (let i = first.Length - 1; i >= 0; i--) {
      if (i == first.Length - 1) {
        rotatedString = first.charAt(i) + first.substr(0, i - 1);
        console.log(rotatedString);
      } else {
        rotatedString +=
          first.charAt(i) + rotatedString.substr(first.Length - i, i - 1);
      }

      noOfRotation++;

      if (rotatedString == second) {
        break;
      } else {
        noOfRotation = -1;
      }
    }
  }
  return noOfRotation;
};
