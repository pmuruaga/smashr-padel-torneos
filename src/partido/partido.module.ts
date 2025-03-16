import { Module } from '@nestjs/common';
import { PartidoController } from './partido.controller';
import { PartidoService } from './partido.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PartidoController],
  providers: [PartidoService]
})
export class PartidoModule {}
