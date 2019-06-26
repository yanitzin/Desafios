function ScaleBalancing(strArr) {
	let newArr = strArr.map(val => {
		return val.replace(/[\[\]]/g, "").split(',').map(val2 => {
			return parseInt(val2, 10);
		}).sort((a, b) => {
			return a - b;
		});
	});
	
	let diff = newArr[0][1] - newArr[0][0];
	let weights = newArr[1];

    if (weights.includes(diff)) {
		return diff.toString();
	}
	let weight1 = weights.find((val, ind) => {
		let newWeights = weights.slice(0);
		newWeights.splice(ind, 1);
		return newWeights.includes (diff - val)
	});
	if (weight1) {
		return `${weight1},${diff - weight1}`
	}
	weight1 = weights.find(val => {
		return weights.includes(diff + val);
	});
	if (weight1) {
		return `${weight1},${diff + weight1}`
	}
	return `not possible`;

}
   
console.log(ScaleBalancing(["[3,4]","[1,2,7,7]"]));