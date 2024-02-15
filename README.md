# Vite + React Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code style: Prettier](https://img.shields.io/badge/Code_style-Prettier-ff69b4.svg)](https://prettier.io/)

Template for [Vite](https://vitejs.dev/) + [React](https://react.dev/) projects.

## Usage

Create a new `vite-react-template`-based project using
[degit](https://github.com/Rich-Harris/degit).

```sh
npx degit pfraces/vite-react-template/root project-name
cd project-name
git init
npm install
```

_Replace `project-name` with the name of your project._

_**Keep in mind:** Run `git init` before `npm install` so husky can install its
git hooks._

### Post-install

- Change project name and description in `README.md` and `package.json`
- Change project name in `package-lock.json`

## What's included

### Editor settings

- [EditorConfig](https://editorconfig.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Version control

- [Git](https://git-scm.com/)
- [husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)

### Linters and formatters

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [HTMLHint](https://htmlhint.com/)
- [markdownlint](https://github.com/DavidAnson/markdownlint-cli2)

### Unit testing

- [Vitest](https://vitest.dev/)

### CSS

- [PostCSS](https://postcss.org/)
- [PostCSS Preset Env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#readme)
- [CSS Modules](https://github.com/css-modules/css-modules)

### React

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)

## Project structure

```text
./
  dist/
  public/
  src/
    index.html
    main.js
    styles.css
```

### `./`

The root of the project. It contains all the config files and directories.

### `dist/`

The build output location. It is generated by the command `npm run build`. You
may deploy this folder to any of your preferred platforms.

_Learm more:
[Building the App](https://vitejs.dev/guide/static-deploy#building-the-app)_

### `public/`

> Assets in this directory will be served at root path / during dev, and copied
> to the root of the dist directory as-is.

_Learn more:
[The `public` Directory](https://vitejs.dev/guide/assets#the-public-directory)_

### `src/`

Where the development happens. It contains the source files and its companion
unit tests.

## npm scripts

```json
{
  "start": "vite serve",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest",
  "format": "prettier --write --cache .",
  "lint:js": "eslint .",
  "lint:css": "stylelint **/*.css",
  "lint:html": "htmlhint **/*.html",
  "lint:md": "markdownlint-cli2 **/*.md !node_modules"
}
```

## VSCode recommended extensions

VSCode is configured to recommend the following extensions from the extensions
view (via `.vscode/extensions.json`):

- [editorconfig.editorconfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [htmlhint.vscode-htmlhint](https://marketplace.visualstudio.com/items?itemName=htmlhint.vscode-htmlhint)
- [davidanson.vscode-markdownlint](https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint)
- [vunguyentuan.vscode-postcss](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss)

## Application entry point

By default, Vite is configured to look for `index.html` at the root of the
project as the entry point to your application.

_Learn more:
[`index.html` and the Project Root](https://vitejs.dev/guide/#index-html-and-project-root)_

## Dev server

Dev server is configured to listen to port `3000` (via `vite.config.js`).

To start the dev server, run `npm start`. Then, navigate to
<http://localhost:3000>.

## ES module imports

VSCode is configured to include file extensions from import path suggestions
(via `.vscode/settings.json`) which are required for ES modules.

ESLint is configured to throw an error if it founds a local import without
extension.

### Path aliases

The project is configured to support path aliases from both VSCode and Vite (via
`jsconfig.json`).

VSCode has builtin support for both `jsconfig.json` and `tsconfig.json`.

For Vite, `vite-tsconfig-paths` plugin is used which supports both
`jsconfig.json` and `tsconfig.json`.

_Learn more:_

- _[VSCode jsconfig.json Reference](https://code.visualstudio.com/docs/languages/jsconfig)_
- _[vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)_

### Relative to parent imports are not allowed

ESLint is configured to throw an error if it founds a relative to parent import.

There is a default `@` path alias pointing to `src/` so, instead of importing
modules relative to parent directory (`../`) it is enforced to use a path
relative to src (`@/`).

## Publishing to npm

npm is configured to prevent accidental publication. To enable package
publication remove `{ "private": true }` from `package.json`.

### Licensing

> You should specify a license for your package so that people know how they are
> permitted to use it, and any restrictions you're placing on it.

Set the license in your `package.json`:

```json
{ "license": "<SPDX license identifier>" }
```

_Learn more:_

- _[Configuring npm - license](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#license)_
- _[Choose an open source license](https://choosealicense.com/)_
