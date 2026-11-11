/* global global */
// Polyfill for IntersectionObserver in jsdom environment
export function observe() {}
export function unobserve() {}
export function disconnect() {}
export function disconnectAll() {}
export default class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = IntersectionObserver;
