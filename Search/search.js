let searchBar = document.getElementById('searchBar')
const searchButton = document.getElementById('searchButton')
const searchForm = document.getElementById('searchForm')

let failedAttempts = 0

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
        alert("This Item dosent seem to exist. Check for any spelling errors and try again.");
        failedAttempts++;
        console.log('The amount of failed attemps are',failedAttempts)
        if (failedAttempts > 1) { 
            alert('If You are still having issues please report it using a bug report ')
        } else if (failedAttempts <1) { 
            return
        }
    }
});
