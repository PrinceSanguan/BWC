import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import styles from './BlogsSection.module.css';

interface Blog {
    id: number;
    title: string;
    description: string;
    image?: string;
    slug?: string;
    image_url?: string;
}

export default function BlogsSection({ blogs }: { blogs: Blog[] }) {
    const [openBlog, setOpenBlog] = useState<Blog | null>(null);

    useEffect(() => {
        if (openBlog) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [openBlog]);

    // Helper to remove or demote h1 tags from blog.description
    function sanitizeDescription(html: string) {
        // Replace <h1> with <span> or <h2>, or remove entirely
        return html.replace(/<h1(.*?)>([\s\S]*?)<\/h1>/gi, '<span$1>$2</span>');
    }

    return (
        <section className={styles.servicesSection} aria-label="Our Blogs" style={{ background: '#fff' }}>
            <div className={styles.servicesGrid}>
                {blogs.map((blog: Blog) => (
                    <article className={styles.serviceCard} key={blog.id}>
                        {blog.image && <img src={blog.image_url || `/upload-blog/${blog.image}`} alt={blog.title} className={styles.serviceImage} />}
                        <h3 className={styles.serviceName} style={{ textAlign: 'left' }}>
                            {blog.title}
                        </h3>
                        <div
                            className={styles.serviceDesc + ' ' + styles.clamp3}
                            style={{ textAlign: 'left' }}
                            dangerouslySetInnerHTML={{ __html: sanitizeDescription(blog.description) }}
                        />
                        <Link href={`/blogs/${blog.slug}`} className={styles.readMoreButton}>
                            Read more
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
