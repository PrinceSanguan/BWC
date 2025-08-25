import styles from './BlogsSection.module.css';

type Blog = {
  title: string;
  date: string;
  excerpt: string;
};

const blogs: Blog[] = [
  { title: '5 Tips for Streak-Free Windows', date: 'Aug 2025', excerpt: 'Discover our top tips for sparkling clean windows every time.' },
  { title: 'Why Regular Cleaning Matters', date: 'Jul 2025', excerpt: 'Learn how regular window cleaning can extend the life of your windows.' },
  { title: 'Eco-Friendly Cleaning Solutions', date: 'Jun 2025', excerpt: 'See how we use safe, green products for a better clean.' },
];

export default function BlogsSection() {
  return (
    <section className={styles.blogsSection} aria-label="Blog Posts">
      <h2 className={styles.blogsTitle}>Latest Blog Posts</h2>
      <div className={styles.blogsGrid}>
        {blogs.map((blog, i) => (
          <div className={styles.blogCard} key={i}>
            <div className={styles.blogTitle}>{blog.title}</div>
            <div className={styles.blogMeta}>{blog.date}</div>
            <div>{blog.excerpt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
