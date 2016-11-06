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

        // Question 1
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

        // Question 2
        $aSelection[4]['question_id'] = 2;
        $aSelection[4]['choice'] = 'NaH2PO4';
        $aSelection[4]['isAnswer'] = false;

        $aSelection[5]['question_id'] = 2;
        $aSelection[5]['choice'] = 'Na2HPO4';
        $aSelection[5]['isAnswer'] = true;

        $aSelection[6]['question_id'] = 2;
        $aSelection[6]['choice'] = 'Na3PO4';
        $aSelection[6]['isAnswer'] = false;

        $aSelection[7]['question_id'] = 2;
        $aSelection[7]['choice'] = 'Any of the above';
        $aSelection[7]['isAnswer'] = false;

        // Question 3
        $aSelection[8]['question_id'] = 3;
        $aSelection[8]['choice'] = 'II-A';
        $aSelection[8]['isAnswer'] = false;

        $aSelection[9]['question_id'] = 3;
        $aSelection[9]['choice'] = 'II-B';
        $aSelection[9]['isAnswer'] = false;

        $aSelection[10]['question_id'] = 3;
        $aSelection[10]['choice'] = 'VI-A';
        $aSelection[10]['isAnswer'] = true;

        $aSelection[11]['question_id'] = 3;
        $aSelection[11]['choice'] = 'VII-A';
        $aSelection[11]['isAnswer'] = false;

        // Question 4
        $aSelection[12]['question_id'] = 4;
        $aSelection[12]['choice'] = 'Transition elements';
        $aSelection[12]['isAnswer'] = true;

        $aSelection[13]['question_id'] = 4;
        $aSelection[13]['choice'] = 'Representative elements';
        $aSelection[13]['isAnswer'] = false;

        $aSelection[14]['question_id'] = 4;
        $aSelection[14]['choice'] = 'Inner transition elements';
        $aSelection[14]['isAnswer'] = false;

        $aSelection[15]['question_id'] = 4;
        $aSelection[15]['choice'] = 'None of the above';
        $aSelection[15]['isAnswer'] = false;

        // Question 5
        $aSelection[16]['question_id'] = 5;
        $aSelection[16]['choice'] = '6';
        $aSelection[16]['isAnswer'] = false;

        $aSelection[17]['question_id'] = 5;
        $aSelection[17]['choice'] = '10';
        $aSelection[17]['isAnswer'] = false;

        $aSelection[18]['question_id'] = 5;
        $aSelection[18]['choice'] = '14';
        $aSelection[18]['isAnswer'] = true;

        $aSelection[19]['question_id'] = 5;
        $aSelection[19]['choice'] = '15';
        $aSelection[19]['isAnswer'] = false;

        foreach ($aSelection as $aValue) {
            Selection::create($aValue);
        }

    }
}
