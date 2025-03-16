import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario, Rol } from '@prisma/client';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  crearUsuario(@Body() data: { nombre: string; email: string; password: string; rol: Rol }) {
    return this.usuarioService.crearUsuario(data);
  }

  @Get()
  obtenerUsuarios() {
    return this.usuarioService.obtenerUsuarios();
  }

  @Get(':id')
  obtenerUsuarioPorId(@Param('id') id: string) {
    return this.usuarioService.obtenerUsuarioPorId(id);
  }

  @Put(':id')
  actualizarUsuario(@Param('id') id: string, @Body() data: Partial<Usuario>) {
    return this.usuarioService.actualizarUsuario(id, data);
  }

  @Delete(':id')
  eliminarUsuario(@Param('id') id: string) {
    return this.usuarioService.eliminarUsuario(id);
  }
}
