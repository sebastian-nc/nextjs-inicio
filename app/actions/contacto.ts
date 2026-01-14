'use server';

// Definimos qué forma tiene la respuesta que devolveremos
interface State {
    success: boolean;
    message: string | null;
    errors?: {
        nombre?: string[];
        email?: string[];
    };
}

// 1. Agregamos 'prevState' como primer argumento (Requisito de useActionState)
export async function enviarMensaje(prevState: State, formData: FormData): Promise<State> {

    // Simulamos demora
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const nombre = formData.get('nombre');
    const email = formData.get('email');

    console.log("📨 Procesando:", { nombre, email });

    // Validación básica (simulada)
    if (!email || email.toString().length < 5) {
        return {
            success: false,
            message: "El email no es válido.",
        };
    }

    // 2. Retornamos el nuevo estado para el cliente
    return {
        success: true,
        message: "¡Gracias! Hemos recibido tu mensaje correctamente.",
    };
}