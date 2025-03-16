import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EventoService } from './evento.service';
import { Evento } from '@prisma/client';

@Controller('eventos')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Post()
  crearEvento(@Body() data: { nombre: string; tipoEventoId: string; fechaInicio: Date; fechaFin: Date }) {
    return this.eventoService.crearEvento(data);
  }

  @Get()
  obtenerEventos() {
    return this.eventoService.obtenerEventos();
  }

  @Get(':id')
  obtenerEventoPorId(@Param('id') id: string) {
    return this.eventoService.obtenerEventoPorId(id);
  }

  @Put(':id')
  actualizarEvento(@Param('id') id: string, @Body() data: Partial<Evento>) {
    return this.eventoService.actualizarEvento(id, data);
  }

  @Delete(':id')
  eliminarEvento(@Param('id') id: string) {
    return this.eventoService.eliminarEvento(id);
  }
}
