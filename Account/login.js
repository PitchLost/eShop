let usernameInput = document.getElementById('usernameInput')
let passwordInput = document.getElementById('passwordInput')


const loginForm = document.getElementById('loginForm')


  // Create A Parcel to send

  let userNpackage = usernameInput.value;
  let passWpackage = passwordInput.value;


 


// Create Account Code


async function sendData(userNparcel, passWparcel) {
    console.log('Post Requested');
    
     userNparcel = userName.value;
     passWparcel = passWord.value;
     console.log('Username Parcel:',userNparcel,'Password Parcel:',passWparcel)

    const formContents = document.createElement('div');
    formContents.append(userNparcel, passWparcel)
    console.log(formContents.innerHTML)

    try {
        let response = await fetch('http://localhost:5500/NodeServer/server.mjs/createAcc', {
            method: 'POST',
            body: userNparcel + ' ' + passWparcel,
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

createAccForm.addEventListener('submit', async (e) => {
    e.preventDefault();

  

    // Get the form data from the server
    await getData(userNparcel, passWparcel);
    clearInput()
})
    



function clearInput() { 
    userName = null;
    passWord = null
   
}





