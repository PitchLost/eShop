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
        console.log('Add to cart Function called');

        // Get the parent element of the item that is being added
        itemBeingAdded = button.parentElement.cloneNode(true); // Clone the element
        
        // Add the item to the back of the array
        cartArray.push(itemBeingAdded);

    // Log the Item
        console.log('Item added:', itemBeingAdded, 'Cart Array:', cartArray);

        // Append the item to cartRows
        if (cartRows.children.length > 0) {
            cartRows.insertBefore(itemBeingAdded, cartRows.children[0]);
        } else {
            cartRows.appendChild(itemBeingAdded);
        }
        
       
       // Logs
       
        console.log('Cart Item appended')
        console.log('Add to cart complete')
        console.log('cartArray:',cartArray)
      
    });
});




// Delete a item 


let itemBeingDeleted;

// Get the cloned item and add event listners to the del button?? 


// Delete buttons: 

const delBtns = cartRows.querySelectorAll('.cartRemove')
cartRows.addEventListener('click', (e) => {
    let deleteSuccesful = false
    if (e.target.classList.contains('cartRemove')) {
        // The click event was on a delete button
        console.log('Delete Item called');
        itemBeingDeleted = e.target.parentElement;
        deleteSuccesful = true;
        console.log('Item being deleted is:', itemBeingDeleted);
        
        
        // Remove the item from the DOM: 
        e.target.parentElement.remove()

        // Remove the element from the array: 
       const itemIndex = cartArray.indexOf(e.target.parentElement) // Or itemBeingDeleted just thought this is more future proof
       if (itemIndex !== -1) {
        cartArray.splice(itemIndex, 1);
        


        // Logs
        
        // Log wether the delete was succesful or not:
        
        if (deleteSuccesful) { 
            console.log('deleteSuccesful:',deleteSuccesful);
        }
        else { 
            console.log('delete Not succesful',deleteSuccesful)
        }

        // Log The array after the element has been removed: 
        console.log('cartArray:',cartArray)
        
    }}})
    



