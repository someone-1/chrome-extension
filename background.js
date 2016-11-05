var link="";
function trigger(){
	
	console.log("triggered");
	chrome.tabs.query({active:true,currentWindow:true},function(tabs){
		tabs=tabs[0];
		//console.log(tabs);
		chrome.tabs.sendMessage(tabs.id,"message", function(response){
			console.log(response);
			//console.log("end");
			link=response;
		})
	})
	return link;
}

// chrome.browserAction.onClicked.addListener(function(){
// 	console.log("icon clicked");
// 	chrome.tabs.query({active:true,currentWindow:true},function(tabs){
// 		tabs=tabs[0];
// 		//console.log(tabs);
// 		chrome.tabs.sendMessage(tabs.id,"message", function(response){
// 			console.log(response);
// 			//console.log("end");

// 		})
// 	})
// })


