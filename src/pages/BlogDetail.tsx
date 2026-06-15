import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Bookmark, Share2, MessageCircle } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import { blog } from '../data/blog';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find the post
  const post = useMemo(() => {
    return blog.find((b) => b.slug === slug);
  }, [slug]);

  // Find related posts (exclude current post, match category if possible)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const categoryMatches = blog.filter((b) => b.id !== post.id && b.category === post.category);
    if (categoryMatches.length >= 3) return categoryMatches.slice(0, 3);
    
    // Fallback to random posts if not enough category matches
    const otherPosts = blog.filter((b) => b.id !== post.id);
    return [...categoryMatches, ...otherPosts].slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <PageWrapper>
        <div className="px-6 py-24 text-center font-body max-w-md mx-auto space-y-4">
          <h2 className="font-display font-light text-navy text-2xl">Article Not Found</h2>
          <p className="text-xs text-slate">The dental article you are looking for might have been moved or archived.</p>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
      </PageWrapper>
    );
  }

  // Format date utility
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-AU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <PageWrapper>
      {/* 1. HEADER & META */}
      <div className="w-full bg-surface border-b border-border py-10 md:py-14 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="flex items-center justify-between">
            <Breadcrumb
              items={[
                { label: 'Blog', path: '/blog' },
                { label: post.category },
              ]}
            />
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center space-x-1.5 text-xs text-slate hover:text-mint transition-colors duration-200 font-body font-bold uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Articles</span>
            </button>
          </div>

          <div className="space-y-4 text-left font-body">
            <span className="text-[10px] font-bold text-mint bg-mint-pale border border-mint/20 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
              {post.category}
            </span>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-light text-slate border-t border-border/60 pt-4">
              <Link to={`/team/${post.author.slug}`} className="flex items-center space-x-2 text-navy hover:text-mint transition-colors duration-200">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-7 h-7 rounded-full object-cover border border-border"
                />
                <span className="font-bold">{post.author.name}</span>
              </Link>
              <span className="text-border">|</span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-mint" />
                <span>{formatDate(post.date)}</span>
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-mint" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ARTICLE BODY CONTENT */}
      <div className="px-6 md:px-16 py-12 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
        {/* Floating actions (Desktop) */}
        <div className="hidden lg:col-span-1 lg:flex flex-col items-center space-y-4 pt-4 sticky top-[150px] h-fit">
          <button
            type="button"
            onClick={() => alert('Article bookmarked!')}
            className="p-3 bg-surface hover:bg-mint-pale text-slate hover:text-mint rounded-full border border-border transition-colors duration-200"
            title="Bookmark"
          >
            <Bookmark className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => { navigator.clipboard.writeText(window.location.href); alert('URL copied to clipboard!'); }}
            className="p-3 bg-surface hover:bg-mint-pale text-slate hover:text-mint rounded-full border border-border transition-colors duration-200"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="lg:col-span-11 space-y-8">
          {/* Cover Image */}
          <div className="w-full h-[240px] md:h-[400px] rounded-2xl overflow-hidden shadow-sm relative">
            <img
              src={post.coverImage}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Paragraph content with custom styles */}
          <article className="font-body text-slate text-sm md:text-base leading-relaxed space-y-6 max-w-3xl">
            {post.content.map((paragraph, idx) => {
              // Inject a pull-quote in the middle of the text to increase visual interest
              if (idx === Math.floor(post.content.length / 2)) {
                return (
                  <React.Fragment key={idx}>
                    <blockquote className="border-l-4 border-mint pl-6 py-2 my-8 italic font-display text-navy text-lg md:text-xl font-light bg-surface/50 rounded-r-xl">
                      "{post.excerpt}"
                    </blockquote>
                    <p className="font-light">{paragraph}</p>
                  </React.Fragment>
                );
              }
              return (
                <p key={idx} className="font-light">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Tags */}
          <div className="pt-6 border-t border-border flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold text-navy bg-surface px-3 py-1 rounded-full uppercase tracking-wider"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Card Profile */}
          <div className="bg-surface rounded-2xl border border-border p-6 mt-12 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 text-center sm:text-left font-body">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-mint"
            />
            <div className="space-y-2.5">
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-mint uppercase tracking-widest block">Written By</span>
                <Link to={`/team/${post.author.slug}`} className="font-display font-bold text-navy text-lg hover:text-mint transition-colors duration-200">
                  {post.author.name}
                </Link>
                <p className="text-[11px] text-muted">Senior Dentist at Pearlhaus Dental Studio</p>
              </div>
              <p className="text-xs font-light text-slate leading-relaxed">
                Dedicated to providing patient-centered dental care. Dr. author focuses on translating clinical evidence into easy-to-understand guides for patients.
              </p>
              <div className="pt-1">
                <Link
                  to={`/team/${post.author.slug}`}
                  className="text-xs font-bold text-mint hover:underline inline-flex items-center"
                >
                  View Specialist Profile →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. RELATED ARTICLES */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-left space-y-1">
            <SectionLabel>More to read</SectionLabel>
            <h3 className="font-display font-light text-navy text-2xl md:text-3xl">
              Related Articles & Guides
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body text-left">
            {relatedPosts.map((rPost) => (
              <div
                key={rPost.id}
                onClick={() => { navigate(`/blog/${rPost.slug}`); window.scrollTo(0, 0); }}
                className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="h-[150px] relative overflow-hidden">
                  <img
                    src={rPost.coverImage}
                    alt={rPost.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2 mb-4">
                    <span className="text-[9px] font-bold text-mint uppercase tracking-wider block">{rPost.category}</span>
                    <h4 className="font-display font-bold text-navy text-sm md:text-base leading-snug group-hover:text-mint transition-colors duration-200 line-clamp-2">
                      {rPost.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold text-mint uppercase tracking-wider group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. BOOKING CTA */}
      <div className="bg-white py-16 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h3 className="font-display font-semibold text-navy text-2xl">
            Prioritize Your Dental Health
          </h3>
          <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
            Schedule a check-up or cosmetic consultation with one of our specialists. Flexible appointment timings available.
          </p>
          <Button onClick={() => navigate('/booking')}>
            Book Appointment Online
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BlogDetail;
