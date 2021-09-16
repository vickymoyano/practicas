# Repositorio semilla: API NodeJS :seedling:

¡Bienvenida/o! En este repositorio encontrarás una plantilla (de las infinitas posibles) para crear una API utilizando NodeJS. Las principales tecnologías que utilizamos son:

- [NodeJS](https://nodejs.org/es/): entorno de ejecución para JavaScript.
- [ExpressJS](https://expressjs.com/): framework para crear aplicaciones web.
- [Sequelize](https://sequelize.org/master/): ORM (object-relational mapping) para interactuar con una base SQL desde objetos JavaScript.
- [PostgreSQL](https://www.postgresql.org/): base de datos SQL.
- [Jest](https://jestjs.io/): framework para escribir tests.

Para crear un proyecto siguiendo esta plantilla, lo único que tenés que hacer es clickear en el botón que dice `Use this template`. ¡Y no te olvides de cambiarle el nombre en el `package.json`!

## :point_up: Prerrequisitos - para instalar antes de empezar

Vas a necesitar un IDE o al menos un editor de texto que coloree la sintaxis. Recomendamos utilizar [Visual Studio Code](https://code.visualstudio.com/) - que se lleva muy bien con proyectos JavaScript - enriquecido con los siguientes plugins:

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)
- [Jest Test Explorer](https://marketplace.visualstudio.com/items?itemName=kavod-io.vscode-jest-test-adapter)

Para ejecutar el código es necesario tener NodeJS en su versión 14 (`lts/fermium`). Para instalarlo recomendamos utilizar el manejador de versiones [`nvm`](https://github.com/nvm-sh/nvm), aunque también podés hacerlo manualmente siguiendo las instrucciones adecuadas para tu sistema operativo.

> **Nota**  
> `nvm` no está disponible para Windows. Yo que uso Windows, me instalé [nvm for Windows](https://github.com/coreybutler/nvm-windows) y me viene andando.



## :ballot_box_with_check: Configuración inicial del proyecto

# Instala las dependencias Node del proyecto.
npm install

# Ejecuta las migraciones iniciales para las bases de dev y test.
npm run db:init


## :file_folder: Estructura de directorios

Breve descripción de qué se puede encontrar en cada uno de los directorios del proyecto:

```shell
.
├── bin                 # Punto de entrada del servidor
├── db
│   ├── migrations      # Migraciones de la base de datos
│   └── seeders         # Datos de prueba para la base de datos
├── docker              # Configuración de Docker para desarrollo
├── lib
│   ├── config          # Configuración de la base de datos
│   ├── controllers     # Acciones de nuestra aplicación
│   ├── models          # Definición de modelos, atributos, etc
│   └── routes          # Rutas de la API
└── test                # Utilidades para escribir tests
```

## :woman_technologist: :man_technologist: Comandos útiles para el día a día

A continuación, algunos comandos necesarios para el desarrollo diario en este proyecto.

### Código

```shell
# Levanta el proyecto y recarga automáticamente si hay cambios.
npm start



```

### Base de datos

Estos comandos se tienen que ejecutar en una consola ubicada en la carpeta raíz del proyecto.

```shell
# Ejecuta las migraciones.
npm run db:init

# Carga los datos de prueba.
npm run db:seed


```

## Acciones automáticas

Este repositorio está configurado para hacer un formateo automático de código al grabar, y para formatear y pasar chequeos al commitear.

Si algún grupo quisiera desactivar estas opciones, se hace así.

### Formateo automático al grabar

En el archivo `/vscode/settings.json` cambiar el valor de `editor.formatOnSave`.

### Acciones al commitear

Se configuran en el archivo `package.json`, en el atributo `husky`.
Actualmente, este atributo hace referencia a otro atributo `lint-staged`.

- Si se eliminan ambos elementos del `package.json`, no va a hacer ninguna acción previa a commitear.
- Si se modifica `lint-staged`, se puede eliminar, o modificar la configuración, del chequeo (`eslint`) y/o el formateo (`prettier`) de código. Obviamente, para modificar las configuraciones, hay que mirar cómo en la documentación de [ESLint](https://eslint.org/) y/o [Prettier](https://prettier.io/).