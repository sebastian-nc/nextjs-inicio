"use client";

import { useFormStatus } from "react-dom";

export function BotonFirmar() {
    const { pending } = useFormStatus();

    return (
        <button
            className={` text-white p-3 rounded font-bold hover:bg-blue-700 ${pending ? 'bg-gray-600 hover:bg-gray-600' : 'bg-blue-500'}`}
            disabled={pending}
        >
            {pending ? 'Enviando...' : 'Firmar'}
        </button>
    )
}