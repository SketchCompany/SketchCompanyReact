import Image from "next/image";
import Link from "next/link";

export default function OffCanvas() {
	return (
		<div className="coffcanvas" style={{ display: "none" }}>
			<div className="content">
				<div className="top">
					<h2>
						<span className="bi bi-menu-button-wide"></span> Menü
					</h2>
					<span className="button-toggleOffcanvas bi bi-x-lg"></span>
				</div>
				<div className="options">
					<div>
						<div className="links">
							<Link href="/login?r=/" className="marked login-element">
								<span className="bi bi-person"></span> Anmelden
							</Link>
							<Link href="/meeting" className="marked">
								<span className="bi bi-chat-left-text"></span> Kostenloses Erstgespräch
							</Link>
							<Link href="/launcher" className="marked-reverse">
								<span className="bi bi-rocket"></span> Sketchy Games Launcher
							</Link>
							<Link href="/friendlyfire">
								<span className="bi bi-fire"></span> FriendlyFire
							</Link>
							<Link href="/games">
								<span className="bi bi-controller"></span> Sketchy Games
							</Link>
							<a href="https://tictactoe.sketch-company.de">
								<Image src="/resources/img/tictactoe_icon.webp" className="icon" alt="Online TicTacToe Icon" width={24} height={24} /> Online TicTacToe
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="background"></div>
		</div>
	);
}
