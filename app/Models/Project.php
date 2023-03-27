<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    Protected $primary_key  = 'id';
    Protected $table = 'projects';
    Protected $filable  = ['name','description'];
}
