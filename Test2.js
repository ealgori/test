  init();
  
 
 function init(){
 
  console.log("version 0.36");
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





function jqLoaded()
{
  console.log('jquery loaded');
  $( document ).ready(function() {
  // Handler for .ready() called.
   console.log('document ready');
  loadCSS('https://rawgithub.com/surgerer/test/master/bootstrap.css');
   //loadSCRIPT('https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js');
  AddFormControl();
  console.log("------------");
  })
}


function unloadCSS(cssName)
{
  $("link[href*="+cssName+"]").attr("disabled", "disabled");
 //$("link[href*=webforms]").remove(); 
  console.log(cssName +'unloaded');
}

  
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
  
     unloadCSS('webforms');
    $("[type='button']").addClass("btn");
    $("[name='CreateNewObjectButton']").addClass("btn-success");
    $("[name='DeleteObjectButton']").addClass("btn-danger");
    $("textarea").addClass("form-control");
     
    // $( "select" ).each(function( index ) {
    //     $( this ).addClass("form-control");
    //   });
      $("#formDiv").find("select").addClass('form-control');
      $("#formDiv").find("[type='text']").addClass('form-control');
      $("#formDiv > table>tbody>tr>td>div>table>tbody>tr>td>table:eq(0)").addClass('table table-striped table-hover');
     
     
        
      console.log('forms-control setted');
}

