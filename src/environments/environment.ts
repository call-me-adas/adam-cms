// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const defaultFeaturedImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDw0NDQ4NDg0NDQ4NDQ0NDQ8NDQ0NFREWFhURExMYHSggGBolGxUTIjEhJSkrLi4uFx8zODM4NygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAgEDBQQH/8QAMRABAQACAAMGBAUDBQAAAAAAAAECEQMEIRIxQVFSkWFxgbETFBUiMwUjMkJiocHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgQG6NABpmmtBnZOyoBOjSgE6OyoBPZZpbATpugBlCgAAAAAAAAAAAAAAAAAABBsAaNBjdNbIDG6bI3QJ0aWzQJ0zTppmgQzS9MsBApgJrGsAAAAAAAAAAAAAAAAAAAbGNgKjZGLkAkbI2RUgMmKtKkVMQRo06SNmIOWk9l9WXL5ydqzU+Pf7OVgONxTY62JsBzsTYuxlgOdSqpAAAAAAAAAAAAAAAAAAAVilWILioyKgKkXIYY29JLb5SbfZweQzv+WsZ70HzSO3C4GWXdL8/B9/C5Xh4+Havneqs7xP9Mxnxt2DhhyUnXPL6TpPdX4vDw/wm78P/U5cDiXvsv1T+Vz+HuDtws/xccsbNeH0edljrp5XVehwODljlvpruvVPMcrcsrcdavnddQedYix9nF5TOS261Pi+WwHLKIsdKig5ZIXkigAAAAAAAAAAAAAAAAAAKxSrEHSLxRF4g+rkeJ2c55X9t+r6+eyzlk3ezZ3Tp1ebHq8T+5wpl4zr9Z3g3lrrhWzvnarljxuJem7fhqOnL/xZfLL7I5TiTG3fjO8G3i8Sd9s+cjPxs/P7L5riY3UnXXi4yb6TxBd42fq+ybx8/Vf+Hficv+2a62d/xfLxMbjdXvB9XauXCtt3dXr9XmZPRx/hvyy+7zqCMnLJ0yc8gc83OumTmAAAAAAAAAAAAAAAAAAArFKsQdIqIlVAdZXof0zid+F8es/7ebK7cDidnKZeVB6mOHZ4fEnl2tfLT4ZXpce/syv+2/Z5vB4mMu8pvXhsH04cvlZvuvhL5O3LcHXWzr4Tyc/z89N9z89PTfcH2Pi5/HrMvpW/n56b7uXMc3M8ddmy9LLsHXG/2L8svu8216GH8F+WX3ebaDK51WVRQc8kLqAAAAAAAAAAAAAAAAAAAGxjYClyobKDpKqVzlaD0uBz/ZxmNxts6b34Os/qU9N93lSqlB6n6jPTfc/UJ6L7x5mzYPT/AFGem+7P1Kem+7zdstB9/H5+ZY5Y9mzc1vb4LU2sAqbS1OwTUqqQAAAAAAAAAAAAAAAAAACBAU1LQU2VIC5Vbc9mwdNm0do2C7WbT2mbBdqbWbYBsYAxjawAAAAAAAAAAAAAAAAAAAgQGgA0Y0GjGgNYAAwGsAGAAVjawAAAAAAAAAAAAAAAAAAAAGwZG7ADZsGjNmwaM2bBozZsGsNmwA2bArCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==';

export const environment = {
  defaultLang: 'en',
  production: false,
  ckeConfig: {
    toolbar: [
      { name: 'clipboard', items: [ 'Undo', 'Redo' ] },
      { name: 'styles', items: [ 'Styles', 'Format' ] },
      { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Strike', '-', 'RemoveFormat' ] },
      { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
      { name: 'links', items: [ 'Link', 'Unlink' ] },
      { name: 'insert', items: [ 'Image', 'EmbedSemantic', 'Table' ] },
      { name: 'tools', items: [ 'Maximize' ] },
      { name: 'editing', items: [ 'Scayt' ] }
    ],
    customConfig: '',
    extraPlugins: 'autoembed,embedsemantic,image2',
    removePlugins: 'image',
    height: 600,
    bodyClass: 'article-editor',
    format_tags: 'p;h1;h2;h3;pre',
    removeDialogTabs: 'image:advanced;link:advanced',
  },
  defaultCkeContent: {
    pl: {
      draft: true,
      language: 'pl',
      url: 'url-pl',
      image: defaultFeaturedImage,
      title: 'Domyślny nagłówek',
      body: 'Witaj'
    },
    en: {
      draft: true,
      language: 'en',
      url: 'url-en',
      image: defaultFeaturedImage,
      title: 'Default title',
      body: 'Hi'
    }
  },
  firebaseConfig: {
    apiKey: 'AIzaSyAc-5W1983HIIZXa_HfI16i7Dp-MK45API',
    authDomain: 'test-c5d2d.firebaseapp.com',
    databaseURL: 'https://test-c5d2d.firebaseio.com',
    projectId: 'test-c5d2d',
    storageBucket: 'test-c5d2d.appspot.com',
    messagingSenderId: '509367698368',
    appId: '1:509367698368:web:c53221a05d368c56'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
