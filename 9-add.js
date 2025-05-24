
function add(a = 0, b = 0) {
  console.log(a + b);
}

add(Number(process.argv[2]), Number(process.argv[3]));
