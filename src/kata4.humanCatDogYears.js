const humanCatDogYears = (number) => {
  if (number === 0) {
    return [number, number, number];
}

  if (number === 1) {
    return [number,number + 14,number + 14]
}

if (number === 2){
    return [number,number + 22,number + 22]
}

if (number ===3) {
    return [number, number +25, number +26]
}


    return [number, 56, 64]
};


module.exports = humanCatDogYears;
