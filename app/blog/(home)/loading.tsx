export default function Loading() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-8">Cargando noticias...</h1>

            <div className="grid gap-4 animate-pulse">
                {/* Generamos 5 cajas grises para simular contenido */}
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="p-6 border rounded-lg h-32 bg-gray-100">
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}