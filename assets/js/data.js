/* ============================================
   DATOS MOCKEADOS - VISIÓN CLARA ÓPTICA
   Edita este archivo para personalizar el template
   ============================================ */

window.MOCK = {
  brand: {
    name: 'Visión Clara',
    tagline: 'Tu óptica de confianza',
    founded: 2008,
    description: 'Más de 15 años cuidando la salud visual de familias con tecnología de vanguardia y atención personalizada.'
  },

  nav: [
    { label: 'Inicio', href: 'index.html' },
    { label: 'Nosotros', href: 'nosotros.html' },
    { label: 'Servicios', href: 'servicios.html' },
    { label: 'Precios', href: 'precios.html' },
    { label: 'Galería', href: 'galeria.html' },
    { label: 'Clases', href: 'horario-clases.html' },
    { label: 'Contacto', href: 'contacto.html' }
  ],

  hero: {
    title: 'Visión clara, vida plena',
    subtitle: 'Exámenes visuales profesionales, monturas de diseño y la última tecnología en lentes para toda la familia.',
    primaryCta: { label: 'Agendar cita', href: 'contacto.html' },
    secondaryCta: { label: 'Ver servicios', href: 'servicios.html' },
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1200&auto=format&fit=crop&q=80',
    imageAlt: 'Optometrista profesional realizando examen visual'
  },

  features: [
    {
      icon: 'eye',
      title: 'Tecnología de punta',
      description: 'Equipos de última generación para diagnósticos precisos y cómodos.'
    },
    {
      icon: 'heart',
      title: 'Atención personalizada',
      description: 'Cada paciente es único. Diseñamos soluciones a tu medida.'
    },
    {
      icon: 'shield',
      title: 'Garantía extendida',
      description: 'Hasta 2 años de garantía en todos nuestros lentes y monturas.'
    },
    {
      icon: 'users',
      title: 'Equipo certificado',
      description: 'Optómetras titulados con más de 15 años de experiencia clínica.'
    }
  ],

  stats: [
    { value: 15, suffix: '+', label: 'Años de experiencia' },
    { value: 12500, suffix: '', label: 'Pacientes atendidos' },
    { value: 45, suffix: '+', label: 'Marcas disponibles' },
    { value: 98, suffix: '%', label: 'Satisfacción' }
  ],

  services: [
    {
      id: 'examen-visual',
      title: 'Examen Visual Completo',
      description: 'Evaluación integral con refractometría, tonometría y fondo de ojo.',
      icon: 'eye',
      priceFrom: 25,
      duration: '30 min'
    },
    {
      id: 'lentes-contacto',
      title: 'Adaptación de Lentes de Contacto',
      description: 'Asesoramiento personalizado y entrenamiento de uso correcto.',
      icon: 'contact',
      priceFrom: 40,
      duration: '45 min'
    },
    {
      id: 'terapia-visual',
      title: 'Terapia Visual',
      description: 'Ejercicios para mejorar la coordinación y enfoque ocular.',
      icon: 'activity',
      priceFrom: 35,
      duration: '50 min'
    },
    {
      id: 'pediatria',
      title: 'Examen Pediátrico',
      description: 'Evaluación especializada para niños desde 3 años con juegos interactivos.',
      icon: 'smile',
      priceFrom: 30,
      duration: '40 min'
    },
    {
      id: 'baja-vision',
      title: 'Ayudas para Baja Visión',
      description: 'Soluciones ópticas especializadas para pacientes con visión reducida.',
      icon: 'zoom',
      priceFrom: 60,
      duration: '60 min'
    },
    {
      id: 'deportivos',
      title: 'Lentes Deportivos',
      description: 'Protección y corrección visual especializada para atletas.',
      icon: 'trophy',
      priceFrom: 80,
      duration: '40 min'
    },
    {
      id: 'monturas',
      title: 'Asesoramiento de Monturas',
      description: 'Te ayudamos a encontrar el estilo perfecto para tu rostro.',
      icon: 'glasses',
      priceFrom: 0,
      duration: '20 min'
    },
    {
      id: 'taller',
      title: 'Taller y Ajustes',
      description: 'Reparación, ajuste y mantenimiento de tus gafas.',
      icon: 'tool',
      priceFrom: 8,
      duration: '15 min'
    }
  ],

  pricing: {
    tiers: [
      {
        name: 'Básico',
        price: 89,
        period: 'desde',
        description: 'Ideal para uso diario con corrección simple',
        features: [
          'Lentes monofocales',
          'Tratamiento antirreflejo',
          'Montura de catálogo',
          'Garantía de 6 meses',
          '1 ajuste gratuito'
        ],
        highlight: false,
        cta: 'Cotizar'
      },
      {
        name: 'Premium',
        price: 199,
        period: 'desde',
        description: 'La opción más elegida por nuestros pacientes',
        features: [
          'Lentes progresivos o blue filter',
          'Tratamiento antirreflejo premium',
          'Filtro luz azul + UV',
          'Montura de marca',
          'Garantía de 1 año',
          '3 ajustes gratuitos',
          'Estuche de regalo'
        ],
        highlight: true,
        badge: 'Más popular',
        cta: 'Cotizar'
      },
      {
        name: 'VIP',
        price: 399,
        period: 'desde',
        description: 'Alta gama con la mejor tecnología del mercado',
        features: [
          'Lentes de alta gama (cristal/poli)',
          'Tratamientos premium totales',
          'Filtro luz azul + UV + antiraya',
          'Monturas de diseñador',
          'Garantía de 2 años',
          'Ajustes ilimitados',
          'Lentes de repuesto',
          'Seguro de rotura'
        ],
        highlight: false,
        cta: 'Cotizar'
      }
    ],
    extras: [
      { service: 'Examen visual completo', price: '$25' },
      { service: 'Adaptación de lentes de contacto', price: '$40' },
      { service: 'Terapia visual (sesión)', price: '$35' },
      { service: 'Examen pediátrico', price: '$30' },
      { service: 'Ayudas para baja visión', price: '$60' },
      { service: 'Ajuste y mantenimiento', price: '$8' }
    ]
  },

  gallery: [
    { id: 1, category: 'instalaciones', url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80', alt: 'Recepción moderna de la óptica', caption: 'Nuestra recepción' },
    { id: 2, category: 'monturas', url: 'https://images.unsplash.com/photo-1572635196237-14db3eb47945?w=800&q=80', alt: 'Gafas de sol modernas', caption: 'Colección de sol' },
    { id: 3, category: 'equipo', url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80', alt: 'Optometrista profesional', caption: 'Equipo médico' },
    { id: 4, category: 'monturas', url: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80', alt: 'Examen visual', caption: 'Examen completo' },
    { id: 5, category: 'instalaciones', url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', alt: 'Sala de examen', caption: 'Sala de examen' },
    { id: 6, category: 'monturas', url: 'https://images.unsplash.com/photo-1633621641966-23896f7e4f50?w=800&q=80', alt: 'Gafas modernas', caption: 'Monturas de diseño' },
    { id: 7, category: 'equipo', url: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=800&q=80', alt: 'Equipo tecnológico', caption: 'Tecnología' },
    { id: 8, category: 'instalaciones', url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80', alt: 'Mostrador', caption: 'Mostrador' },
    { id: 9, category: 'monturas', url: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80', alt: 'Colección de gafas', caption: 'Colección' },
    { id: 10, category: 'equipo', url: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&q=80', alt: 'Examen con lámpara', caption: 'Lámpara de hendidura' },
    { id: 11, category: 'instalaciones', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', alt: 'Sala de espera', caption: 'Sala de espera' },
    { id: 12, category: 'monturas', url: 'https://images.unsplash.com/photo-1556306530-0f12a8d7a16a?w=800&q=80', alt: 'Gafas vintage', caption: 'Estilo vintage' }
  ],

  team: [
    {
      name: 'Dra. María Rodríguez',
      role: 'Directora y Optometra Senior',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
      bio: '20 años de experiencia en salud visual. Especialista en contactología y pediatría.'
    },
    {
      name: 'Dr. Carlos Mendoza',
      role: 'Optometra Clínico',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
      bio: 'Experto en baja visión y rehabilitación visual. Magister en óptica clínica.'
    },
    {
      name: 'Lic. Ana Pérez',
      role: 'Terapeuta Visual',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
      bio: 'Especialista en terapia visual pediátrica y estrabismo funcional.'
    },
    {
      name: 'Lic. Luis Torres',
      role: 'Asesor de Monturas',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
      bio: 'Imagenólogo y estilista. Te ayuda a encontrar tu estilo perfecto.'
    }
  ],

  testimonials: [
    {
      name: 'Sofía García',
      rating: 5,
      text: 'Excelente atención y profesionalismo. Mis hijos y yo somos pacientes desde hace años.',
      photo: 'https://i.pravatar.cc/200?img=47'
    },
    {
      name: 'Roberto Sánchez',
      rating: 5,
      text: 'Después de años con problemas visuales, encontré aquí la solución perfecta. Mis gafas progressives cambiaron mi vida.',
      photo: 'https://i.pravatar.cc/200?img=12'
    },
    {
      name: 'Carolina Vega',
      rating: 5,
      text: 'La terapia visual para mi hijo fue un éxito. Profesionales excepcionales y muy cariñosos con los niños.',
      photo: 'https://i.pravatar.cc/200?img=45'
    }
  ],

  schedule: {
    classes: [
      {
        day: 'Lunes',
        slots: [
          { time: '09:00 - 10:00', class: 'Terapia Visual Infantil', spots: 4, level: 'Niños 6-12' },
          { time: '11:00 - 12:00', class: 'Rehabilitación Baja Visión', spots: 3, level: 'Adultos' },
          { time: '16:00 - 17:00', class: 'Ejercicios Acomodativos', spots: 6, level: 'Todas las edades' }
        ]
      },
      {
        day: 'Martes',
        slots: [
          { time: '10:00 - 11:00', class: 'Terapia para Estrabismo', spots: 3, level: 'Niños 4-10' },
          { time: '17:00 - 18:00', class: 'Coordinación Ocular', spots: 5, level: 'Adultos' }
        ]
      },
      {
        day: 'Miércoles',
        slots: [
          { time: '09:00 - 10:00', class: 'Terapia Visual Infantil', spots: 4, level: 'Niños 6-12' },
          { time: '11:00 - 12:00', class: 'Entrenamiento Visual Deportivo', spots: 4, level: 'Atletas' },
          { time: '16:00 - 17:00', class: 'Rehabilitación Post-Quirofano', spots: 2, level: 'Adultos' }
        ]
      },
      {
        day: 'Jueves',
        slots: [
          { time: '10:00 - 11:00', class: 'Terapia para Estrabismo', spots: 3, level: 'Niños 4-10' },
          { time: '17:00 - 18:00', class: 'Coordinación Ocular', spots: 5, level: 'Adultos' }
        ]
      },
      {
        day: 'Viernes',
        slots: [
          { time: '09:00 - 10:00', class: 'Terapia Visual Infantil', spots: 4, level: 'Niños 6-12' },
          { time: '11:00 - 12:00', class: 'Rehabilitación Baja Visión', spots: 3, level: 'Adultos' },
          { time: '15:00 - 16:00', class: 'Ejercicios Acomodativos', spots: 6, level: 'Todas las edades' }
        ]
      },
      {
        day: 'Sábado',
        slots: [
          { time: '10:00 - 11:00', class: 'Terapia Familiar', spots: 8, level: 'Familia' },
          { time: '12:00 - 13:00', class: 'Evaluación Inicial', spots: 5, level: 'Nuevos pacientes' }
        ]
      }
    ]
  },

  contact: {
    phone: '+34 912 345 678',
    whatsapp: '+34 612 345 678',
    email: 'hola@visionclara.es',
    address: 'Av. Salud Visual 123, 28001 Madrid',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9549!2d-3.7037905!3d40.4167274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d4c4b7c47%3A0x9c1e8d0f2b1e7e2f!2sMadrid!5e0!3m2!1ses!2ses!4v1700000000000',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#'
    }
  },

  hours: [
    { day: 'Lunes a Viernes', hours: '09:00 - 20:00' },
    { day: 'Sábados', hours: '10:00 - 14:00' },
    { day: 'Domingos', hours: 'Cerrado' }
  ],

  history: [
    { year: 2008, event: 'Fundación de Visión Clara' },
    { year: 2012, event: 'Primera óptica certificada en contactología' },
    { year: 2016, event: 'Inauguración del centro de terapia visual' },
    { year: 2020, event: 'Tecnología digital de última generación' },
    { year: 2024, event: 'Premio a la Excelencia Óptica' }
  ],

  values: [
    {
      icon: 'compass',
      title: 'Misión',
      description: 'Brindar atención visual integral con los más altos estándares de calidad y calidez humana.'
    },
    {
      icon: 'star',
      title: 'Visión',
      description: 'Ser la óptica líder en innovación y servicio, mejorando la calidad de vida de nuestros pacientes.'
    },
    {
      icon: 'heart',
      title: 'Valores',
      description: 'Compromiso, ética profesional, empatía y excelencia en cada consulta y cada producto.'
    }
  ],

  brands: [
    'Ray-Ban', 'Oakley', 'Persol', 'Prada', 'Gucci', 'Tom Ford',
    'Montblanc', 'Cartier', 'Chanel', 'Dior', 'Versace', 'Fendi'
  ],

  faq: [
    {
      question: '¿Cada cuánto debo hacerme un examen visual?',
      answer: 'Se recomienda un examen visual completo cada 1-2 años en adultos sanos, y anualmente en niños y personas con condiciones preexistentes.'
    },
    {
      question: '¿Cuánto tardan en estar listos mis lentes?',
      answer: 'Dependiendo del tipo: monofocales 24-48h, progresivos 3-5 días hábiles, alta gama 5-7 días hábiles.'
    },
    {
      question: '¿Tienen financiamiento?',
      answer: 'Sí, trabajamos con financiación hasta en 12 cuotas sin interés con tarjetas seleccionadas.'
    },
    {
      question: '¿Atienden obras sociales?',
      answer: 'Trabajamos con las principales obras sociales y prepagas. Consulta por tu cobertura específica.'
    }
  ]
};

/* ---------- Iconos SVG inline ---------- */
window.ICONS = {
  eye: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
  heart: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.063 2.522-.187 3.757a48.348 48.348 0 01-3.158 12.058c-.41 1.082-1.594 1.595-2.676.999a47.91 47.91 0 01-9.958-6.079 48.385 48.385 0 01-3.158-12.058A48.34 48.34 0 013 12c0-4.659 2.799-8.751 6.834-10.594a48.6 48.6 0 0110.332 0c4.035 1.843 6.834 5.935 6.834 10.594z" /></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>',
  contact: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></svg>',
  activity: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',
  smile: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>',
  zoom: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>',
  trophy: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0016.5 10.875h-9A3.375 3.375 0 004.5 14.25V18.75M9.75 4.875c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-1.5A1.125 1.125 0 019.75 7.125v-2.25z" /></svg>',
  glasses: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8 6.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM16 6.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM2 9.5h4M18 9.5h4M12 11V8" /></svg>',
  tool: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>',
  compass: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>',
  pin: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 21.5l4.443-1.165A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>',
  arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>',
  logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" class="w-8 h-8"><circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2.5"/><circle cx="20" cy="20" r="7" stroke="currentColor" stroke-width="2.5"/><circle cx="20" cy="20" r="2.5" fill="currentColor"/></svg>'
};

window.icon = function (name) { return window.ICONS[name] || ''; };
