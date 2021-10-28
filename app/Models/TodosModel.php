<?php

namespace App\Models;

use CodeIgniter\Model;

class TodosModel extends Model
{
  protected $table = 'todos';

  public function getTodos()
  {
    return $this->findAll();
  }
}
