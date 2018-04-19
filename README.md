# My Tunes
    iTunes
    GoogleMaps

## Technologies
    Angular 5
    Angular universal
    Lazy-loading
    Material Design
    Bootstrap
    font-awesome
    Indexed DB
    NodeJS for Restful API
    MonoDB
    PhaserJS

## Environment
    Angular CLI: 1.7.2
    Node: 8.9.1 (recommanded)

## Before starting
    check versions
        > ng --version
            if they don't match
            > npm remove -g @angular/cli
            > npm install -g @angular/cli@1.7.2
            for rxjs problems re-install the angular/cli
                > npm remove -g @angular/cli
                > npm cache clean --force
                > npm install -g @angular/cli@1.7.2

## Starting
    > npm install -S @angular/platform-server@^5 express 
    > npm install -D ts-loader@^3 webpack-node-externals npm-run-all
    > npm install
        for errors like .@angular\.compiler.DELETE
            remove node_modules folder
            run npm i as admin
        for any other error with .DELETE file not being found
            rerun npm i
    > ng build -prod --build-optimizer --app 0
    > ng build --aot --app 1
        production
    > npm run build
    > node dist/server.js (to run SSR)
        development
    > ng serve (for regular development)
        development with proxy (config in proxy.conf.json)
    > npm run proxy

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Create Modules `ng generate module myModule` add Component to that module `ng generate component my-module/MyComponent`

Create Module with routing `ng generate module customers --routing`

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Info about this project-template

https://medium.com/@evertonrobertoauler/angular-5-universal-with-transfer-state-using-angular-cli-19fe1e1d352c

## Other Guides

#### install Angular Material
    > npm i -s @angular/cdk
    > npm i -s @angular/material
    > npm i -s @angular/animations
    > npm i -s hammerjs (for geastures support (mobile))
    > in style.scss @import a prebuild theme from the material folder in node_modules/@angular
    > in app.module.ts import these
        - import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
        - import a wanted md component (e.g <md-checkbox>) check, https://material.angular.io/components/ , each one has an API tab with