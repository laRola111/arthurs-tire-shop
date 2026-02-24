---
name: seo-optimizer
description: Implementación integral de SEO técnico, Core Web Vitals y Accesibilidad para proyectos de Next.js
---

# SEO Optimizer Skill para Next.js 14+ (App Router)

Esta skill define el estándar de excelencia para el posicionamiento orgánico, optimización de velocidad y accesibilidad en aplicaciones web desarrolladas con Next.js (App Router) y Tailwind CSS.

## 1. Metadatos Estáticos y Dinámicos

La base de un buen SEO técnico es comunicar correctamente a los motores de búsqueda el contenido de cada página.

### `app/layout.tsx` (Global Metadata)

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Título de la Web | Lema Principal",
  description:
    "Descripción concisa y persuasiva de los servicios (150-160 caracteres máximos).",
  openGraph: {
    title: "Título de la Web | Lema Principal",
    description: "Descripción concisa y persuasiva de los servicios.",
    url: "https://mi-dominio.com",
    siteName: "Nombre del Negocio",
    images: [
      {
        url: "/ruta-a-imagen-og1.png", // Logo principal / Cover (1200x630 recomendado)
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US", // O el idioma correspondiente (es_ES, etc.)
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Título de la Web | Lema Principal",
    description: "Descripción concisa y persuasiva de los servicios.",
    images: ["/ruta-a-imagen-og1.png"],
  },
};
```

## 2. Archivos Automáticos de Indexación

Asegura que los crawlers de Google (Googlebot) entiendan el sitio y sepan qué indexar y qué no. Crea estos dos archivos en el nivel `app/`.

### `app/sitemap.ts`

```ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mi-dominio.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1, // 1 para homepage, 0.8 para páginas principales
    },
    // Añadir rutas adicionales aquí
  ];
}
```

### `app/robots.ts`

```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"], // Evita indexación de zonas privadas
    },
    sitemap: "https://mi-dominio.com/sitemap.xml",
  };
}
```

## 3. Schema Markup (Datos Estructurados JSON-LD)

Mejora el CTR (Cick-Through Rate) mostrando resultados enriquecidos (Rich Snippets) y ayudando al posicionamiento en Google Maps (Local SEO).

Ejemplo de negocio local usando `next/script` en `app/page.tsx` o `layout.tsx`:

```tsx
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair", "TireShop"], // Cambiar según la industria
    name: "Nombre de mi Negocio",
    image: "https://mi-dominio.com/logo.png",
    "@id": "https://mi-dominio.com",
    url: "https://mi-dominio.com",
    telephone: "+15555555555",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Calle Principal",
      addressLocality: "Ciudad",
      addressRegion: "Estado/Provincia",
      postalCode: "12345",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.0,
      longitude: -90.0,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/minegocio",
      "https://www.instagram.com/minegocio",
    ],
  };

  return (
    <main>
      {/* Script Inyectado para Google */}
      <Script
        id="schema-org-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Contenido */}
    </main>
  );
}
```

## 4. Accesibilidad (a11y) como Requisito SEO

Google premia los sitios web que son inclusivos y manejables tanto por pantalla táctil como por lectores de pantalla y teclados.

- **Aria-labels para botones no textuales:**

  ```tsx
  <button aria-label="Abrir menú de navegación">
    <IconoMenu />
  </button>
  ```

- **Estados de Foco Visibles (Focus-Visible):** (En Tailwind CSS)

  ```tsx
  <a
    href="#"
    className="... focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-accent-color"
  >
    Texto del Enlace
  </a>
  ```

- **Jerarquía de Encabezados (H1-H6):**
  Cada página DEBE tener un (y solo un) componente `<h1/>` que englobe la palabra clave principal de la página.

## 5. Optimizaciones Futuras Avanzadas (Investigación Continua)

Para llevar la habilidad al siguiente nivel, debemos considerar incorporar estas estrategias en proyectos grandes:

1.  **Etiquetas `canonical`:** Si se genera contenido duplicado por parámetros de URL, usar links rel="canonical" por cada página generada (Next.js config metadata.alternates).
2.  **Optimización Automática de Imágenes Externas:** Configurar el `images.remotePatterns` del archivo `next.config.js` por motivos de seguridad y cacheo.
3.  **Hreflang para i18n:** Cuando soportamos Inglés/Español, el servidor debe proveer meta tags hreflang para prevenir que el contenido traducido se considere canibalización.
4.  **Generación de Sitemap Dinámico:** Conectar `app/sitemap.ts` a un archivo Markdown, CMS o base de datos (Ej: un blog) en vez de configurarlo manualmente.
5.  **Core Web Vitals:** Evitar los _Cumulative Layout Shifts (CLS)_ declarando explícitamente `width` y `height` en TODAS las `<Image />` o usando el property `fill` con tamaños fijos de contenedores.
