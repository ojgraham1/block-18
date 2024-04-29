function logIn(username, password){
    if(username.length===0 || password.length===0){
        return false
    }else if (username==="luke" && password==="pass"){
        return true
    }else{
        return false
    }
}

function createAccount(email, password){
    if(email.length===0 || password.length===0){
        return false
    }else if(email==="ojgraham1@gmail.com" && password==="beep"){
        return true
    }else{
        return false
    }
}

function signUpWithGoogle(user){
    if(!user||!user.email||!user.password){
        throw new Error('Email and password are required.');
    }
    if (user.password.length < 6){
        throw new Error('password must be at least 6 characters long.');
    }
    return 'user ${user.email} signed up succesfully.'
}

function logInWithGoogle(email){
    if(email.length===0){
        return false
    }else if(email==="@gmail.com"){
        return true
    }else{
        return false
    }
}

module.exports = {logIn, createAccount, signUpWithGoogle, logInWithGoogle}