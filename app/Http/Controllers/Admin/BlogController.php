<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        return response()->json(Blog::all());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|file|image|max:2048',
        ]);
        if ($request->hasFile('image')) {
            $filename = $request->file('image')->store('images', 'public');
            $data['image'] = $filename;
        } else {
            $data['image'] = null;
        }
        $blog = Blog::create($data);
        return response()->json($blog, 201);
    }

    public function update(Request $request, Blog $blog)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|file|image|max:2048',
        ]);
        if ($request->hasFile('image')) {
            $filename = $request->file('image')->store('images', 'public');
            $data['image'] = $filename;
        } else {
            unset($data['image']); // Don't overwrite with null if not uploading
        }
        $blog->update($data);
        return response()->json($blog);
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json(['success' => true]);
    }
}
