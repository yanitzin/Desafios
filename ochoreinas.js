function EightQueens(strArr) {
    //fix up the data
    let newArr = strArr.map(val => {
      return JSON.parse(val
        .replace(/\(/g, '[')
        .replace(/\)/g, ']')
      )
    });
  
    newArr = newArr.map(val => {
      return val.concat(val[1] - val[0], val[1] + val[0]);
    });
  
    for (let i = 0, len = newArr.length; i < len; i++) {
      for (let j = 0; j < 4; j++) {
        let target = newArr[i][j];
        if (newArr.filter(val => {
          return val[j] === target;
        }).length > 1) {
          return `(${newArr[i].slice(0,2)})`
        }
      }
    }
  
    return true;
  }

  console.log(EightQueens(["(2,1)","(4,3)","(6,3)","(8,4)"]));