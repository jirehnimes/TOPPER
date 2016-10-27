<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('password');
            $table->date('birthdate');
            $table->string('gender');
            $table->integer('school_id')->nullable();
            $table->integer('review_center_id')->nullable();
            $table->string('nickname')->nullable();
            $table->string('photo')->nullable();
            $table->string('user_type')->default('user');
            $table->string('access_type')->default('free');
            $table->string('premium_id')->nullable();
            // $table->string('api_token', 60)->unique();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
