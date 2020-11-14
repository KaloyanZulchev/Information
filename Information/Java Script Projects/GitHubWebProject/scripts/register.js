function register(){
    const htmlElemenets = {
        usernameInput: ()=> document.getElementById('username-input'),
        passwordInput: ()=> document.getElementById('password-input'),
    };

    const email = htmlElemenets.usernameInput().value;
    const password = htmlElemenets.passwordInput().value;

    auth.createUserWithEmailAndPassword(email,password)
    .then(userCredential => console.log(userCredential));
}