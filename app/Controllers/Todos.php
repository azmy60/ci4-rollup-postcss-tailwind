<?php

namespace App\Controllers;

use App\Models\TodosModel;
use CodeIgniter\Controller;

class Todos extends Controller
{
    /**
     * @var HTTP\IncomingRequest
     */
    protected $request;

    public function index()
    {
        $model = new TodosModel();

        $data['todos'] = $model->getTodos();

        echo view('todos', $data);
    }

    public function add()
    {
        if ($this->request->isAJAX() && $this->request->getMethod() === 'post') {
            $name = $this->request->getJsonVar('name');

            $model = new TodosModel();
            $model->save(['name' => $name]);
        }
    }
}
