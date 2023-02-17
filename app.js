const items = document.getElementsByClassName('items')
const container = document.getElementById('container')
const click = document.querySelectorAll('button')
const cartDisplay = document.getElementById('cartDisplay')
let products = [
  {
    imgUrl: './chefWarrior.jpg',
    name: 'Chef Warrior',
    id: '0'
  },
  {
    imgUrl: './pineapple.jpg',
    name: 'Pineapple',
    id: '1'
  },
  {
    imgUrl: './babyCorn.jpg',
    name: 'The Future',
    id: '2'
  },
  {
    imgUrl: './teddyDeath.jpg',
    name: 'Teddy Hitman',
    id: '3'
  },
  {
    imgUrl: './fishEyes.jpg',
    name: 'Fish For Eyes',
    id: '4'
  },
  {
    imgUrl: './iDontEvenKnow.jpg',
    name: 'Pure Rages',
    id: '5'
  }
]

class ShopItem {
  constructor(imgUrl, name, id) {
    this.imgUrl = imgUrl
    this.name = name
    this.id = id
  }
}
/* 

container.addEventListener('click', e => {
  const closestItem = e.target.closest('.items')
  const itemName = closestItem.textContent.trim()
  const imgElement = closestItem.querySelector('img')
  const imgSrc = imgElement.src
  let item = new ShopItem(imgSrc, itemName)
  cart.push(item)
  console.log(cart)
  let create = document.createElement('div')
  create.innerText = item.name
  cartDisplay.appendChild(create)
}) */


for(let i = 0; i < products.length; i++){
  let productsDiv = `
  <div class="items">
    <img src="${products[i].imgUrl}" alt="">
    <h2>${products[i].name}</h2>
    <button id="${products[i].id}">
      Add to cart
    </button>
  </div>
  `
  container.innerHTML += productsDiv
}

for(let i = 0; i > products.length; i++){
  let button = document.getElementById(i)
  button.addEventListener('click', () => {
    cart.push(products[i])
    console.log(cart[i])
    console.log(cart.length)
  })
}

