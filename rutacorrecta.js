function CorrectPath(str) {
  let blankArray = [];
  str.split('').forEach((val, ind) => {
    if (val === '?') {
      blankArray.push(ind);
    }
  });
  
  let num = blankArray.length;
  
  let total = Math.pow(4, num);

  for (let i = 0; i < total; i++) {
    let numString = (i + total).toString(4).slice(1);
    let currentPath = createPath(str, blankArray, numString);
    if (isPathGood(currentPath)) {
      return currentPath;
    }
  }
}


isPathGood = (str) => {
  let testArray = []
  for (let i = 0; i < 5; i++) {
    testArray.push([0, 0, 0, 0, 0])
  }

  let len = str.length;
  let currentLoc = [0, 0];

  for (let i = 0; i < len; i++) {
    testArray[currentLoc[0]][currentLoc[1]] = 1;
    let newLoc = currentLoc.slice(0);
    switch (str[i]) {
      case 'u':
        newLoc[0]--;
        break;
      case 'd':
        newLoc[0]++;
        break;
      case 'r':
        newLoc[1]++;
        break;
      case 'l':
        newLoc[1]--;
        break;
    }
    if (newLoc.includes (-1) || newLoc.includes (5)) {
        return false;
    }
    if (testArray[newLoc[0]][newLoc[1]] === 1) {
      return false;
    }
    if (newLoc[0] === 4 && newLoc[1] === 4 && i === len - 1) {
      return true;
    }
    currentLoc = newLoc;
  }
  return false;
};

createPath = (str, blanks, num) => {
  let moveArray = ['r', 'l', 'u', 'd'];
  strArr = str.split('');
  blanks.forEach((val, ind) => {
    strArr.splice(val, 1, moveArray[num[ind]]);
  });
  return strArr.join('');
};

console.log(CorrectPath("drdr??rrddd?"));