<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use App\Responses\ApiErrorResponse;
use App\Responses\ApiSuccessResponse;

class NumberDrawerController extends Controller
{
    public function storeNumber(Request $request){
        
        return response()->json([
            'received_data' => $request->all()
        ]);

        // try {
        //     // Inicia una transacción de base de datos
        //     DB::beginTransaction();
        
        //     // $id_usuario = Hash::make($datos['nombre'].$datos['apellido1'].$datos['email']);
        //     // $clave_usuario = Hash::make($datos['email'].$datos['apellido1'].$datos['nombre'],['rounds'=>12]);
            
        //     // $user = new User;
        //     // $user->nombre = $datos['nombre'];
        //     // $user->apellido1 = $datos['apellido1'];
        //     // $user->apellido2 = $datos['apellido2'];
        //     // $user->username = $datos['username'];
        //     // $user->email = $datos['email'];
        //     // $user->dni = $datos['dni'];
        //     // $user->password = $datos['password']; // Es recomendable encriptar la contraseña antes de guardarla, se puede usar bcrypt() por ejemplo
        //     // $user->id_usuario = $id_usuario; 
        //     // $user->clave_usuario = $clave_usuario; 
        //     // $user->save();
        
        //     // Si todo ha ido bien, confirma la transacción
        //     DB::commit();
        
        //     // Devuelve una respuesta exitosa
        //     return response()->json(['message' => 'Usuario creado con éxito. Aquí tienes tus credenciales'], 201);

        // } catch (QueryException $exception) {

        //     // Si algo sale mal, se revierte la transaccion y devolvemos un error
        //     DB::rollBack();        
        //     return response()->json(['error' => 'No se pudo crear el usuario debido a un error en la base de datos.', 'details' => $exception->getMessage()], 500);
        
        // } catch (\Exception $exception) {

        //     DB::rollBack();        
        //     return response()->json(['error' => 'Ocurrió un error inesperado.', 'details' => $exception->getMessage()], 500);
        // }
        
    }
}
