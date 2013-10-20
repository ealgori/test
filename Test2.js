  window.onload = init();
  
 
 function init(){
  console.log("version 0.1");
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


// function waitIframeExist() {
//     if ($("iframe").length > 0){
//         //possibly some other JQuery checks to make sure that everything is loaded here

//         iFrameExist();
//     } else {
//       console.log('iframe not exist');
//         setTimeout(waitIframeExist, 50);
//     }
// }

function jqLoaded()
{
  console.log('jquery loaded');
  loadCSS('https://rawgithub.com/surgerer/test/master/select2.css');
  loadCSS('https://rawgithub.com/surgerer/test/master/bootstrap.css');
   //loadSCRIPT('https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js');
  
  loadSCRIPT('https://rawgithub.com/surgerer/test/master/select2.js');
  
 //
  //initBootstrap();
 // unloadCss('webforms');
  AddFormControl();
 
}


function unloadCSS(cssName)
{
  $("link[href*="+cssName+"]").attr("disabled", "disabled");
 //$("link[href*=webforms]").remove(); 
  console.log(cssName +'unloaded');
}
// function iFrameExist(){
//   console.log('iframe exist');
  
//   $('iframe').load(function() { 
//     console.log('iframe load complete');
//   });
// // initBootstrap();
//   AddFormControl();
// }
  // function initJQ(){
  // var newscript = document.createElement('script');
  //   newscript.type = 'text/javascript';
  //   newscript.async = false;
  //   newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js';
  // document.getElementsByTagName('head')[0].appendChild(newscript);
  // }
  
    function loadSCRIPT(url){
  var newscript = document.createElement('script');
    newscript.type = 'text/javascript';
    newscript.async = false;
    newscript.src = url;
    document.getElementsByTagName('head')[0].appendChild(newscript);
     console.log(url+' loaded');
  }
  
  function loadCSS(url)
  {
    var el = document; // shortcut
  var cssId = 'myCss';  // you could encode the css path itself to generate id..
  if (!el.getElementById(cssId))
  {
      var head  = el.getElementsByTagName('head')[0];
      var link  = el.createElement('link');
      link.id   = cssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      link.media = 'all';
      head.appendChild(link);
      console.log(url+' loaded');
  }
  }
  
  
 
  
  function AddFormControl(){
     //$( "input" ).removeAttr('background');
     //$("link[href*=webforms]").remove();
     
     unloadCSS('webforms');
     $("[type='button']").addClass("btn");
     $("[name='CreateNewObjectButton']").addClass("btn-success");
     $("[name='DeleteObjectButton']").addClass("btn-danger");
     $( "select" ).each(function( index ) {
        $( this ).select2();
      });
     
     
     // $('input').addClass('form-control');    
      console.log('forms-control setted');
}

