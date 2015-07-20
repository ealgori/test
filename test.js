var els = document.getElementsByTagName("a"),
  els_length = els.length;
for (var i = 0, l = els_length; i < l; i++) {
    var el = els[i];
    if (el.href.indexOf("113753") >-1) {
        el.innerHTML = "dead link";
        el.href = "#";
    }
}
function replaceContentInContainer(matchClass, content) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) {
            elems[i].innerHTML = content;
        }
    }
}
