<?php

use Illuminate\Support\Facades\Route;



// VIEWS
Route::get('/', function () {
    return view('home');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/admin', function(){
    return view('admin');
});



// FOOD ADMIN
Route::get('/foodItem', 'FoodControllerAdmin@index');
Route::post('/foodItem/create', 'FoodControllerAdmin@create');
Route::get('/foodItem/{id}/edit', 'FoodControllerAdmin@edit');
Route::post('/foodItem/{id}/update', 'FoodControllerAdmin@update');
Route::get('/foodItem/{id}/delete', 'FoodControllerAdmin@delete');
