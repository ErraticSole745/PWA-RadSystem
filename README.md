# Getting Started with bloggorras

### Generated with [RadSystems](https://radsystems.io)

## Frameworks

- ### UI Framework - [Quasar UI Framework](https://quasar.dev)
- ### API Framework - [NodeJS With ExpressJS Framework](https://expressjs.com)
- ### Database ORM - [Sequelize ORM](https://sequelize.org/)
- ### Default Database - [MySQL](https://www.mysql.com/)

# AUTOR

Luis Carlos Duarte Valdez

Para poder correr la aplicacion sin RadSystem se debe de utilizar los siguientes pasos:

Crear una Progressive Web App (PWA) con Node.js y Express en RadSystem implica varios pasos. Aquí te dejo una guía paso a paso:

1. **Instalar Node.js y npm**: Primero, necesitas tener Node.js y npm instalados en tu sistema. Puedes descargar Node.js desde su [sitio web oficial](https://nodejs.org/). npm se instala automáticamente con Node.js.

2. **Crear un nuevo proyecto de Node.js**: Una vez que tengas Node.js y npm instalados, puedes crear un nuevo proyecto de Node.js utilizando el siguiente comando en tu terminal:
    ```bash
    mkdir mi-pwa && cd mi-pwa
    npm init -y
    ```

3. **Instalar Express**: Ahora, puedes instalar Express, que es un marco de aplicación web para Node.js. Utiliza el siguiente comando para instalar Express:
    ```bash
    npm install express
    ```

4. **Crear un servidor Express**: Crea un nuevo archivo llamado `app.js` en la raíz de tu proyecto y agrega el siguiente código para crear un servidor Express básico:
    ```javascript
    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
      res.send('¡Hola Mundo!');
    });

    app.listen(port, () => {
      console.log(`La aplicación está escuchando en http://localhost:${port}`);
    });
    ```

5. **Crear el archivo manifest.json**: Las PWA requieren un archivo manifest.json que describe la aplicación. Crea un nuevo archivo llamado `manifest.json` en la raíz de tu proyecto y agrega la información necesaria sobre tu aplicación.

6. **Registrar el Service Worker**: Las PWA utilizan Service Workers para habilitar capacidades como el trabajo sin conexión y las notificaciones push. Necesitarás registrar tu Service Worker en tu aplicación.

7. **Probar tu PWA**: Puedes probar tu PWA utilizando herramientas como Lighthouse en Chrome DevTools.

8. **Desplegar tu PWA**: Finalmente, puedes desplegar tu PWA en un servidor o en una plataforma de alojamiento como GitHub Pages.

Para correr tu aplicación de manera local en XAMPP, necesitarías configurar un servidor proxy para dirigir las solicitudes a tu servidor Node.js, ya que XAMPP está diseñado para servir aplicaciones PHP.
