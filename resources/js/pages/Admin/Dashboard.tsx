import { Header } from '@/components/admin/header'; // Import the Header component
import { Sidebar } from '@/components/admin/sidebar'; // Import the Sidebar component
import { useEffect, useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 p-12 rounded shadow-lg min-w-[1000px] max-w-6xl w-full relative flex flex-col">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
                {children}
            </div>
        </div>
    );
}
import axios from 'axios';

interface User {
    name: string;
    email: string;
}

interface DashboardProps {
    user: User;
}

interface Blog {
    id: number;
    title: string;
    description: string;
    image?: string;
    meta_title?: string;
    meta_description?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [form, setForm] = useState<{ title: string; description: string; image?: File | null; meta_title?: string; meta_description?: string }>({ title: '', description: '', image: null, meta_title: '', meta_description: '' });
    const [editingId, setEditingId] = useState<number | null>(null);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        fetchBlogs();
    }, []);

    function fetchBlogs() {
        axios.get('/admin/blogs').then(res => setBlogs(res.data));
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value, files } = e.target as HTMLInputElement;
        if (name === 'image' && files && files[0]) {
            setForm({ ...form, image: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    }

    function handleDescriptionChange(value: string) {
        setForm({ ...form, description: value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('meta_title', form.meta_title ?? '');
        formData.append('meta_description', form.meta_description ?? '');
        if (form.image) {
            formData.append('image', form.image);
        }
        const clearForm = () => {
            setForm({ title: '', description: '', image: null, meta_title: '', meta_description: '' });
            if (fileInputRef.current) fileInputRef.current.value = '';
        };
        if (editingId) {
            axios.post(`/admin/blogs/${editingId}?_method=PUT`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(() => {
                fetchBlogs();
                clearForm();
                setEditingId(null);
            });
        } else {
            axios.post('/admin/blogs', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(() => {
                fetchBlogs();
                clearForm();
            });
        }
    }

    function handleEdit(blog: Blog) {
        setForm({
            title: blog.title,
            description: blog.description,
            image: null,
            meta_title: blog.meta_title || '',
            meta_description: blog.meta_description || '',
        });
        setEditingId(blog.id);
    }

    function handleDelete(id: number) {
        axios.delete(`/admin/blogs/${id}`).then(() => fetchBlogs());
    }

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            <Sidebar user={user} />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header user={user} />
                <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6 dark:bg-gray-900">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Blog Management</h1>
                        {/* Button to open create blog modal */}
                        {!editingId && (
                            <button onClick={() => setCreateModalOpen(true)} className="mb-6 bg-blue-600 text-white py-2 px-4 rounded self-start cursor-pointer">Create Blog</button>
                        )}
                        {/* Modal for creating a blog */}
                        <Modal open={createModalOpen} onClose={() => { setCreateModalOpen(false); setForm({ title: '', description: '', image: null, meta_title: '', meta_description: '' }); if (fileInputRef.current) fileInputRef.current.value = ''; }}>
                            <div className="relative">
                                <input
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleChange}
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    id="blog-image-upload-create"
                                />
                                <button
                                    type="button"
                                    className="absolute top-0 right-0 mt-[-8px] mr-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded border border-green-700 z-10 cursor-pointer"
                                    style={{ marginLeft: '16px' }}
                                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                                >
                                    Upload Image
                                </button>
                                {form.image && typeof form.image !== 'string' && (
                                    <span className="absolute top-0 right-44 mt-[-4px] text-sm text-gray-600 z-10">{form.image.name}</span>
                                )}
                                <form onSubmit={e => { handleSubmit(e); setCreateModalOpen(false); }} className="flex flex-col gap-2">
                                    <h2 className="text-xl font-bold mb-2">Create Blog</h2>
                                    <label className="font-semibold">Meta Title</label>
                                    <input name="meta_title" value={form.meta_title} onChange={handleChange} placeholder="Meta Title" className="border p-2 rounded w-full" maxLength={60} />
                                    <label className="font-semibold">Meta Description</label>
                                    <input name="meta_description" value={form.meta_description} onChange={handleChange} placeholder="Meta Description" className="border p-2 rounded w-full" maxLength={150} />
                                    <label className="font-semibold">Title</label>
                                    <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-2 rounded w-full text-3xl font-bold" required />
                                    <label className="font-semibold">Description</label>
                                    <ReactQuill
                                        value={form.description}
                                        onChange={handleDescriptionChange}
                                        placeholder="Description"
                                        className="mb-2 bg-white dark:bg-gray-900 rounded"
                                        theme="snow"
                                        style={{ minHeight: '300px', height: '400px', marginBottom: '0.5rem' }}
                                    />
                                    <div className="flex gap-2 mt-12">
                                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">Create Blog</button>
                                        <button type="button" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded cursor-pointer" onClick={() => { setCreateModalOpen(false); setForm({ title: '', description: '', image: null, meta_title: '', meta_description: '' }); if (fileInputRef.current) fileInputRef.current.value = ''; }}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                        {/* Modal for editing */}
                        <Modal open={!!editingId} onClose={() => { setEditingId(null); setForm({ title: '', description: '', image: null, meta_title: '', meta_description: '' }); if (fileInputRef.current) fileInputRef.current.value = ''; }}>
                            <div className="relative">
                                <input
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleChange}
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    id="blog-image-upload-edit"
                                />
                                <button
                                    type="button"
                                    className="absolute top-0 right-0 mt-2 mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded border border-gray-300 z-10"
                                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                                >
                                    Upload Image
                                </button>
                                {form.image && typeof form.image !== 'string' && (
                                    <span className="absolute top-0 right-44 mt-4 text-sm text-gray-600 z-10">{form.image.name}</span>
                                )}
                                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                                    <h2 className="text-xl font-bold mb-2">Edit Blog</h2>
                                    <label className="font-semibold">Meta Title</label>
                                    <input name="meta_title" value={form.meta_title} onChange={handleChange} placeholder="Meta Title" className="border p-2 rounded w-full" maxLength={60} />
                                    <label className="font-semibold">Meta Description</label>
                                    <input name="meta_description" value={form.meta_description} onChange={handleChange} placeholder="Meta Description" className="border p-2 rounded w-full" maxLength={150} />
                                    <label className="font-semibold">Title</label>
                                    <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-2 rounded w-full text-3xl font-bold" required />
                                    <label className="font-semibold">Description</label>
                                    <ReactQuill
                                        value={form.description}
                                        onChange={handleDescriptionChange}
                                        placeholder="Description"
                                        className="mb-2 bg-white dark:bg-gray-900 rounded"
                                        theme="snow"
                                        style={{ minHeight: '300px', height: '400px', marginBottom: '0.5rem' }}
                                    />
                                    <div className="flex gap-2 mt-12">
                                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">Update Blog</button>
                                        <button type="button" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded cursor-pointer" onClick={() => { setEditingId(null); setForm({ title: '', description: '', image: null, meta_title: '', meta_description: '' }); if (fileInputRef.current) fileInputRef.current.value = ''; }}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {blogs.map(blog => (
                                <div key={blog.id} className="border rounded p-4 bg-white shadow">
                                    {blog.image && <img src={`/storage/${blog.image}`} alt={blog.title} className="mb-2 w-full h-32 object-cover rounded" />}
                                    <h3 className="font-bold text-lg mb-1">{blog.title}</h3>
                                    <div className="mb-2 line-clamp-3" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '4.5em' }} dangerouslySetInnerHTML={{ __html: blog.description }} />
                                    <div className="flex gap-2">
                                        <button onClick={() => handleEdit(blog)} className="bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer">Edit</button>
                                        <button onClick={() => handleDelete(blog.id)} className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
