  init();
  
 
 function init(){
 
 
  console.log("version 0.49");
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
  loadCSS('https://rawgithub.com/surgerer/test/master/checkbox.css');
  //loadSCRIPT('https://rawgithub.com/erkie/erkie.github.com/master/asteroids.js');
   
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
  
    // unloadCSS('webforms');
    // $("[type='button']").addClass("btn");
 var lbl= $('<label/>').attr({ for: 'checkbox_207346_106073'});
  $("input[name='checkbox_206939_106073']").after(lbl)
  $("input[name='checkbox_206939_106073']").attr("id", "checkbox_206939_106073")
  $("input[name='checkbox_206939_106073']").addClass("regular-checkbox big-checkbox");
    
  //   var lbl= $('<label/>').attr({ for: 'checkbox_207346_106073'});
  // $("iframe").contents().find('#tab2frmid').contents().find("input[name='checkbox_206939_106073']").after(lbl)
  // $("iframe").contents().find('#tab2frmid').contents().find("input[name='checkbox_206939_106073']").attr("id", "checkbox_206939_106073")
  // $("iframe").contents().find('#tab2frmid').contents().find("input[name='checkbox_206939_106073']").addClass("regular-checkbox big-checkbox");
    
    
    // $("[name='DeleteObjectButton']").addClass("btn-danger");
    // $("textarea").addClass("form-control");
     
    // // $( "select" ).each(function( index ) {
    // //     $( this ).addClass("form-control");
    // //   });
    //   $("#formDiv").find("select").addClass('form-control');
    //   $("#formDiv").find("[type='text']").addClass('form-control');
    //   $("#formDiv > table>tbody>tr>td>div>table>tbody>tr>td>table:eq(0)").addClass('table table-striped table-hover');
    //   $("#formDiv > table>tbody>tr>td>div>table>tbody>tr>td>table>tbody>tr").addClass('form-inline');
    //   $("#dataTable>tbody>tr>td>table").css('width','64%');
    //   btn= $('<input/>').attr({ type: 'button', id:'btn1', value:'kill all humans', class: 'btn btn-warning'});
      
    //   $(btn).click(function(){
    //     loadSCRIPT('https://rawgithub.com/erkie/erkie.github.com/master/asteroids.js');
    //   })
    //   $('table:eq(4)').append(btn);
    //   console.log('forms-control setted');
      
    //   $("#formDiv").css('width','1200px');
    //$(".dynsec").attr("id", "pattern-style-a")
}

