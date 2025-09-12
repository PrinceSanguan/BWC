import { Head } from '@inertiajs/react';
import Footer from '../../landingpage/Footer';
import Header from '../../landingpage/Header';

interface BlogDetailProps {
    blog: {
        id: number;
        title: string;
        description: string;
        image?: string;
        meta_title?: string;
        meta_description?: string;
        image_url?: string;
    };
}

export default function BlogDetail({ blog }: BlogDetailProps) {
    return (
        <>
            <Head title={blog.meta_title || blog.title}>
                <meta name="description" content={blog.meta_description || blog.description.replace(/<[^>]+>/g, '').slice(0, 150)} />
            </Head>
            <Header />
            <main
                style={{
                    maxWidth: 900,
                    margin: '40px auto',
                    padding: '2rem 1rem',
                    background: '#fff',
                    borderRadius: 12,
                    boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                    marginTop: 40,
                    marginBottom: 40,
                }}
            >
                {blog.image && (
                    <img src={blog.image_url} alt={blog.title} style={{ width: '100%', height: 'auto', borderRadius: 8, marginBottom: 24 }} />
                )}
                <h1 style={{ fontSize: '2.2em', fontWeight: 700, marginBottom: 16 }}>{blog.title}</h1>
                <div style={{ color: '#222', fontSize: '1.13rem', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: blog.description }} />
            </main>
            <Footer />
        </>
    );
}
