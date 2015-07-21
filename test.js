window.addEventListener('load', console.log('load complete'), false )
debugger;
var doc;
var frame = window.frames['iframe'];
if(frame)
	doc = frame.contentDocument;
else{
	doc = document;
}
var els = doc.getElementsByTagName("a");
els_length = els.length;
for (var i = 0, l = els_length; i < l; i++) {
    var el = els[i];

    if (el.innerHTML.indexOf("jpg") >-1) {
        el.innerHTML="IMAGE";
        }
}