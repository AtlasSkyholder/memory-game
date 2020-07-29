document.addEventListener('DOMContentLoaded', () => {
  
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.jpg'
    },
    {
      name: 'fries',
      img: 'images/fries.jpg'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.jpg'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.jpg'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.jpg'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.jpg'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.jpg'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.jpg'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.jpg'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.jpg'
    },
    {
      name: 'pizza',
      img: 'images/pizza.jpg'
    },
    {
      name: 'pizza',
      img: 'images/pizza.jpg'
    }
  ]

  const grid = document.querySelector('.grid');
  let cardsChosen = [];
  let cardsChosenId = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipcard);
      grid.appendChild(card);
    }
  }

  //check for matches


  //flip your card
  function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray);
  }

  createBoard();
})