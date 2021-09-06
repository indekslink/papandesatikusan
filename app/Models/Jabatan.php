<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jabatan extends Model
{
    use HasFactory;
    protected $table = 'jabatan';
    protected $guarded = ['id'];


    public function user()
    {
        return $this->hasOne(User::class);
    }
    public function pokja()
    {
        return $this->hasOne(Pokja::class);
    }
}
