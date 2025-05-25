const count = parseInt(process.argv[2]);
let output = '';
if (isNaN(count) || count <= 0) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < count; i++) {
    output += (i < count - 1) ? "C is fun\n" : "C is fun";
  }
  console.log(output);
}

