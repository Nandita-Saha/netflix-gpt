export const CheckValidData =(name, email, password) =>{

    const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email); //returns a boolean value, if valid true, not valid false

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isNameValid) return "Name not valid";
    if(!isEmailValid) return "Email not valid";
    if(!isPasswordValid) return "Password not valid";

    return null;

}