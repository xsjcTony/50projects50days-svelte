import { fileURLToPath, URL } from 'url'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import type { Config } from '@sveltejs/kit'

const config: Config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: 'error.html'
    }),
    prerender: {
      entries: []
    },
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url))
    },
    paths: {
      base: import.meta.env.PROD ? '/50projects50days-svelte' : ''
    }
  }
}


export default config
