export function isType(params) {
	return Object.prototype.toString.call(params).slice(8, -1);
}
