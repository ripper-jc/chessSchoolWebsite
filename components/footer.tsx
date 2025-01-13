import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Footer() {
    return (
        <div className="w-full h-auto bg-stone-900 text-white p-14 text-center">
            <div className="flex flex-col md:flex-row justify-center gap-8">
                <Link href="/contacts">Про школу</Link>
                <Link href="/contacts">Переваги</Link>
                <Link href="/contacts">Тарифи</Link> 
                <Link href="/contacts">Контакти</Link>
                <Link href="/contacts">Договір публічної оферти</Link>
            </div>
            <div className="flex justify-center items-center m-6">
            <Image src={logo} alt="Logo" width={80} height={80} />
            </div>
            <p className="text-sm">© All Rights Reserved. Acme Design Co.</p>
        </div>
    );
}
