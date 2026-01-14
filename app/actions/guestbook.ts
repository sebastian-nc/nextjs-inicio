"use server";

import prisma from "@/lib/prisma-client";
import { revalidatePath } from "next/cache";

interface ComentarioType {
    id: string;
    nombre: string;
    mensaje: string;
    fecha: string;
}

const comentarios: ComentarioType[] = [];


interface State {
    message: string;
    success: boolean;
}

export async function agregarComentario(formData: FormData): Promise<void> {
    const nombre = formData.get("nombre") as string;
    const mensaje = formData.get("mensaje") as string;

    if (!nombre || !mensaje) {
        return
    }

    await prisma.comentario.create({
        data: {
            nombre,
            mensaje
        }
    })

    revalidatePath("/book-guest");

}

export async function obtenerComentarios() {
    return await prisma.comentario.findMany();
}