# AdamCMS

FirebasCMS is a blogging platform with a storefront and CMS built with Angular 7 (Angular CLI), Firebase (AngularFire2), Angular Material. 
Create, moderate and manage pages, blog posts, products, orders, customers, carts, navigation, themes, admins and more with this web application.


## Demo

// TO DO
* Check out the front end application: https://fir-cms-76f54.firebaseapp.com
* Check out the admin interface: https://fir-cms-76f54.firebaseapp.com/login
  * Admin login details: admin / admin
    * This user has an 'editor' role
    * All of the data will be reset once a week
  * User login details: user / user
    * This user has an 'editor' role
    * All of the data will be reset once a week

You can change credentials in:
```
environments/environment.ts // fake-backend.ts
```
## Installation

Install [Angular CLI](https://cli.angular.io/)
```
npm install -g @angular/cli
```

Install NPM packages

```
Run `npm install` or `yarn install`
cd functions/
Run `npm install` or `yarn install`
```


## Firebase setup

Create a [Firebase account](https://firebase.google.com/), create a new project, and copy the config code for your project.

Enable Google, Email/Password and Anonymous in the 'Sign-In Method' tab of the Authentication section in your Firebase project Console.

Within the project folder, run:

```
cd src
mkdir environments
cd environments
touch environment.ts
touch environment.prod.ts
```

Open 'environment.ts' and add your Firebase config as follows:

```javascript
export const environment = {
  production: false,
  firebase: {
    apiKey: "xxxx",
    authDomain: "xxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxx",
    messagingSenderId: "xxxx"
  }
};
```

## Development server

Run `ng serve` for a dev server. The app will automatically reload if you change any of the source files.

Navigate to `http://localhost:4200/` to access the front end.

Navigate to `http://localhost:4200/admin/login` to access the login page.

Navigate to `http://localhost:4200/admin/home` to access the CMS (user must be logged in and must be part of '/admins' in the Firebase database to access the CMS).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deploy

Run `npm run deploy` to deploy your project. This command will first build the app for production and then deploy it to Firebase hosting.

## Admin Roles

// TO DO
There are 3 Admin Roles:
* admin
* editor

| Permission                          | super-admin | admin       | editor      |
| ------------------------------------|:-----------:|:-----------:|:-----------:|
| create new entities                 | ✓           | ✓           | ✓           |
| edit entities                       | ✓           | ✓           | ✓           |
| submit entities for approval        | ✓           | ✓           | ✓           |
| save entities                       | ✓           | ✓           | ×           |
| delete entities                     | ✓           | ✓           | ×           |
| publish/unpublish entities          | ✓           | ✓           | ×           |
| edit items awaiting approval        | ✓           | ✓           | ×           |
| approve/disapprove changes          | ✓           | ✓           | ×           |
| view/add/edit/delete orders         | ✓           | ✓           | ×           |
| view/add/edit/delete customers      | ✓           | ✓           | ×           |
| view/add/edit/delete menus          | ✓           | ✓           | ×           |
| view/add/edit/delete theme settings | ✓           | ✓           | ×           |
| view/add/edit/delete admins         | ✓           | ×           | ×           |
