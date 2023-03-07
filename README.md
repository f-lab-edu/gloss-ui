# gloss-ui ✨

# Development
## Creating New Component Library

To add new component library, go to gloss-ui/packages and run:
```
yarn vite create [PACKAGE_NAME] --template -react-ts
yarn intall
```
Configure package.json to include at least:
```
{
  "name": "@gloss-ui/[PACKAGE_NAME]",
  "version": "0.0.0",
  "type": "module",
  "files": [
    "dist"
  ],
  "main": "./dist/index.umd.cjs",
  "module": "./dist/index.js",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.umd.cjs"
    }
  },
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc && vite build",
    "prepublish": "tsc && vite build"
  }
}

```
- prefix package name with `@gloss-ui/`
- add `"main: ./src/index.tsx"`
- remove `“private: true”`, if the package should be published as npm package
- add `"main"` option
- add `module"` option
- add `exports"` option
- set `"scripts.prepublish"` option to `"tsc && vite build"` to ensure build before publishing to npm registry
Adjust folder structure
```
│   ...
│
└───src
│       index.tsx
│       [COMPONENT].tsx
│       ...
│
│   ...
```
- In `index.tsx`, export component:
  ```
  import Button from './Button'

  export { Button }
  ```

- delete redundant files (e.g. App.tsx, etc.)

Configure vite.config.ts to include at least:
```
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: '@gloss-ui/button',
      fileName: "index",
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'react'
        }
      }
    }
  }
})
```

## Testing Local Version
To link local version to other local project, go to the @gloss-ui component you like to consume and run:
```
yarn link
```

Then, go to the app you'd like to test into the component and run
```
yarn link @gloss-ui/[PACKAGE_NAME]
```

If you'd like to unlink local dependencies, run:
```
yarn unlink @gloss-ui/[PACKAGE_NAME]
```

# Publishing
To publish package to npm repository, run:
```
yarn lerna publish
```