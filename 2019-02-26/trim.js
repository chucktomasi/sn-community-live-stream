var short_description = '          \t\t\treal text .';

var sd = short_description.trim();

if (sd.length == 0) {
    gs.info('Hey, why not provide a short description?!');
} else {
    gs.info('Thank you for the short description');
}
gs.info('sd=' + sd);