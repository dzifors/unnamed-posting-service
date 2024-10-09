import { SignInButton } from "@clerk/nextjs";
import "@/styles/ui/signin-button.scss";

export default function LoginButton() {
    return (
        <div className="signin-button">
            <SignInButton />
        </div>
    );
}
