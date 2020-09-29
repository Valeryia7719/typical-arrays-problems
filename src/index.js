
exports.min = function min (array) {
  if (array == undefined) return ('0');
  else if (array.length == '0') return ('0');
  var minimum = array[0];
  for  (i = 0; i<array.length; i++) {
    if (array[i] < minimum ) {
      minimum = array[i];
    }
  }
  return minimum;
}


exports.max = function max (array) {
  if (array == undefined) return ('0');
  else if (array.length == '0') return ('0');
  var maximum = array[0];
  for  (i = 0; i<array.length; i++) {
    if (array[i] > maximum ) {
      maximum = array[i];
    }
  }
  return maximum;
}

exports.avg = function avg (array) {
  if (array == undefined) return ('0');
  else if (array.length == '0') return ('0');
  var sum = array[0];
  var average = 0;
  for (i=1; i<array.length; i++) {
    sum += array[i];
    average=sum/array.length;
  }
  return average;
}
