import LoginButton from "@/ui/signin-button";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function LandingPage() {
    const user = await currentUser();

    if (user) return redirect("/home");

    return <LoginButton />;
}
