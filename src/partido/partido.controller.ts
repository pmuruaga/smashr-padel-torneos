import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { Partido, Genero, InstanciaPartido } from '@prisma/client';
import { Prisma } from '@prisma/client';

@Controller('partidos')
export class PartidoController {
  constructor(private readonly partidoService: PartidoService) {}

  @Post()
  crearPartido(@Body() data: { eventoId?: string; fecha: Date; hora: string; categoria: string; genero: Genero; instancia: InstanciaPartido }) {
    return this.partidoService.crearPartido(data);
  }

  @Get()
  obtenerPartidos() {
    return this.partidoService.obtenerPartidos();
  }

  @Get(':id')
  obtenerPartidoPorId(@Param('id') id: string) {
    return this.partidoService.obtenerPartidoPorId(id);
  }

  @Put(':id')
    actualizarPartido(@Param('id') id: string, @Body() data: Prisma.PartidoUpdateInput) {
    return this.partidoService.actualizarPartido(id, data);
  }

  @Delete(':id')
  eliminarPartido(@Param('id') id: string) {
    return this.partidoService.eliminarPartido(id);
  }
}
