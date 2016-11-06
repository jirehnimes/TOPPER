<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Selection extends Model
{
    public function question()
    {
        return $this->belongsTo('App\Question');
    }
}
