$(document).ready(function ($) {
  var el = document; // shortcut
  var cssId = 'myCss';  // you could encode the css path itself to generate id..
  if (!el.getElementById(cssId))
  {
      var head  = el.getElementsByTagName('head')[0];
      var link  = el.createElement('link');
      link.id   = cssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://rawgithub.com/surgerer/test/master/bootstrap.css';
      link.media = 'all';
      head.appendChild(link);
  }
  
  
      $('#iframe').contents().find('input').addClass('form-control');    
  

  })
