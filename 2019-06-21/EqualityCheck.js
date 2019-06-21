var i = 15;
var max = 15;

if (i > max) {
  gs.info('We have exceeded the max');
} else if (i < max) {
   gs.info('Still below max');
} else if (i === max) {
  gs.info('equals');
} else {
  gs.info('What the....??!');
}