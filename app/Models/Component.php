<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    use HasFactory;
    protected $guarderd = ['id'];

    public function componentable()
    {
        return $this->morphTo();
    }

    public function unit()
    {
        return $this->hasOne(Unit::class);
    }
}
