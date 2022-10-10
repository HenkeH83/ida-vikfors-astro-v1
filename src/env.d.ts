/// <reference types="astro/client" />

// fix från: https://fix.code-error.com/svelte-custom-event-on-svelte-typescript/
declare namespace svelte.JSX {
    interface HTMLAttributes<T> {
      onclick_outside: () => void
    }
  }