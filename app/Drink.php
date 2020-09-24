<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drink extends Model
{
    protected $fillable = ['nama', 'desc', 'price', 'icon'];
}
