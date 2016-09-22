<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Module;

class ModulesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('modules')->delete();

        Module::create(array(
            'name' => 'Free Module',
        ));
    }
}
