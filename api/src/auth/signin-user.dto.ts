export class UserDto {
    username: string;
    email?: string; // Optional field
    password?: string; // Optional field

    constructor(username: string, email?: string, password?: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
