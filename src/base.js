/**
 * This is a basic class configuration
 */
export default class base extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	render(html, css) {
		const sheet = new CSSStyleSheet();
		sheet.replaceSync(css);
		this.shadowRoot.innerHTML = html;
	}
}
