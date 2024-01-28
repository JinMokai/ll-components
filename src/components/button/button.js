import Base from "../../base";
import css from "./button.css?inline" assert { type: "css" };
export default class llButton extends Base {
	#mounted = false;

	static get observedAttributes() {
		return ["disabled"];
	}

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

	/**
	 * @description init button state,attribute.
	 */
	connectedCallback() {
		this.#mounted = true;
		this.disabled = this.disabled;
	}

	attributeChangedCallback(attrubuies, oldValue, newValue) {
		if (!this.#mounted && null === oldValue) {
			return;
		}
		if (attrubuies === "disabled") {
			this.disabled = this.disabled;
		}
	}

	/**
	 * @description Get the button in the shadow dom
	 * @returns {HTMLElement}
	 */
	get getButtonElement() {
		return this.shadowRoot.querySelector("[part='button']");
	}

	/**
	 * @description Get the disabled state of the button
	 * @returns {Boolean}
	 */
	get disabled() {
		return this.hasAttribute("disabled");
	}

	/**
	 * @description set the disabled state of the button
	 */
	set disabled(params) {
		if (params) {
			this.getButtonElement.setAttribute("disabled", "");
			this.getButtonElement.setAttribute("aria-disabled", "true");
		} else {
			this.getButtonElement.removeAttribute("disabled");
			this.getButtonElement.setAttribute("aria-disabled", "false");
			this.getButtonElement.setAttribute("aria-label", this.buttonText);
		}
	}

	/**
	 * @description 获取按钮文本内容
	 * @returns {String}s
	 */
	get buttonText() {
		return this.textContent.replace(/(^\s+|\s+$)/gm, "").replace(/\s+/g, " ");
	}
}

if (!customElements.get("ll-button")) {
	// register custom element
	customElements.define("ll-button", llButton);
}
