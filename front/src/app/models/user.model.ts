export interface NewUser {
  nombre: string;
  apellido1: string;
  apellido2: string;
  username: string;
  email: string;
  dni: string;
  password: string;
}

export interface User extends NewUser {
  id: number;
  created_at: string;
  updated_at: string;
  id_usuario: string;
  clave_usuario: string;
}

  