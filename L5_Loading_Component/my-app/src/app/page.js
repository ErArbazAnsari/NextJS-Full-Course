"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    console.log(router);

    const [data, setData] = useState("Hello World");

    const handleProductClick = () => {
        router.push("/products");
    };
    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-4">
            <h1 className="text-3xl">Welcome to nextjs tutorial.</h1>
            <div className="flex gap-2 text-2xl">
                <Link href={"/products"}>
                    <button
                        className="bg-blue-500 p-3 text-white rounded-xl hover:bg-blue-600 active:bg-blue-500"
                        onClick={handleProductClick}
                    >
                        Product
                    </button>
                </Link>
                <Link href={"/account"}>
                    <button className="bg-blue-500 p-3 text-white rounded-xl hover:bg-blue-600 active:bg-blue-500">
                        Membership
                    </button>
                </Link>
            </div>
        </main>
    );
}
