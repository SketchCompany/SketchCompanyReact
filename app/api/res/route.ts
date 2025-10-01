import { NextRequest, NextResponse } from "next/server";
import func from "@/lib/functions";
import config from "@/lib/config";
import mime from "mime";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const file = searchParams.get("f");

	console.log("api /res called");
	if (func.exists(config.RESOURCES_DIR + file)) {
		const filePath = config.RESOURCES_DIR + file;
		const fileBuffer = await func.read(filePath);
		const mimeType = mime.getType(filePath) || "application/octet-stream";

		return new NextResponse(fileBuffer as string, {
			headers: {
				"Content-Type": mimeType,
				"Content-Disposition": 'attachment; filename="' + file + '"',
			},
		});
	} else {
		return NextResponse.redirect("/error?m=The requested resource could not be found: " + file);
	}
}
