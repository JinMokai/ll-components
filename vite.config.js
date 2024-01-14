import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, "src/components");

const componentsNames = fs.readdirSync(componentsDir);

export default defineConfig({
	build: {
		outDir: "dist",
		emptyOutDir: true,
		minify: true,
		target: "esnext",
		rollupOptions: {
			input: componentsNames.reduce((basket, name) => {
				const entryFile = fs
					.readdirSync(path.resolve(__dirname, "src/components", name))
					.find((file) => file.endsWith(".js"));
				if (entryFile) {
					const componentName = entryFile.replace(".js", "");
					basket[componentName] = path.resolve(componentsDir, name, entryFile);
				}
				return basket;
			}, {}),
			output: {
				dir: path.resolve(__dirname, "dist/components/"),
				entryFileNames: "[name]/[name].js",
				format: "esm",
			},
			plugins: [terser()],
		},
	},
	plugins: [terser()],
});
