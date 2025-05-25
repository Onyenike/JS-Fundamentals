const count = parseInt(process.argv[2]);

if (isNaN(count) || count <= 0) {
  console.log("Missing number of occurrences");
} else {
  console.log(Array(count).fill("C is fun").join("\n"));
}