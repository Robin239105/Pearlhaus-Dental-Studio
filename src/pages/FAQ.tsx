import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, HelpCircle, Phone, ArrowRight, MessageSquare } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import { faqs } from '../data/faqs';

export const FAQ: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories extracted from faqs data
  const categories = useMemo(() => {
    const cats = new Set(faqs.map((faq) => faq.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter FAQs
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Patient Info', path: '/patient-info' }, { label: 'Frequently Asked Questions' }]} />
          <div className="space-y-2 max-w-2xl text-left">
            <SectionLabel>Common Queries</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Frequently Asked{' '}
              <span className="block font-semibold">Questions.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Have a question about scheduling, treatments, or health funds? Search our dynamic directory below. If you cannot find what you are looking for, contact our guest relations team.
            </p>
          </div>
        </div>
      </div>

      {/* 2. SEARCH & FILTERS BAR */}
      <div className="px-6 md:px-16 py-8 border-b border-border bg-white sticky top-[70px] z-30 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-body">
          {/* Categories Scrollable Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
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
          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 text-slate/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-light text-navy bg-surface border border-border rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:border-mint/60 placeholder:text-muted transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      {/* 3. FAQ ACCORDION LIST */}
      <div className="px-6 md:px-16 py-16 max-w-3xl mx-auto">
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.3) }}
              >
                <Accordion title={faq.q}>
                  <div className="space-y-3">
                    <p className="font-body font-light text-xs md:text-sm text-slate leading-relaxed">
                      {faq.a}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-border/40 text-[10px] font-bold text-muted font-body uppercase tracking-wider">
                      <span>Category: {faq.category}</span>
                      <button
                        onClick={() => navigate('/booking')}
                        className="text-mint hover:text-mint-dark hover:underline flex items-center space-x-1"
                      >
                        <span>Book consultation</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </Accordion>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-border border-dashed rounded-2xl font-body">
            <p className="text-sm text-slate">No questions matched your search term.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs text-mint font-bold uppercase tracking-wider mt-2 hover:underline"
            >
              Clear Search & Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. CLINICAL PHILOSOPHY BOX */}
      <div className="px-6 md:px-16 py-16 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-body">
          <div className="md:col-span-8 space-y-4">
            <h3 className="font-display font-light text-navy text-2xl md:text-3xl leading-tight">
              Have a Specific Treatment Question?
            </h3>
            <p className="text-xs font-light text-slate leading-relaxed">
              Dental care is highly personal. If you have an inquiry regarding a complex procedure, dental history, or insurance quote, you can request a quick call-back from our clinical coordinator.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <Button onClick={() => navigate('/contact')}>
              Request Callback
            </Button>
          </div>
        </div>
      </div>

      {/* 5. DENTAL URGENCY HELP */}
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-center space-y-6">
        <HelpCircle className="w-10 h-10 text-mint mx-auto" />
        <div className="space-y-2">
          <h3 className="font-display font-semibold text-navy text-2xl">
            In Dental Pain Right Now?
          </h3>
          <p className="font-body font-light text-xs text-slate max-w-sm mx-auto leading-relaxed">
            If you are experiencing severe dental pain, a broken tooth, swelling, or trauma, do not wait. We offer same-day emergency dental appointments.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 font-body">
          <a
            href="tel:+61290001420"
            className="w-full sm:w-auto text-center bg-error/5 text-error border border-error/20 font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-md hover:bg-error/10 transition-colors duration-200"
          >
            🚨 Call 24/7 Hotline
          </a>
          <Button onClick={() => navigate('/emergency-dental')}>
            View Emergency Advice
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FAQ;
