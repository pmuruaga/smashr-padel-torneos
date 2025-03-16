import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Evento } from '@prisma/client';

@Injectable()
export class EventoService {
  constructor(private prisma: PrismaService) {}

  async crearEvento(data: { nombre: string; tipoEventoId: string; fechaInicio: Date; fechaFin: Date }): Promise<Evento> {
    return this.prisma.evento.create({ data });
  }

  async obtenerEventos(): Promise<Evento[]> {
    return this.prisma.evento.findMany();
  }

  async obtenerEventoPorId(id: string): Promise<Evento | null> {
    return this.prisma.evento.findUnique({ where: { id } });
  }

  async actualizarEvento(id: string, data: Partial<Evento>): Promise<Evento> {
    return this.prisma.evento.update({ where: { id }, data });
  }

  async eliminarEvento(id: string): Promise<Evento> {
    return this.prisma.evento.delete({ where: { id } });
  }
}
