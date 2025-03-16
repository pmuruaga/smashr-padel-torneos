import { Module } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { JugadorController } from './jugador.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importar PrismaModule

@Module({
  imports: [PrismaModule], // Asegurar que PrismaModule está aquí
  controllers: [JugadorController],
  providers: [JugadorService],
})
export class JugadorModule {}
