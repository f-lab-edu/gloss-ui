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
  "main": "./src/index.tsx",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    "typescript": "^4.9.3",
    "vite": "^4.1.0"
  }
}

```
- add `"main: ./src/index.tsx"`
- prefix package name with `@gloss-ui/`
- remove `“private: true”`, if the package should be published as npm package

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

- delete redundant files (e.g. App.tsx, index.html, etc.)


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