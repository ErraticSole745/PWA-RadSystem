<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// api routes that need auth

Route::middleware(['auth:api'])->group(function () {


/* routes for Permissions Controller  */	
	Route::get('permissions/', 'PermissionsController@index');
	Route::get('permissions/index', 'PermissionsController@index');
	Route::get('permissions/index/{filter?}/{filtervalue?}', 'PermissionsController@index');	
	Route::get('permissions/view/{rec_id}', 'PermissionsController@view');	
	Route::post('permissions/add', 'PermissionsController@add');	
	Route::any('permissions/edit/{rec_id}', 'PermissionsController@edit');	
	Route::any('permissions/delete/{rec_id}', 'PermissionsController@delete');

/* routes for Productos Controller  */	
	Route::get('productos/', 'ProductosController@index');
	Route::get('productos/index', 'ProductosController@index');
	Route::get('productos/index/{filter?}/{filtervalue?}', 'ProductosController@index');	
	Route::get('productos/view/{rec_id}', 'ProductosController@view');	
	Route::post('productos/add', 'ProductosController@add');	
	Route::any('productos/edit/{rec_id}', 'ProductosController@edit');	
	Route::any('productos/delete/{rec_id}', 'ProductosController@delete');

/* routes for Proveedores Controller  */	
	Route::get('proveedores/', 'ProveedoresController@index');
	Route::get('proveedores/index', 'ProveedoresController@index');
	Route::get('proveedores/index/{filter?}/{filtervalue?}', 'ProveedoresController@index');	
	Route::get('proveedores/view/{rec_id}', 'ProveedoresController@view');	
	Route::post('proveedores/add', 'ProveedoresController@add');	
	Route::any('proveedores/edit/{rec_id}', 'ProveedoresController@edit');	
	Route::any('proveedores/delete/{rec_id}', 'ProveedoresController@delete');

/* routes for Roles Controller  */	
	Route::get('roles/', 'RolesController@index');
	Route::get('roles/index', 'RolesController@index');
	Route::get('roles/index/{filter?}/{filtervalue?}', 'RolesController@index');	
	Route::get('roles/view/{rec_id}', 'RolesController@view');	
	Route::post('roles/add', 'RolesController@add');	
	Route::any('roles/edit/{rec_id}', 'RolesController@edit');	
	Route::any('roles/delete/{rec_id}', 'RolesController@delete');

/* routes for Tallas Controller  */	
	Route::get('tallas/', 'TallasController@index');
	Route::get('tallas/index', 'TallasController@index');
	Route::get('tallas/index/{filter?}/{filtervalue?}', 'TallasController@index');	
	Route::get('tallas/view/{rec_id}', 'TallasController@view');	
	Route::post('tallas/add', 'TallasController@add');	
	Route::any('tallas/edit/{rec_id}', 'TallasController@edit');	
	Route::any('tallas/delete/{rec_id}', 'TallasController@delete');

/* routes for Users Controller  */	
	Route::get('users/', 'UsersController@index');
	Route::get('users/index', 'UsersController@index');
	Route::get('users/index/{filter?}/{filtervalue?}', 'UsersController@index');	
	Route::get('users/view/{rec_id}', 'UsersController@view');	
	Route::any('account/edit', 'AccountController@edit');	
	Route::get('account', 'AccountController@index');	
	Route::post('account/changepassword', 'AccountController@changepassword');	
	Route::get('account/currentuserdata', 'AccountController@currentuserdata');	
	Route::post('users/add', 'UsersController@add');	
	Route::any('users/edit/{rec_id}', 'UsersController@edit');	
	Route::any('users/delete/{rec_id}', 'UsersController@delete');

});

Route::get('home', 'HomeController@index');
	
	Route::post('auth/register', 'AuthController@register');	
	Route::post('auth/login', 'AuthController@login');
	Route::get('login', 'AuthController@login')->name('login');
		
	Route::post('auth/forgotpassword', 'AuthController@forgotpassword')->name('password.reset');	
	Route::post('auth/resetpassword', 'AuthController@resetpassword');
	
	Route::get('components_data/role_id_option_list/{arg1?}', 'Components_dataController@role_id_option_list');	
	Route::get('components_data/users_name_exist/{arg1?}', 'Components_dataController@users_name_exist');	
	Route::get('components_data/users_email_exist/{arg1?}', 'Components_dataController@users_email_exist');


/* routes for FileUpload Controller  */	
Route::post('fileuploader/upload/{fieldname}', 'FileUploaderController@upload');
Route::post('fileuploader/s3upload/{fieldname}', 'FileUploaderController@s3upload');
Route::post('fileuploader/remove_temp_file', 'FileUploaderController@remove_temp_file');