
let cartContents = [];

// This is the variable for tracking how many items are in the cart
let numberOfItems = 0;


// Define an HTML element to append items to when the function is called
const itemListElement = document.getElementById('cartItems');


let addBtns = document.querySelector('.cartBtn');
addBtns.addEventListener('click', event => { 
    let activeAddBtn = event.target;
    console.log(activeAddBtn)
    activeAddBtn.parentElement.parentElement.remove()
    addToCart()
})

function addToCart() { 
return
}

