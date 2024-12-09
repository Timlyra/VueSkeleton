export default {
    bind(el, binding) {
        console.log('skeleton bound', binding, el);

        applyDepthToElements(el, 0);
    },
};

function applyDepthToElements(el, depth) {
    el.setAttribute('skeleton-depth', depth);

    const children = el.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];

        const backgroundAlpha = Math.min(depth / 100, 1) + 0.05;

        // BG color incrementing in opacity as depth increases
        child.style.backgroundColor = `rgba(0, 0, 0, ${backgroundAlpha})`;
        child.style.color = `rgba(0, 0, 0, 0.0)`;

        applyDepthToElements(child, depth + 1);
    }
}