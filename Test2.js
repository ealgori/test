  window.onload = init();
  
 
 function init(){
 
  waitJqLoaded();
 
 }
 
function waitJqLoaded() {
    if (window.$){
        //possibly some other JQuery checks to make sure that everything is loaded here

        jqLoaded();
    } else {
        setTimeout(waitJqLoaded, 50);
    }
}


function waitIframeExist() {
    if ($("iframe").length > 0){
        //possibly some other JQuery checks to make sure that everything is loaded here

        iFrameExist();
    } else {
        setTimeout(waitIframeLoaded, 50);
    }
}

function jqLoaded()
{
  console.log('jquery loaded');
  waitIframeExist();
 
}

function iFrameExist(){
  console.log('iframe exist');
  
  $('iframe').load(function() { 
    console.log('iframe load complete');
  });
 // initBootstrap();
  AddFormControl();
}
  // function initJQ(){
  // var newscript = document.createElement('script');
  //   newscript.type = 'text/javascript';
  //   newscript.async = false;
  //   newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js';
  // document.getElementsByTagName('head')[0].appendChild(newscript);
  // }
  
  // function initBootstrap(){
  // var el = document; // shortcut
  // var cssId = 'myCss';  // you could encode the css path itself to generate id..
  // if (!el.getElementById(cssId))
  // {
  //     var head  = el.getElementsByTagName('head')[0];
  //     var link  = el.createElement('link');
  //     link.id   = cssId;
  //     link.rel  = 'stylesheet';
  //     link.type = 'text/css';
  //     link.href = 'https://rawgithub.com/surgerer/test/master/bootstrap.css';
  //     link.media = 'all';
  //     head.appendChild(link);
  // }
  // }
  
  function AddFormControl(){
      $('#iframe').contents().find('input').addClass('form-control');    
   console.log('forms-control setted');
}

