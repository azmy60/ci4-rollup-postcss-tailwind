<?php

namespace App\Controllers;

use App\Models\TodosModel;
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
        $model = new TodosModel();

        $data['todos'] = $model->getTodos();

        echo view('todos', $data);
    }

    public function add()
    {
        if ($this->request->isAJAX() && $this->request->getMethod() === 'post') {
            $name = $this->request->getJsonVar('name');

            $model = new TodosModel();
            $id = $model->insert(['name' => $name], true);

            return $this->setResponseFormat('json')->respondCreated([
                'id' => $id
            ]);
        }

        return $this->failForbidden();
    }
}
