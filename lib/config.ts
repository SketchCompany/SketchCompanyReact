const PORT = 3000;
const RESOURCES_DIR = process.cwd() + "/resources/";
const LAUNCHER_FILES_DIR = "@/launcher/";
const FRIENDLYFIRE_FILES_DIR = "@/friendlyfire/";

function res(path: string) {
	return RESOURCES_DIR + path;
}

const config = {
	PORT,
	RESOURCES_DIR,
	LAUNCHER_FILES_DIR,
	FRIENDLYFIRE_FILES_DIR,

	res,
};

export default config;
