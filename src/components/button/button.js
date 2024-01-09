import Base from "../../base";
import css from "./button.css?inline" assert { type: "css" };
export default class llButton extends Base {
	#mounted = false;

	constructor() {
		super();
		const html = `<button type="button" part="button" id="button" class="button">
    <span part="prefix">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix">
      <slot name="suffix"></slot>
    </span>
  </button>
  `;
		this.render(html, css);
	}

	connectedCallback() {
		this.#mounted = true;
	}

	/**
	 * Get the button in the shadow dom
	 * @returns {HTMLElement}
	 */
	getButtonElement() {
		return this.shadowRoot.querySelector("[part='button']");
	}
}

if (!customElements.get("ll-button")) {
	// register custom element
	customElements.define("ll-button", llButton);
}
