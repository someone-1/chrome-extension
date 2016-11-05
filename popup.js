(function(){
	var link="";
	var backgroundpage= chrome.extension.getBackgroundPage();
	document.getElementById('get').addEventListener('click', function(){
		backgroundpage.trigger();

		link=backgroundpage.link;
		console.log(backgroundpage.link)
		document.getElementById('link').href=backgroundpage.link
		
	});

	document.getElementById('download').addEventListener('click', function(){
		var name = document.getElementById('name').value+'.mp4';
		chrome.downloads.download({url:link,filename:name});

	});


}());