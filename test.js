var doc = window.frames['iframe'].contentDocument;
if(!doc)
	doc = document;
var els = doc.getElementsByTagName("a");
els_length = els.length;
for (var i = 0, l = els_length; i < l; i++) {
    var el = els[i];

    if (el.innerHTML.indexOf("jpg") >-1) {
        el.innerHTML="IMAGE";
        }
}