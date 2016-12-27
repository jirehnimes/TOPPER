<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::group(['prefix' => 'api', 'middleware' => 'auth:api'], function () {
//     Route::get('question', 'QuestionController@index');
// });

/*
 * Web
 */

Route::auth();

Route::get('/', 			'HomeController@index');

Route::get('module', 		 'Admin\ModuleController@index');
Route::post('module/store',  'Admin\ModuleController@store');
Route::post('module/upload', 'Admin\ModuleController@fileUpload');

/*
 * API
 */

Route::group(['prefix' => 'api'], function () {

	// User
    Route::post('user/login', 		'UserController@login');
    Route::post('user/store', 		'UserController@store');
    Route::post('user/update/{id}', 'UserController@update');

    // Question
    Route::get('question', 			'QuestionController@index');

    // Module
    Route::get('module/{id}', 		'ModuleController@index');

});

