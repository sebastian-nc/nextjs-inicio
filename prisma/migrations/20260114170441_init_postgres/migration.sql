-- CreateTable
CREATE TABLE "Comentario" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id")
);
