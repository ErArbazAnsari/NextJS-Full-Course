"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {
    const pathname = usePathname(); // we can't use this in a server component.
    // console.log(pathname);

    const searchParams = useSearchParams();
    console.log(searchParams.get("search"));
    console.log(searchParams.get("random"));
    console.log(searchParams)    
    return (
        <div>
            <h1>Cart Page</h1>
        </div>
    );
}
