<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'meta_title',
        'meta_description',
        'slug',
    ];

    public function getImageUrlAttribute()
    {
        if (!$this->image) {
            return null;
        }

        return asset('upload-blog/' . $this->image);
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($blog) {
            $blog->slug = $blog->generateSlug($blog->title);
        });
        static::updating(function ($blog) {
            $blog->slug = $blog->generateSlug($blog->title);
        });
    }

    public function generateSlug($title)
    {
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
        $original = $slug;
        $count = 1;
        while (static::where('slug', $slug)->exists()) {
            $slug = $original . '-' . $count++;
        }
        return $slug;
    }
}
