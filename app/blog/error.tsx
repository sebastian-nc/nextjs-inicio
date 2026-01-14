"use client"; // <--- OBLIGATORIO en error.tsx

import { useEffect } from "react";

interface Props {
    error: Error & { digest?: string };
    reset: () => void; // Función mágica para reintentar
}

export default function ErrorBoundary({ error, reset }: Props) {

    useEffect(() => {
        // Aquí podrías enviar el error a un servicio de reportes (Sentry, etc.)
        console.error("🚨 Ocurrió un error en el Blog:", error.digest);
    }, [error]);

    return (
        <div className="p-10 bg-red-50 border border-red-200 rounded-lg text-center mt-5">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
                ¡Ups! Algo salió mal al cargar las noticias.
            </h2>
            <p className="text-gray-600 mb-6">
                {error.message || "Error desconocido"}
            </p>

            {/* Botón para intentar recuperar la página sin recargar F5 */}
            <button
                onClick={reset}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
                Intentar de nuevo
            </button>
        </div>
    );
}