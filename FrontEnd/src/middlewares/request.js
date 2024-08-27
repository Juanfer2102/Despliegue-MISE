// middleware.js (en el directorio de funciones del servidor o en una función de edge)
import cookie from 'cookie';

export async function onRequest(context) {
    const { request, locals } = context;
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const token = cookies.access_token;

    if (!token) {
        return new Response(null, {
            status: 302,
            headers: { Location: '/' },
        });
    }

    // Aquí deberías verificar el token con tu backend
    try {
        // Llama a tu API para validar el token
        const response = await fetch('http://localhost:8000/api/v2/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        const result = await response.json();

        if (!result.valid) {
            return new Response(null, {
                status: 302,
                headers: { Location: '/login' },
            });
        }
    } catch (error) {
        return new Response(null, {
            status: 500,
            body: 'Error al validar el token',
        });
    }

    return locals.next();
}
