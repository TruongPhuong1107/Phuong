function ham(s) {
  let pattern = /\bphuong\b/;
  var strer = pattern.test(s);
  return strer;
}
console.log(ham("a phuong asa"));
