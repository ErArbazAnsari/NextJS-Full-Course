import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h3 className="text-red-600">Page Not Found...</h3>
            <Link href={"/"}>Go Home</Link>
        </div>
    );
};

export default NotFound;
