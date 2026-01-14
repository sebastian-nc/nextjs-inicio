"use client";

import { useActionState } from "react";

export function FormContact() {
    function increment(prev: number, formData: FormData) {
        return prev + 1;
    }

    const [state, formAction] = useActionState(increment, 0);
    return (
        <>
            {state}
            <button formAction={formAction}>Incrementar</button>
        </>
    )
}