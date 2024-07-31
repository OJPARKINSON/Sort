const array: string[] = ["c", "f", "a", "d", "b"];

const compare = (f: string, s: string) => {
  if (f < s) return 1;
  else if (f > s) return -1;
  else return 0;
};

for (
  var count = array.length;
  array.join() !== ["a", "b", "c", "d", "f"].join();

) {
  for (var i = 0; i < array.length - 1; i++) {
    const value = compare(array[i], array[i + 1]);

    console.log(array[i], array[i + 1], array, value);

    if (value === -1) {
      const nextIndex = array.splice(i + 1, 1, array[i]); // splice next value and replace with current
      array[i] = nextIndex[0]; // place the next value with the current
    }
  }
}

console.log(array);
