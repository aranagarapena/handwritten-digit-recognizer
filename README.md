# Sistema de Autenticación con Angular y Laravel

Este proyecto implementa un módulo de autenticación que incluye funcionalidades de login, inicio de sesión y registro de usuarios. Utiliza Angular para el frontend y Laravel para el backend, ofreciendo una solución completa para la gestión de usuarios en aplicaciones web.

## Características

- **Registro de usuarios**: Permite a los nuevos usuarios crear una cuenta.
- **Inicio de sesión**: Los usuarios registrados pueden iniciar sesión en la aplicación.
- **Cierre de sesión**: Los usuarios pueden cerrar sesión de manera segura.
- **Validación de formulario**: Tanto en el registro como en el inicio de sesión, incluyendo mensajes de error amigables.
<!-- 
- **Autenticación y autorización**: Backend protegido que solo permite el acceso a usuarios autenticados.
- **Responsive design**: Interfaz amigable y adaptativa a diferentes tamaños de pantalla. -->

## Tecnologías utilizadas

- **Frontend**: Angular
- **Backend**: Laravel
- **Base de datos**: MySQL
<!-- - **Autenticación**: JWT (JSON Web Token) -->

## Requisitos

Para ejecutar este proyecto en tu entorno local y poder modificarlo o hacer pruebas, necesitarás tener instalado:

- Node.js y npm
- PHP
- MySQL
- Opcionalmente XAMPP en vez de las dos anteriores (yo para pruebas lo uso así)
- Composer
- Laravel
- Angular CLI

## Configuración e instalación

### Backend (Laravel)

1. Clona el repositorio e ingresa al directorio del backend:
    ```
    git clone <url-del-repositorio>
    cd <directorio-del-backend>
    ```

2. Instala las dependencias de Composer:
    ```
    composer install
    ```

3. Configura las variables de entorno copiando el archivo `.env.example` a `.env` y ajustando los valores necesarios (conexión a la base de datos, etc.):
    ```
    cp .env.example .env
    ```

4. Genera la clave de la aplicación:
    ```
    php artisan key:generate
    ```

5. Ejecuta las migraciones para crear la estructura de la base de datos:
    ```
    php artisan migrate
    ```

6. Inicia el servidor de desarrollo de Laravel u Opcionalmente coloca tu carpeta en el directorio htdocs de XAMPP:
    ```
    php artisan serve
    ```

7. Deberás configurar las rutas del backend y añadir un virtualhost para trabajar con tu dominio y sustituirlo por el que yo he usado en los archivos de configuración de XAMPP

### Frontend (Angular)

1. Desde otro terminal, navega al directorio del frontend y instala las dependencias de npm:
    ```
    cd <directorio-del-frontend>
    npm install
    ```

2. Inicia el servidor de desarrollo de Angular:
    ```
    ng serve
    ```

3. Abre tu navegador y ve a `http://localhost:4200` para ver la aplicación en acción.

4. Dberás sustituir en el archivo de configuracion de Angular las rutas del backend para cuando se realizan las llamadas a la API

## Uso

- **Registro**: Accede a la opción de registro desde la página principal y completa el formulario.
- **Inicio de sesión**: Una vez registrado, puedes iniciar sesión con tus credenciales.
- **Navegación**: Explora las diferentes secciones de la aplicación. Solo las páginas protegidas requieren autenticación.

## Licencia

Este trabajo está licenciado bajo una [Licencia Creative Commons Atribución 4.0 Internacional](http://creativecommons.org/licenses/by/4.0/). Esto significa que puedes usar, compartir, y adaptar el trabajo, siempre

