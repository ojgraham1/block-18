const{logIn, createAccount, signUpWithGoogle, logInWithGoogle} = require("../index.js");

test('was logging in successful', ()=>{
    expect(logIn ("luke","")).toBeFalsy();
    expect(logIn ("","pass")).toBeFalsy();
    expect(logIn ("","")).toBeFalsy();
    expect(logIn ("luke","pass")).toBeTruthy();
})

test('was creating an account successful', ()=>{
    expect(createAccount ("ojgraham1@gmail.com","")).toBeFalsy();
    expect(createAccount ("","beep")).toBeFalsy();
    expect(createAccount ("","")).toBeFalsy();
    expect(createAccount ("ojgraham1@gmail.com","beep")).toBeTruthy();
})

describe('Sign Up with Conditions', () => {
    it('should throw an error if email or password is missing', () => {
      expect(() => signUpWithConditions({ password: '123456' })).toThrow('Email and password are required.');
  
      expect(() => signUpWithConditions({ email: 'test@example.com' })).toThrow('Email and password are required.');
  
      expect(() => signUpWithConditions({})).toThrow('Email and password are required.');
    });
  
    it('should throw an error if password is too short', () => {
      expect(() => signUpWithConditions({ email: 'test@example.com', password: '12345' })).toThrow('Password must be at least 6 characters long.');
    });
  
    it('should sign up user successfully if conditions are met', () => {
      const user = { email: 'test@example.com', password: 'password123' };
      expect(signUpWithConditions(user)).toBe(`User ${user.email} signed up successfully.`);
    });
  });


test('was the log in successful', ()=>{
    expect(logInWithGoogle ("")).toBeFalsy();
    expect(logInWithGoogle ("@gmail.com")).toBeTruthy();
})

