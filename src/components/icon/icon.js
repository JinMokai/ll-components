import Base from "../../base";
import icons from "../../icons/index";
import css from "./icon.css?inline" assert { type: "css" };

export default class llIcon extends Base {
	#mounted = false;
	#icon;

	static get observedAttributes() {
		return ["name", "size", "color"];
	}

	constructor() {
		super();
		const html = `
    <i class="icon" id="icon" part="icon" role="img"></i>
    `;
		this.render(html, css);
		this.#icon = this.shadowRoot.getElementById("icon");
	}

	connectedCallback() {
		this.#mounted = true;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "name") {
			this.#icon.innerHTML = icons[this.getAttribute("name") || "error"];
		}
		if (name === "size") {
			this.#icon.style.fontSize = `${this.getAttribute("size")}px`;
		}
		if (name === "color") {
			this.#icon.style.color = this.getAttribute("color");
		}
	}

	get name() {
		return this.getAttribute("name");
	}

	set name(value) {
		this.setAttribute("name", value);
	}

	get color() {
		return this.getAttribute("color");
	}

	set color(value) {
		this.setAttribute("color", value);
	}

	get size() {
		return this.getAttribute("size");
	}

	set get(value) {
		this.setAttribute("size", value);
	}
}

if (!customElements.get("ll-icon")) {
	customElements.define("ll-icon", llIcon);
}
