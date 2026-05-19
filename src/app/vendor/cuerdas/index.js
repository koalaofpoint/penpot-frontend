// Vendor shim for cuerdas (string utilities)
// This is a stub matching the ClojureScript cuerdas library API

export const str = (...args) => args.join('');

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelCase(str) {
  return str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
}

export function kebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function snakeCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

export default { str, capitalize, camelCase, kebabCase, snakeCase };
