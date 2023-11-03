// Define a HTML element for the cart:
const cartContainer = document.getElementById('cartItems');
const cartRows = document.getElementById('cartRows');

// Define an empty array to put the items into on call:
let cartArray = [];

// Define a variable to assign the item being added to:
let itemBeingAdded = undefined;

// Define the callers (buttons):
const addToCartBtns = document.querySelectorAll('.cartBtn');

// Main Function to add the item
addToCartBtns.forEach(function (button) {
    button.addEventListener('click', e => {
        // Log in the console that the function has been called
        console.log('Add to cart Function called')

        // Get the parent element of the item that is being added

        itemBeingAdded = button.parentElement;
        console.log('Item being added:', itemBeingAdded);

        // Add the item to the back of the array
        cartArray.push(itemBeingAdded);

        // Output the updated cartArray for debugging
        console.log('Item added:', itemBeingAdded, 'Cart Array:', cartArray);

        // Append the added item to the cartRows (assuming that cartRows is a container for cart items)
        cartRows.appendChild(itemBeingAdded);
    });
});

