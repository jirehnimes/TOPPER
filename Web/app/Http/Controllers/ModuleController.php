<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Module;
use App\ModuleTransaction;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {   
        $aModules = Module::all();
        $aPaid = ModuleTransaction::where('user_id', $id)->get(['module_transactions.module_id']);
        $aPaidId = array();

        foreach ($aPaid as $iKey => $aValue) {
            array_push($aPaidId, $aValue['module_id']);
        }

        foreach ($aModules as $iKey => $aValue) {
            $aModules[$iKey]['is_paid'] = false;

            if (in_array($aValue['id'], $aPaidId) === true) {
                $aModules[$iKey]['is_paid'] = true;
            }
        }

        $aData['status'] = true;
        $aData['data'] = $aModules;

        return response()->json($aData);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
