export default function Comment({ text }: { text: string }) {
	return <div title={text} style={{ display: "none" }}></div>;
}
