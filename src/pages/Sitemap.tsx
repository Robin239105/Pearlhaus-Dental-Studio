import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionLabel from '../components/ui/SectionLabel';

export const Sitemap: React.FC = () => {
  const sitemapData = [
    {
      section: 'Main Directory',
      links: [
        { label: 'Home Page', path: '/' },
        { label: 'Meet the Team', path: '/team' },
        { label: 'About the Clinic', path: '/about' },
        { label: 'Advanced Technology', path: '/technology' },
        { label: 'Smile Gallery (Cases)', path: '/gallery' },
        { label: 'Contact & Location', path: '/contact' },
        { label: 'Book an Appointment', path: '/booking' },
      ],
    },
    {
      section: 'Dental Treatments',
      links: [
        { label: 'Overview of Treatments', path: '/treatments' },
        { label: 'Cosmetic Dentistry', path: '/cosmetic-dentistry' },
        { label: 'Orthodontics & Invisalign', path: '/orthodontics' },
        { label: 'Dental Implants', path: '/implants' },
        { label: 'General & Preventive Care', path: '/general-dentistry' },
        { label: 'Childrens Dentistry', path: '/childrens-dentistry' },
        { label: 'Emergency Dental Care', path: '/emergency-dental' },
      ],
    },
    {
      section: 'Patient Hub & Legal',
      links: [
        { label: 'Patient Info Center', path: '/patient-info' },
        { label: 'New Patient Guide', path: '/new-patients' },
        { label: 'Online Patient Forms', path: '/patient-forms' },
        { label: 'Finance & Payment Plans', path: '/finance' },
        { label: 'Frequently Asked Questions', path: '/faq' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Accessibility Statement', path: '/accessibility' },
      ],
    },
  ];

  return (
    <PageWrapper>
      {/* Header Banner */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={[{ label: 'Legal Info', path: '#' }, { label: 'Sitemap' }]} />
          <div className="space-y-2 text-left">
            <SectionLabel>Full Directory</SectionLabel>
            <h1 className="font-display font-light text-navy text-3xl md:text-5xl leading-tight">
              Website <span className="font-semibold">Sitemap.</span>
            </h1>
            <p className="font-body font-light text-xs text-slate leading-relaxed pt-2">
              Browse all pages, care guides, and clinical directories of Pearlhaus Dental Studio.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto text-left font-body">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {sitemapData.map((sec, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="font-display font-bold text-navy text-base border-b border-border pb-2.5">
                {sec.section}
              </h3>
              <ul className="flex flex-col space-y-3 text-xs">
                {sec.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      to={link.path}
                      className="group relative inline-flex items-center text-slate hover:text-mint transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-350 mr-2 shrink-0 group-hover:bg-mint transition-colors" />
                      <span className="font-light">{link.label}</span>
                      <span className="absolute bottom-0 left-3.5 w-[calc(100%-14px)] h-[1px] bg-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Sitemap;
