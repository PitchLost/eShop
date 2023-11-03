// Add to cart Section: 



// Define a HTML element for the cart: 

const cartContainer = document.getElementById('cartItems')
const cartRows = document.getElementById('cartRows')

// Define a empty array to put the items into on call:

let cartArray = []; 

// Ensure that the array is empty 
console.log('cartArray at start:',cartArray) // TODEL

// Define a variable to assign the item being added to: 
let itemBeingAdded = undefined;

console.log('TODEL itemBeingAdded',itemBeingAdded) //TODEL

// Define the the callers (buttons): 

const addToCartBtns = document.querySelectorAll('.addBtn'); 



// Main Function to add the item
addToCartBtns.forEach(function (button) {
    button.addEventListener('click', function () {
        // Add the item to the back of the array and return the new length of it
cartArray.push(itemBeingAdded)
console.log('itemBeingAdded:',itemBeingAdded,'cartArray:',cartArray)
cartRows.appendChild(cartArray[length -1])
    });
});


