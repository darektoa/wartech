<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SlideController;
use App\Http\Controllers\Api\FoodController;
use App\Http\Controllers\Api\DrinkController;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/getSlide', [SlideController::class, 'index']);
Route::get('/getFood', [FoodController::class, 'index']);
Route::get('/getDrink', [DrinkController::class, 'index']);


