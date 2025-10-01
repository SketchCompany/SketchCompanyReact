import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header>
			<span className="left">
				<Link href="/">
					<span className="title">
						<Image src="/resources/img/icon.webp" width={35} height={35} loading="lazy" className="icon" alt="Sketch Company Logo" /> <p>Sketch Company</p>
					</span>
				</Link>
			</span>
			<span className="right">
				<Link href="/meeting">
					<span className="bi bi-chat-left-text"></span> Erstgespräch
				</Link>
				<Link href="/launcher">
					<span className="bi bi-rocket"></span> Launcher
				</Link>
				<Link href="/friendlyfire">
					<span className="bi bi-fire"></span> FriendlyFire
				</Link>
				<Link href="/games">
					<span className="bi bi-controller"></span> Spiele
				</Link>
				<Link href="/login?r=/" className="marked login-element">
					<span className="bi bi-person-circle"></span> Anmelden
				</Link>
				<span className="button-toggleOffcanvas bi bi-list"></span>
			</span>
		</header>
	);
}
