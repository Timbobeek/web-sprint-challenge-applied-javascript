const Header = (title, date, temp) => {
  
  const headerDiv = document.createElement('div')
  const dateSpan = document.createElement('span')
  const titleOne = document.createElement('h1')
  const tempSpan = document.createElement('span')

  headerDiv.classList.add('header')
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp')
  
  dateSpan.textContent = date
  titleOne.textContent = title
  tempSpan.textContent = temp

  headerDiv.appendChild(dateSpan)
  headerDiv.appendChild(titleOne)
  headerDiv.appendChild(tempSpan)

  return headerDiv;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>     ----> temp stands for temperature
  //  </div>
  //
}

// const entryPoint = document.querySelector('.header-container');

const headerAppender = (selector) => {
  
  const entryPoint = document.querySelector(selector);
  entryPoint.appendChild(Header('Lambda Times', 'April 17th','45C'));
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

}

export { Header, headerAppender }
