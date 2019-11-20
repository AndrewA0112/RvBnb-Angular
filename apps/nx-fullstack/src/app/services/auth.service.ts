import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    
    constructor(private http: HttpClient) {}

    loginUser(username: string, password: string) {
        console.log('Login User', username, password)
        return this.http.post('https://rvbnb.herokuapp.com/api/auth/login' ,{
            username, 
            password
        })
    }

    registerUser(username, password, isLandOwner) {
        return this.http.post('https://rvbnb.herokuapp.com/api/auth/register' , {
            username,
            password,
            is_land_owner: isLandOwner
        })
    }
}