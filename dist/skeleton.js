export default {
  bind(el, binding) {
    el.style.color = binding.value || 'blue';
  },
  update(el, binding) {
    el.style.color = binding.value || 'blue';
  }
};