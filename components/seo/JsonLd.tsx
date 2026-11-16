export function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Promodelo',
    url: 'https://www.promodelo.com',
    logo: 'https://www.promodelo.com/og-promodelo.png',
    description: 'Plataforma que conecta impulsadoras y empresas en Ecuador.',
    sameAs: [
      'https://instagram.com/promodelo.ec',
      'https://tiktok.com/@promomodeloapp',
      'https://facebook.com/profile.php?id=61594855574992',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EC',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://www.promodelo.com',
    name: 'Promodelo',
    inLanguage: 'es-EC',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
