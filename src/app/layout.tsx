import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Saladly - Fresh, Healthy Salads Delivered Daily",
    description:
        "Nutritious, hygienic & delicious salads made fresh every morning. Order now or subscribe for daily healthy meals delivered to your door.",
    keywords: [
        "salad delivery",
        "healthy food",
        "fresh salads",
        "meal subscription",
        "nutritious meals",
    ],
    openGraph: {
        title: "Saladly - Fresh, Healthy Salads Delivered Daily",
        description:
            "Nutritious, hygienic & delicious salads made fresh every morning.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Saladly - Fresh, Healthy Salads Delivered Daily",
        description:
            "Nutritious, hygienic & delicious salads made fresh every morning.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                {/* Meta Pixel Code */}
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=693474720386433&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                {/* End Meta Pixel Code */}
            </head>
            <body className="font-sans">
                <Script
                    id="meta-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '693474720386433');
                        fbq('track', 'PageView');
                        `,
                    }}
                />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
