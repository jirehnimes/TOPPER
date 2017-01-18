<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        User::create(array(
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'email' => 'admin@topper.com',
            // 'password' => Hash::make('t0pp3r@dmin2016'),
            'password' => Hash::make('password'),
            'birthdate' => '2016-10-01',
            'nickname' => 'Admin Topper',
            'gender' => 'Male',
            'user_type' => 'admin',
            'access_type' => 'premium',
            // 'api_token' => Hash::make(str_random(60))
            // 'api_token' => str_random(60)
        ));

        User::create(array(
            'first_name' => 'Free',
            'last_name' => 'User',
            'email' => 'free@topper.com',
            'password' => Hash::make('password'),
            'birthdate' => '2016-10-01',
            'nickname' => 'Free Foo',
            'gender' => 'Male',
        ));

        User::create(array(
            'first_name' => 'Premium',
            'last_name' => 'User',
            'email' => 'premium@topper.com',
            'password' => Hash::make('password'),
            'birthdate' => '2016-10-01',
            'nickname' => 'Premium Foo',
            'gender' => 'Female',
            'access_type' => 'premium'
        ));
    }
}
