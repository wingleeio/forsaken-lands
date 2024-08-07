import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { Provider } from "$app/Provider";
import { cn } from "$lib/utils";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Forsaken Lands",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
