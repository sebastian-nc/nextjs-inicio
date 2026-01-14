"use client";

import { agregarComentario } from "../actions/guestbook";
import { useActionState } from "react";

const initialState = {
    success: false,
    message: "",
}

export function FormGuestBook() {

    // const [state, formAction, isPending] = useActionState(agregarComentario, initialState);


    return (
        <h1>as</h1>
        // <form action={formAction} className="flex flex-col gap-4">
        //     <input
        //         name="nombre"
        //         placeholder="Tu nombre"
        //         className="p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
        //         required
        //     />
        //     <textarea
        //         name="mensaje"
        //         placeholder="Escribe algo bonito..."
        //         className="p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
        //         required
        //     />

        // </form>
    )
}