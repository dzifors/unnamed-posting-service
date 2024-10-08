import type { Metadata } from "next";
import "./globals.css";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
} from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Unnamed Posting Service",
    description: "Post Anything You Want!"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
