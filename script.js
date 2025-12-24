function mincost(arr) {
  if (arr.length <= 1) return 0;

  arr.sort((a, b) => a - b);
  let cost = 0;

  while (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();
    let sum = first + second;

    cost += sum;
    arr.push(sum);
    arr.sort((a, b) => a - b);
  }

  return cost;
}


module.exports=mincost;
