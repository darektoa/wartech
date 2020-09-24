<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
   protected $table = 'foods';
   protected $fillable = ['nama', 'desc', 'price', 'icon'];
}
