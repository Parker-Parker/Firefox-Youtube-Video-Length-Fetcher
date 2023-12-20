// Select the node that will be observed for mutations
// const targetNode = document.getElementById("some-id");
const targetNode = document.title;

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, characterData: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  console.log(`glorp`);
  console.log(document.head.title);
  console.log(document.title);
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    } else {
        console.log(`WEENIE`);
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
//observer.observe(targetNode, config);


document.title = "yeet";
document.title = "osjdhaskjhdkljsadkljhasdkjnsadkjhdskjh";
document.title = "test";
console.log(document.getElementsByTagName("video")[0].duration)
document.title = document.getElementsByTagName("video")[0].duration;
console.log(`glorp`);

