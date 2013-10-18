var $ = document; // shortcut
var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!$.getElementById(cssId))
{
    var head  = $.getElementsByTagName('head')[0];
    var link  = $.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://getbootstrap.com/dist/css/bootstrap.css';
    link.media = 'all';
    head.appendChild(link);
}
