import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import "@/styles/ui/navbar.scss";

export default async function Navbar() {
    const user = await currentUser();

    if (!user) return;

    return (
        <div className="navbar">
            <div className="nav-group">
                <Link href="/">UPS</Link>
            </div>

            <div className="user-button">
                <UserButton />
            </div>
        </div>
    );
}
