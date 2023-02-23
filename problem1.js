var sum_to_n_a = function (n) {
  // your code here
  total = (n * (n + 1)) / 2;
  return total;
};

var sum_to_n_b = function (n) {
  // your code here
  total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

var sum_to_n_c = function (n) {
  // your code here
  let i = 1;
  let total = 0;
  while (i <= n) {
    total += i;
    i++;
  }
  return total;
};
