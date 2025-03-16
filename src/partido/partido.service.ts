import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Partido, Genero, InstanciaPartido } from '@prisma/client';
import { Prisma } from '@prisma/client';

@Injectable()
export class PartidoService {
  constructor(private prisma: PrismaService) {}

  async crearPartido(data: { eventoId?: string; fecha: Date; hora: string; categoria: string; genero: Genero; instancia: InstanciaPartido }): Promise<Partido> {
    return this.prisma.partido.create({ data });
  }

  async obtenerPartidos(): Promise<Partido[]> {
    return this.prisma.partido.findMany();
  }

  async obtenerPartidoPorId(id: string): Promise<Partido | null> {
    return this.prisma.partido.findUnique({ where: { id } });
  }

  async actualizarPartido(id: string, data: Prisma.PartidoUpdateInput): Promise<Partido> {
    return this.prisma.partido.update({ where: { id }, data });
  }

  async eliminarPartido(id: string): Promise<Partido> {
    return this.prisma.partido.delete({ where: { id } });
  }
}
