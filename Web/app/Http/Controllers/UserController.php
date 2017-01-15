<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use Hash;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;

use App\Http\Requests;

use App\User;
use App\ModuleTransaction;

class UserController extends Controller
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

    public function login(Request $request)
    {
        $oInput = $request->all();

        // To check if email exist
        $oUser = DB::table('users')
                ->where('email', $oInput['email'])
                ->get();

        if (count($oUser) === 0) {
            $aMsg['msg'] = 'wrong email';
            $aMsg['status'] = false;
            return response()->json($aMsg);
        }

        // Password verification from encrypted password
        if(Hash::check($oInput['password'], $oUser[0]->password)) {
            $aMsg['msg'] = 'login success';
            $aMsg['status'] = true;
            $aMsg['data'] = (array)$oUser[0];

            return response()->json($aMsg);
        } else {
            $aMsg['msg'] = 'wrong password';
            $aMsg['status'] = false;
            return response()->json($aMsg);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $oInput = $request->all();
        
        $oExist = User::where('email', $oInput['email'])
                ->get();

        if (count($oExist) !== 0) {
            $aMsg['msg'] = 'Email is already registered!';
            $aMsg['status'] = false;
            return response()->json($aMsg);
        }

        $oUser = new User;
        $oModuleTransaction = new ModuleTransaction;

        $oUser->first_name = $oInput['firstName'];
        $oUser->last_name = $oInput['lastName'];
        $oUser->nickname = $oInput['nickname'];
        $oUser->email = $oInput['email'];
        $oUser->password = Hash::make($oInput['password']);
        $oUser->birthdate = $oInput['birthdate'];
        $oUser->gender = $oInput['gender'];

        if($oUser->save()){
            $oModuleTransaction->user_id = $oUser->id;
            $oModuleTransaction->module_id = 1;
            $oModuleTransaction->save();

            $aMsg['msg'] = 'Successfully registered!';
            $aMsg['status'] = true;
            return response()->json($aMsg);
        }

        $aMsg['msg'] = 'Failed to register!';
        $aMsg['status'] = false;
        return response()->json($aMsg);
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
        $oInput = $request->all();      

        if ($oInput['user_id'] === (int)$id) {

            $oUser = User::find($id);

            $oUser->first_name = $oInput['first_name'];
            $oUser->last_name = $oInput['last_name'];
            $oUser->nickname = $oInput['nickname'];
            $oUser->gender = $oInput['gender'];
            $oUser->birthdate = $oInput['birthdate'];

            if ($oUser->save()) {
                $aMsg['msg'] = 'Updated successfully!';
                $aMsg['status'] = true;
                $aMsg['data'] = User::find($id);
                return response()->json($aMsg);
            }

            $aMsg['msg'] = 'Update failed!';
            $aMsg['status'] = false;
            return response()->json($aMsg);

        }

        $aMsg['msg'] = 'Invalid user ID!';
        $aMsg['status'] = false;
        return response()->json($aMsg);
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
