<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class InitialDatabase extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'SMALLINT',
                'constraint' => '4',
                'unsigned' => true,
                'auto_increment' => true
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
            ],
            'completed' => [
                'type' => 'TINYINT',
                'constraint' => '1',
                'default' => '0',
            ],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('todos');
    }

    public function down()
    {
        $this->forge->dropTable('todos');
    }
}
