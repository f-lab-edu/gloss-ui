# gloss-ui ✨

# Getting Started

# Development
##
To add new component, run:
```
lerna create [PACKAGE_NAME]
```
## Testing
To link local version to other local project, go to the @gloss-ui component you like to consume and run:
```
yarn link @gloss-ui/[PACKAGE_NAME]
```

Then, go to the app you'd like to test into the component and run
```
yarn link @gloss-ui/[PACKAGE_NAME]
```

If you'd like to unlink local dependencies, run:
```
yarn unlik @gloss-ui/[PACKAGE_NAME]
```

