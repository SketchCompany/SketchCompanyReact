//import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import "../resources/fonts/open-sans.css";
import "../resources/fonts/inter.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="de">
			<body className={``}>{children}</body>
		</html>
	);
}
