import "@/styles/globals.scss";
import Navbar from "@/ui/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

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
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
