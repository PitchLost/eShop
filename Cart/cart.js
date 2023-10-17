// Delete Buttons
let deleteBtn = document.querySelectorAll('.cartRemove');
let originalStyles = {}


// Add to Cart buttons
let addBtn = document.querySelectorAll('.cartBtn');




// Add event listener to each "Add to Cart" button
addBtn.forEach(button => {
  button.addEventListener('click', e => { 
    let activeBtn = e.target;
    let rowContents = activeBtn.parentElement;
    let dupeItem = rowContents
    let cartItemRow = document.getElementById('cartItems')
    cartItemRow.appendChild(dupeItem)
  });
});





deleteBtn.forEach(button => { 
    button.addEventListener('click', e => { 
        let activeDelBtn = e.target;
        let elementToRemove = activeDelBtn.parentElement; 
       elementToRemove.remove();
});
});



