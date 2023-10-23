document.addEventListener('DOMContentLoaded',e => {

let userName = document.getElementById('usernameInput')
let passWord = document.getElementById('passwordInput')
const loginForm = document.getElementById('loginForm')

async function sendData(username, password) {
    console.log('Post Requested');
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    console.log('Form data value:', formData);

    try {
        const response = await fetch('/NodeServer/login', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        console.log('Promise Activated');
        
        if (response.ok) {
            console.log('Action seen');
        } else {
            console.error('ERR 999 Response failed');
        }
    } catch (error) {
        console.error('The Post was rejected', error);
    } finally {
        console.log('The Post was neither rejected nor accepted');
    }
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userNparcel = userName.value;
    const passWparcel = passWord.value;
    console.log(userNparcel);
    console.log(passWparcel);

    // Send the form data to the server
    await sendData(userNparcel, passWparcel);
});


})