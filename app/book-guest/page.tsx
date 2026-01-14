import { obtenerComentarios, agregarComentario } from "@/app/actions/guestbook";
import { BotonFirmar } from "../_components/BotonFirmar";

// OJO: Metadata dinámica para practicar
export const metadata = {
    title: 'Libro de Visitas',
};

export default async function GuestbookPage() {
    // 1. Leemos los comentarios (Fetching en el servidor)
    const comentarios = await obtenerComentarios();

    return (
        <div className="p-10 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Libro de Visitas 📖</h1>

            {/* Formulario para agregar */}
            <div className="bg-gray-100 p-6 rounded-lg mb-10 dark:bg-gray-800">
                <h2 className="text-xl font-semibold mb-4">Deja tu firma</h2>

                {/* Usamos la Server Action directamente en el action */}
                <form action={agregarComentario} className="flex flex-col gap-4">
                    <input
                        name="nombre"
                        placeholder="Tu nombre"
                        className="p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
                        required
                    />
                    <textarea
                        name="mensaje"
                        placeholder="Escribe algo bonito..."
                        className="p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
                        required
                    />
                    <BotonFirmar />
                    {/* <button className="bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">
                        Firmar
                    </button> */}
                </form>
            </div>

            {/* Lista de Comentarios */}
            <div className="space-y-4">
                {comentarios.map((c) => (
                    <div key={c.id} className="border p-4 rounded-lg shadow-sm bg-white dark:bg-gray-900 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-2">
                            <strong className="text-lg text-blue-600">{c.nombre}</strong>
                            <span className="text-xs text-gray-500">{c.fecha.toDateString()}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{c.mensaje}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}