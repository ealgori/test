  window.onload = init();
  
 
 function init(){
  runYourFunctionWhenJQueryIsLoaded();
 }
 
function runYourFunctionWhenJQueryIsLoaded() {
    if (window.$){
        //possibly some other JQuery checks to make sure that everything is loaded here

        yourFunctionToRun();
    } else {
        setTimeout(runYourFunctionWhenJQueryIsLoaded, 50);
    }
}

function yourFunctionToRun()
{
  alert('jquery loaded');
}
 // function initJQ(){
 // var newscript = document.createElement('script');
//     newscript.type = 'text/javascript';
//     newscript.async = false;
//     newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
//  document.getElementsByTagName('head')[0].appendChild(newscript);
//  }
  
  function initBootstrap(){
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
  }
  
  function AddFormControl(){
      $('#iframe').contents().find('input').addClass('form-control');    
  
}

