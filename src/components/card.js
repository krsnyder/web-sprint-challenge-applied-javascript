import axios from 'axios'

const Card = ({ headline, authorPhoto, authorName }) => {
  // Instantiate all elements
  let card = document.createElement('div')
  let cardHead = document.createElement('div')
  let author = document.createElement('div')
  let imgContainer = document.createElement('div')
  let image = document.createElement('img')
  let name = document.createElement('span')

  // Add classes and attributes to elements
  card.classList.add('card')
  cardHead.classList.add('headline')
  author.classList.add('autho')
  imgContainer.classList.add('img-container')
  image.setAttribute('src', authorPhoto)

  // Fill elements with content
  cardHead.textContent = headline
  name.textContent = `By ${authorName}`

  // Append elements appropriately
  card.appendChild(cardHead)
  card.appendChild(author)
  author.appendChild(imgContainer)
  author.appendChild(name)
  imgContainer.appendChild(image)

  card.addEventListener('click', () => {
    console.log(headline)
  })

  console.log(card)
  return card
}

const cardAppender = (selector) => {

  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
      // First step is destructuring the response object and using the spread operator
      const { javascript, bootstrap, technology, jquery, node } = res.data.articles
      let array = [...javascript, ...bootstrap, ...technology, ...jquery, ...node]

      let parent = document.querySelector(selector)

      array.forEach(card => {
        parent.appendChild(Card(card))
        // Card(card)
        // console.log(card.headline)
      })
      
  })

}

export { Card, cardAppender }

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

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
