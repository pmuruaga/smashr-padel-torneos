import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { JugadorModule } from './jugador/jugador.module';
import { EventoModule } from './evento/evento.module';
import { PartidoModule } from './partido/partido.module';

@Module({
  imports: [PrismaModule, UsuarioModule, JugadorModule, EventoModule, PartidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
