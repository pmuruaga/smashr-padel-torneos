import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly prismaService: PrismaService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('prueba-db')
  async pruebaDB() {
    const usuarios = await this.prismaService.usuario.findMany();
    return { mensaje: 'Conexión a DB exitosa', usuarios };
  }
}
