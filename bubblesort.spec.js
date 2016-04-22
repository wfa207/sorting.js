describe('Bubble Sort', function(){
  
  beforeEach(function () {
	spyOn(window, 'swap').and.callThrough();
	spyOn(window, 'compare').and.callThrough();
  })
  
  it('implements swap and compare functions', function(){
    expect(typeof swap).toEqual('function');
    expect(typeof compare).toEqual('function');
  });
  
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });
  
  it('handles an array of numbers and return an array', function(){
    expect(bubbleSort([3,2,8,5,6,9])).toEqual([2,3,5,6,8,9]);
    expect(Object.prototype.toString.call(bubbleSort([3,2,8,5,6,9])).slice(8,-1)).toEqual('Array');
  });
  
  it('mutates the original array', function(){
  	var arr = [3,2,8,5,6,9];
  	bubbleSort(arr);
    expect(arr).toEqual([2,3,5,6,8,9]);
  });
  
  it('handles repetitions in the array', function(){
  	var arr = [6,3,8,2,4,8,4];
    expect(bubbleSort(arr)).toEqual([2,3,4,4,6,8,8]);
  });
  
  it('swap is only called once when only two elements are out of order', function(){
  	var arr = [1,2,3,4,5,6,7,9,8];
  	bubbleSort(arr);
    expect(swap.calls.count()).toEqual(1);
  });

  it('compare doesn\'t make more comparisons than needed', function(){
  	var arr = [1,2,3,4,5,6,7,9,8];
  	bubbleSort(arr);
    expect(compare.calls.count()).toEqual(15);
  });
});