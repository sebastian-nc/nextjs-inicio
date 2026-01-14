"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkType {
    path: string;
    name: string
};

export default function Navbar() {
    const pathName = usePathname();

    const links: LinkType[] = [{ path: '/', name: 'Inicio' }, { path: '/blog', name: 'Blog' }, { path: '/tienda/laptop', name: 'Oferta Laptop' }, { path: '/contacto', name: 'Contacto' }, { path: '/book-guest', name: 'Guest Book' }]

    return (
        <nav className="p-4 bg-gray-900 text-white flex gap-5">
            <div className="font-bold text-xl">Mi NextApp</div>
            {
                links.map((link) => (
                    <Link href={link.path} className={`hover:text-blue-400 ${pathName === link.path ? 'bg-white text-black' : ''}`} key={link.path}>
                        {link.name}
                    </Link>
                ))
            }
            {/* <Link href="/" className={`hover:text-blue-400 ${pathName == '/' && 'bg-white text-black'}`} >Inicio</Link>
            <Link href="/blog/1" className={`hover:text-blue-400 ${pathName == '/blog/1' && 'bg-white text-black'}`}>Blog #1</Link>
            <Link href="/tienda/laptop" className={`hover:text-blue-400 ${pathName == '/tienda/laptop' && 'bg-white text-black'}`}>Oferta Laptop</Link>
            <Link href="/contacto" className={`hover:text-blue-400 ${pathName == '/contacto' && 'bg-white text-black'}`}>Contacto</Link> */}
        </nav>
    )
}