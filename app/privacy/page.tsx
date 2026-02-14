"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: February 2026",
      intro:
        "At Arthur's Tire Shop, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.",
      sections: [
        {
          heading: "Information We Collect",
          text: "We collect information you provide directly to us, such as when you contact us via WhatsApp or request a quote. This may include your name, phone number, and vehicle details.",
        },
        {
          heading: "How We Use Your Information",
          text: "We use your information to provide customer support, process service requests, and improve our website experience. We do not sell your personal data to third parties.",
        },
        {
          heading: "Cookies",
          text: "Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.",
        },
        {
          heading: "Contact Us",
          text: "If you have any questions about this Privacy Policy, please contact us directly at our shop.",
        },
      ],
      back: "Back to Home",
    },
    ES: {
      title: "Política de Privacidad",
      lastUpdated: "Última Actualización: Febrero 2026",
      intro:
        "En Arthur's Tire Shop, estamos comprometidos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio web.",
      sections: [
        {
          heading: "Información que Recopilamos",
          text: "Recopilamos información que usted nos proporciona directamente, como cuando nos contacta por WhatsApp o solicita una cotización. Esto puede incluir su nombre, número de teléfono y detalles del vehículo.",
        },
        {
          heading: "Cómo Usamos su Información",
          text: "Usamos su información para brindar atención al cliente, procesar solicitudes de servicio y mejorar la experiencia de nuestro sitio web. No vendemos sus datos personales a terceros.",
        },
        {
          heading: "Cookies",
          text: "Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. Puede optar por desactivar las cookies a través de la configuración de su navegador.",
        },
        {
          heading: "Contáctenos",
          text: "Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos directamente en nuestro taller.",
        },
      ],
      back: "Volver al Inicio",
    },
  };

  const t = content[language];

  return (
    <main className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-accent-red font-bold mb-8 hover:underline"
        >
          &larr; {t.back}
        </Link>

        <h1 className="text-4xl font-black text-gray-900 mb-4">{t.title}</h1>
        <p className="text-gray-500 mb-12">{t.lastUpdated}</p>

        <div className="prose prose-lg text-gray-700">
          <p className="mb-8 leading-relaxed">{t.intro}</p>

          {t.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <p className="leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
