// Select the node that will be observed for mutations
// const targetNode = document.getElementById("some-id");
const targetNode = document.querySelector('title');;

// Options for the observer (which mutations to observe)
const config = {childList: true};

// Video Title
const initialTitle = document.title;

// Video length
var videoLengthSeconds = document.getElementsByTagName("video")[0].duration;

const pad = (number) => {
    let retstr = number+"";
    if(retstr.length<2){
        retstr = "0"+retstr;
    }
    return retstr;
};

const makeDurationString = (seconds) => {
    const secR = Math.round(seconds);
    secs = Math.floor(secR)%60;
    mins = Math.floor(secR/60)%(60*60);
    hrs  = Math.floor(secR/(60*60));
    len  =  (secR<60)       ? (secs+"").length   : 
            (secR<(60*60))  ? (mins+"").length+2 : 
                               (hrs+"").length+4 ;
    
    return ("_"+len+" "+pad(hrs)+":"+pad(mins)+":"+pad(secs)+" ");
};

// Tab title
const finalTitle = makeDurationString(videoLengthSeconds)+initialTitle;

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  console.log(document.title);
                                //   for (const mutation of mutationList) {
                                //     if (mutation.type === "childList") {
                                //       console.log("A child node has been added or removed.");
                                //     } else if (mutation.type === "attributes") {
                                //       console.log(`The ${mutation.attributeName} attribute was modified.`);
                                //     } else {
                                //         console.log(`WEENIE`);
                                //     }
                                //   }
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("Title has been changed to: "+document.title+" ... Correcting");
      if(!document.title.startsWith("_"))  {
        document.title = finalTitle;
        console.log("Corrected to: "+document.title);
      }
    } 
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);



console.log(targetNode);
console.log(config);
console.log(callback);
console.log(document.title);
// Start observing the target node for configured mutations
observer.observe(targetNode, config);


document.title = "yeet";
document.title = "osjdhaskjhdkljsadkljhasdkjnsadkjhdskjh";
document.title = "test";
console.log(document.getElementsByTagName("video")[0].duration)
document.title = Math.round(document.getElementsByTagName("video")[0].duration);
console.log(document.title)
console.log(`glorp`);

