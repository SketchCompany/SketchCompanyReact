"use client"; // falls du App Router nutzt

import { useEffect } from "react";
import Comment from "./comment";

const $ = (selector: string) => document.querySelector(selector);
const minScroll = 90;

export default function HeaderScroll() {
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > minScroll) {
				$("header")?.classList.add("header-scrolling");
			} else if ($("header")?.classList.contains("header-scrolling")) {
				$("header")?.classList.remove("header-scrolling");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return <Comment text="HeaderScroll hinzugefügt"></Comment>;
}
