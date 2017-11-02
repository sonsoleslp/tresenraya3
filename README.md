# React Boilerplate para IWEB

## Instrucciones

1. Instala [node.js](https://nodejs.org/es/download/) y [git](https://git-scm.com/downloads)
2. Abre un terminal nuevo en tu ordenador y clona ESTE proyecto (`git clone https://github.com/sonsoleslp/react-iweb-boilerplate.git`)
3. Se ha creado un nuevo directorio (`react-iweb-boilerplate`): accede a él(`cd react-iweb-boilerplate`)
4. En github.com, crea con tu usario un nuevo repositorio para albergar tu proyecto. Ejemplo https://github.com/alumno/react-iweb
5. Vuelve al terminal y cambia la remote URL por la del repo que has creado. Ejemplo `git remote set-url origin http://github.com/alumno/react-iweb.git`
6. Ejecuta el comando `npm install`. Se instalarán todas las dependencias del proyecto en una nueva carpeta `node_modules`
7. Arranca el servidor de desarrollo con `npm start`
8. Si no se abre automáticamente, abre el navegador en la URL [http://localhost:8080](http://localhost:8080)
9. Cuando acabes de desarrollar detén el servidor con `Control + C`.
10. Sube tus cambios a tu repositorio con `git add .` , `git commit -m "First commit"`, `git push origin master`.


## Comandos disponibles

- `npm start` - Arranca el servidor de desarrollo
- `npm clean` - Borra la carpeta dist
- `npm run production` - Empaqueta la aplicación en la carpeta `dist` lista para producción
- `npm run lint` - Comprueba la limpieza y formato del código
- `npm test` - Corre todos los tests
- `npm run test:watch` - Corre todos los tests en modo watch

## Desarrollo

El código de los componentes de React desarrollado debe estar en la carpeta `/app/components` (puedes crear subcarpetas)
Recuerda que la estructura básica de un componente de React es la siguiente:

```
import React from 'react';

export default class MyComponent extends React.Component {
  render() {
    return (
      <h1>Hello Wold!</h1>
    );
  }
}
```


> No te olvides de importar el componente desde donde lo vayas a renderizar.


## Producción

Al ejecutar `npm run production`, todo el código que hemos desarrollado se empaquetará en un `bundle.js` único en la carpeta `dist`. Ese código nos permitirá renderizar nuestro proyecto como una web estática.


# Créditos

Boilerplate basado en [ES6 React boilerplate using Webpack](https://github.com/KleoPetroff/react-webpack-boilerplate)
Tiene las siguientes funcionalidades posibles:

- [x] React 16.0.0
- [x] ECMAScript 6 and JSX support
- [x] React Router v4
- [x] Component testing using [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://facebook.github.io/jest)
- [x] Code Coverage
- [x] Latest Webpack (v.3.6.0) and Webpack Dev Server (v.2.8.2) with Scope Hoisting enabled
- [x] Hot Module Replacement using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [x] ES6 linting with continuous linting on file change
- [x] SASS support
- [x] Separate CSS stylesheets generation
- [x] Automatic HTML generation
- [x] Production Config
- [x] Custom Babel Preset with Decorators, Class Properties, Rest/Spread operator support
- [x] Export Separate Vendor Files
- [ ] Redux
