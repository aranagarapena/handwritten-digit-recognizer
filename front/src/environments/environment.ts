export const environment = {
    URL_BACKEND:'http://localhost/lrvl-ng-xampp/back/public',
    URL_BACKEND_DNS:'http://api-laravel.example.com',
    URL_BACKEND_IP_PORT:'http://127.0.0.1:80/lrvl-ng-xampp/back/public',
    URL_BACKEND_IP:'http://127.0.0.1/lrvl-ng-xampp/back/public',
    URL_FRONTEND: 'http://localhost:4200',

    URL_PRUEBA_POST:'https://jsonplaceholder.typicode.com/post', // TODO: nocarga bien estas variables de entorno
    
    URL_API_USER_REGISTER:'/api/usuarios/signin', // dar de alta un nuevo usuario
    URL_API_USER_GET_ALL:'/api/usuarios/getusers', // resuperar todos los usuarios de la BDs
    URL_API_NUMBER_ADD:'/api/game/storenumber'
};

