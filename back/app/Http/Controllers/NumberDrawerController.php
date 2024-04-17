<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use App\Responses\ApiErrorResponse;
use App\Responses\ApiSuccessResponse;
use App\Models\Drawing;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class NumberDrawerController extends Controller
{
    public function storeNumber(Request $request){

        // TODO: Repasar la validacion. Seguir el ejemplo de UserController
        $request->validate([
            'image' => 'required|string',
            'metadata' => 'required|array'
        ]);

        try {

            // recogemos la imagen del request
            $imageData = $request->image;
            $metadata = $request->metadata;

            list(, $imageData) = explode(',', $imageData);
            $imageData = base64_decode($imageData);

            // creamos el directorio de almacenamiento en caso de que no exista
            $directory = 'images';  // Ruta relativa dentro de storage/app
            if (!Storage::disk('local')->exists($directory)) {
                Storage::disk('local')->makeDirectory($directory);
            }
            
            // guardamos la imagen en el directorio
            $filename = 'images/' . Carbon::now()->format('Ymd_His') . '.png';
            Storage::disk('local')->put($filename, $imageData);

            $drawing = new Drawing([
                'image_name' => $filename,
                'label' => $metadata['label'],
                'user_id' => $metadata['userId'] ?? null
            ]);
            $drawing->save();
                
            // Especificar la ruta del archivo CSV // TODO: cambiar este directorio
            $csvPath = storage_path('app/public/drawings.csv');

            // Abrir el archivo CSV o crearlo si no existe
            $fileHandle = fopen($csvPath, 'a'); // 'a' es para modo append

            // Encabezados para el CSV, solo añadir si el archivo está vacío
            if (fstat($fileHandle)['size'] === 0) {
                fputcsv($fileHandle, ['id', 'image_name', 'label', 'user_id', 'created_at']);
            }

            // Datos para añadir al CSV
            $data = [
                $drawing->id,
                $drawing->image_name,
                $drawing->label,
                $drawing->user_id,
                $drawing->created_at
            ];

            // Escribir la línea en el CSV
            fputcsv($fileHandle, $data);

            // Cerrar el archivo
            fclose($fileHandle);

            return response()->json(['success' => 'Image uploaded successfully', 'path' => $filename]);
        } 
        catch (\Exception $exception) {
            $m = $exception->getMessage();
            return response()->json(['error' => 'Ocurrió un error inesperado.', 'details' => $exception->getMessage()], 500);
        }

        // try {
        //     // Inicia una transacción de base de datos
        //     DB::beginTransaction();
        
        //     // $id_usuario = Hash::make($datos['nombre'].$datos['apellido1'].$datos['email']);
        //     // $clave_usuario = Hash::make($datos['email'].$datos['apellido1'].$datos['nombre'],['rounds'=>12]);
            
        //     // $user = new User;S
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
