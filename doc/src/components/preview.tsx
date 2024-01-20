import { defineComponent, h, onMounted } from "vue";
import "./preview.css";
// import exsit component
const components = ["button"];

export default defineComponent({
	props: {
		component: {
			type: String,
			default: "",
		},
	},
	setup(props, { slots }) {
		if (!import.meta.env.SSR) {
			if (import.meta.env.MODE === "development") {
				// biome-ignore lint/complexity/noForEach: <explanation>
				components.forEach((name) => {
					import(`../../../src/components/${name}/${name}.js`);
				});
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
