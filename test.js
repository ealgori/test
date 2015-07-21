//https://rawgit.com/surgerer/test/master/test.js
debugger;
loadScript("https://rawgit.com/madrobby/zepto/master/src/zepto.js", function(){
  
   loadScript("https://rawgit.com/madrobby/zepto/master/src/ajax.js", function(){
   
	});
});
var cookie = document.URL.slice(55,107);
console.log(cookie);
var doc;
var frame = window.frames['iframe'];
if(frame)
	doc = frame.contentDocument;
else{
	doc = document;
}
  
doc.onreadystatechange = function () {
    if (document.readyState == "complete") {
        createInstruction(123);
		setImage();
    }
}
function setImage()
{
		var els = doc.getElementsByTagName("a");
		els_length = els.length;
		for (var i = 0, l = els_length; i < l; i++) {
			var el = els[i];
			if((el.innerHTML.indexOf(".jpg")>-1)
				//||(el.innerHTML.indexOf(".png")>-1)
			){
				var elem = document.createElement("img");
				elem.setAttribute("src", el.href);
				el.innerHTML='';
				el.appendChild(elem);
				
				// $.ajax({
				  // type: 'GET',
				  // url: el.href,
				  // timeout: 300,
				   // contentType: "image/jpg",
				  // //context: $('body'),
				  // success: function(data){
					// console.log(data);
					// //
					// //el.innerHTML=('<img src="data:image/png;base64,' + data + '" />');
				  // },
				  // error: function(xhr, type){
					// //alert('Ajax error!')
				  // }
				// });
			};
			
		}
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function createInstruction(title){
	$.ajax({
  type: 'POST',
  url: '/sh-emea2/legacy/',
  // post payload:
  data: 'objects=&pattern=*&subset=0&totalCount=0&SUBSET_SIZE=500&selectedFilter=&objname='+title+'&objectGroup=100042&prop__113754=&saveprop__113754=&newObjectName=&objgroup=&floatOpen=&updateFilter=&ObjectId=0&ObjType=952&dynFormId=113758&node=19&templatename=DynFormSingleObject&encodedFilter=&SaveObjectButton=&newObject=true&deletedObject=&formNum=1437477017024&serverExecutionTime=30&serverQueueTime=0&clientStartTimeStamp=1437477026574&lastDynFormId=113758&lastServerExecutionTime=30&lastServerQueueTime=0&lastTotalTime=823&lastLoadTime=437&spfPropId=0&enableSpfFilter=false&forwardToForm=113758&requestId=146872&subsetSelected=false&'+cookie,
  contentType: 'application/x-www-form-urlencoded'
  
  
 
})
	
}
cookie=RXnF~Jlj1vwW1KsLZcZSSFLleJy_FynZdNa2ViPp8JA