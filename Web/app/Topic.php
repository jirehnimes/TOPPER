<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
	/**
	 * Get the module details of a topic
	 */
    public function module()
    {
        return $this->belongsTo('App\Module');
    }

    /**
	 * Get all topics of a module
	 */
    public function questions()
    {
        return $this->hasMany('App\Question');
    }
}
