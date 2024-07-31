var array = ["c", "f", "a", "d", "b"];
var compare = function (f, s) {
    if (f < s)
        return 1;
    else if (f > s)
        return -1;
    else
        return 0;
};
for (var count = array.length; array.join() !== ["a", "b", "c", "d", "f"].join();) {
    for (var i = 0; i < array.length - 1; i++) {
        var value = compare(array[i], array[i + 1]);
        console.log(array[i], array[i + 1], array, value);
        if (value === -1) {
            array[i] = array.splice(i + 1, 1, array[i])[0];
        }
    }
}
console.log(array);
