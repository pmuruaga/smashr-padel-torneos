import { Module } from '@nestjs/common';
import { EventoController } from './evento.controller';
import { EventoService } from './evento.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EventoController],
  providers: [EventoService]
})
export class EventoModule {}
