var link;

//console.log("content.js");
chrome.runtime.onMessage.addListener(

  function(request, sender, sendResponse) {
    
    link=document.getElementsByTagName('video')[0].src;

    //console.log(sender.tab);
    console.log(request)
    //if (request == "message")
      sendResponse(link);
      //console.log("response");
});

