import { Module } from '@nestjs/common';
import { PartidoController } from './partido.controller';
import { PartidoService } from './partido.service';

@Module({
  controllers: [PartidoController],
  providers: [PartidoService]
})
export class PartidoModule {}
