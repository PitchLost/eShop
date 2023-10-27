document.addEventListener('DOMContentLoaded',e => {

let userName = document.getElementById('createusernameInput')
let passWord = document.getElementById('createpasswordInput')

const createAccForm = document.getElementById('createAccForm')


  // Create A Parcel to send

  let userNparcel = userName.value;
  let passWparcel = passWord.value;


 


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

  

    // Send the form data to the server
    await sendData(userNparcel, passWparcel);
    clearInput()
})
    
});


function clearInput() { 
    userName = null;
    passWord = null
   
}





