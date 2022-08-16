
// step-01: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    // step-02: get the e-mail address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-03: get password
    // 3.1: set id i=on the html element
    //3.2:  get the elelement
    //3.3: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    if (email === 'rasel@gmail.com' && password === 'secret25') {
        console.log('valid user');
    }
    else {
        console.log('invalid user');
    }


})