// Select the node that will be observed for mutations
// const targetNode = document.getElementById("some-id");
const targetNode = document.head.title;

// Options for the observer (which mutations to observe)
const config = { childList: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  console.log(`glorp`);
  console.log(document.head.title);
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

// Start observing the target node for configured mutations
observer.observe(targetNode, config);


document.head.title = "yeet";
document.head.title = "osjdhaskjhdkljsadkljhasdkjnsadkjhdskjh";
document.head.title = "test";

console.log(`glorp`);

