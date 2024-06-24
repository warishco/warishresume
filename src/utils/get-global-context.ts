import type { AstroGlobal } from 'astro';

/** Accesses the global context of the page. */
export function getGlobalContext<T extends object>(astro: AstroGlobal) {
  if (!astro.locals.globalContext) {
    throw new Error('Global context not initialized');
  }

  return astro.locals.globalContext as T;
}
