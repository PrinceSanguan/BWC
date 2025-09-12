import { Header } from '@/components/admin/header'; // Import the Header component
import { Sidebar } from '@/components/admin/sidebar'; // Import the Sidebar component
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative flex max-h-[90vh] w-full max-w-[95vw] flex-col overflow-y-auto rounded bg-white p-4 shadow-lg sm:max-w-2xl sm:p-6 md:max-w-4xl md:p-8 lg:max-w-6xl lg:p-12 dark:bg-gray-800">
                <button onClick={onClose} className="absolute top-2 right-2 z-20 text-2xl text-gray-500 hover:text-gray-800">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

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
    const [form, setForm] = useState<{ title: string; description: string; image?: File | null; meta_title?: string; meta_description?: string }>({
        title: '',
        description: '',
        image: null,
        meta_title: '',
        meta_description: '',
    });
    const [editingId, setEditingId] = useState<number | null>(null);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        fetchBlogs();
    }, []);

    function fetchBlogs() {
        axios.get('/admin/blogs').then((res) => setBlogs(res.data));
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
            axios
                .post(`/admin/blogs/${editingId}?_method=PUT`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                .then(() => {
                    fetchBlogs();
                    clearForm();
                    setEditingId(null);
                });
        } else {
            axios
                .post('/admin/blogs', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                .then(() => {
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
                <main className="flex-1 overflow-y-auto bg-gray-100 p-2 sm:p-4 md:p-6 dark:bg-gray-900">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-gray-100">Blog Management</h1>
                        {/* Button to open create blog modal */}
                        {!editingId && (
                            <button
                                onClick={() => setCreateModalOpen(true)}
                                className="mb-4 w-full cursor-pointer self-start rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 sm:mb-6 sm:w-auto sm:text-base"
                            >
                                Create Blog
                            </button>
                        )}
                        {/* Modal for creating a blog */}
                        <Modal
                            open={createModalOpen}
                            onClose={() => {
                                setCreateModalOpen(false);
                                setForm({ title: '', description: '', image: null, meta_title: '', meta_description: '' });
                                if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                        >
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
                                    className="absolute top-0 right-8 z-10 mt-[-8px] mr-2 cursor-pointer rounded border border-green-700 bg-green-600 px-2 py-1 text-xs font-semibold text-white hover:bg-green-700 sm:right-0 sm:px-4 sm:py-2 sm:text-sm"
                                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                                >
                                    <span className="hidden sm:inline">Upload Image</span>
                                    <span className="sm:hidden">Upload</span>
                                </button>
                                {form.image && typeof form.image !== 'string' && (
                                    <span className="absolute top-0 right-20 z-10 mt-[-4px] max-w-32 truncate text-xs text-gray-600 sm:right-44 sm:max-w-none sm:text-sm">
                                        {form.image.name}
                                    </span>
                                )}
                                <form
                                    onSubmit={(e) => {
                                        handleSubmit(e);
                                        setCreateModalOpen(false);
                                    }}
                                    className="flex flex-col gap-2 sm:gap-3"
                                >
                                    <h2 className="mb-2 pr-8 text-lg font-bold sm:pr-0 sm:text-xl">Create Blog</h2>
                                    <label className="text-sm font-semibold sm:text-base">Meta Title</label>
                                    <input
                                        name="meta_title"
                                        value={form.meta_title}
                                        onChange={handleChange}
                                        placeholder="Meta Title"
                                        className="w-full rounded border p-2 text-sm sm:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        maxLength={60}
                                    />
                                    <label className="text-sm font-semibold sm:text-base">Meta Description</label>
                                    <input
                                        name="meta_description"
                                        value={form.meta_description}
                                        onChange={handleChange}
                                        placeholder="Meta Description"
                                        className="w-full rounded border p-2 text-sm sm:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        maxLength={150}
                                    />
                                    <label className="text-sm font-semibold sm:text-base">Title</label>
                                    <input
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        placeholder="Title"
                                        className="w-full rounded border p-2 text-lg font-bold sm:text-2xl md:text-3xl dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        required
                                    />
                                    <label className="text-sm font-semibold sm:text-base">Description</label>
                                    <div className="mb-2">
                                        <ReactQuill
                                            value={form.description}
                                            onChange={handleDescriptionChange}
                                            placeholder="Description"
                                            className="rounded bg-white dark:bg-gray-900"
                                            theme="snow"
                                            style={{
                                                minHeight: '200px',
                                                height: window.innerWidth < 640 ? '250px' : window.innerWidth < 768 ? '300px' : '400px',
                                                marginBottom: '0.5rem',
                                            }}
                                        />
                                    </div>
                                    <div className="mt-8 flex flex-col gap-2 sm:mt-12 sm:flex-row">
                                        <button
                                            type="submit"
                                            className="w-full cursor-pointer rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 sm:w-auto sm:text-base"
                                        >
                                            Create Blog
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full cursor-pointer rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 sm:w-auto sm:text-base"
                                            onClick={() => {
                                                setCreateModalOpen(false);
                                                setForm({ title: '', description: '', image: null, meta_title: '', meta_description: '' });
                                                if (fileInputRef.current) fileInputRef.current.value = '';
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                        {/* Modal for editing */}
                        <Modal
                            open={!!editingId}
                            onClose={() => {
                                setEditingId(null);
                                setForm({ title: '', description: '', image: null, meta_title: '', meta_description: '' });
                                if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                        >
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
                                    className="absolute top-0 right-8 z-10 mt-2 mr-2 cursor-pointer rounded border border-gray-300 bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-800 hover:bg-gray-300 sm:right-0 sm:px-4 sm:py-2 sm:text-sm"
                                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                                >
                                    <span className="hidden sm:inline">Upload Image</span>
                                    <span className="sm:hidden">Upload</span>
                                </button>
                                {form.image && typeof form.image !== 'string' && (
                                    <span className="absolute top-0 right-20 z-10 mt-4 max-w-32 truncate text-xs text-gray-600 sm:right-44 sm:max-w-none sm:text-sm">
                                        {form.image.name}
                                    </span>
                                )}
                                <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3">
                                    <h2 className="mb-2 pr-8 text-lg font-bold sm:pr-0 sm:text-xl">Edit Blog</h2>
                                    <label className="text-sm font-semibold sm:text-base">Meta Title</label>
                                    <input
                                        name="meta_title"
                                        value={form.meta_title}
                                        onChange={handleChange}
                                        placeholder="Meta Title"
                                        className="w-full rounded border p-2 text-sm sm:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        maxLength={60}
                                    />
                                    <label className="text-sm font-semibold sm:text-base">Meta Description</label>
                                    <input
                                        name="meta_description"
                                        value={form.meta_description}
                                        onChange={handleChange}
                                        placeholder="Meta Description"
                                        className="w-full rounded border p-2 text-sm sm:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        maxLength={150}
                                    />
                                    <label className="text-sm font-semibold sm:text-base">Title</label>
                                    <input
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        placeholder="Title"
                                        className="w-full rounded border p-2 text-lg font-bold sm:text-2xl md:text-3xl dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        required
                                    />
                                    <label className="text-sm font-semibold sm:text-base">Description</label>
                                    <div className="mb-2">
                                        <ReactQuill
                                            value={form.description}
                                            onChange={handleDescriptionChange}
                                            placeholder="Description"
                                            className="rounded bg-white dark:bg-gray-900"
                                            theme="snow"
                                            style={{
                                                minHeight: '200px',
                                                height: window.innerWidth < 640 ? '250px' : window.innerWidth < 768 ? '300px' : '400px',
                                                marginBottom: '0.5rem',
                                            }}
                                        />
                                    </div>
                                    <div className="mt-8 flex flex-col gap-2 sm:mt-12 sm:flex-row">
                                        <button
                                            type="submit"
                                            className="w-full cursor-pointer rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 sm:w-auto sm:text-base"
                                        >
                                            Update Blog
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full cursor-pointer rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 sm:w-auto sm:text-base"
                                            onClick={() => {
                                                setEditingId(null);
                                                setForm({ title: '', description: '', image: null, meta_title: '', meta_description: '' });
                                                if (fileInputRef.current) fileInputRef.current.value = '';
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="rounded border bg-white p-3 shadow sm:p-4 dark:bg-gray-800">
                                    {blog.image && (
                                        <img
                                            src={`/storage/${blog.image}`}
                                            alt={blog.title}
                                            className="mb-2 h-32 w-full rounded object-cover sm:h-32"
                                        />
                                    )}
                                    <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg dark:text-gray-100">{blog.title}</h3>
                                    <div
                                        className="mb-2 line-clamp-3 text-sm text-gray-700 sm:text-base dark:text-gray-300"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            maxHeight: '4.5em',
                                        }}
                                        dangerouslySetInnerHTML={{ __html: blog.description }}
                                    />
                                    <div className="flex flex-col gap-2 sm:flex-row">
                                        <button
                                            onClick={() => handleEdit(blog)}
                                            className="w-full cursor-pointer rounded bg-yellow-500 px-3 py-1 text-sm text-white hover:bg-yellow-600 sm:w-auto"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(blog.id)}
                                            className="w-full cursor-pointer rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700 sm:w-auto"
                                        >
                                            Delete
                                        </button>
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
