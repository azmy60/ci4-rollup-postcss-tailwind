<?php

namespace App\Models;

use CodeIgniter\Model;

class TodosModel extends Model
{
  protected $table = 'todos';

  protected $allowedFields = ['name', 'completed'];

  public function getTodos()
  {
    return $this->findAll();
  }
}
