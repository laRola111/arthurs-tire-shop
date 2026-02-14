"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "EN" | "ES";

type Translations = {
  [key in Language]: {
    header: {
      services: string;
      brands: string;
      about: string;
      location: string;
      callAssist: string;
      callNow: string;
    };
    hero: {
      openNow: string;
      titlePart1: string;
      titlePart2: string;
      titlePart3: string;
      titlePart4: string;
      description: string;
      getQuote: string;
      visitShop: string;
      scrollExplore: string;
    };
    footer: {
      desc: string;
      contact: string;
      quickLinks: string;
      privacy: string;
      rights: string;
      credits: string;
    };
    common: {
      loading: string;
    };
    services: {
      subtitle: string;
      title: string;
      items: {
        title: string;
        desc: string;
      }[];
    };
    whatsapp: {
      message: string;
      greeting: string;
      chatBtn: string;
      online: string;
    };
    locationSection: {
      title: string;
      subtitle: string;
      getDirections: string;
      callUs: string;
      hours: string;
      monFri: string;
      sat: string;
      sun: string;
      closed: string;
    };
    popularBrands: {
      title: string;
    };
    brandSection: {
      title: string;
    };
    reviews: {
      title: string;
      subtitle: string;
      items: { text: string }[];
    };
    performance: {
      badge: string;
      title: string;
      desc: string;
      feature1: string;
      feature2: string;
      feature3: string;
      cta: string;
    };
  };
};

const translations: Translations = {
  EN: {
    header: {
      services: "Services",
      brands: "Brands",
      about: "About",
      location: "Location",
      callAssist: "Call for Assistance",
      callNow: "Call Now",
    },
    hero: {
      openNow: "Open Now • Hablamos Español",
      titlePart1: "Professional,",
      titlePart2: "Friendly",
      titlePart3: "& Reliable",
      titlePart4: "Tire Service",
      description:
        "Serving Cedar Creek with expert tire installation, window tinting, and repairs. We keep you rolling safely.",
      getQuote: "Get a Free Quote",
      visitShop: "Visit Shop",
      scrollExplore: "Scroll to Explore",
    },
    footer: {
      desc: "Cedar Creek's premier destination for tires, wheels, and automotive care. We pride ourselves on honest work and competitive pricing.",
      contact: "Contact",
      quickLinks: "Quick Links",
      privacy: "Privacy Policy",
      rights: "© 2026 Arthur's Tire Shop. All rights reserved.",
      credits: "Created by",
    },
    common: { loading: "Loading..." },
    services: {
      subtitle: "Our Capabilities",
      title: "Premium Automotive Services",
      items: [
        {
          title: "Tire Installation",
          desc: "Professional mounting and balancing for all vehicle types, ensuring a smooth ride.",
        },
        {
          title: "Tire Rotation",
          desc: "Extend the life of your tires with regular rotation services for even wear.",
        },
        {
          title: "Flat Repair",
          desc: "Quick and reliable patch and plug services to get you back on the road safely.",
        },
        {
          title: "Wheel Alignment",
          desc: "Precision alignment using state-of-the-art technology for better handling.",
        },
        {
          title: "Window Tinting",
          desc: "Premium films to reduce heat, glare, and UV exposure while adding style.",
        },
        {
          title: "Luxury Rims",
          desc: "Wide selection of aftermarket wheels to customize your vehicle's look.",
        },
        {
          title: "Detailing & Car Wash",
          desc: "Complete interior and exterior cleaning services to keep your ride looking brand new.",
        },
      ],
    },
    whatsapp: {
      message: "Hi Arthur's Tire Shop, I would like to get a free quote.",
      greeting: "Need new tires? I can help you with a quote right now!",
      chatBtn: "Chat with us",
      online: "Online now",
    },
    locationSection: {
      title: "How to Find Us",
      subtitle: "Visit Our Shop",
      getDirections: "Get Directions",
      callUs: "Call Us Directly",
      hours: "Operating Hours",
      monFri: "Mon - Fri",
      sat: "Saturday",
      sun: "Sunday",
      closed: "Closed",
    },
    popularBrands: {
      title: "Popular Items",
    },
    brandSection: {
      title: "Trusted Brands We Carry",
    },
    reviews: {
      title: "What Our Customers Say",
      subtitle: "Rated 5 Stars by Locals",
      items: [
        {
          text: "Fastest service in town. Got me back on the road in 20 minutes!",
        },
        {
          text: "Honest pricing and great advice on which tires to pick. Highly recommend.",
        },
        { text: "They fixed my flat for a great price. Only place I trust." },
      ],
    },
    performance: {
      badge: "Upgrade Your Ride",
      title: "Maximize Performance",
      desc: "Experience better handling, braking, and fuel efficiency with our premium tire selection perfectly matched to your driving style.",
      feature1: "Enhanced Wet Traction",
      feature2: "Superior Cornering Grip",
      feature3: "Quieter Road Noise",
      cta: "Find Your Tires",
    },
  },
  ES: {
    header: {
      services: "Servicios",
      brands: "Marcas",
      about: "Nosotros",
      location: "Ubicación",
      callAssist: "Llámanos",
      callNow: "Llamar Ahora",
    },
    hero: {
      openNow: "Abierto Ahora • Hablamos Español",
      titlePart1: "Servicio de Llantas",
      titlePart2: "Profesional",
      titlePart3: "y Confiable",
      titlePart4: "",
      description:
        "Sirviendo a Cedar Creek con instalación experta de llantas, polarizado de ventanas y reparaciones. Te mantenemos rodando seguro.",
      getQuote: "Cotizar Gratis",
      visitShop: "Visitar Taller",
      scrollExplore: "Desliza para Explorar",
    },
    footer: {
      desc: "El destino principal de Cedar Creek para llantas, rines y cuidado automotriz. Nos enorgullecemos de un trabajo honesto y precios competitivos.",
      contact: "Contacto",
      quickLinks: "Enlaces Rápidos",
      privacy: "Política de Privacidad",
      rights: "© 2026 Arthur's Tire Shop. Todos los derechos reservados.",
      credits: "Creado por",
    },
    common: { loading: "Cargando..." },
    services: {
      subtitle: "Nuestras Capacidades",
      title: "Servicios Automotrices Premium",
      items: [
        {
          title: "Instalación de Llantas",
          desc: "Montaje y balanceo profesional para todo tipo de vehículos, asegurando un viaje suave.",
        },
        {
          title: "Rotación de Llantas",
          desc: "Extiende la vida de tus llantas con servicios regulares de rotación para un desgaste uniforme.",
        },
        {
          title: "Reparación de Ponchaduras",
          desc: "Servicios de parche y tapón rápidos y confiables para que vuelvas a la carretera de manera segura.",
        },
        {
          title: "Alineación de Ruedas",
          desc: "Alineación de precisión utilizando tecnología de punta para un mejor manejo.",
        },
        {
          title: "Polarizado de Ventanas",
          desc: "Películas premium para reducir el calor, el resplandor y la exposición UV mientras añaden estilo.",
        },
        {
          title: "Rines de Lujo",
          desc: "Amplia selección de rines aftermarket para personalizar el aspecto de tu vehículo.",
        },
        {
          title: "Detallado y Lavado",
          desc: "Servicios completos de limpieza interior y exterior para mantener tu auto como nuevo.",
        },
      ],
    },
    whatsapp: {
      message: "Hi Arthur's Tire Shop, I would like to get a free quote.",
      greeting: "Need new tires? I can help you with a quote right now!",
      chatBtn: "Chat with us",
      online: "Online now",
    },
    locationSection: {
      title: "Cómo Encontrarnos",
      subtitle: "Visita Nuestro Taller",
      getDirections: "Obtener Direcciones",
      callUs: "Llámanos Directamente",
      hours: "Horario de Atención",
      monFri: "Lun - Vie",
      sat: "Sábado",
      sun: "Domingo",
      closed: "Cerrado",
    },
    popularBrands: {
      title: "Artículos Populares",
    },
    brandSection: {
      title: "Marcas de Confianza",
    },
    reviews: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Calificado 5 Estrellas por Locales",
      items: [
        {
          text: "El servicio más rápido de la ciudad. ¡Me tuvieron listo en 20 minutos!",
        },
        {
          text: "Precios honestos y excelentes consejos sobre qué llantas elegir. Muy recomendado.",
        },
        {
          text: "Arreglaron mi llanta a un gran precio. El único lugar en el que confío.",
        },
      ],
    },
    performance: {
      badge: "Mejora tu Viaje",
      title: "Maximiza el Rendimiento",
      desc: "Experimenta un mejor manejo, frenado y eficiencia de combustible con nuestra selección de llantas premium perfectamente adaptadas a tu estilo de conducción.",
      feature1: "Mejor Tracción en Mojado",
      feature2: "Agarre Superior en Curvas",
      feature3: "Menor Ruido en Carretera",
      cta: "Encuentra tus Llantas",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations["EN"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
