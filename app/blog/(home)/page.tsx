// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    body: string;
}


// 1. Convertimos el componente en async
export default async function BlogPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts: Post[] = await res.json();

    // 3. Renderizamos directamente. El usuario NO verá la página hasta que esto termine.
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-8">Últimas Noticias</h1>
            <Image src='https://placehold.co/400' width={400} height={200} alt="imagen de 400" unoptimized />

            <div className="grid gap-4">
                {posts.map((post: any) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="...">

                        {/* COMPONENTE IMAGE */}
                        <div className="mb-4">
                            <Image
                                src={`https://picsum.photos/seed/${post.id}/400/200`} // URL aleatoria basada en ID
                                alt="Imagen del artículo"
                                width={400}
                                height={200}
                                className="rounded-lg object-cover" // Clases de Tailwind funcionan igual
                            />
                        </div>

                        <h2 className="text-xl font-semibold">{post.title}</h2>
                    </Link>
                ))}
            </div>

        </div>
    );
}