<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    use HasFactory;
    protected $table = 'data';
    protected $guarded = ['id'];
    public function component()
    {
        return $this->morphOne(Component::class, 'componentable');
    }
}
