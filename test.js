//https://rawgit.com/surgerer/test/master/test.js
debugger;
loadScript("https://rawgit.com/madrobby/zepto/master/src/zepto.js", function(){
   console.log("zepto ready");
   loadScript("https://rawgit.com/madrobby/zepto/master/src/ajax.js", function(){
   console.log("ajax ready");
	});
});
var doc;
var frame = window.frames['iframe'];
if(frame)
	doc = frame.contentDocument;
else{
	doc = document;
}
  
doc.onreadystatechange = function () {
    if (document.readyState == "complete") {
        console.log("page is ready");
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
				||(el.innerHTML.indexOf(".png")>-1)
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

