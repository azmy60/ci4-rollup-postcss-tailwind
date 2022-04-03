<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use CodeIgniter\API\ResponseTrait;

class Todos extends Controller
{
    /**
     * @var HTTP\IncomingRequest
     */
    protected $request;

    use ResponseTrait;

    public function index()
    {
        echo view('todos');
    }
}
