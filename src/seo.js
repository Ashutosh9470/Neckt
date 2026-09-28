const runtimeOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://neckt.in';
export const SITE_URL = (import.meta.env.VITE_SITE_URL || runtimeOrigin).replace(/\/$/, '');

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'NECKT | Live Experiences That Move People',
    description: 'NECKT creates, curates and delivers live entertainment experiences, concerts and events that bring people together across India.'
  },
  events: {
    path: '/events',
    title: 'Upcoming Events | NECKT Live Entertainment',
    description: 'Explore upcoming NECKT live events across India, including AFTER DARK, a concert experience shaped around live music, energy and performance.'
  },
  services: {
    path: '/services',
    title: 'Services | NECKT Experiences and Event Production',
    description: 'Discover NECKT event formats across India for parties, concerts, corporate events and artist bookings, from concept through professional production.'
  },
  about: {
    path: '/about',
    title: 'About NECKT | Live Entertainment Across India',
    description: 'Learn how NECKT is building a live entertainment culture across India and a new entertainment ecosystem for its audiences.'
  },
  moments: {
    path: '/moments',
    title: 'Moments | NECKT Visual Archive',
    description: 'Explore the NECKT visual archive of crowd energy, stage craft, lighting and live entertainment moments from India.'
  },
  contact: {
    path: '/contact',
    title: 'Contact NECKT | Plan a Live Experience',
    description: 'Contact NECKT to discuss live shows, parties, corporate events, artist bookings and new collaborations across India.'
  },
  'not-found': {
    path: '/',
    title: 'Page Not Found | NECKT',
    description: 'The NECKT page you requested could not be found.',
    robots: 'noindex, nofollow'
  }
};

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'NECKT',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  email: 'hello@neckt.in',
  telephone: '+91-9546646668',
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Startup Bihar Incubation Center Near ATC',
    addressLocality: 'Patna',
    postalCode: '800014',
    addressRegion: 'Bihar',
    addressCountry: 'IN'
  },
  sameAs: ['https://www.instagram.com/neckt.india/']
};

function getCanonicalUrl(path) {
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function createStructuredData(page, canonicalUrl) {
  const graph = [
    organization,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'NECKT',
      url: SITE_URL,
      publisher: { '@id': `${SITE_URL}/#organization` }
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${SITE_URL}/#website` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        ...(page.path === '/' ? [] : [{ '@type': 'ListItem', position: 2, name: page.title.split(' | ')[0], item: canonicalUrl }])
      ]
    }
  ];

  if (page.path === '/services') {
    graph.push(
      {
        '@type': 'Service',
        name: 'Parties',
        description: 'End-to-end party experiences brought to life through premium production, staging, lighting, sound and coordination.',
        provider: { '@id': `${SITE_URL}/#organization` }
      },
      {
        '@type': 'Service',
        name: 'Concerts and Live Shows',
        description: 'Concert and live show experiences shaped through staging, production, lighting, sound and artist coordination.',
        provider: { '@id': `${SITE_URL}/#organization` }
      },
      {
        '@type': 'Service',
        name: 'Corporate Events',
        description: 'Corporate events delivered with a design-led identity and coordinated production, vendors, artists and venues.',
        provider: { '@id': `${SITE_URL}/#organization` }
      },
      {
        '@type': 'Service',
        name: 'Artist Bookings',
        description: 'Artist bookings supported by coordination across artists, vendors, venues and the wider live experience.',
        provider: { '@id': `${SITE_URL}/#organization` }
      }
    );
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function updateDocumentSeo(route) {
  const page = PAGE_SEO[route] || PAGE_SEO['not-found'];
  const currentPath = window.location.pathname || '/';
  const canonicalUrl = getCanonicalUrl(route === 'not-found' ? currentPath : page.path);
  const robots = page.robots || 'index, follow';

  document.title = page.title;
  upsertMeta('name', 'description', page.description);
  upsertMeta('name', 'robots', robots);
  upsertMeta('name', 'author', 'NECKT');
  upsertMeta('property', 'og:title', page.title);
  upsertMeta('property', 'og:description', page.description);
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:url', canonicalUrl);
  upsertMeta('property', 'og:site_name', 'NECKT');
  upsertMeta('property', 'og:locale', 'en_IN');
  upsertMeta('name', 'twitter:card', 'summary');
  upsertMeta('name', 'twitter:title', page.title);
  upsertMeta('name', 'twitter:description', page.description);
  upsertMeta('name', 'twitter:url', canonicalUrl);
  upsertLink('canonical', canonicalUrl);

  let structuredData = document.head.querySelector('#neckt-structured-data');
  if (!structuredData) {
    structuredData = document.createElement('script');
    structuredData.id = 'neckt-structured-data';
    structuredData.type = 'application/ld+json';
    document.head.appendChild(structuredData);
  }
  structuredData.textContent = JSON.stringify(createStructuredData(page, canonicalUrl));
}
