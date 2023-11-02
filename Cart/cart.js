//* Errors

//! Only unexpected behaviour I am experiencing at the moment is the package sent being empty.


//* ERRCOM IS FOR REFERENCE!!!! */


// Delete Buttons
let deleteBtn = document.querySelectorAll('.cartRemove');

// Add to Cart buttons
let addBtn = document.querySelectorAll('.cartBtn');

let cartItemRow = document.getElementById('cartItems'); // Assuming 'cartItems' is the container for the cloned items

// Array to store references to cloned items
let clonedItems = [];

let itemCounter = 0

// ! TESTING AHEAD 

// Declare a empty array to store the items in cart name 

let cartedItemName = [] 

// The same for price

let cartedItemPrice = []

// Same for Image 

// This one is a little harder since its not innerText but figure out later. 
// Might be easier not to have the image at all tbh

let cartedItemImage = []

let cartArray = [];


let dupeItem = rowContents.cloneNode(true); 

//! TESTING DONE





// Define elements to append the cart items to

 

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



 

// Add event listener to each "Add to Cart" button
addBtn.forEach(button => {
  button.addEventListener('click', e => { 
    let activeBtn = e.target;
    let rowContents = activeBtn.parentElement;
    dupeItem = rowContents.cloneNode(true); 
    

 // Set CSS styles to control the layout
 dupeItem.style.display = 'flex'; // Display items in a flex container
 dupeItem.style.flexDirection = 'column'; // Items stacked vertically
 dupeItem.style.marginBottom = '10em'; // Add some space between items



// Keep track of the amount of items in the cart and append each row.


 

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
 

// Prepare the items for the POST

 const itemName = document.querySelector('.name').textContent;
 const itemPrice = document.querySelector('.price').textContent;
 const itemQuantity = document.querySelector('.quantity').textContent;


 const itemData = {
   name: itemName,
   price: itemPrice,
   quantity: itemQuantity,
 };
 console.log('itemData',itemData)

 cartArray.push(itemData);
 console.log('cartArray:',cartArray)
});

   
   


   

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



// When the form is submitted
cartForm.addEventListener('submit', async e => {
  e.preventDefault(); // This shouldnt submit the cart if its empty but likely does not work since its not exactly a 'form'
  console.log('POST CALLED')


  // Define a variable for the cloned items

  // We have to clone the items so they don't just append out of the cart and end up in the checkout with nothing left in the cart.
  // Pretty much just for usability but pretty simple so no reason not to do it

  
// Loop through the cloned items and extract data

 


  // Send the cart items as JSON to the server
  try {
    const cartResponse = await fetch('http://localhost:5500/NodeServer/server.mjs/cart', {
      method: 'POST',
      body: JSON.stringify(cartArray), // Convert to JSON
      headers: {
        'Content-Type': 'application/json', // Use JSON content type
      },
    });

    if (cartResponse.ok) {
      console.log('Cart submitted successfully.', 'The Items Submited were',JSON.stringify(clonedItems));
      
    } else {
      console.error('Cart submission failed.');
    }
  } catch (error) {
    console.error('The POST request was rejected:', error);
  }
});
