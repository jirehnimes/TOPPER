<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\User;
use App\Module;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $aUser = User::where('id', $id)->first();

        $aRes['msg'] = '';
        $aRes['status'] = false;
        $aRes['data'] = null;

        // if ($aUser['access_type'] === 'free' && $aUser['premium_id'] === null) {
        if ($aUser['access_type'] === 'free') {
            $aRes['status'] = true;
            $aRes['data'] = Module::with('topics.questions.selection')
                ->where('is_premium', 0)
                ->get();
        }

        // if ($aUser['access_type'] === 'premium' && $aUser['premium_id'] !== null) {
        if ($aUser['access_type'] === 'premium') {
            $aRes['status'] = true;
            $aRes['data'] = Module::with('topics.questions.selection')
                ->get();
        }

        return $aRes;
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
