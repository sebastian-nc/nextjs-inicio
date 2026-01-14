'use client'; // <--- OBLIGATORIO para usar hooks

import { useActionState } from "react"; // En Next.js 15 / React 19
// import { useFormState } from "react-dom"; // Si usas una versión anterior

import { enviarMensaje } from "../actions/contacto";

// Estado inicial (antes de que el usuario envíe nada)
const initialState = {
    success: false,
    message: null,
};

export default function ContactoPage() {
    // HOOK MÁGICO 🪄
    // state: Contiene lo que devolvió el servidor (success, message)
    // formAction: Es la función "vitaminada" que conectamos al <form>
    // isPending: Nos dice si se está enviando (útil para deshabilitar botón)
    const [state, formAction, isPending] = useActionState(enviarMensaje, initialState);

    return (
        <div className="p-10 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>

            {/* FEEDBACK VISUAL */}
            {state.message && (
                <div className={`p-4 mb-4 rounded ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {state.message}
                </div>
            )}

            <form action={formAction} className="flex flex-col gap-4">

                <label className="font-semibold">
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        className="border p-2 rounded w-full text-black"
                        required
                        disabled={isPending} // Bloqueamos mientras carga
                    />
                </label>

                <label className="font-semibold">
                    Email:
                    <input
                        type="email"
                        name="email"
                        className="border p-2 rounded w-full text-black"
                        required
                        disabled={isPending}
                    />
                </label>

                <button
                    type="submit"
                    disabled={isPending}
                    className={`p-3 rounded font-bold text-white transition-colors ${isPending ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {isPending ? "Enviando..." : "Enviar Mensaje"}
                </button>

            </form>
        </div>
    );
}