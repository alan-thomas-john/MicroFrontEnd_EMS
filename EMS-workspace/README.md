# EMSWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

```
EMS-workspace
├─ .angular
├─ .editorconfig
├─ .gitignore
├─ angular.json
├─ package-lock.json
├─ package.json
├─ projects
│  ├─ employee-management
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ app-routing.module.ts
│  │  │  │  ├─ app.component.css
│  │  │  │  ├─ app.component.html
│  │  │  │  ├─ app.component.spec.ts
│  │  │  │  ├─ app.component.ts
│  │  │  │  ├─ app.module.ts
│  │  │  │  └─ search
│  │  │  │     ├─ search.component.css
│  │  │  │     ├─ search.component.html
│  │  │  │     ├─ search.component.spec.ts
│  │  │  │     └─ search.component.ts
│  │  │  ├─ assets
│  │  │  │  └─ .gitkeep
│  │  │  ├─ bootstrap.ts
│  │  │  ├─ favicon.ico
│  │  │  ├─ index.html
│  │  │  ├─ main.ts
│  │  │  └─ styles.css
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.spec.json
│  │  ├─ webpack.config.js
│  │  └─ webpack.prod.config.js
│  ├─ registration
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ app-routing.module.ts
│  │  │  │  ├─ app.component.css
│  │  │  │  ├─ app.component.html
│  │  │  │  ├─ app.component.spec.ts
│  │  │  │  ├─ app.component.ts
│  │  │  │  ├─ app.module.ts
│  │  │  │  ├─ confirmation
│  │  │  │  │  ├─ confirmation.component.css
│  │  │  │  │  ├─ confirmation.component.html
│  │  │  │  │  ├─ confirmation.component.spec.ts
│  │  │  │  │  ├─ confirmation.component.ts
│  │  │  │  │  └─ confirmation.module.ts
│  │  │  │  └─ registration-form
│  │  │  │     ├─ registration-form.component.css
│  │  │  │     ├─ registration-form.component.html
│  │  │  │     ├─ registration-form.component.spec.ts
│  │  │  │     ├─ registration-form.component.ts
│  │  │  │     └─ registration-form.module.ts
│  │  │  ├─ assets
│  │  │  │  └─ .gitkeep
│  │  │  ├─ bootstrap.ts
│  │  │  ├─ favicon.ico
│  │  │  ├─ index.html
│  │  │  ├─ main.ts
│  │  │  └─ styles.css
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.spec.json
│  │  ├─ webpack.config.js
│  │  └─ webpack.prod.config.js
│  ├─ session-local-storage
│  │  ├─ .editorconfig
│  │  ├─ .gitignore
│  │  ├─ angular.json
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ projects
│  │  │  └─ storage-service
│  │  │     ├─ ng-package.json
│  │  │     ├─ package.json
│  │  │     ├─ README.md
│  │  │     ├─ src
│  │  │     │  ├─ lib
│  │  │     │  │  ├─ storage-service.module.ts
│  │  │     │  │  ├─ storage-service.service.spec.ts
│  │  │     │  │  ├─ storage-service.service.ts
│  │  │     │  │  ├─ storage.service.spec.ts
│  │  │     │  │  └─ storage.service.ts
│  │  │     │  └─ public-api.ts
│  │  │     ├─ tsconfig.lib.json
│  │  │     ├─ tsconfig.lib.prod.json
│  │  │     └─ tsconfig.spec.json
│  │  ├─ README.md
│  │  └─ tsconfig.json
│  ├─ state
│  │  ├─ ng-package.json
│  │  ├─ package.json
│  │  ├─ README.md
│  │  ├─ src
│  │  │  ├─ lib
│  │  │  │  ├─ employee.actions.ts
│  │  │  │  ├─ employee.effects.ts
│  │  │  │  ├─ employee.model.ts
│  │  │  │  ├─ employee.reducer.ts
│  │  │  │  ├─ employee.selectors.ts
│  │  │  │  ├─ state.component.spec.ts
│  │  │  │  ├─ state.component.ts
│  │  │  │  ├─ state.module.ts
│  │  │  │  ├─ state.service.spec.ts
│  │  │  │  └─ state.service.ts
│  │  │  └─ public-api.ts
│  │  ├─ tsconfig.lib.json
│  │  ├─ tsconfig.lib.prod.json
│  │  └─ tsconfig.spec.json
│  └─ view-employees
│     ├─ src
│     │  ├─ app
│     │  │  ├─ app-routing.module.ts
│     │  │  ├─ app.component.css
│     │  │  ├─ app.component.html
│     │  │  ├─ app.component.spec.ts
│     │  │  ├─ app.component.ts
│     │  │  ├─ app.module.ts
│     │  │  └─ employee-list
│     │  │     ├─ employee-list.component.css
│     │  │     ├─ employee-list.component.html
│     │  │     ├─ employee-list.component.spec.ts
│     │  │     ├─ employee-list.component.ts
│     │  │     └─ employee-list.module.ts
│     │  ├─ assets
│     │  │  └─ .gitkeep
│     │  ├─ bootstrap.ts
│     │  ├─ favicon.ico
│     │  ├─ index.html
│     │  ├─ main.ts
│     │  └─ styles.css
│     ├─ tsconfig.app.json
│     ├─ tsconfig.spec.json
│     ├─ webpack.config.js
│     └─ webpack.prod.config.js
├─ README.md
└─ tsconfig.json

```
```
EMS-workspace
├─ .angular
├─ .editorconfig
├─ .gitignore
├─ angular.json
├─ package-lock.json
├─ package.json
├─ projects
│  ├─ employee-management
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ app-routing.module.ts
│  │  │  │  ├─ app.component.css
│  │  │  │  ├─ app.component.html
│  │  │  │  ├─ app.component.spec.ts
│  │  │  │  ├─ app.component.ts
│  │  │  │  ├─ app.module.ts
│  │  │  │  └─ search
│  │  │  │     ├─ search.component.css
│  │  │  │     ├─ search.component.html
│  │  │  │     ├─ search.component.spec.ts
│  │  │  │     └─ search.component.ts
│  │  │  ├─ assets
│  │  │  │  └─ .gitkeep
│  │  │  ├─ bootstrap.ts
│  │  │  ├─ favicon.ico
│  │  │  ├─ index.html
│  │  │  ├─ main.ts
│  │  │  └─ styles.css
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.spec.json
│  │  ├─ webpack.config.js
│  │  └─ webpack.prod.config.js
│  ├─ registration
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ app-routing.module.ts
│  │  │  │  ├─ app.component.css
│  │  │  │  ├─ app.component.html
│  │  │  │  ├─ app.component.spec.ts
│  │  │  │  ├─ app.component.ts
│  │  │  │  ├─ app.module.ts
│  │  │  │  ├─ confirmation
│  │  │  │  │  ├─ confirmation.component.css
│  │  │  │  │  ├─ confirmation.component.html
│  │  │  │  │  ├─ confirmation.component.spec.ts
│  │  │  │  │  ├─ confirmation.component.ts
│  │  │  │  │  └─ confirmation.module.ts
│  │  │  │  └─ registration-form
│  │  │  │     ├─ registration-form.component.css
│  │  │  │     ├─ registration-form.component.html
│  │  │  │     ├─ registration-form.component.spec.ts
│  │  │  │     ├─ registration-form.component.ts
│  │  │  │     └─ registration-form.module.ts
│  │  │  ├─ assets
│  │  │  │  └─ .gitkeep
│  │  │  ├─ bootstrap.ts
│  │  │  ├─ favicon.ico
│  │  │  ├─ index.html
│  │  │  ├─ main.ts
│  │  │  └─ styles.css
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.spec.json
│  │  ├─ webpack.config.js
│  │  └─ webpack.prod.config.js
│  ├─ session-local-storage
│  │  ├─ .editorconfig
│  │  ├─ .gitignore
│  │  ├─ angular.json
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ projects
│  │  │  └─ storage-service
│  │  │     ├─ ng-package.json
│  │  │     ├─ package.json
│  │  │     ├─ README.md
│  │  │     ├─ src
│  │  │     │  ├─ lib
│  │  │     │  │  ├─ storage-service.module.ts
│  │  │     │  │  ├─ storage-service.service.spec.ts
│  │  │     │  │  ├─ storage-service.service.ts
│  │  │     │  │  ├─ storage.service.spec.ts
│  │  │     │  │  └─ storage.service.ts
│  │  │     │  └─ public-api.ts
│  │  │     ├─ tsconfig.lib.json
│  │  │     ├─ tsconfig.lib.prod.json
│  │  │     └─ tsconfig.spec.json
│  │  ├─ README.md
│  │  └─ tsconfig.json
│  ├─ state
│  │  ├─ ng-package.json
│  │  ├─ package.json
│  │  ├─ README.md
│  │  ├─ src
│  │  │  ├─ lib
│  │  │  │  ├─ employee.actions.ts
│  │  │  │  ├─ employee.effects.ts
│  │  │  │  ├─ employee.model.ts
│  │  │  │  ├─ employee.reducer.ts
│  │  │  │  ├─ employee.selectors.ts
│  │  │  │  ├─ state.component.spec.ts
│  │  │  │  ├─ state.component.ts
│  │  │  │  ├─ state.module.ts
│  │  │  │  ├─ state.service.spec.ts
│  │  │  │  └─ state.service.ts
│  │  │  └─ public-api.ts
│  │  ├─ tsconfig.lib.json
│  │  ├─ tsconfig.lib.prod.json
│  │  └─ tsconfig.spec.json
│  └─ view-employees
│     ├─ src
│     │  ├─ app
│     │  │  ├─ app-routing.module.ts
│     │  │  ├─ app.component.css
│     │  │  ├─ app.component.html
│     │  │  ├─ app.component.spec.ts
│     │  │  ├─ app.component.ts
│     │  │  ├─ app.module.ts
│     │  │  └─ employee-list
│     │  │     ├─ employee-list.component.css
│     │  │     ├─ employee-list.component.html
│     │  │     ├─ employee-list.component.spec.ts
│     │  │     ├─ employee-list.component.ts
│     │  │     └─ employee-list.module.ts
│     │  ├─ assets
│     │  │  └─ .gitkeep
│     │  ├─ bootstrap.ts
│     │  ├─ favicon.ico
│     │  ├─ index.html
│     │  ├─ main.ts
│     │  └─ styles.css
│     ├─ tsconfig.app.json
│     ├─ tsconfig.spec.json
│     ├─ webpack.config.js
│     └─ webpack.prod.config.js
├─ README.md
└─ tsconfig.json

```