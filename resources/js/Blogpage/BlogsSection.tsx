
import 'react-quill/dist/quill.snow.css';
import styles from './BlogsSection.module.css';
import { useState, useEffect } from 'react';

function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(2px)' }}>
      <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.2)', minWidth: 900, maxWidth: 1600, width: '100%', padding: 32, position: 'relative', height: 700, maxHeight: 700, display: 'flex', flexDirection: 'column' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 20, fontSize: 28, color: '#888', background: 'none', border: 'none', cursor: 'pointer' }}>&times;</button>
        <div style={{ overflowY: 'auto', height: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

interface Blog {
  id: number;
  title: string;
  description: string;
  image?: string;
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

  return (
    <section className={styles.servicesSection} aria-label="Our Blogs">
      <div className={styles.servicesGrid}>
        {blogs.map((blog: Blog) => (
          <article className={styles.serviceCard} key={blog.id}>
            {blog.image && <img src={`/storage/${blog.image}`} alt={blog.title} className={styles.serviceImage} />}
            <h3 className={styles.serviceName} style={{ textAlign: 'left' }}>{blog.title}</h3>
            <div
              className={styles.serviceDesc + ' ' + styles.clamp3}
              style={{ textAlign: 'left' }}
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
            <button className={styles.readMoreButton} onClick={() => setOpenBlog(blog)}>Read more</button>
          </article>
        ))}
      </div>
      <Modal open={!!openBlog} onClose={() => setOpenBlog(null)}>
        {openBlog && (
          <div>
            <style>{`
              .ql-editor h1 { font-size: 2.5em; font-weight: bold; margin: 0.67em 0; }
              .ql-editor h2 { font-size: 2em; font-weight: bold; margin: 0.75em 0; }
              .ql-editor h3 { font-size: 1.5em; font-weight: bold; margin: 0.83em 0; }
              .ql-editor h4 { font-size: 1.2em; font-weight: bold; margin: 1.12em 0; }
              .ql-editor h5 { font-size: 1em; font-weight: bold; margin: 1.5em 0; }
              .ql-editor h6 { font-size: 0.9em; font-weight: bold; margin: 1.67em 0; }
              .ql-editor { font-size: 1.125rem; font-family: inherit; }
              .ql-editor a { color: #2563eb; text-decoration: underline; cursor: pointer; word-break: break-all; }
              .ql-editor a:hover { color: #1d4ed8; text-decoration: underline; }
            `}</style>
            {openBlog.image && <img src={`/storage/${openBlog.image}`} alt={openBlog.title} style={{ width: '100%', height: 'auto', borderRadius: 8, marginBottom: 16, display: 'block' }} />}
            <h1 style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: 12, textAlign: 'left' }}>{openBlog.title}</h1>
            <div
              className="ql-editor"
              style={{ color: '#222', textAlign: 'left', margin: 0, padding: 0, fontFamily: 'inherit' }}
              dangerouslySetInnerHTML={{
                __html: openBlog.description.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ')
              }}
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
