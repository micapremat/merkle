# merkle

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Summary

This project is about Hacker Stories news.
You can see a list of 10 stories ordered by score. You have a button to sort the stories by score.
The layout is responsive
The API requires making many requests to obtain the data. I would improve the API.
I had to modify the object to show it on the screen, adding author, karma and image. Duplicate authors are removed to avoid duplicate requests.
For SEO I would use Nuxt.

Added files:

- src\components\HackerStoriesList.vue
- src\components\HackerStoriesItem.vue
- src\components\TheNav.vue
- src\types\Author.ts
- src\types\HackerStory.ts
- src\types\Story.ts
- public\imgs

Modified files:

- src\App.vue

The rest is boilerplate.
