export class UserDto {
    username: string;
    email?: string; // Optional field
    password?: string; // Optional field
    id?: string;
    phone?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(username: string, email?: string, password?: string, id?: string, phone?: string, createdAt?: string, updatedAt?: string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.id = id;
        this.phone = phone;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
