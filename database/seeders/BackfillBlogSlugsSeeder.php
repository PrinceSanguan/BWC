<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Blog;

class BackfillBlogSlugsSeeder extends Seeder
{
    public function run()
    {
        foreach (Blog::all() as $blog) {
            if (!$blog->slug) {
                $blog->slug = $blog->generateSlug($blog->title);
                $blog->save();
            }
        }
    }
}
