import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Usuario, Rol } from '@prisma/client';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async crearUsuario(data: { nombre: string; email: string; password: string; rol: Rol }): Promise<Usuario> {
    return this.prisma.usuario.create({ data });
  }

  async obtenerUsuarios(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  async obtenerUsuarioPorId(id: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  async actualizarUsuario(id: string, data: Partial<Usuario>): Promise<Usuario> {
    return this.prisma.usuario.update({ where: { id }, data });
  }

  async eliminarUsuario(id: string): Promise<Usuario> {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
