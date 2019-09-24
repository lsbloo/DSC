export class User{
    email: String;
    password: String;
    password_confirm: String;

    constructor(email: String,password: String,password_confirm: String){
        this.email=email;
        this.password=password;
        this.password_confirm=password_confirm;
    }

}