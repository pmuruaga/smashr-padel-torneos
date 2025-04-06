import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const usuario = await this.authService.validarUsuario(body.email, body.password);
    return this.authService.login(usuario);
  }

  @Post('register')
  async register(@Body() body: { nombre: string; email: string; password: string; rol: string }) {
    return this.authService.registrarUsuario(body);
  }
}
