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