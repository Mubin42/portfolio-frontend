export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kazi Ehsanul Mubin',
    url: 'https://kazimubin.dev',
    image: 'https://your-domain.com/your-photo.jpg',
    sameAs: [
      'https://github.com/Mubin42',
      'https://www.linkedin.com/in/kazi-mubin/',
    ],
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'ZOLO Inc',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
