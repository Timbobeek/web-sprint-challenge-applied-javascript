import axios from "axios"

// const topicsTab = document.createElement('div')
// topicsTab.classList.add('topics')

const Tabs = (topics) => {

  console.log(topics);

  const topicsTab = document.createElement('div')
  // const anyTab = document.createElement('div')

  topicsTab.classList.add('topics')
  // anyTab.classList.add('tab')

  for (let i = 0; i < topics.length; i++){
    const anyTab = document.createElement('div')
    anyTab.textContent = topics[i];
    anyTab.classList.add('tab')
    topicsTab.appendChild(anyTab)
  }

  // const topicsTab = document.createElement('div')
  // const anyTab = document.createElement('div')

  // topicsTab.classList.add('topics')
  // anyTab.classList.add('tab')
  // anyTab.textContent = topics[i];
  
  // topicsTab.appendChild(anyTab)
  
  return topicsTab;
}



  
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


const tabsAppender = (selector) => {
  axios.get(`http://localhost:5000/api/topics`)
    .then(resp => {
      console.log(resp.data.topics.length)
      console.log(resp.data.topics[0])
      
      // for (let i = 0; i < resp.data.topics.length; i++){
      //   const tabObj = resp.data.topics[i];
      //   const entryPoint = document.querySelector(selector);

        
      //   entryPoint.appendChild(Tabs(tabObj));
      // }
      
      const entryPoint = document.querySelector(selector);
      entryPoint.appendChild(Tabs(resp.data.topics));
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
