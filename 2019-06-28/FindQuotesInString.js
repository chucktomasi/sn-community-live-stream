var comment = g_form.getValue('u_comment');

if (comment.indexOf('"') >= 0) {
    alert('Hey, there is a quote here. Not good');
}