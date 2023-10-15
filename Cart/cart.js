//Hello World

// Define a var for the cart | This will contain the items that are added
let cart = '';

// Declare a var to add the item to when the function is called
let newItemToAdd = '';

// This is the var for tracking how many items are in the cart
let numberOfItems = 0

// Define a html element to append items to when the function is called
const itemListElement = document.getElementById('cartItems');

function addToCart() { 
    console.log('addToCart has been called')
    numberOfItems++;
    cart = 'item1'
    itemListElement.appendChild(cart)
    
}