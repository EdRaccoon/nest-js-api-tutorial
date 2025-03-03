import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/v1/auth')

export class AuthController {
    constructor(private authService : AuthService) {}

    @Post('register')
    register(){
        return this.authService.register();
    }

    @Post('login')
    login(){
        return this.authService.login();
    }
}