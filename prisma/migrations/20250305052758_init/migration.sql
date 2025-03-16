-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ORGANIZADOR', 'JUGADOR', 'ESPECTADOR');

-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('MASCULINO', 'FEMENINO', 'OTRO');

-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('MASCULINO', 'FEMENINO', 'MIXTO', 'LIBRE');

-- CreateEnum
CREATE TYPE "InstanciaPartido" AS ENUM ('UNICO', 'LIGA', 'PLAYOFF', 'OCTAVOS', 'CUARTOS', 'SEMIFINAL', 'FINAL', 'FASE_GRUPOS');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" "Rol" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jugador" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "foto" TEXT,
    "categoria" TEXT NOT NULL,
    "sexo" "Sexo" NOT NULL,

    CONSTRAINT "Jugador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipoEventoId" TEXT NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoEvento" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "TipoEvento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JugadorPorEvento" (
    "id" TEXT NOT NULL,
    "eventoId" TEXT NOT NULL,
    "jugadorId" TEXT NOT NULL,

    CONSTRAINT "JugadorPorEvento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizadoresPorEvento" (
    "id" TEXT NOT NULL,
    "eventoId" TEXT NOT NULL,
    "organizadorId" TEXT NOT NULL,

    CONSTRAINT "OrganizadoresPorEvento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partido" (
    "id" TEXT NOT NULL,
    "eventoId" TEXT,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "genero" "Genero" NOT NULL,
    "instancia" "InstanciaPartido" NOT NULL,
    "marcador" JSONB,

    CONSTRAINT "Partido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Jugador_dni_key" ON "Jugador"("dni");

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_tipoEventoId_fkey" FOREIGN KEY ("tipoEventoId") REFERENCES "TipoEvento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JugadorPorEvento" ADD CONSTRAINT "JugadorPorEvento_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JugadorPorEvento" ADD CONSTRAINT "JugadorPorEvento_jugadorId_fkey" FOREIGN KEY ("jugadorId") REFERENCES "Jugador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizadoresPorEvento" ADD CONSTRAINT "OrganizadoresPorEvento_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizadoresPorEvento" ADD CONSTRAINT "OrganizadoresPorEvento_organizadorId_fkey" FOREIGN KEY ("organizadorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partido" ADD CONSTRAINT "Partido_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
