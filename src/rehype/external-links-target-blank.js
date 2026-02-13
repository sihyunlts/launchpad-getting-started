/**
 * Rehype plugin: Add `target="_blank"` + `rel="noopener noreferrer"` to external links.
 *
 * We treat absolute http(s) URLs as external. Relative URLs, hash links, mailto/tel, etc.
 * are left unchanged.
 */
export default function rehypeExternalLinksTargetBlank() {
	return function transform(tree) {
		visit(tree, (node) => {
			if (!isAnchorElement(node)) return;

			const href = getHref(node);
			if (!isExternalHttpUrl(href)) return;

			// Don't override if the author explicitly set a target.
			if (!node.properties?.target) node.properties = { ...node.properties, target: '_blank' };

			// Merge rel values safely.
			const rel = mergeRel(node.properties?.rel, ['noopener', 'noreferrer']);
			node.properties = { ...node.properties, rel };
		});
	};
}

function visit(node, fn) {
	if (!node || typeof node !== 'object') return;
	fn(node);
	const children = /** @type {any} */ (node).children;
	if (Array.isArray(children)) {
		for (const child of children) visit(child, fn);
	}
}

function isAnchorElement(node) {
	return node?.type === 'element' && node?.tagName === 'a';
}

function getHref(node) {
	const href = node?.properties?.href;
	return typeof href === 'string' ? href : null;
}

function isExternalHttpUrl(href) {
	if (!href) return false;
	return href.startsWith('https://') || href.startsWith('http://') || href.startsWith('//');
}

function mergeRel(currentRel, additions) {
	const parts = new Set();

	if (Array.isArray(currentRel)) {
		for (const v of currentRel) {
			if (typeof v === 'string' && v) parts.add(v);
		}
	} else if (typeof currentRel === 'string') {
		for (const v of currentRel.split(/\s+/g)) {
			if (v) parts.add(v);
		}
	}

	for (const v of additions) parts.add(v);
	return Array.from(parts).join(' ');
}

