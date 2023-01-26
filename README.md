# Minimalist spreadsheet

## Dependencies
To install the project `npm` is needed, run the following command at the project's to install all dependencies:
```
npm install
```

## Dev server
To initialize the dev server (with the dependencies previously installed) run:

```
npm start
```

## Linter

ESLint was used as static-code-analysis tool, a revision can be executed running the followig command:
``` npx eslint src/```

## Configuration
The project was built with `create-react-app`, using webpack.

# Project structure

## Modules

In the `/src/` folder, we can find the following directories:

- components (generic components used around all the app, they represent the visual and UI aspects of the app)
- containers (components that are aware of the state of the app, and know how to handle it. They tend to use the generic components, providing them with props)
- store (state handling of the app)
- hooks (custom hooks)
- styles (color variables used in the app)
- translations (translations of the app)
- types (basic types defined by the app)
- utils (basic functions used as tools in the app)


## Redux / Store
The state of the app is handled by Redux as state management tool.

## Used dependencies:
### i18next

Library to handle translations and localization.
### i18next-browser-languagedetector

Library to retrieve the language of the browser.
### reduxjs/toolkit

### mathjs
Library that provides a safe evaluator for sentences.
