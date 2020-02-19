
exports.min = function min (array) {
if (array == undefined || array == 0)
	 {
	 	return 0;
	 }
  return Math.min(...array);
}

exports.max = function max (array) {
	if (array == undefined || array == 0)
	 {
	 	return 0;
	 }
  return Math.max(...array);
}

exports.avg = function avg (array) {
	if (array == undefined || array == 0)
	 {
	 	return 0;
	 }
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer)/array.length;
}
