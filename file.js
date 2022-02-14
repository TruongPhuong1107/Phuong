function ham(s) {
  let pattern = /\bphuong\b/;
  var str = pattern.test(s);
  return str;
}
console.log(ham("a phuong "));
