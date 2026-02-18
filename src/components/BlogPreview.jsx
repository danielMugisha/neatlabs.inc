import React from 'react';
import './BlogPreview.css';

export function BlogPreview() {
  const articles = [
    {
      date: 'Feb 15, 2024',
      title: 'The Future of Brand Storytelling in Digital Spaces',
      excerpt: 'Discover how brands are leveraging immersive technologies to create deeper connections with their audiences in the digital age.',
      slug: 'future-brand-storytelling'
    },
    {
      date: 'Feb 10, 2024',
      title: 'Designing for Accessibility: A Complete Guide',
      excerpt: 'Learn essential principles and practical techniques for creating inclusive digital experiences that work for everyone.',
      slug: 'designing-accessibility-guide'
    },
    {
      date: 'Feb 8, 2024',
      title: 'Performance Optimization Strategies for 2024',
      excerpt: 'Explore the latest techniques and tools for building lightning-fast web applications that convert visitors into customers.',
      slug: 'performance-optimization-2024'
    }
  ];

  return (
    <section className="blog-preview">
      <div className="container">
        <div className="blog__header">
          <span className="section-label">Latest Insights</span>
          <h2 className="section-title">From our blog</h2>
        </div>
        
        <div className="blog__grid">
          {articles.map((article, index) => (
            <article key={index} className="blog-card">
              <div className="blog__meta">
                <time className="blog__date">{article.date}</time>
              </div>
              <h3 className="blog__title">
                <a href={`/articles/${article.slug}`}>{article.title}</a>
              </h3>
              <p className="blog__excerpt">{article.excerpt}</p>
              <a href={`/articles/${article.slug}`} className="blog__link">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
