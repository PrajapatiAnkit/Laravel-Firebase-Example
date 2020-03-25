<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;

class HomeController extends BaseController
{
    public function index()
    {
        return view('users.home');
    }

    public function create(Request $request)
    {
        print_r($request->all());
    }

}
