import Base from "../../base";
import css from "./button.css?inline" assert { type: "css" };
import html from "./button.html?raw";

export default class llButton extends Base {
	constructor() {
		super();
		this.render(html, css);
	}
}

if (!customElements.get("ll-button")) {
	// register custom element
	customElements.define("ll-button", llButton);
}
