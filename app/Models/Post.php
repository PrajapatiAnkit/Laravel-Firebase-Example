<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * The attributes that are mass assignable.
     * @var array
     */
    protected $fillable = ['title', 'category_id','description','user_id'];

    /**
     * The attributes that aren't mass assignable.
     * @var array
     */
    protected $guarded = ['created_at', 'updated_at'];

    /**
     * The attributes that should be hidden for arrays.
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    /**
     * fields will be Carbon-ized
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];
    /**
     * The attributes that should be cast to native types.
     * @var array
     */
    protected $casts = [
        'title' => 'string',
        'category_id' => 'int',
        'description' => 'string',
        'user_id' => 'int',
        'created_at' => 'timestamp',
        'updated_at' => 'timestamp',
    ];

}
