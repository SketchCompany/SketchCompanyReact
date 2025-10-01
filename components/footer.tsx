import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<p>
				© {new Date().getFullYear().toString()} Sketch Company |<Link href="https://rights.sketch-company.de/#impressum">Impressum</Link> |<Link href="https://rights.sketch-company.de/#datenschutzerklärung">Datenschutzerklärung</Link> |<Link href="https://rights.sketch-company.de/#nutzungsbedingungen">Nutzungsbedingungen</Link> |<Link href="https://rights.sketch-company.de/#urheberrecht">Urheberrecht</Link>
			</p>
		</footer>
	);
}
