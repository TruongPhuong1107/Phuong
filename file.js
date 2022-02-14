function ham(s) {
  let pattern = /\bphuong\b/;
  var stre = pattern.test(s);
  return stre;
}
console.log(ham("a phuong asa"));
