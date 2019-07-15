var id = '5b8c3c7edba2f340f6d0a422ca9619b4';
var episodeGr = new GlideRecord('x_snc_cls_episode');
episodeGr.get(id);

var yt = new YouTube();
var obj = yt.getComments(episodeGr);

// gs.info(JSON.stringify(obj, null, 4));

for (var i = 0; i < obj.items.length; i++) {
    var item = obj.items[i];
    var mySnippet = item.snippet.topLevelComment.snippet;
    gs.info('id=' + item.id + ' author=' + mySnippet.authorDisplayName + '\ncomment=' + mySnippet.textDisplay);
}