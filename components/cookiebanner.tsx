"use client";

import { useState } from "react";
import "./cookie-banner.css";

type ConsentSettings = {
	necessary: boolean;
	analytics: boolean;
	marketing: boolean;
};

const DEFAULT_CONSENT: ConsentSettings = {
	necessary: true,
	analytics: false,
	marketing: false,
};

export default function CookieBanner() {
	const [showModal, setShowModal] = useState(false);
	const [settings, setSettings] = useState<ConsentSettings>(DEFAULT_CONSENT);

	function setConsent(newSettings: ConsentSettings) {
		document.cookie = `cookie_consent=${encodeURIComponent(JSON.stringify(newSettings))}; Path=/; Max-Age=31536000; SameSite=Lax`;
		location.reload();
	}

	function acceptAll() {
		setConsent({ necessary: true, analytics: true, marketing: true });
	}

	function acceptNecessary() {
		setConsent(DEFAULT_CONSENT);
	}

	return (
		<div className="cookie-banner">
			<div className="cookie-banner__content">
				<p>Wir verwenden Cookies, um unsere Website zu verbessern. Bitte wähle aus, welche Cookies du zulassen möchtest.</p>
				<div className="cookie-banner__buttons">
					<button onClick={acceptNecessary} className="btn btn--secondary">
						Nur notwendige
					</button>
					<button onClick={acceptAll} className="btn btn--primary">
						Alle akzeptieren
					</button>
					<button onClick={() => setShowModal(true)} className="btn btn--settings">
						Einstellungen
					</button>
				</div>
			</div>

			{showModal && (
				<div className="cookie-modal">
					<div className="cookie-modal__box">
						<h2>Cookie-Einstellungen</h2>
						<table className="cookie-table">
							<thead>
								<tr>
									<th>Kategorie</th>
									<th>Beschreibung</th>
									<th>Erlaubt</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Notwendig</td>
									<td>Erforderlich für den Betrieb der Seite.</td>
									<td>Immer aktiv</td>
								</tr>
								<tr>
									<td>Analytics</td>
									<td>Hilft uns, Besucherstatistiken zu erstellen.</td>
									<td>
										<input
											type="checkbox"
											checked={settings.analytics}
											onChange={e =>
												setSettings(prev => ({
													...prev,
													analytics: e.target.checked,
												}))
											}
										/>
									</td>
								</tr>
								<tr>
									<td>Marketing</td>
									<td>Personalisierte Werbung und Tracking.</td>
									<td>
										<input
											type="checkbox"
											checked={settings.marketing}
											onChange={e =>
												setSettings(prev => ({
													...prev,
													marketing: e.target.checked,
												}))
											}
										/>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="cookie-modal__actions">
							<button onClick={() => setShowModal(false)} className="btn btn--secondary">
								Abbrechen
							</button>
							<button onClick={() => setConsent(settings)} className="btn btn--primary">
								Speichern
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
