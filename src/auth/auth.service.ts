import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
    login() {
        return {message: 'i am login'};
     }

    register() {
        return {message: 'i am register'};
    }
}