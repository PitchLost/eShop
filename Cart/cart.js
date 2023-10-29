//* Errors

//! (index):6587 crbug/1173575, non-JS module files deprecated. 
// This error comes after the click of the purchase button for the cart. 
// I believe the error is somewhere in this client code and not the server
// Clear code to be marked with //** ERRCOM */


// After Testing

// Seems that the error may not be in the client code and instead somewhere on the server side.
// Will need to look into further
// If the error cannot be found a thorough search of the entire project will need to occur. 
// This means that all javascript files or modular javascript files will need to be searched.
// If the error still does not show up kinda fucked after that




// Delete Buttons
let deleteBtn = document.querySelectorAll('.cartRemove');

// Add to Cart buttons
let addBtn = document.querySelectorAll('.cartBtn');

let cartItemRow = document.getElementById('cartItems'); // Assuming 'cartItems' is the container for the cloned items

// Array to store references to cloned items
let clonedItems = [];

let itemCounter = 0



// ! EXPERERIMENTAL !!!! 

//** ERRCOM 

let cartItem1 = document.getElementById('cartItem1');
let cartItem1filled = false;
let cartItem2 = document.getElementById('cartItem2');
let cartItem2filled = false;
let cartItem3 = document.getElementById('cartItem3');
let cartItem3filled = false;
let cartItem4 = document.getElementById('cartItem4');
let cartItem4filled = false;
let cartItem5 = document.getElementById('cartItem5');
let cartItem5filled = false;



//** ERRCOM 

// Add event listener to each "Add to Cart" button
addBtn.forEach(button => {
  button.addEventListener('click', e => { 
    let activeBtn = e.target;
    let rowContents = activeBtn.parentElement;
    let dupeItem = rowContents.cloneNode(true); 

 // Set CSS styles to control the layout
 dupeItem.style.display = 'flex'; // Display items in a flex container
 dupeItem.style.flexDirection = 'column'; // Items stacked vertically
 dupeItem.style.marginBottom = '10em'; // Add some space between items



// Keep track of the amount of items in the cart and append each row.


//** ERRCOM 

 if (cartItem1filled == false) { 
  cartItem1.appendChild(dupeItem);
  cartItem1filled = true
  cartItemRow.style.height = '40%'
  cartItem1.style.display = 'block'
  itemCounter++;
  console.log('The amount of items in the cart is',itemCounter)

 } else if (cartItem2filled == false) { 
  cartItem2.appendChild(dupeItem);
  cartItem2filled = true;
  cartItemRow.style.height = '60%'
  cartItem2.style.display = 'block'
  itemCounter++;
  console.log('The amount of items in the cart is',itemCounter)
 } else if (cartItem3filled == false) { 
  cartItem3.appendChild(dupeItem);
  cartItem3filled = true
  cartItemRow.style.height = '80%'
  cartItem3.style.display = 'block'
  itemCounter++;
  console.log('The amount of items in the cart is',itemCounter)
 } else if (cartItem4filled == false) { 
  cartItem4.appendChild(dupeItem);
  cartItem4filled = true
  cartItemRow.style.height = '100%'
  cartItem4.style.display = 'block'
  itemCounter++;
  console.log('The amount of items in the cart is',itemCounter)
 } else if (cartItem5filled == false) { 
  cartItem5.appendChild(dupeItem);
  cartItem5filled = true
  cartItemRow.style.height = '120%'
  cartItem5.style.display = 'flex'
  itemCounter++;
  console.log('The amount of items in the cart is',itemCounter)
 }
 
   
   


   //** ERRCOM

    // Store a reference to the cloned item in the array
    clonedItems.push(dupeItem);

    // Add a delete button to the cloned item
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('cartRemove');
    dupeItem.appendChild(deleteButton);

    // Add an event listener for the delete button
    deleteButton.addEventListener('click', () => {
      removeClonedItem(dupeItem);
    });
  });
});


// Function to remove a cloned item
function removeClonedItem(item) {
  item.remove();

  // Remove the item from the array of cloned items
  const index = clonedItems.indexOf(item);
  if (index !== -1) {
    clonedItems.splice(index, 1);
  }
}

deleteBtn.forEach(button => { 
    button.addEventListener('click', e => { 
        let activeDelBtn = e.target;
        let elementToRemove = activeDelBtn.parentElement;
        removeClonedItem(elementToRemove);
    });
});






//* Send Items to server


const cartForm = document.getElementById('cartForm')
const cartSubmit = document.getElementById('purchaseBtn')




cartForm.addEventListener('submit', async e => {
  
// ** ERRCOM 

let allItemsInCart = cartItemRow;
console.log('All the Items in the cart is',allItemsInCart)


//** ERRCOM 


try {
  let cartResponse = await fetch('http://localhost:5500/NodeServer/server.mjs/cart', {
      method: 'POST',
      body: allItemsInCart,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  });

  console.log('Promise Activated');
  
  if (cartResponse.ok) {
      console.log('Action seen');
      console.log('Response is',cartResponse)
  } else {
      console.error('ERR 999 Response failed');
  }
} catch (error) {
  console.error('The Post was rejected', error);
} finally {
  console.log('The Post was neither rejected nor accepted');
}

})