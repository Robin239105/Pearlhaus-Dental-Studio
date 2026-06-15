import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import { blog } from '../../data/blog';
import useScrollReveal from '../../hooks/useScrollReveal';

export const BlogPreview: React.FC = () => {
  const navigate = useNavigate();
  const { ref, controls } = useScrollReveal();
  
  // Get the 3 latest blog posts
  const latestPosts = blog.slice(0, 3);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6 md:px-16 bg-white overflow-hidden z-10">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        {/* Title Block */}
        <div className="space-y-2 max-w-lg mx-auto">
          <SectionLabel>Dental Health Hub</SectionLabel>
          <h2 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
            Tips for a Healthier Smile
          </h2>
          <p className="font-body font-light text-xs text-slate pt-2">
            Stay informed with the latest tips, guides, and dental care updates from our clinical team.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {latestPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div>
                {/* Cover Image (16:9) */}
                <div className="w-full aspect-[16/9] overflow-hidden bg-surface relative">
                  {/* Category overlay */}
                  <span className="absolute left-4 top-4 bg-white/90 backdrop-blur-sm text-mint-dark font-bold text-[9px] px-2.5 py-1 rounded uppercase tracking-wider font-body z-10 border border-mint/10">
                    {post.category}
                  </span>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h4 className="font-display font-semibold text-navy text-lg leading-tight group-hover:text-mint transition-colors duration-200">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h4>
                  <p className="font-body font-light text-xs text-slate line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer: Author & Meta */}
              <div className="p-5 pt-0 mt-auto">
                <div className="flex items-center justify-between border-t border-border/40 pt-4 text-[10px] text-muted font-body">
                  {/* Author details */}
                  <div className="flex items-center space-x-2">
                    <Avatar
                      src={post.author.avatar}
                      alt={post.author.name}
                      size="sm"
                      border={false}
                      className="w-6 h-6 shrink-0"
                    />
                    <span className="font-semibold text-navy">{post.author.name}</span>
                  </div>

                  {/* Date and read time */}
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-mint shrink-0" />
                      <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}</span>
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-mint shrink-0" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Read All CTA */}
        <div className="pt-4">
          <Button variant="outline" onClick={() => navigate('/blog')}>
            Read All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
