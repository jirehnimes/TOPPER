<?php

namespace App\Http\Controllers;

use Hash;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;

use App\Http\Requests;

use App\User;

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
        // $oUser = User::where('email', $oInput['email'])
        //         ->get();

        $oUser = DB::table('users')
                ->where('email', $oInput['email'])
                ->get();

        if (count($oUser) === 0) {
            return response()->json(false);
        }

        // Password verification from encrypted password
        if(Hash::check($oInput['password']), $oUser[0]->password){
            return response()->json(true);
            // return response()->json($oUser[0]);
        }
        
        return response()->json(false);
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
        $oUser->first_name = $oInput['firstName'];
        $oUser->last_name = $oInput['lastName'];
        $oUser->nickname = $oInput['nickname'];
        $oUser->email = $oInput['email'];
        $oUser->password = Hash::make($oInput['password']);
        $oUser->birthdate = $oInput['birthdate'];
        $oUser->gender = $oInput['gender'];

        if($oUser->save()){
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
