const items = document.getElementsByClassName('items')
const container = document.getElementById('container')
const click = document.querySelectorAll('button')
const cartDisplay = document.getElementById('cartDisplay')
const total = document.getElementById('total')
let cart = []
let products = [
  {
    imgUrl: './chefWarrior.jpg',
    name: 'Chef Warrior',
    id: '0',
    price: '20'
  },
  {
    imgUrl: './pineapple.jpg',
    name: 'Pineapple',
    id: '1',
    price: '45'
  },
  {
    imgUrl: './babyCorn.jpg',
    name: 'The Future',
    id: '2',
    price: '100'
  },
  {
    imgUrl: './teddyDeath.jpg',
    name: 'Teddy Hitman',
    id: '3',
    price: '130'
  },
  {
    imgUrl: './fishEyes.jpg',
    name: 'Fish For Eyes',
    id: '4',
    price: '15'
  },
  {
    imgUrl: './iDontEvenKnow.jpg',
    name: 'Pure Rage',
    id: '5',
    price: '1000'
  }
]

class ShopItem {
  constructor(imgUrl, name, id, price) {
    this.imgUrl = imgUrl
    this.name = name
    this.id = id
    this.price = price
  }
}

for(let i = 0; i < products.length; i++){
  let productsDiv = `
  <div class="items" id="${products[i].id}">
    <img src="${products[i].imgUrl}" alt="">
    <h2>${products[i].name}, <br>
    Price: ${products[i].price}$</h2>
    <button onclick="addToCart(event)">
      Add to cart
    </button>
  </div>
  `
  container.innerHTML += productsDiv
}

function addToCart(e){
  let itemIndex = parseInt(e.target.parentNode.id)
  let item = products[itemIndex]
  cart.push(item)
  renderCart()
}

function removeFromCart(index){
  cart.splice(index, 1)
  renderCart()
}

function renderCart(){
  cartDisplay.innerHTML = cart.map((item, index) => ` 
    <div class="items"> 
      <h2>${item.name}, ${item.price}$</h2> 
      <img src="${item.imgUrl}" alt="${item.name}">
      <button onclick="removeFromCart(${index})">Delete</button>
    </div>
  `).join('');
  let totalPrice = 0
  console.clear()
  if(cart.length == 0){
    total.textContent = `Total Price: ${totalPrice}`
  }
  cart.forEach(item => {
    totalPrice += parseInt(item.price)
    total.textContent = `Total Price: ${totalPrice}`
  })
  console.table(cart)
  console.log(`The Total Price Is ${totalPrice}$`)
}

