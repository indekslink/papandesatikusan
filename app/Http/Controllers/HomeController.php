<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function index()
    {

        return view('landingpage');
    }
    public function admin()
    {
        return view('admin.layouts');
    }
}
