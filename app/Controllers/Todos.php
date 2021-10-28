<?php

namespace App\Controllers;

use App\Models\TodosModel;
use CodeIgniter\Controller;

class Todos extends Controller
{
    public function index()
    {
        $model = new TodosModel();

        $data['todos'] = $model->getTodos();

        echo view('todos', $data);
    }
}