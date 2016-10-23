<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
	/**
	 * Get all topics of a module
	 */
    public function topics()
    {
        return $this->hasMany('App\Topic');
    }
}
