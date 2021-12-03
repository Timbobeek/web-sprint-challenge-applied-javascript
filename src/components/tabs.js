import axios from "axios"

const Tabs = (topics) => {
  const topicsTab = document.createElement('div')
  const tabOne = document.createElement('div')
  const tabTwo = document.createElement('div')
  const tabThree = document.createElement('div')

  topicsTab.classList.add('topics')
  tabOne.classList.add('tab')
  tabTwo.classList.add('tab')
  tabThree.classList.add('tab')

  //set text here
  // write a for loop here to gather tabs from the topics array
  tabOne.textContent = firstTab
  tabTwo.textContent = secondTab
  tabThree.textContent = thirdTab

  topicsTab.appendChild(tabOne)
  topicsTab.appendChild(tabTwo)
  topicsTab.appendChild(tabThree)

  return topicsTab;



  
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  axios.get(`http://localhost:5000/api/topics`)
    .then(resp => {
      console.log(resp.data); //to see what the data looks like

      //we can see below how to get the needed data for each tab
      console.log(resp.data.topics[0]); 
      console.log(resp.data.topics[1]);
      console.log(resp.data.topics[2]);
      console.log(resp.data.topics[3]);
      console.log(resp.data.topics[4]);

      const tabObj = {
        firstTab: resp.data,
        secondTab: resp.data,
        thirdTab: resp.data
      }
      const entryPoint = document.querySelector(selector);
      entryPoint.appendChild(Tabs(tabObj))
    }) .catch (error => {
      console.error(error);
    }).finally(()=> console.log('operation complete!'));
  

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
