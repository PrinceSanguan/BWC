<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        $blogs->each(function ($blog) {
            $blog->image_url = $blog->image_url;
        });
        return response()->json($blogs);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|file|image|max:2048',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
        ]);
        if ($request->hasFile('image')) {
            $filename = $request->file('image')->store('', 'blog-image');
            $data['image'] = $filename;
        } else {
            $data['image'] = null;
        }
        $blog = Blog::create($data);
        $blog->image_url = $blog->image_url;
        return response()->json($blog, 201);
    }

    public function update(Request $request, Blog $blog)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|file|image|max:2048',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
        ]);
        if ($request->hasFile('image')) {
            $filename = $request->file('image')->store('', 'blog-image');
            $data['image'] = $filename;
        } else {
            unset($data['image']); // Don't overwrite with null if not uploading
        }
        $blog->update($data);
        $blog->image_url = $blog->image_url;
        return response()->json($blog);
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json(['success' => true]);
    }

    public function show($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        $blog->image_url = $blog->image_url;
        return response()->json($blog);
    }
}
