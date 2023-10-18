// Delete Buttons
let deleteBtn = document.querySelectorAll('.cartRemove');

// Add to Cart buttons
let addBtn = document.querySelectorAll('.cartBtn');

let cartItemRow = document.getElementById('cartItems'); // Assuming 'cartItems' is the container for the cloned items

// Array to store references to cloned items
let clonedItems = [];

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


    cartItemRow.appendChild(dupeItem);

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
