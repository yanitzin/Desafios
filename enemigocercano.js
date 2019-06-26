function ClosestEnemyII(strArr) {
	let twosies = strArr.filter(val => {
		return val.includes("2");
	});
	if (!twosies.length) {
		return 0;
	}
	targetY = strArr.findIndex(val => {
		return val.includes('1');
	});
	targetX = strArr[targetY].search(/1/);
	let res = strArr.length * strArr[0].length;

	for (let row = 0, len = strArr[0].length; row < len; row++) {
		for (col = 0, height = strArr.length; col < height; col++) {
			if (strArr[row][col] === '2') {
				xShift = rowDist(targetX, col, len);
				yShift = rowDist(targetY, row, height);
				res = Math.min(res, xShift + yShift);
			}
		}
	}
	return res;

}

function rowDist(y, x, len) {
	return Math.min(Math.abs(x - y), Math.abs(y - x + len));
}

console.log(ClosestEnemyII(["000","100","200"]));