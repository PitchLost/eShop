// Delete Buttons
let deleteBtn = document.querySelectorAll('.cartRemove');



// Add to Cart buttons
let addBtn = document.querySelectorAll('.cartBtn');



// Add event listener to each "Add to Cart" button
addBtn.forEach(button => {
  button.addEventListener('click', e => { 
    let activeBtn = e.target;
    let rowContents = activeBtn.parentElement;
    let cartItemRow = document.getElementById('cartItems')
    cartItemRow.appendChild(rowContents)
  });
});
