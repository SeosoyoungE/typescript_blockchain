//arr
var arr1 = [
    1,
    2,
    3,
    4,
    5,
    10
];
var arr2 = [
    "a",
    "b",
    "c"
];
//function
var last = function(arr) {
    return arr[arr.length - 1];
};
var prepend = function(arr, item) {
    var newArr = [];
    newArr.push(item);
    for(var i = 0; i < arr.length; i++)newArr.push(arr[i]);
    return newArr;
};
var mix = function(arr1, arr2) {
    var newArr = [];
    arr1.forEach(function(i) {
        newArr.push(i);
    });
    arr2.forEach(function(i) {
        newArr.push(i);
    });
    return newArr;
};
var count = function(arr) {
    return arr.length;
};
var findIndex = function(arr, item) {
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === item) return i;
    }
    return null;
};
var slice = function(arr, startIndex, endIndex) {
    var newArr = [];
    if (endIndex) for(var i = startIndex; i < endIndex; i++)newArr.push(arr[i]);
    else for(var i = startIndex; i < arr.length; i++)newArr.push(arr[i]);
    return newArr;
}; //test
 //console.log(last(arr1));
 //console.log(prepend(arr1,100));
 //console.log(mix(arr1,arr2));
 //console.log(count(arr1));
 //console.log(findIndex(arr1,7));
 //console.log(slice(arr1,3,5));

//# sourceMappingURL=index.7c0ccee6.js.map
