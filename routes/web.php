<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/messages', function () {
    return view('messages');
});

Route::get('/explore', function () {
    return view('explore');
});

Route::get('/reels', function () {
    return view('reels');
});

Route::get('/profile', function () {
    return view('profile');
});

Route::get('/signup', function () {
    return view('sign_up');
});