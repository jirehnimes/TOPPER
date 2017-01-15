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
            'is_premium' => 0
        ));

        Module::create(array(
            'name' => 'Module 1',
            'is_premium' => 1
        ));

        Module::create(array(
            'name' => 'Module 2',
            'is_premium' => 1
        ));
    }
}
