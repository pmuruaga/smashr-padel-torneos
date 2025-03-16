import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { Jugador, Sexo } from '@prisma/client';

@Controller('jugadores')
export class JugadorController {
  constructor(private readonly jugadorService: JugadorService) {}

  @Post()
  crearJugador(@Body() data: { nombre: string; apellido: string; dni: string; foto?: string; categoria: string; sexo: Sexo }) {
    return this.jugadorService.crearJugador(data);
  }

  @Get()
  obtenerJugadores() {
    return this.jugadorService.obtenerJugadores();
  }

  @Get(':id')
  obtenerJugadorPorId(@Param('id') id: string) {
    return this.jugadorService.obtenerJugadorPorId(id);
  }

  @Put(':id')
  actualizarJugador(@Param('id') id: string, @Body() data: Partial<Jugador>) {
    return this.jugadorService.actualizarJugador(id, data);
  }

  @Delete(':id')
  eliminarJugador(@Param('id') id: string) {
    return this.jugadorService.eliminarJugador(id);
  }
}
