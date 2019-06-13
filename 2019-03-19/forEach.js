var list = [
    {"name" : "Chuck", "computer" : "Mac"},
    {"name" : "Kreg", "computer" : "Chromebook"},
    {"name" : "Mark", "computer" : "Windows"},
    {"name" : "Donna", "computer" : "Mac"}
];

/*
for (var i = 0; i < list.length; i++) {
    var item = list[i];
    displayItem(item);
}
*/

list.forEach(function(item) {
      displayItem(item);
});

function displayItem(person) {
    gs.info('name=' + person.name + ' computer=' + person.computer);
}