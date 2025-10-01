//import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import "@/public/resources/fonts/open-sans.css";
import "@/public/resources/fonts/inter.css";

import Header from "@/components/header";
import OffCanvas from "@/components/offcanvas";
import Footer from "@/components/footer";
import Script from "next/script";
import { cookies } from "next/headers";
import CookieBanner from "@/components/cookiebanner";
import HeaderScroll from "@/components/header-scroll";

export const metadata = {
	title: "Sketch Company - Webentwicklung, Full-Stack, Kostenlose Videospiele, Indie-Games",
	applicationName: "Sketch Company",
	authors: [{ name: "Sketch Company" }],
	description: "Ich bin Max, selbständiger Webentwickler und Gründer von Sketch Company. Ich erstelle Websites für jeden, schnell, günstig und mit langfristigem Support. Dabei achte ich auf eine sehr gute Zusammenarbeit mit meinen Kunden und biete maßgeschneiderte Lösungen auf Berücksichtigung der Bedürfnisse.",
	icons: {
		icon: "/resources/img/favicon.ico",
		apple: "/resources/img/favicon180x180.png",
	},
	charset: "UTF-8",
	googleSiteVerification: "pApoPsfBTIdS2QMpChuihGcgPOxyB0NEfXb9zAYzsy0",

	openGraph: {
		title: "Sketch Company | Webentwicklung und kostenlose Videospiele",
		description: "Sketch Company entwickelt Websites für jeden der eine vernünftige und maßgeschneiderte Internet Präsenz benötigt. Nicht nur Websites erstellen wir, sondern auch Videospiele, hauptsächlich Indie-Games. Aber wir veröffentlichen nicht nur unsere eigenen Spiele sondern auch die von andere Indie-Game Entwicklern! Du kannst deine Spiele auch gerne auf unserer Website kostenlose veröffentlichen!",
		url: "https://sketch-company.de",
		siteName: "Sketch Company | Webentwicklung und kostenlose Videospiele",
		images: [
			{
				url: "/resources/img/icon.png",
				width: 1000,
				height: 1000,
				alt: "Sketch Company Logo",
			},
		],
		locale: "de_DE",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sketch Company | Webentwicklung und kostenlose Videospiele",
		description: "Sketch Company entwickelt Websites für jeden der eine vernünftige und maßgeschneiderte Internet Präsenz benötigt. Nicht nur Websites erstellen wir, sondern auch Videospiele, hauptsächlich Indie-Games. Aber wir veröffentlichen nicht nur unsere eigenen Spiele sondern auch die von andere Indie-Game Entwicklern! Du kannst deine Spiele auch gerne auf unserer Website kostenlose veröffentlichen!",
		images: ["/resources/img/icon.png"],
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
};

export const links = {};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const consent = cookieStore.get("cookie_consent");

	let acceptedCookies = null;
	if (consent) {
		try {
			acceptedCookies = JSON.parse(consent.value);
			console.log("cookies:", acceptedCookies);
		} catch {
			console.warn("cookies: cannot be parsed");
		}
	}

	return (
		<html lang="de">
			<body>
				<Header />
				<OffCanvas />
				<main>{children}</main>
				<Footer />
				{!acceptedCookies && <CookieBanner />}
				{acceptedCookies && acceptedCookies.analytics && (
					<>
						<Script src="https://www.googletagmanager.com/gtag/js?id=G-5JE1GBP9VR" strategy="afterInteractive" />
						<Script id="gtag-init" strategy="afterInteractive">
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', 'G-5JE1GBP9VR');
							`}
						</Script>
					</>
				)}
				<HeaderScroll></HeaderScroll>
			</body>
		</html>
	);
}
