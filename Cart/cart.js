// Delete Buttons
let deleteBtn = document.querySelectorAll('.cartRemove');

// Add to Cart buttons
let addBtn = document.querySelectorAll('.cartBtn');

let cartItemRow = document.getElementById('cartItems'); // Assuming 'cartItems' is the container for the cloned items

// Array to store references to cloned items
let clonedItems = [];



// ! EXPERERIMENTAL !!!! 

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
    let dupeItem = rowContents.cloneNode(true); 

 // Set CSS styles to control the layout
 dupeItem.style.display = 'flex'; // Display items in a flex container
 dupeItem.style.flexDirection = 'column'; // Items stacked vertically
 dupeItem.style.marginBottom = '10em'; // Add some space between items

 if (cartItem1filled == false) { 
  cartItem1.appendChild(dupeItem);
  cartItem1filled = true
  cartItemRow.style.height = '40%'
  cartItem1.style.display = 'block'
 } else if (cartItem2filled == false) { 
  cartItem2.appendChild(dupeItem);
  cartItem2filled = true;
  cartItemRow.style.height = '60%'
  cartItem2.style.display = 'block'
 } else if (cartItem3filled == false) { 
  cartItem3.appendChild(dupeItem);
  cartItem3filled = true
  cartItemRow.style.height = '80%'
  cartItem3.style.display = 'block'
 } else if (cartItem4filled == false) { 
  cartItem4.appendChild(dupeItem);
  cartItem4filled = true
  cartItemRow.style.height = '100%'
  cartItem4.style.display = 'block'
 } else if (cartItem5filled == false) { 
  cartItem5.appendChild(dupeItem);
  cartItem5filled = true
  cartItemRow.style.height = '120%'
  cartItem5.style.display = 'flex'
 }
   
   
   

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
