import { defineComponent, h, onMounted } from "vue";
import type { Icomponents, Iprops } from "./preview";
import "./preview.css";
// import exsit component
const components: Icomponents = ["button"];

export default defineComponent({
	props: {
		component: {
			type: String,
			default: "",
		},
	},
	setup(props: Iprops, { slots }) {
		// @ts-ignore
		if (!import.meta.env.SSR) {
			// @ts-ignore
			if (import.meta.env.MODE === "development") {
				// biome-ignore lint/complexity/noForEach: <explanation>
				components.forEach((name) => {
					import(`../../../src/components/${name}/${name}.js`);
				});
				// @ts-ignore
			} else if (import.meta.env.MODE === "production") {
				// biome-ignore lint/complexity/noForEach: <explanation>
				components.forEach((name) => {
					import(`../../../dist/components/${name}/${name}.js`);
				});
			}
		}
		onMounted(() => {});
		return () => {
			return props.component
				? h("div", { innerHTML: props.component, class: ["preview-main"] })
				: "no empty";
		};
	},
});
