import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Jugador, Sexo } from '@prisma/client';

@Injectable()
export class JugadorService {
  private readonly logger = new Logger(JugadorService.name);

  constructor(private prisma: PrismaService) {}

  async crearJugador(data: { nombre: string; apellido: string; dni: string; foto?: string; categoria: string; sexo: Sexo }): Promise<Jugador> {
    this.logger.log(`Nuevo jugador creado: ${data.apellido}, ${data.nombre}`);
    return this.prisma.jugador.create({ data });
  }

  async obtenerJugadores(): Promise<Jugador[]> {
    this.logger.log('Obteniendo jugadores');
    return this.prisma.jugador.findMany();
  }

  async obtenerJugadorPorId(id: string): Promise<Jugador | null> {
    return this.prisma.jugador.findUnique({ where: { id } });
  }

  async actualizarJugador(id: string, data: Partial<Jugador>): Promise<Jugador> {
    return this.prisma.jugador.update({ where: { id }, data });
  }

  async eliminarJugador(id: string): Promise<Jugador> {
    return this.prisma.jugador.delete({ where: { id } });
  }
}
