<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('app'); 
});
Route::get('/productlist', function () {
    return view('app'); 
});
Route::get('test',function(){
    return view('test.create');
});
Route::get('adminlogin', 'Auth\LoginController@showAdminLoginForm');
Route::post('adminlogin', 'Auth\LoginController@adminLogin');
Route::get('adminlogout', 'Auth\LoginController@logout');
//
Route::get('list','TestController@index');
Route::post('store','TestController@store');
Route::get('edit/{id}','TestController@edit');
Route::post('update/{id}','TestController@update');
Route::get('edit/{id}','TestController@edit');
Route::get('delete/{id}','TestController@destroy');
Route::any('{url}', function(){
    return view('app');
})->where('url', '.*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
