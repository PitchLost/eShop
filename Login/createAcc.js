document.addEventListener('DOMContentLoaded',e => {

let userName = document.getElementById('usernameInput')
let passWord = document.getElementById('passwordInput')

const loginForm = document.getElementById('loginForm')


// Create Account Code


async function sendData(username, password) {
    console.log('Post Requested');
    const formContents = document.createElement('div');
    formContents.append(userName.value, passWord.value)
    console.log(formContents)

    try {
        let response = await fetch('http://localhost:5500/NodeServer/server.mjs/createAcc', {
            method: 'POST',
            body: formContents.value,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        console.log('Promise Activated');
        
        if (response.ok) {
            console.log('Action seen');
            console.log('Response is',response)
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
    clearInput()
})
    
});


function clearInput() { 
    userName = null;
    passWord = null
   
}




