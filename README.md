# Turborepo Starter template

This repo is my take on setting up a monorepo using [turborepo](https://turbo.build/repo), it includes the following:

- `ui` package configured with [tailwindcss](https://tailwindcss.com) using [shadcnui's](https://ui.shadcn.com/).
- `web` a simple [next.js](https://nextjs.org) app configured to use the `ui` package and the tailwind config from it.
- `estlint-config` package with multiple variations of the configs.
- Git-hooks configured with [husky](https://typicode.github.io/husky/).
- Prettier correctly configured.

Node Version: v20.9.0

Install with:

```sh
nvm install
```

Pnpm Version: 8.10.0
