//1.Given an array, rotate the array to the right by k steps, where k is non-negative.
  var k = 3; var start = k-1;
  var arr = [1,2,7,8,9];
  var spliceArr = arr.splice(start,k);
  spliceArr.concat(arr);

//3. There is an array of numbers from 1 to 100 which are not in order. Sort the array in O(N) complexity.
  var list = [23,45,67,1,2,3,4,5,6,7,8,9];
  for (let i = 0; i < list.length; i ++) {
        let minJ = i;
        for (let j = i + 1; j < list.length; j ++) {
            if (list[j] < list[minJ]) {
                minJ = j;
            }
        }
        const oldVal = list[i];
        const newVal = list[minJ];

        if (oldVal !== newVal) {
            list[i] = newVal;
            list[minJ] = oldVal;
        }
    }
    console.log(list);

// 4.Find all combinations of a given string.
    var string = "abc";
    var result = [];
    function loop(start,depth,prefix)
    {
        for(var i=start; i<string.length; i++)
        {
            var next = prefix+string[i];
            if (depth > 0)
                loop(i+1,depth-1,next);
            else
                result.push(next);
        }
    }
    for(var i=0; i<string.length; i++)
    {
        loop(0,i,'');
    }
    console.log(result);