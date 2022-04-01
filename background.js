
function absolvePage(){

    function absolveNode(node){
        // But unless you repent, you too will all perish. (Luke 13:3)

        if (node.tagName !== undefined){
            let position = window.getComputedStyle(node).position;
            if (position === 'absolute' || position === 'fixed' || position === 'sticky'){
                // What he did was wicked in the Lord’s sight; so the Lord put him to death also. (Genesis 38:10)
                node.remove();
            }
            else{
                // I now establish my covenant with you and with your descendants after you. (Genesis 9:9)
                for (let childNode of node.childNodes){
                    absolveNode(childNode)
                }
            }
        }
    }


    // If your right eye causes you to stumble, gouge it out and throw it away. It is better for you to lose one part of your body than for your whole body to be thrown into hell. (Matthew 5:29)
    absolveNode(document.body);

}

chrome.commands.onCommand.addListener(async (command)=>{

  if (command === 'absolve'){
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: absolvePage,
    });
  }

});
