import { Metadata } from "next";
import Link from "next/link";

interface Props {
    params: Promise<{ id: string }>;
}

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function miSeo({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) throw new Error('No se encontro el post');

    const post: Post = await response.json();


    return {
        title: `POST #${id} | Mi blog`,
        description: `Estas leyendo el detalle del articulo ${post.title}`
    }
}


export { miSeo as generateMetadata }

export default async function Page({ params }: Props) {
    const { id } = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post: Post = await response.json();

    return (
        <>
            <h1>Leyendo el post {id}</h1>
            <h2 className="text-3xl">{post.title}</h2>
            <p>{post.body}</p>
            <Link href='/blog' className="bg-red-500 border border-white">Blog</Link>
        </>
    )
}