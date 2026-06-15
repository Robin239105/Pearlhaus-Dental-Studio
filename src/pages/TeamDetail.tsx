import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShieldAlert, Star, Calendar, Globe, Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionLabel from '../components/ui/SectionLabel';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import { team } from '../data/team';
import { treatments } from '../data/treatments';
import { testimonials } from '../data/testimonials';
import { cn } from '../lib/utils';


export const TeamDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find Doctor
  const doctor = team.find((d) => d.slug === slug);

  if (!doctor) {
    return (
      <PageWrapper>
        <div className="py-20 text-center font-body text-slate max-w-md mx-auto space-y-4">
          <ShieldAlert className="w-12 h-12 text-error mx-auto animate-bounce" />
          <h2 className="font-display font-semibold text-navy text-2xl">Doctor Profile Not Found</h2>
          <p className="text-xs text-slate">The practitioner profile you are looking for does not exist or has been moved.</p>
          <Link to="/team" className="text-mint font-bold hover:underline block pt-2">
            Meet the Team
          </Link>
        </div>
      </PageWrapper>
    );
  }

  // Filter treatments performed by this doctor
  const doctorTreatments = treatments.filter((t) => doctor.treatments.includes(t.slug));

  // Filter testimonials mentioning this doctor
  const doctorReviews = testimonials.filter((t) => t.doctorSeen.toLowerCase().includes(doctor.name.split(' ').pop()?.toLowerCase() || ''));

  return (
    <PageWrapper>
      {/* 1. HERO HEADER */}
      <div className="w-full bg-surface border-b border-border py-12 md:py-16 px-6 md:px-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10 font-body">
          <Breadcrumb
            items={[
              { label: 'Our Team', path: '/team' },
              { label: doctor.name }
            ]}
          />
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pt-2">
            <Avatar src={doctor.image} alt={doctor.name} size="xl" border className="w-20 h-20 shrink-0" />
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-mint bg-mint-pale border border-mint/20 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                Dental Practitioner
              </span>
              <h1 className="font-display font-light text-navy text-3xl md:text-4xl leading-none pt-1">
                {doctor.name}
              </h1>
              <p className="text-xs font-semibold text-slate">{doctor.title}</p>
              <p className="text-[10px] text-muted font-light leading-none pt-1">{doctor.qualifications[0]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PROFILE SPLIT GRID */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Biography & Timelines (65%) */}
        <div className="lg:col-span-8 space-y-10 text-left font-body">
          
          {/* Biography */}
          <div className="space-y-5 text-sm md:text-base leading-relaxed text-slate font-light">
            {doctor.longBio.split('\n\n').map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Academic Qualifications & Timeline */}
          <div className="space-y-5 border-t border-border pt-8">
            <h3 className="font-display font-semibold text-navy text-xl md:text-2xl">
              Academic Qualifications & Degrees
            </h3>
            
            <div className="relative border-l border-border pl-6 space-y-6 ml-3">
              {doctor.qualifications.map((q, idx) => (
                <div key={idx} className="relative">
                  {/* Bullet */}
                  <div className="absolute left-[-30px] top-1.5 w-2 h-2 rounded-full bg-mint" />
                  <p className="text-xs md:text-sm font-medium text-navy">{q}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Badge Cards */}
          {doctor.awards.length > 0 && (
            <div className="space-y-4 border-t border-border pt-8">
              <h3 className="font-display font-semibold text-navy text-xl md:text-2xl">
                Accreditations & Awards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctor.awards.map((aw, idx) => (
                  <div key={idx} className="bg-surface border border-border p-4 rounded-xl flex items-start space-x-3">
                    <Award className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-navy leading-snug">{aw}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Sidebar: Details & Booking (35%) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-white p-6 rounded-2xl border border-border shadow-sm space-y-6 text-left font-body">
            
            <Button
              fullWidth
              onClick={() => navigate(`/booking?doctor=${doctor.slug}`)}
            >
              Book with {doctor.name.split(' ').pop()}
            </Button>

            <div className="border-t border-border/60 pt-4 space-y-4 text-xs text-slate">
              <div>
                <span className="text-[10px] font-bold text-slate tracking-wider uppercase block mb-1">
                  Registration Number
                </span>
                <span className="font-bold text-navy">{doctor.registrationNumber}</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate tracking-wider uppercase block mb-1">
                  Languages Spoken
                </span>
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4 text-mint shrink-0" />
                  <span className="font-semibold text-navy">{doctor.languages.join(', ')}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate tracking-wider uppercase block mb-1">
                  Experience
                </span>
                <span className="font-semibold text-navy">{doctor.experience} Years of Care</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate tracking-wider uppercase block mb-1">
                  Patients Served
                </span>
                <span className="font-semibold text-navy">{doctor.patientsServed.toLocaleString()}+ Happy Patients</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate tracking-wider uppercase block mb-1.5">
                  Available Days
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => {
                    const isAvailable = doctor.availableDays.includes(day);

                    return (
                      <span
                        key={day}
                        className={cn(
                          'px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider',
                          isAvailable
                            ? 'bg-mint-pale text-mint-dark border border-mint/20'
                            : 'bg-surface text-slate-300 border border-border/40'
                        )}
                      >
                        {day.slice(0, 3)}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-surface p-3.5 rounded-lg border border-border text-[11px] text-slate leading-relaxed">
              <strong>Patient Note:</strong> {doctor.name.split(' ').pop()} is currently accepting new cosmetic and general care patients. Emergency slots are blocked daily for urgent walk-ins.
            </div>

          </div>
        </div>

      </div>

      {/* 3. TREATMENTS PERFORMED */}
      {doctorTreatments.length > 0 && (
        <div className="bg-surface border-t border-border py-16 px-6 md:px-16 text-center">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-2 max-w-lg mx-auto">
              <SectionLabel>Expertise</SectionLabel>
              <h2 className="font-display font-light text-navy text-2xl md:text-4xl">
                Treatments Performed by {doctor.name.split(' ').pop()}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
              {doctorTreatments.slice(0, 3).map((t) => (
                <div
                  key={t.id}
                  className="bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow hover:border-mint/20 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3 font-body">
                    <span className="text-[9px] font-bold text-mint uppercase tracking-wider block">
                      {t.category}
                    </span>
                    <h4 className="font-display font-bold text-navy text-base leading-tight">
                      {t.title}
                    </h4>
                    <p className="text-xs text-slate line-clamp-2 leading-relaxed">
                      {t.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between">
                    <Link
                      to={`/treatments/${t.slug}`}
                      className="text-xs font-bold text-mint hover:underline inline-flex items-center"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                    <span className="text-xs font-bold text-navy font-body">{t.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. DOCTOR SPECIFIC REVIEWS */}
      {doctorReviews.length > 0 && (
        <div className="bg-white border-t border-border py-16 px-6 md:px-16 text-center">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-2 max-w-lg mx-auto">
              <SectionLabel>Patient Stories</SectionLabel>
              <h2 className="font-display font-light text-navy text-2xl md:text-4xl">
                What Patients Say About {doctor.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
              {doctorReviews.slice(0, 3).map((r) => (
                <div key={r.id} className="bg-surface rounded-xl p-5 border border-border/80 flex flex-col justify-between">
                  <div className="space-y-3 font-body">
                    <div className="flex justify-between items-center">
                      <div className="flex text-amber-500">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[9px] text-muted uppercase tracking-wider">{r.platform}</span>
                    </div>
                    <p className="text-xs text-slate leading-relaxed font-light">"{r.text}"</p>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-border/40 flex items-center space-x-2.5">
                    <Avatar src={r.avatar} alt={r.patientName} size="sm" border={false} className="w-8 h-8 shrink-0" />
                    <div className="font-body">
                      <span className="font-script text-sm text-navy font-bold block leading-none">{r.patientName}</span>
                      <span className="text-[8px] text-mint-dark font-semibold uppercase tracking-wider block mt-1">{r.treatment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default TeamDetail;
