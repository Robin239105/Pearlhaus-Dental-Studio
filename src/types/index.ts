export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  duration: string;
  recovery: string;
  price: string;
  priceNote: string;
  painLevel: 'None' | 'Minimal' | 'Moderate';
  sessions: string;
  benefits: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: { q: string; a: string }[];
  relatedTreatments: string[];
  featured: boolean;
  isNew: boolean;
  icon: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  longBio: string;
  qualifications: string[];
  specialties: string[];
  languages: string[];
  experience: number;
  patientsServed: number;
  registrationNumber: string;
  awards: string[];
  treatments: string[];
  availableDays: string[];
  featured: boolean;
}

export interface GalleryCase {
  id: string;
  slug: string;
  treatment: string;
  treatmentSlug: string;
  patientAge: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  doctor: string;
  featured: boolean;
  tags: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  avatar: string;
  treatment: string;
  rating: number;
  text: string;
  date: string;
  platform: 'Google' | 'RateMyDentist' | 'Direct';
  featured: boolean;
  doctorSeen: string;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    slug: string;
  };
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: string[]; // paragraph blocks
  tags: string[];
}

export interface FAQ {
  id: string;
  q: string;
  a: string;
  category: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
