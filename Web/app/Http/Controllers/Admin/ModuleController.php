<?php

namespace App\Http\Controllers\Admin;

// Http
use App\Http\Requests;
use App\Http\Controllers\Controller;

// Contracts
use App\Repositories\Contracts\ModuleRepositoryInterface;

// Business Logics
use App\BLs\ModuleBL;

use Storage;
use Excel;

class ModuleController extends Controller
{
    protected $_oModel;

    public function __construct(ModuleRepositoryInterface $oModule)
    {
        $this->_oModel = $oModule;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin/module');
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

    public function fileUpload(Request $request)
    {
        $oFile = $request->file('fModule');

        $sFileName = $oFile->getClientOriginalName();

        $bResult = Storage::put(
            'files/' . $sFileName,
            file_get_contents($oFile->getRealPath())
        );

        Excel::load('public/files/' . $sFileName, function($reader) {
            $aData = $reader->get()->first()->toArray();

            $foo = array_filter($aData, function($arr) {
                return $arr['module'] === 'Module 1';
            });

            echo "<pre>";
            var_dump($foo);
        });

        // if ($bResult === true) {
        //     return view('admin/module');
        // }
    }
}
