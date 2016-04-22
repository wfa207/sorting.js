function split (array) {
	var middle = Math.ceil(array.length / 2);
	return [array.slice(0, middle), array.slice(middle)];
}

function merge (array1, array2) {
	var sortedArr = []
	while(array1.length && array2.length) {
		sortedArr.push(array1[0] <= array2[0] ? array1.shift() : array2.shift())

	}
	return sortedArr.concat(array1).concat(array2)
}

function mergeSort (array) {
	if (array.length === 1) return array
	var splitArr = split(array)
	// [[1,3,4], [2,5,6]]
	merge(mergeSort(splitArr[0]), mergeSort(splitArr[1])).forEach(function (elem, index) {
		array[index] = elem;
	})
	return array;
}