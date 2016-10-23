<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    /**
	 * Get the topic details of a question
	 */
    public function topic()
    {
        return $this->belongsTo('App\Topic');
    }
}
