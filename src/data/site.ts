/**
 * Centralized site configuration for TTS Cakes and Events
 * Edit all business info, services, gallery, and testimonials here
 */

// ============================================
// BUSINESS INFO
// ============================================

export const siteConfig = {
  name: 'TTS Cakes and Events',
  tagline: 'Cakes, Catering & Events Done Right',
  description:
    'Premium custom cakes, food catering, and event planning services in Lagos. From celebration cakes to full event setup.',

  // Contact Information
  contact: {
    phoneNumbers: ['08023581524', '08123456789'], // Can be multiple
    whatsappNumber: '2348023581524', // International format without +
    email: 'info@ttscakes.com',
    location: 'Lordreign Plaza beside First Bank, Ayobo Road, Lagos',
    deliveryAreas: 'Lagos Island, Mainland, and surrounding areas',
  },

  // Social Links
  social: {
    instagram: 'https://www.instagram.com/tts.kitchen.ng/',
    facebook: '',
    twitter: '',
  },

  // SEO
  seo: {
    title: 'TTS Cakes and Events | Premium Custom Cakes & Catering in Lagos',
    metaDescription:
      'Order custom cakes, catering, and event planning in Lagos. Premium food, celebration cakes, and full event services.',
    keywords:
      'custom cakes Lagos, catering Lagos, event planning Lagos, celebration cakes, jollof rice, Nigerian food catering',
  },
};

// ============================================
// HELPER: Convert phone number to WhatsApp URL
// ============================================

export function getWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedMessage}`;
}

// ============================================
// SERVICES
// ============================================

export const services = [
  {
    id: 'cakes',
    title: 'Custom Cakes',
    description:
      "Birthday cakes, wedding cakes, kids' character cakes, and celebration cakes tailored to your vision.",
    image: 'cake-red-velvet-layers',
    cta: 'Order a Cake',
    message: "Hi, I'd like to order a custom cake. My event date is...",
  },
  {
    id: 'food',
    title: 'Food & Catering',
    description:
      'Delicious traditional Nigerian food: jollof rice, fried rice, moi moi, efo riro, peppered meat, and skewers.',
    image: 'food-jollof-chicken-plantain',
    cta: 'Order Food',
    message: "Hi, I'd like to order food for my event. I'm interested in...",
  },
  {
    id: 'smallchops',
    title: 'Small Chops',
    description:
      'Perfect party platters: spring rolls, puff puff, samosa, fried chicken, prawns, and more.',
    image: 'smallchops-platter-mixed',
    cta: 'Order Small Chops',
    message: "Hi, I'd like to order small chops for my event. I need...",
  },
  {
    id: 'events',
    title: 'Event Planning & Decoration',
    description: 'Complete event management, setup, and decoration to make your day unforgettable.',
    image: 'event-placeholder',
    cta: 'Plan an Event',
    message: "Hi, I need help planning and decorating for my event. The date is...",
  },
];

// ============================================
// GALLERY - IMAGE REFERENCES
// ============================================

export const galleryItems = [
  // Cakes
  {
    id: 'cake-oreo-drip',
    src: '/images/cake-oreo-drip.webp',
    alt: 'Oreo drip cake with glossy chocolate coating',
    category: 'Cakes',
    categoryTag: 'Cakes',
  },
  {
    id: 'cake-red-velvet-layers',
    src: '/images/cake-red-velvet-layers.webp',
    alt: 'Classic red velvet layer cake with cream frosting',
    category: 'Cakes',
    categoryTag: 'Cakes',
  },
  {
    id: 'cake-wedding-blue-floral',
    src: '/images/cake-wedding-blue-floral.webp',
    alt: 'Elegant three-tier wedding cake with blue floral design',
    category: 'Cakes',
    categoryTag: 'Cakes',
  },
  {
    id: 'cake-pawpatrol-daniel',
    src: '/images/cake-pawpatrol-daniel.webp',
    alt: 'Fun Paw Patrol character cake for kids',
    category: 'Cakes',
    categoryTag: 'Cakes',
  },
  {
    id: 'cake-pawpatrol-andre',
    src: '/images/cake-pawpatrol-andre.webp',
    alt: 'Colorful Paw Patrol themed birthday cake',
    category: 'Cakes',
    categoryTag: 'Cakes',
  },

  // Food
  {
    id: 'food-jollof-chicken-plantain',
    src: '/images/food-jollof-chicken-plantain.webp',
    alt: 'Fragrant jollof rice served with tender chicken and fried plantain',
    category: 'Food',
    categoryTag: 'Food',
  },
  {
    id: 'food-meat-skewers',
    src: '/images/food-meat-skewers.webp',
    alt: 'Succulent grilled meat skewers with spicy seasoning',
    category: 'Food',
    categoryTag: 'Food',
  },
  {
    id: 'food-moi-moi',
    src: '/images/food-moi-moi.webp',
    alt: 'Steamed moi moi with tomato and pepper, Nigerian delicacy',
    category: 'Food',
    categoryTag: 'Food',
  },
  {
    id: 'food-efo-riro',
    src: '/images/food-efo-riro.webp',
    alt: 'Rich efo riro stew with vibrant green vegetables and meat',
    category: 'Food',
    categoryTag: 'Food',
  },
  {
    id: 'food-peppered-meat',
    src: '/images/food-peppered-meat.webp',
    alt: 'Fiery peppered meat coated in aromatic spices',
    category: 'Food',
    categoryTag: 'Food',
  },
  {
    id: 'food-fried-rice-1',
    src: '/images/food-fried-rice-1.webp',
    alt: 'Golden fried rice with mixed vegetables and protein',
    category: 'Food',
    categoryTag: 'Food',
  },
  {
    id: 'food-fried-rice-2',
    src: '/images/food-fried-rice-2.webp',
    alt: 'Perfectly cooked fried rice with egg and vegetables',
    category: 'Food',
    categoryTag: 'Food',
  },

  // Small Chops
  {
    id: 'smallchops-platter-mixed',
    src: '/images/smallchops-platter-mixed.webp',
    alt: 'Colorful mixed small chops platter with variety of appetizers',
    category: 'Small Chops',
    categoryTag: 'Small Chops',
  },
  {
    id: 'smallchops-tray-puffpuff',
    src: '/images/smallchops-tray-puffpuff.webp',
    alt: 'Golden fried puff puff dusted with powdered sugar',
    category: 'Small Chops',
    categoryTag: 'Small Chops',
  },

  // Add more cake photos here as you expand:
  // {
  //   id: 'cake-chocolate-ganache',
  //   src: '/images/cake-chocolate-ganache.webp',
  //   alt: 'Rich chocolate ganache cake',
  //   category: 'Cakes',
  //   categoryTag: 'Cakes',
  // },

  // Add event setup/decoration photos here as you expand:
  // {
  //   id: 'event-setup-balloons',
  //   src: '/images/event-setup-balloons.webp',
  //   alt: 'Beautiful balloon and floral event decoration',
  //   category: 'Events',
  //   categoryTag: 'Events',
  // },
];

// ============================================
// TESTIMONIALS
// ============================================

export const testimonials = [
  {
    id: 1,
    name: 'Chioma O.',
    title: 'Birthday Party Host',
    message:
      "TTS delivered the most beautiful and delicious cake for my daughter's birthday. The kids loved the character design, and the taste was absolutely premium!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Tunde A.',
    title: 'Wedding Planner',
    message:
      'From the cake to the full event setup, TTS made our wedding day perfect. Professional, creative, and delivered beyond expectations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amara N.',
    title: 'Corporate Event Organizer',
    message:
      "The catering for our company event was fantastic. Fresh ingredients, beautiful presentation, and our guests asked for the contact information immediately!",
    rating: 5,
  },
];

// ============================================
// HOW IT WORKS STEPS
// ============================================

export const howItWorks = [
  {
    step: 1,
    title: 'Enquire',
    description: 'Get in touch via WhatsApp with your event details and preferences.',
  },
  {
    step: 2,
    title: 'Confirm Details',
    description: 'We finalize quantities, colors, dietary preferences, and delivery logistics.',
  },
  {
    step: 3,
    title: 'We Prepare',
    description: 'Our team crafts your order with premium ingredients and meticulous care.',
  },
  {
    step: 4,
    title: 'Delivery & Setup',
    description: 'We deliver fresh to your venue and set up professionally on your event day.',
  },
];

// ============================================
// EXPORT LOGO REFERENCE
// ============================================

export const logoImage = {
  src: '/images/logo.webp',
  alt: 'TTS Cakes and Events Logo',
};
