import Image from "next/image";
import Link from "next/link";

import "./page.css";

export const metadata = {};

export default function Home() {
	return (
		<>
			<div className="landing-page">
				<div className="content">
					<div className="overlay">
						<h1>Sketch Company</h1>
						<h3>Webentwicklung by Humans</h3>
						<div className="advantages">
							<p>
								<span className="bi bi-check-lg"></span> Günstiger
							</p>
							<p>
								<span className="bi bi-check-lg"></span> Schneller
							</p>
							<p>
								<span className="bi bi-check-lg"></span> Langfristiger Support
							</p>
						</div>
						<Link href="/meeting" className="meeting marked">
							<span className="bi bi-chat-left-text"></span> Kostenloses Erstgespräch
						</Link>
					</div>

					<Image src="/resources/img/logo outerRing white.webp" className="background-image ring" loading="lazy" alt="Sketch Company Logo - Outer Ring" width={500} height={500} />
					<Image src="/resources/img/logo innerText white.webp" className="background-image" loading="lazy" alt="Sketch Company Logo - innerText" width={500} height={500} />
				</div>
				<div className="landing-image">
					<Image src="/resources/img/hero.png" loading="lazy" alt="Sketch Company Webentwicklung - Symbolbild" /* width={600} height={450} */ width={500} height={425} />
				</div>
			</div>
		</>
	);
}
