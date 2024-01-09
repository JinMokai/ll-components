import baseCss from "./base.css?inline";

/**
 * This is a basic class configuration
 */
export default class base extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	render(html, css) {
		const globalSheet = new CSSStyleSheet();
		globalSheet.replaceSync(baseCss);
		const sheet = new CSSStyleSheet();
		sheet.replaceSync(css);
		this.shadowRoot.adoptedStyleSheets = [globalSheet, sheet];
		this.shadowRoot.innerHTML = html;
	}

	/**
	 * Get the specified slot
	 * @param {string} name
	 * @returns {HTMLSlotElement}
	 */
	getSlot(name) {
		return this.shadowRoot.querySelector(`slot[name="${name}"]`);
	}

	/**
	 * Get the default slot
	 * @returns {HTMLSlotElement}
	 */
	getDefaultSlot() {
		return this.shadowRoot.querySelector("slot:not([name])");
	}

	/**
	 * Get host Element
	 * @returns {HTMLElement}
	 */
	getHostElement() {
		return this.shadowRoot.host;
	}
}
