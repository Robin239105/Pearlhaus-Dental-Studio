import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Clock, Calendar, User, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import { blog } from '../data/blog';

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract all unique categories
  const categories = useMemo(() => {
    const cats = new Set(blog.map((post) => post.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter blog posts
  const filteredPosts = useMemo(() => {
    return blog.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Featured post is the first one in the list, unless filtered
  const featuredPost = useMemo(() => {
    if (selectedCategory === 'All' && !searchQuery.trim() && blog.length > 0) {
      return blog[0];
    }
    return null;
  }, [selectedCategory, searchQuery]);

  // Remaining posts to show in the grid
  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((post) => post.id !== featuredPost.id);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

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
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Blog & Articles' }]} />
          <div className="space-y-2 max-w-2xl text-left">
            <SectionLabel>Clinical Education</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              The Dental Wellness Journal:{' '}
              <span className="block font-semibold">Expert Insights.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Browse guides, tips, and medical summaries prepared by our senior clinical team to help you make informed decisions about your dental hygiene and cosmetic transformations.
            </p>
          </div>
        </div>
      </div>

      {/* 2. SEARCH & FILTERS BAR */}
      <div className="px-6 md:px-16 py-8 border-b border-border bg-white sticky top-[70px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 font-body">
          {/* Categories Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-mint border-mint text-white'
                    : 'bg-white border-border text-navy hover:bg-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <Search className="w-4 h-4 text-slate/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-light text-navy bg-surface border border-border rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:border-mint/60 placeholder:text-muted transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      {/* 3. BLOG CONTENT */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto space-y-12">
        {/* Featured Post Hero */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-left cursor-pointer"
            onClick={() => navigate(`/blog/${featuredPost.slug}`)}
          >
            {/* Featured Image */}
            <div className="lg:col-span-7 h-[260px] sm:h-[360px] lg:h-[420px] relative overflow-hidden">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 text-[10px] font-bold text-mint bg-white border border-mint/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Featured Article
              </span>
            </div>

            {/* Featured Content */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between font-body">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-mint uppercase tracking-wider block">
                  {featuredPost.category}
                </span>
                <h2 className="font-display font-light text-navy text-2xl md:text-3xl leading-snug hover:text-mint transition-colors duration-200">
                  {featuredPost.title}
                </h2>
                <p className="text-xs font-light text-slate leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              {/* Author & Info */}
              <div className="pt-6 border-t border-border flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-border"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-navy">{featuredPost.author.name}</h4>
                    <p className="text-[9px] text-muted">{formatDate(featuredPost.date)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-xs font-bold text-mint">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Post Grid */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {gridPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-mint/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                {/* Image */}
                <div className="h-[200px] relative overflow-hidden bg-surface">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-[9px] font-bold text-navy bg-white/90 backdrop-blur-sm border border-border px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between font-body">
                  <div className="space-y-3 mb-6">
                    <h3 className="font-display font-bold text-navy text-base md:text-lg leading-snug group-hover:text-mint transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-xs font-light text-slate leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author Row */}
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-border"
                      />
                      <div>
                        <h4 className="text-[11px] font-bold text-navy">{post.author.name}</h4>
                        <div className="flex items-center space-x-1.5 text-[9px] text-muted">
                          <span>{formatDate(post.date)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-mint uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-200">
                      Read →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          !featuredPost && (
            <div className="py-16 text-center border border-border border-dashed rounded-2xl font-body">
              <p className="text-sm text-slate">No articles match your selection.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-xs text-mint font-bold uppercase tracking-wider mt-2 hover:underline"
              >
                Clear Search & Filters
              </button>
            </div>
          )
        )}
      </div>
    </PageWrapper>
  );
};

export default Blog;
