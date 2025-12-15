import { 
  Home, 
  Briefcase, 
  Camera, 
  Dumbbell, 
  GraduationCap, 
  Truck, 
  Music, 
  Wrench,
  Palette,
  ChefHat,
  Dog,
  HeartPulse
} from 'lucide-react';
import { ServiceCategory, Testimonial, FooterSection } from './types';

export const CATEGORIES: ServiceCategory[] = [
  { id: '1', name: 'Home', icon: Home, popular: true },
  { id: '2', name: 'Renovation', icon: Wrench, popular: true },
  { id: '3', name: 'Events', icon: Music },
  { id: '4', name: 'Lessons', icon: GraduationCap },
  { id: '5', name: 'Wellness', icon: HeartPulse },
  { id: '6', name: 'Photography', icon: Camera },
  { id: '7', name: 'Business', icon: Briefcase },
  { id: '8', name: 'Animals', icon: Dog },
  { id: '9', name: 'Cars', icon: Truck },
  { id: '10', name: 'Catering', icon: ChefHat },
  { id: '11', name: 'Design', icon: Palette },
  { id: '12', name: 'Personal Trainer', icon: Dumbbell },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Giulia R.',
    role: 'Homeowner',
    content: 'I found a plumber in 10 minutes. The service was incredibly fast and the professional was very polite. Highly recommended!',
    imageUrl: 'https://picsum.photos/100/100?random=1',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marco B.',
    role: 'Small Business Owner',
    content: 'ProntoPro helped me find a great accountant for my new business. The platform is easy to use and effective.',
    imageUrl: 'https://picsum.photos/100/100?random=2',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena S.',
    role: 'Bride-to-be',
    content: 'Planning my wedding was stressful until I found my photographer here. Great quotes and beautiful portfolio comparisons.',
    imageUrl: 'https://picsum.photos/100/100?random=3',
    rating: 4,
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'ProntoPro',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'How it works', href: '#' },
      { label: 'Mobile App', href: '#' },
      { label: 'Cost Guides', href: '#' },
      { label: 'Service Directory', href: '#' },
    ],
  },
  {
    title: 'Professionals',
    links: [
      { label: 'Join as a Pro', href: '#' },
      { label: 'Pro Center', href: '#' },
      { label: 'Success Stories', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

export const POPULAR_SEARCHES = [
  "Plumber", "Electrician", "Personal Trainer", "English Teacher", "Wedding Photographer", "Nutritionist", "Psychologist", "House Cleaning"
];