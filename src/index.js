module.exports = towelSort = matrix => {
  let result = [];
  if(matrix) matrix.forEach((i, index) => index % 2 ? i.reverse().forEach(i => result.push(i)) : i.forEach(i => result.push(i)));
  return result;
}

