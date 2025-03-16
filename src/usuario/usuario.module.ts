import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importar PrismaModule

@Module({
  imports: [PrismaModule], // Asegurar que PrismaModule está aquí
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
