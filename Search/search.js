let searchBar = document.getElementById('searchBar')
const searchButton = document.getElementById('searchButton')
const searchForm = document.getElementById('searchForm')

searchForm.addEventListener('submit',e => { 
    e.preventDefault()
    let targetId = searchBar.value;
    console.log('The Searched item is',targetId)
    let targetElement = targetId;

    //Scroll to the Item

    if (targetElement) {
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Element not found.");
    }
});
