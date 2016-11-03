<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $aSeeder = array(
            'UsersSeeder',
            'ModulesSeeder',
            'TopicsSeeder',
            'QuestionsSeeder',
            'SelectionsSeeder',
            'ReferencesSeeder',
        );

        foreach ($aSeeder as $sValue) {
            $this->call($sValue);
        }

        Model::reguard();
    }
}
