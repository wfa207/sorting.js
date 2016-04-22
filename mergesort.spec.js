describe('Split Array function', function() {
	
	var arr;

	beforeEach(function() {
		arr = [1,6,3,7,3,8];
	});

	it('returns an array', function() {
		var splitArr = split(arr);
		expect(Array.isArray(splitArr)).toEqual(true);
	});	

	it('is able to split a symmetrical array into two halves', function() {
		var splitArr = split(arr);
		expect(splitArr[0]).toEqual([1,6,3]);
		expect(splitArr[1]).toEqual([7,3,8]);
	});

	it('is able to split a asymmetrical array into two parts', function() {
		arr.push(4);
		var splitArr = split(arr);
		expect(splitArr[0]).toEqual([1,6,3,7]);
		expect(splitArr[1]).toEqual([3,8,4]);
	});
});

describe('Merge', function(){
	var arr;

	beforeEach(function() {
		arr2 = [4,5,6,8]
	});

	it('is able to merge two sorted arrays into one sorted array', function(){
		var arr1 = [1,2,3,7],
			sortedArr = merge(arr1, arr2);
		expect(sortedArr).toEqual([1,2,3,4,5,6,7,8]);
	});

	it('is able to merge arrays of varying lengths', function(){
		var arr1 = [1,2,3,7,9],
			sortedArr = merge(arr1, arr2);
		expect(sortedArr).toEqual([1,2,3,4,5,6,7,8,9]);
	});

	it('is able to merge when there are repeating elements', function(){
		var arr1 = [1,2,3,5,7],
			sortedArr = merge(arr1, arr2);
		expect(sortedArr).toEqual([1,2,3,4,5,5,6,7,8]);
	});
});

describe('Merge Sort', function(){
	beforeEach(function() {
		spyOn(window, 'split').and.callThrough();
		spyOn(window, 'merge').and.callThrough();
	});

	it('uses the split function', function(){
		var array = [3,2,8,5,6,9];
		mergeSort(array);
		expect(split.calls.count()).toBeGreaterThan(0);
	});

	it('uses the merge function', function(){
		var array = [3,2,8,5,6,9];
		mergeSort(array);
		expect(merge.calls.count()).toBeGreaterThan(0);
	});

	it('mutates the array it sorts', function(){
		var array = [3,2,8,5,6,9];
		mergeSort(array);
		expect(array).toEqual([2,3,5,6,8,9]);
	});

	it('returns the array it sorts', function(){
		var array = [3,2,8,5,6,9];
		// expect(mergeSort(array)).toEqual([2,3,5,6,8,9]);
		expect(mergeSort(array)).toEqual(array);
	});	



});