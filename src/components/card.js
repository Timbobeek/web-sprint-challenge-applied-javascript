import axios from "axios"

const Card = (article) => {

  //console.log(article);
  
  const articleCard = document.createElement('div')
  const articleHeadline = document.createElement('div')
  const articleAuthor = document.createElement('div')
  const articleImageContainer = document.createElement('div')
  const articleImage = document.createElement('img')
  const articleSpan = document.createElement('span')

  articleCard.classList.add('card')
  articleHeadline.classList.add('headline')
  articleAuthor.classList.add('author')
  articleImageContainer.classList.add('img-container')

  // set attributes, text, etc
  articleHeadline.textContent = article.headline
  articleImage.src = article.authorPhoto
  articleSpan.textContent = `By ${article.authorName}`


  articleCard.appendChild(articleHeadline)
  articleCard.appendChild(articleAuthor)
  articleAuthor.appendChild(articleImageContainer)
  articleImageContainer.appendChild(articleImage)
  articleAuthor.appendChild(articleSpan)

  articleCard.addEventListener('click',()=>{
    console.log(article.headline);
  })

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  return articleCard;
}

const cardAppender = (selector) => {
  axios.get(`http://localhost:5000/api/articles`)
    .then(resp => {
      console.log(resp.data)

      const entryPoint = document.querySelector(selector);

      const allArticles = resp.data.articles
      const tabs = Object.keys(allArticles)

      tabs.forEach(tab => {
        const articles = allArticles[tab]
        // console.log('articles for ', tab, articles);

        articles.forEach(article => {
          const card = Card(article)
          entryPoint.appendChild(card)
        })
      })

    }) .catch (error => {
      console.error(error);
    }).finally(()=> console.log('operation done!'));
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
