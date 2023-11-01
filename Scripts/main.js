// Hello World

document.addEventListener('DOMContentLoaded', e => { 
    console.log('The DOM is loaded')
})

function openSettings() { 
    window.open('Settings/settings.html');
}
const userProfBtn = document.getElementById('userProfile')

function openProfile() { 
    window.open("../Account/createAcc.html");
}

// Button to scroll to the bottom cause it takes so FUCKING long

function scrollToBottom() { 
    const bottomOfPage = document.getElementById('cartItems')
    bottomOfPage.scrollIntoView({ behavior: 'smooth' });
}

// Button to scroll to the Top since it also takes so FUCKING long 

function scrollToTop() { 
    const topOfPage = document.getElementById('mainHeader')
    topOfPage.scrollIntoView({ behavior: 'smooth' });
}

// Button to refresh Page 

function refreshPage() { 
    location.reload();
}