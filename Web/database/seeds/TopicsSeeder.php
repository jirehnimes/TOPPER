<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Topic;

class TopicsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('topics')->delete();

        Topic::create(array(
            'module_id' => 1,
            'name' => 'Inorganic Chemistry'
        ));

        Topic::create(array(
            'module_id' => 1,
            'name' => 'Organic Chemistry'
        ));
    }
}
