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
            'name' => 'Free Module'
        ));

        Module::create(array(
            'name' => 'Module 1',
            'price' => '1000.00'
        ));

        Module::create(array(
            'name' => 'Module 2',
            'price' => '1000.00'
        ));
    }
}
