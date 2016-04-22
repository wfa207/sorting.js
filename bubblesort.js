function bubbleSort(array) {

  var swapped
  var arrLen = array.length
  
  do {
  	swapped = false
  	for(var i = 0; i < arrLen - 1; i++) {
  		if (compare(array[i], array[i + 1])) {
  			swap(array, i, i + 1)
  			swapped = true
  		}
  	}
  	arrLen--
  } while (swapped)

  return array

}

function compare (num1, num2) {
	return num2 < num1
}

function swap (array, index1, index2) {
	var temp = array[index1]
	array[index1] = array[index2]
	array[index2] = temp
}