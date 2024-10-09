import "@/styles/home.scss";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
    const user = await currentUser();

    if (!user) return redirect("/");

    return <div className="container">TODO: Make post functionality</div>;
}
