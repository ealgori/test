 init();
  
 
 function init(){
 
  console.log("version 0.14");
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
  //loadCSS('https://rawgithub.com/surgerer/test/master/table_styles.css');
  //loadSCRIPT('https://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.0/jquery.validate.min.js');

  
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
  
  function SubmitForm(wind)
  {
  	 wind.keepFilter();
			 if (wind.checkSaveAsNew()) 
			 	wind.submitAction('SaveObjectButton',"server");
  }
 
  
  function AddFormControl(){
  
	//var wind = document.getElementById('iframe').contentWindow;
	var wind = window;
	
	wind.$('input[value=Save]').attr('onclick','null');
	wind.$('input[value=Save]').click(function(event) {
	         var wotype = wind.$("td[title$='WO Type']>select").val();
	         if((wotype==101913)||(wotype==111405)||(wotype==117348))
	         {
	         	 var parentwo = wind.$("td[title$='Parent WO']>input").val();;
	              	 if (!parentwo)
	         	 {
	         	 	alert('Для типов Cancellation, Supplement и Change поле ParentWO должно быть заполнено');	
	         	 }
	         	 else
	         	 {
	         	 	SubmitForm(wind);	
	         	 }
	         }
	         else
	         {
	         	SubmitForm(wind);
	         }
	        
	        
				
	        
	         }); 
 

}
