<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Selection;

class SelectionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('selections')->delete();

        $aSelection = array();

        $aSelection[0]['question_id'] = 1;
        $aSelection[0]['choice'] = '-1';
        $aSelection[0]['isAnswer'] = false;

        $aSelection[1]['question_id'] = 1;
        $aSelection[1]['choice'] = '1';
        $aSelection[1]['isAnswer'] = false;

        $aSelection[2]['question_id'] = 1;
        $aSelection[2]['choice'] = '3';
        $aSelection[2]['isAnswer'] = false;

        $aSelection[3]['question_id'] = 1;
        $aSelection[3]['choice'] = '5';
        $aSelection[3]['isAnswer'] = true;

        foreach ($aSelection as $aValue) {
            Selection::create($aValue);
        }

    }
}
