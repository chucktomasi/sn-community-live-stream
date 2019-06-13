var myStr = "Chuck,Kreg,Stacey,Dave,Andrew";
gs.info('myStr=' + myStr + ' typeof=' + typeof myStr);

var list = myStr.split(',');
gs.info('list=' + list + ' typeof=' + typeof list);

var myListStr = list.toString();
gs.info('myListStr=' + myListStr + ' typeof=' + typeof myListStr);

// Go through the list elements
list.forEach(function(item) {
    gs.info(item);
});

var arr = [];
arr.push("Jay");
arr.push("Carolyn");
arr.push("Paulo");
gs.info('arr=' + arr.toString(' '))
gs.info('nameIN' + arr.join(','));