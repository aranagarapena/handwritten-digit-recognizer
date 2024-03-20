# Sistema de Autenticación con Angular y Laravel

Este proyecto implementa un módulo de autenticación que incluye funcionalidades de login, inicio de sesión y registro de usuarios. Utiliza Angular para el frontend y Laravel para el backend, ofreciendo una solución completa para la gestión de usuarios en aplicaciones web.

## Características

- **Registro de usuarios**: Permite a los nuevos usuarios crear una cuenta.
- **Inicio de sesión**: Los usuarios registrados pueden iniciar sesión en la aplicación.
- **Cierre de sesión**: Los usuarios pueden cerrar sesión de manera segura.
- **Validación de formulario**: Tanto en el registro como en el inicio de sesión, incluyendo mensajes de error amigables.
- **Autenticación y autorización**: Backend protegido que solo permite el acceso a usuarios autenticados.
- **Responsive design**: Interfaz amigable y adaptativa a diferentes tamaños de pantalla.

## Tecnologías utilizadas

- **Frontend**: Angular
- **Backend**: Laravel
- **Base de datos**: MySQL
- **Autenticación**: JWT (JSON Web Token)

## Requisitos

Para ejecutar este proyecto, necesitarás tener instalado:

- Node.js y npm
- PHP
- Composer
- Laravel
- Angular CLI
- MySQL

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

6. Inicia el servidor de desarrollo de Laravel:
    ```
    php artisan serve
    ```

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

## Uso

- **Registro**: Accede a la opción de registro desde la página principal y completa el formulario.
- **Inicio de sesión**: Una vez registrado, puedes iniciar sesión con tus credenciales.
- **Navegación**: Explora las diferentes secciones de la aplicación. Solo las páginas protegidas requieren autenticación.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, envía tus pull requests a la rama `develop`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENSE.md](LICENSE.md) para más detalles.
