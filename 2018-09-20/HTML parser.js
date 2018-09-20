var html = '<p><a href="https://community.servicenow.com/community?id=community_question&amp;sys_id=e786cf4bdb64e7040be6a345ca96194b" rel="nofollow">Integration with Slurm</a></p>\n' +
'<p><a href="https://community.servicenow.com/community?id=community_blog&amp;sys_id=62bf7f43dbacef80e0e80b55ca9619d8" rel="nofollow">Video: Community Live Stream 2018-09-19</a></p>\n' +
'<p>Views and View Rules</p>\n' +
'<p>&nbsp;</p>';

var patt = /"(https:\/\/[^"]+)?".*>(.*)<\/a>/;

var list = html.split('\n');

for (var i = 0; i < list.length; i++) {
    var line = list[i];
    var match = line.match(patt);
    if (match) {
        gs.info(match[1]);
    }
}
