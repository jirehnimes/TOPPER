<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Question;

class QuestionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('questions')->delete();

        $aQuestion = array();

        // Inorganic Chemistry

        $aQuestion[0]['topic_id'] = 1;
        $aQuestion[0]['reference_id'] = 1;
        $aQuestion[0]['text'] = 'What is the oxidation state of Cl in chloric acid?';
        $aQuestion[0]['rationale'] = 'Chloric acid, HClO3, has an oxidation state of +5.';

        $aQuestion[1]['topic_id'] = 1;
        $aQuestion[1]['reference_id'] = 1;
        $aQuestion[1]['text'] = 'Dibasic sodium phosphate has the following formula:';
        $aQuestion[1]['rationale'] = 'The official name of Na2HPO4 in the USP is dibasic sodium phosphate.';

        $aQuestion[2]['topic_id'] = 1;
        $aQuestion[2]['reference_id'] = 1;
        $aQuestion[2]['text'] = 'Chalcogens refer to which group?';
        $aQuestion[2]['rationale'] = 'Group II-A, alkaline earths; Group II-B, volatile elements; Group VII-A, halogens.';

        $aQuestion[3]['topic_id'] = 1;
        $aQuestion[3]['reference_id'] = 1;
        $aQuestion[3]['text'] = 'Elements with partially filled d orbital fall under which group?';
        $aQuestion[3]['rationale'] = 'Those elements in which a d orbital is filled paritally, starding at Group III-B and ending at Group II-B, are known as the transition elements.';

        $aQuestion[4]['topic_id'] = 1;
        $aQuestion[4]['reference_id'] = 1;
        $aQuestion[4]['text'] = 'How many member elements does lanthanides have?';
        $aQuestion[4]['rationale'] = 'The lanthanides and actinides (inner transition elements) are fourteen member families in which f orbitals have 1 to 14 electrons.';

        // Organic Chemistry

        // $aQuestion[5]['topic_id'] = 2;
        // $aQuestion[5]['reference_id'] = 1;
        // $aQuestion[5]['text'] = 'It is the number of protons inside an atom\'s nucleus.';
        // $aQuestion[5]['rationale'] = 'Mass number is the sum of an atom\'s protons and neutrons. Atomic weight is the average weighted mass of an element\'s atoms. Molecular weight is the sum of the atomic weights of all the atoms in the molecule.';

        // $aQuestion[6]['topic_id'] = 2;
        // $aQuestion[6]['reference_id'] = 1;
        // $aQuestion[6]['text'] = 'According to this principle, an electron always occupy the available orbital with the lowest energy.';
        // $aQuestion[6]['rationale'] = 'Pauli exclusion states that no more than 2 electrons occupy the same orbital and that they must be of opposite spin. Hund\'s rule states that an electron will occupy an empty orbital before pairing up with another electron. Quantum mechanics states that electrons can be thought of as accupying a set of concentric shells that surround the nucleus.';

        // $aQuestion[7]['topic_id'] = 2;
        // $aQuestion[7]['reference_id'] = 1;
        // $aQuestion[7]['text'] = 'Which specie is the most basic?';
        // $aQuestion[7]['rationale'] = 'Larger size stabilizes negative charge which makes the base weaker.';

        // $aQuestion[8]['topic_id'] = 2;
        // $aQuestion[8]['reference_id'] = 1;
        // $aQuestion[8]['text'] = 'Choose the strongest acid:';
        // $aQuestion[8]['rationale'] = 'HF forms the most stable conjugate base, hence strongest acid.';

        // $aQuestion[9]['topic_id'] = 2;
        // $aQuestion[9]['reference_id'] = 1;
        // $aQuestion[9]['text'] = 'What equation gives the relationship between pH and pKa?';
        // $aQuestion[9]['rationale'] = '';

        foreach ($aQuestion as $aValue) {
            Question::create($aValue);
        }
    }
}
