import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Rol } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async validarUsuario(email: string, password: string) {
    const user = await this.prisma.usuario.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return user;
  }

  async login(usuario: any) {
    const payload = { sub: usuario.id, email: usuario.email, rol: usuario.rol };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registrarUsuario(data: { nombre: string; email: string; password: string; rol: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const usuario = await this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        email: data.email,
        password: hashedPassword,
        rol: data.rol as Rol,
      },
    });
    return this.login(usuario);
  }
}
